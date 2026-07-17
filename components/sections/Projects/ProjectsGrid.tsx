"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

import { ProjectCard } from "@/components/sections/Projects/ProjectCard";
import { ProjectFilters } from "@/components/sections/Projects/ProjectFilters";
import type { FilterCategory } from "@/components/sections/Projects/types";
import { projects } from "@/content/projects";

/**
 * Owns the selected category filter and re-renders the grid with a smooth
 * fade/stagger whenever it changes. `AnimatePresence` handles cards
 * leaving/entering as the filtered set changes, not just the initial
 * scroll-in.
 *
 * Imports `projects` directly rather than via a prop — same
 * Server-to-Client icon-serialization reasoning as `FeaturedProjects`.
 */
export function ProjectsGrid() {
  const [category, setCategory] = useState<FilterCategory>("All");

  const filtered = useMemo(
    () =>
      category === "All"
        ? projects
        : projects.filter((project) => project.category.includes(category)),
    [category],
  );

  return (
    <div className="flex flex-col gap-8">
      {/* <ProjectFilters selected={category} onChange={setCategory} /> */}

      <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-muted-foreground col-span-full py-10 text-center text-sm"
            >
              No projects in this category yet — more coming soon.
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
