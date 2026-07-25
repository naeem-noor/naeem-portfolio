import type { IconComponent } from "@/types";

/** One entry in the Contact Information cards (Email, LinkedIn, GitHub,
 * Location, Availability). */
export interface ContactInfoItem {
  id: string;
  label: string;
  value: string;
  icon: IconComponent;
  /** Present when the card should be clickable (mailto:, tel:, external
   * profile link, etc.) — omitted for non-actionable items like Location. */
  href?: string;
}

/** One area of collaboration shown in the Availability section. */
export interface CollaborationArea {
  id: string;
  label: string;
  icon: IconComponent;
}

export interface AvailabilityContent {
  status: string;
  description: string;
  areas: CollaborationArea[];
}

/**
 * The result of a contact form submission attempt, returned by
 * `services/contact.ts` and consumed by `ContactForm` to render
 * `ContactSuccess`/`ContactError`.
 *
 * `delivered` is distinct from `success`: a submission can be successfully
 * *received and validated* (`success: true`) without an email actually
 * having been sent (`delivered: false`), when no email provider is
 * configured yet. The UI must never claim delivery that didn't happen.
 */
export type ContactSubmissionResult =
  | { success: true; delivered: boolean; message: string }
  | {
      success: false;
      message: string;
      fieldErrors?: Record<string, string[]>;
    };
