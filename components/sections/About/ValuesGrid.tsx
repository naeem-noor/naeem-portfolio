"use client";

import { motion } from "framer-motion";

import {
  cardFadeUp,
  staggerContainer,
} from "@/components/sections/About/constants";
import { values } from "@/data/about";

/**
 * Four value cards. Imports `values` directly from the data layer rather
 * than via props — the icons are component references, which can't cross
 * the Server-to-Client prop boundary (same reasoning as `ExperienceHighlights`
 * and Hero's `HeroStats`).
 */
export function ValuesGrid() {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-foreground text-sm font-semibold tracking-wide uppercase">
        What I Value
      </h3>

      <motion.div
        variants={staggerContainer(0.1, 0)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {values.map(({ id, title, description, icon: Icon }) => (
          <motion.div
            key={id}
            variants={cardFadeUp}
            className="border-border bg-surface/60 hover:border-border-strong hover:bg-surface flex flex-col gap-3 rounded-xl border p-5 backdrop-blur-sm transition-colors"
          >
            <div className="bg-primary/10 flex h-9 w-9 items-center justify-center rounded-lg">
              <Icon className="text-primary h-4.5 w-4.5" aria-hidden="true" />
            </div>
            <h4 className="text-foreground text-sm font-semibold">{title}</h4>
            <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
              {description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
