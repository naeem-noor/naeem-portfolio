import type { HeadlineLine, IconComponent } from "@/types";

/** Compact identity block rendered in the left sidebar. */
export interface AboutSidebarData {
  experienceBadge: string;
  location: string;
  availability: string;
  /** A short, high-signal subset of `techFocus` shown in the sidebar. */
  techHighlights: string[];
}

export interface AboutHeaderData {
  label: string;
  headline: HeadlineLine[];
}

/** A single paragraph of the professional-story copy. */
export type StoryParagraph = string;

export interface AboutStat {
  id: string;
  value: string;
  label: string;
  icon: IconComponent;
}

/** One stop on the professional journey timeline. */
export interface JourneyItem {
  id: string;
  place: string;
  period: string;
  description: string;
  /** Marks the current/active stop, styled distinctly on the timeline. */
  current?: boolean;
}

export interface TechChip {
  label: string;
  /** Renders a small qualifier badge, e.g. "Learning". */
  status?: string;
}

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
