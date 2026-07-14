import type { HeadlineLine, IconComponent } from "@/types";

export type { HeadlineSegment, HeadlineLine } from "@/types";

export interface HeroAvailability {
  /** e.g. "Open to Opportunities" */
  status: string;
  /** e.g. ["Cloud", "DevOps", "Infrastructure"] */
  tags: string[];
}

export interface HeroContentData {
  greeting: string;
  name: string;
  role: string;
  /** Short role qualifiers shown beneath the title, e.g. "Infrastructure". */
  roleTags: string[];
  headline: HeadlineLine[];
  description: string;
  availability: HeroAvailability;
}

export interface HeroCta {
  label: string;
  href: string;
  /** Marks the anchor as a file download (used for the resume link). */
  download?: boolean;
}

export interface HeroCtas {
  primary: HeroCta;
  secondary: HeroCta;
  outline: HeroCta;
}

export interface HeroStat {
  id: string;
  value: string;
  label: string;
  icon: IconComponent;
}

/** A single line rendered inside the terminal-window illustration. */
export interface HeroTerminalLine {
  /** "$" for a typed command, "✓" for a success line. */
  kind: "command" | "success";
  text: string;
}

/** A small floating metric card layered over the terminal illustration. */
export interface HeroFloatingCard {
  id: string;
  icon: IconComponent;
  label: string;
  value: string;
}
