import { z } from "zod";

/**
 * The contact form's validation rules — shared by the client form
 * (`ContactForm`, via `useZodForm`) and the API route
 * (`app/api/contact/route.ts`), so a submission can never reach the server
 * with different rules than what the UI enforced. Client-side validation
 * is a UX nicety, not a trust boundary — the API route re-validates every
 * submission against this exact schema.
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(100, "Name must be under 100 characters."),
  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .email("Enter a valid email address."),
  subject: z
    .string()
    .trim()
    .min(3, "Subject must be at least 3 characters.")
    .max(150, "Subject must be under 150 characters."),
  message: z
    .string()
    .trim()
    .min(20, "Message must be at least 20 characters.")
    .max(2000, "Message must be under 2000 characters."),
  /** Honeypot field: real users never see or fill this (hidden via CSS);
   * if it arrives populated, the submission is almost certainly a bot.
   * Deliberately just `.optional()` here, not constrained to empty — the
   * route handler checks its value itself so a filled-in honeypot can be
   * met with a deceptive "success" response instead of a validation
   * error that would tip off the bot that it was detected. */
  company: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

/** The subset of fields actually shown to the user (excludes the honeypot). */
export type ContactFormFieldName = Exclude<keyof ContactFormValues, "company">;

export const CONTACT_FIELD_LIMITS = {
  name: { min: 2, max: 100 },
  subject: { min: 3, max: 150 },
  message: { min: 20, max: 2000 },
} as const;
