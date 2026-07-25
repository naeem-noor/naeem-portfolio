import { NextResponse } from "next/server";

import {
  isEmailProviderConfigured,
  sendContactEmail,
} from "@/lib/email/resend";
import { contactFormSchema } from "@/lib/validations/contact";

/**
 * POST /api/contact
 *
 * Validates the submission against the same Zod schema the client form
 * uses, then attempts delivery through Resend if `RESEND_API_KEY` is set.
 *
 * ── Status ─────────────────────────────────────────────────────────────
 * When `RESEND_API_KEY` is unset, every *valid* submission is accepted and
 * returns `delivered: false` — honest about the fact that no email was
 * actually sent. When it's set, delivery is actually attempted via
 * `lib/email/resend.ts`, and `delivered` reflects whether that genuinely
 * succeeded. Swapping providers (SendGrid, SES) means changing
 * `lib/email/resend.ts`'s internals, not this route's contract,
 * `services/contact.ts`, or any UI component.
 *
 * ── Security notes ────────────────────────────────────────────────────
 * - The `company` field is a honeypot: real users never see it (hidden via
 *   CSS in `ContactFormFields`). If it arrives populated, the request is
 *   almost certainly a bot — handled by pretending success without
 *   processing it, so bots can't distinguish "detected" from "sent".
 * - Rate limiting and CAPTCHA are NOT implemented here. An in-memory
 *   counter would be fake protection in a serverless environment (each
 *   invocation can run on a fresh instance with no shared memory) — so
 *   rather than ship something that looks like protection but isn't, this
 *   is left as a clear extension point for a real solution (e.g. Upstash
 *   Redis rate limiting, or a provider like Cloudflare Turnstile) once
 *   this API is exposed to real traffic.
 */
export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 },
    );
  }

  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        message: "Please check the highlighted fields and try again.",
        fieldErrors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  const { company, ...values } = parsed.data;
  const notConfiguredMessage =
    "Thanks for reaching out email delivery isn't configured yet, so please reach out directly via email in the meantime.";

  // Honeypot triggered — respond identically to a normal accepted
  // submission so bots get no signal they were caught, but never actually
  // send anything.
  if (company) {
    return NextResponse.json(
      { success: true, delivered: false, message: notConfiguredMessage },
      { status: 200 },
    );
  }

  if (!isEmailProviderConfigured()) {
    return NextResponse.json(
      { success: true, delivered: false, message: notConfiguredMessage },
      { status: 200 },
    );
  }

  try {
    await sendContactEmail(values);

    return NextResponse.json(
      {
        success: true,
        delivered: true,
        message: "Thanks for reaching out your message has been sent.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact email error:", error);
    // Never leak provider-specific error details (API key issues, rate
    // limits, etc.) to the client.
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong on our end. Please try again shortly.",
      },
      { status: 500 },
    );
  }
}
