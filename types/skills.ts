import type { IconComponent } from "@/types";

export type SkillCategory =
  | "Cloud"
  | "Infrastructure"
  | "Networking"
  | "DevOps"
  | "Programming"
  | "Databases"
  | "Tools";

export type SkillLevel = "Expert" | "Advanced" | "Intermediate" | "Learning";

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  level: SkillLevel;
  description: string;
  /** Years of hands-on use. 0 for skills still being learned. */
  years: number;
  icon: IconComponent;
  /** Shown in the Featured Technologies section with fuller detail. */
  featured: boolean;
  currentlyLearning: boolean;
  /** Only shown for `featured` skills — the "Primary Use Cases" line. */
  useCases?: string[];
}

/** One stop in the Currently Learning roadmap — distinct from a `Skill`
 * since it explains *why* something is being learned, not current level. */
export interface LearningRoadmapItem {
  id: string;
  title: string;
  reason: string;
  icon: IconComponent;
}

/** One step in the Development Workflow diagram. */
export interface WorkflowStep {
  id: string;
  label: string;
  icon: IconComponent;
  /** Marks steps that are aspirational/not yet in production use. */
  future?: boolean;
}

/** A stat card in the Skills Overview row — either an animated counter
 * (`type: "count"`) or a static text value like "Enterprise"/"Cloud". */
export type OverviewStat =
  | { id: string; type: "count"; value: number; suffix?: string; label: string }
  | { id: string; type: "text"; value: string; label: string };
