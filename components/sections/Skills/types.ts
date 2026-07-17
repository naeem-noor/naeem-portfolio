import type { SkillCategory, SkillLevel } from "@/types/skills";

export type FilterCategory = "All" | SkillCategory;

export const FILTER_CATEGORIES: FilterCategory[] = [
  "All",
  "Cloud",
  "Infrastructure",
  "Networking",
  "Programming",
  "DevOps",
  "Databases",
  "Tools",
];

/** Maps each proficiency level to a `Badge` variant. */
export const LEVEL_BADGE_VARIANT: Record<
  SkillLevel,
  "default" | "outline" | "accent"
> = {
  Expert: "accent",
  Advanced: "accent",
  Intermediate: "default",
  Learning: "outline",
};

/** The 5 tool-grouping buckets used by `ToolsGrid`, mapped from the 7
 * underlying `SkillCategory` values (a coarser grouping for that section
 * only — see `ToolsGrid` for why it groups differently than the main
 * category filter). */
export const TOOL_GROUPS: Record<string, SkillCategory[]> = {
  Development: ["Programming"],
  Infrastructure: ["Infrastructure"],
  Networking: ["Networking"],
  Cloud: ["Cloud"],
  Automation: ["DevOps", "Tools"],
};
