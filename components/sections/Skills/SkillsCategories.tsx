"use client";

import { motion } from "framer-motion";

import {
  cardFadeUp,
  staggerContainer,
} from "@/components/sections/Skills/constants";
import { skills } from "@/content/skills";
import type { SkillCategory } from "@/types/skills";

const CATEGORY_ORDER: SkillCategory[] = [
  "Cloud",
  "Infrastructure",
  "Networking",
  "DevOps",
  "Programming",
  "Databases",
  "Tools",
];

/**
 * A summary card per skill category: icon (borrowed from its first skill),
 * a count, and a preview of the skills inside it. Purely an at-a-glance
 * overview — the interactive, filterable browsing experience is
 * `TechnologyGrid`/`TechnologyFilter` further down the page.
 *
 * Imports `skills` directly rather than via a prop — same icon-reference
 * reasoning as `TechnologyGrid`.
 */
export function SkillsCategories() {
  const grouped = CATEGORY_ORDER.map((category) => ({
    category,
    items: skills.filter((skill) => skill.category === category),
  })).filter((group) => group.items.length > 0);

  return (
    <motion.div
      variants={staggerContainer(0.1, 0)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      {grouped.map(({ category, items }) => {
        const Icon = items[0]!.icon;

        return (
          <motion.div
            key={category}
            variants={cardFadeUp}
            className="border-border bg-surface/60 hover:border-border-strong hover:bg-surface flex flex-col gap-4 rounded-xl border p-6 backdrop-blur-sm transition-colors"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="bg-primary/10 flex h-11 w-11 items-center justify-center rounded-xl">
                <Icon className="text-primary h-5 w-5" aria-hidden="true" />
              </div>
              <span className="text-muted-foreground text-xs font-medium">
                {items.length} {items.length === 1 ? "skill" : "skills"}
              </span>
            </div>

            <h3 className="text-foreground text-base font-semibold">
              {category}
            </h3>

            <p className="text-muted-foreground text-sm leading-relaxed">
              {items.map((skill) => skill.name).join(" · ")}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
