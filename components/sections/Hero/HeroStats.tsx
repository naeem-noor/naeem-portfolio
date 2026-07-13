"use client";

import { motion } from "framer-motion";

import {
  heroCardVariant,
  heroStaggerContainer,
} from "@/components/sections/Hero/constants";
import { heroStats } from "@/data/hero";

/**
 * A compact 2x2 grid of quick-stat cards. Client-only for the
 * fade-up-on-scroll entrance (`whileInView`) — the cards themselves are
 * static once visible.
 *
 * Imports `heroStats` directly from the data layer rather than receiving it
 * as a prop from the (Server Component) parent: the stat icons are
 * component references, and passing functions across the server/client
 * boundary as props isn't supported — a plain module import sidesteps that.
 */
export function HeroStats() {
  return (
    <motion.dl
      variants={heroStaggerContainer(0.08, 0)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className="grid grid-cols-2 gap-3 sm:max-w-md"
    >
      {heroStats.map(({ id, value, label, icon: Icon }) => (
        <motion.div
          key={id}
          variants={heroCardVariant}
          className="border-border bg-surface/60 hover:border-border-strong hover:bg-surface flex items-start gap-3 rounded-xl border p-4 backdrop-blur-sm transition-colors"
        >
          <Icon
            className="text-primary mt-0.5 h-4 w-4 shrink-0"
            aria-hidden="true"
          />
          <div className="flex flex-col">
            <dt className="text-foreground text-xl font-semibold tracking-tight">
              {value}
            </dt>
            <dd className="text-muted-foreground text-xs">{label}</dd>
          </div>
        </motion.div>
      ))}
    </motion.dl>
  );
}
