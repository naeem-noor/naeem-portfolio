import type { HeadlineLine, IconComponent } from "@/types";

/** Compact identity block rendered in the left sidebar. */
export interface AboutSidebarData {
  experienceBadge: string;
  location: string;
  availability: string;
  /** A short, high-signal subset of skills shown in the sidebar (the full
   * list lives on the dedicated `/skills` page). */
  techHighlights: string[];
}

export interface AboutHeaderData {
  label: string;
  headline: HeadlineLine[];
}

/** A single paragraph of the professional-story copy. */
export type StoryParagraph = string;
export interface ValueItem {
  id: string;
  title: string;
  description: string;
  icon: IconComponent;
}

export interface AboutCtaData {
  heading: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string; download?: boolean };
}
