import type { IconComponent } from "@/types";

export type CertificationStatus = "Completed" | "In Progress" | "Planned";

export type CertificationCategory =
  | "Cloud"
  | "Networking"
  | "DevOps"
  | "Programming"
  | "Infrastructure"
  | "Security";

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  /** Display string, e.g. "2024". Omitted for planned certifications that
   * don't have a date yet. */
  issueDate?: string;
  expiryDate?: string;
  credentialUrl?: string;
  credentialId?: string;
  /** Path to a real logo image, once one exists — optional, falls back to
   * `icon` (consistent with `Project`/`Skill` in earlier phases). */
  logo?: string;
  status: CertificationStatus;
  category: CertificationCategory;
  skills: string[];
  /** Shown in the Featured Certifications section with fuller detail. */
  featured: boolean;
  icon: IconComponent;
}

/** One stop on the Professional Development timeline — mixes education,
 * certifications, and skill milestones into a single learning narrative. */
export interface DevelopmentMilestone {
  id: string;
  title: string;
  description: string;
  icon: IconComponent;
  current?: boolean;
}
