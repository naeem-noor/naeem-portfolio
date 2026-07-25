import { Resend } from "resend";

import { siteConfig } from "@/lib/site-config";
import type { ContactFormValues } from "@/lib/validations/contact";

/**
 * Whether a real email provider is configured. `app/api/contact/route.ts`
 * checks this before attempting delivery — everything downstream of "no"
 * here stays on the honest "received, not delivered" path.
 */
export function isEmailProviderConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY);
}

/**
 * Sends the contact form submission via Resend.
 *
 * Throws on failure — the caller (`app/api/contact/route.ts`) is
 * responsible for catching that and returning a safe, generic error to
 * the client rather than leaking provider-specific details.
 *
 * Requires `RESEND_API_KEY`. `CONTACT_FROM_EMAIL` should be an address on
 * a domain verified in Resend (falls back to Resend's shared test sender,
 * which only delivers to the Resend account's own verified email — fine
 * for initial setup, not for real visitor traffic).
 */
export async function sendContactEmail(
  values: Omit<ContactFormValues, "company">,
): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not set");
  }

  const resend = new Resend(apiKey);
  const fromAddress =
    process.env.CONTACT_FROM_EMAIL ??
    "Portfolio Contact <onboarding@resend.dev>";

  const { error } = await resend.emails.send({
    from: fromAddress,
    to: siteConfig.links.email,
    replyTo: values.email,
    subject: `[Portfolio Contact] ${values.subject}`,
    text: [`From: ${values.name} <${values.email}>`, "", values.message].join(
      "\n",
    ),
  });

  if (error) {
    throw new Error(`Resend rejected the email: ${error.message}`);
  }
}
