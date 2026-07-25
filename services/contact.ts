import type { ContactFormValues } from "@/lib/validations/contact";
import type { ContactSubmissionResult } from "@/types/contact";

/**
 * Submits the contact form to the `/api/contact` route.
 *
 * This is the *only* thing `ContactForm` calls — it has no idea whether an
 * email provider is configured, what that provider is, or how the request
 * is authenticated. Swapping in Resend/SendGrid/SES later means changing
 * `app/api/contact/route.ts`, not this function's signature or any UI
 * component that calls it.
 */
export async function submitContactForm(
  values: ContactFormValues,
): Promise<ContactSubmissionResult> {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const data: unknown = await response.json().catch(() => null);

    if (!response.ok) {
      if (isSubmissionResult(data)) return data;
      return {
        success: false,
        message: "Something went wrong sending your message. Please try again.",
      };
    }

    if (isSubmissionResult(data)) return data;

    return {
      success: false,
      message: "Received an unexpected response. Please try again.",
    };
  } catch {
    return {
      success: false,
      message:
        "Couldn't reach the server. Check your connection and try again.",
    };
  }
}

function isSubmissionResult(value: unknown): value is ContactSubmissionResult {
  return (
    typeof value === "object" &&
    value !== null &&
    "success" in value &&
    typeof (value as { success: unknown }).success === "boolean"
  );
}
