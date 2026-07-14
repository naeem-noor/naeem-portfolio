"use client";

import { motion } from "framer-motion";

import {
  cardFadeUp,
  staggerContainer,
} from "@/components/sections/About/constants";
import { aboutStats } from "@/data/about";

/**
 * A 2x2 (mobile) / 4-across (desktop) grid of premium stat cards.
 *
 * Imports `aboutStats` directly rather than taking it as a prop: the stat
 * icons are component references, and passing functions from the parent
 * Server Component as props across the client boundary isn't supported —
 * a plain module import sidesteps that (same approach as `HeroStats`).
 */
export function ExperienceHighlights() {
  return (
    <motion.dl
      variants={staggerContainer(0.08, 0)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="grid grid-cols-2 gap-3 sm:grid-cols-4"
    >
      {aboutStats.map(({ id, value, label, icon: Icon }) => (
        <motion.div
          key={id}
          variants={cardFadeUp}
          className="border-border bg-surface/60 hover:border-border-strong hover:bg-surface flex flex-col gap-2.5 rounded-xl border p-5 backdrop-blur-sm transition-colors"
        >
          <Icon className="text-primary h-4 w-4" aria-hidden="true" />
          <dt className="text-foreground text-xl font-semibold tracking-tight">
            {value}
          </dt>
          <dd className="text-muted-foreground text-xs">{label}</dd>
        </motion.div>
      ))}
    </motion.dl>
  );
}
