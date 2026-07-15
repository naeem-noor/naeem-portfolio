import type { IconComponent } from "@/types";

export interface Achievement {
  text: string;
  icon: IconComponent;
}

export interface WorkExperience {
  id: string;
  company: string;
  location: string;
  country: string;
  employmentType: string;
  role: string;
  duration: string;
  /** Short descriptor of the working environment, e.g. "Enterprise IT". */
  environment: string;
  summary: string;
  responsibilities: string[];
  achievements: Achievement[];
  technologies: string[];
  /** Path to a company logo image, once real assets exist — optional, and
   * `CompanyCard` falls back to a generic icon avatar when absent. */
  companyLogo?: string;
  /** Marks the most recent/active role, highlighted distinctly on the timeline. */
  current?: boolean;
}

export interface SummaryStat {
  id: string;
  value: string;
  label: string;
  icon: IconComponent;
}
