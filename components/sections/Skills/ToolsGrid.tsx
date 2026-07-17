"use client";

import { motion } from "framer-motion";

import {
  fadeUp,
  staggerContainer,
} from "@/components/sections/Skills/constants";
import { TOOL_GROUPS } from "@/components/sections/Skills/types";
import { skills } from "@/content/skills";

/**
 * Tools grouped into 5 broader buckets (Development, Infrastructure,
 * Networking, Cloud, Automation) — a coarser grouping than the 7-category
 * technology filter, meant as a quick reference rather than duplicating
 * `TechnologyGrid`. Imports `skills` directly — same icon-reference
 * reasoning as the rest of this section.
 */
export function ToolsGrid() {
  return (
    <div className="flex flex-col gap-10">
      {Object.entries(TOOL_GROUPS).map(([groupName, categories]) => {
        const items = skills.filter((skill) =>
          categories.includes(skill.category),
        );

        if (items.length === 0) return null;

        return (
          <div key={groupName} className="flex flex-col gap-4">
            <h3 className="text-foreground text-sm font-semibold tracking-wide uppercase">
              {groupName}
            </h3>
            <motion.div
              variants={staggerContainer(0.05, 0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="flex flex-wrap gap-3"
            >
              {items.map((skill) => (
                <motion.div
                  key={skill.id}
                  variants={fadeUp}
                  className="border-border bg-surface/60 hover:border-border-strong hover:bg-surface flex items-center gap-2.5 rounded-full border py-2 pr-4 pl-2.5 transition-colors"
                >
                  <div className="bg-primary/10 flex h-7 w-7 items-center justify-center rounded-full">
                    <skill.icon
                      className="text-primary h-3.5 w-3.5"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="text-foreground text-sm font-medium">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
