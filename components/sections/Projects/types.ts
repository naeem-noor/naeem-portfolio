import type { ProjectCategory, ProjectStatus } from "@/types/projects";

/** "All" plus every real category — the filter bar's option list. */
export type FilterCategory = "All" | ProjectCategory;

export const FILTER_CATEGORIES: FilterCategory[] = [
  "All",
  // "DevOps",
  "E-Commerce",
  "Frontend",
  "Backend",
  "SaaS",
  "AI",
  "Infrastructure",
  "Networking",
];

/** Maps each project status to a `Badge` variant, since the shared Badge
 * component only has three visual variants to work with. */
export const STATUS_BADGE_VARIANT: Record<
  ProjectStatus,
  "default" | "outline" | "accent"
> = {
  Production: "accent",
  Completed: "accent",
  "In Progress": "default",
  Learning: "default",
  Archived: "outline",
  Live: "accent",
};
