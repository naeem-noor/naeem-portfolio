import type {
  CertificationCategory,
  CertificationStatus,
} from "@/types/certifications";

/** The filter bar mixes status values and category values in one flat
 * list, per the brief — "All" resets to everything. */
export type FilterOption = "All" | CertificationStatus | CertificationCategory;

export const STATUS_FILTERS: CertificationStatus[] = [
  "Completed",
  "In Progress",
  "Planned",
];

export const CATEGORY_FILTERS: CertificationCategory[] = [
  "Cloud",
  "Networking",
  "DevOps",
  "Programming",
  "Infrastructure",
];

export const FILTER_OPTIONS: FilterOption[] = [
  "All",
  ...STATUS_FILTERS,
  ...CATEGORY_FILTERS,
];

/** Maps each certification status to a `Badge` variant. */
export const STATUS_BADGE_VARIANT: Record<
  CertificationStatus,
  "default" | "outline" | "accent"
> = {
  Completed: "accent",
  "In Progress": "default",
  Planned: "outline",
};
