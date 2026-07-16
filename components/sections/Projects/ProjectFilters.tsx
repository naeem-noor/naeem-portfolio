"use client";

import { motion } from "framer-motion";

import {
  FILTER_CATEGORIES,
  type FilterCategory,
} from "@/components/sections/Projects/types";
import { cn } from "@/lib/utils";

export interface ProjectFiltersProps {
  selected: FilterCategory;
  onChange: (category: FilterCategory) => void;
}

/**
 * A row of category filter chips. Controlled component — `ProjectsGrid`
 * owns the selected category and re-filters its own list, so filtering
 * logic lives in exactly one place.
 */
export function ProjectFilters({ selected, onChange }: ProjectFiltersProps) {
  return (
    <div
      role="group"
      aria-label="Filter projects by category"
      className="flex flex-wrap gap-2"
    >
      {FILTER_CATEGORIES.map((category) => {
        const isActive = category === selected;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            aria-pressed={isActive}
            className={cn(
              "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
              isActive
                ? "text-primary-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {isActive ? (
              <motion.span
                layoutId="project-filter-active"
                className="bg-primary absolute inset-0 rounded-full"
                transition={{ duration: 0.25, ease: "easeOut" }}
              />
            ) : null}
            <span className="relative">{category}</span>
          </button>
        );
      })}
    </div>
  );
}
