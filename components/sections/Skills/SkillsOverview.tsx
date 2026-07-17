"use client";

import { motion } from "framer-motion";

import {
  cardFadeUp,
  staggerContainer,
} from "@/components/sections/Skills/constants";
import { skillsOverview } from "@/content/skills";
import { useCountUp } from "@/hooks/use-count-up";
import type { OverviewStat } from "@/types/skills";

function CountStat({
  stat,
}: {
  stat: Extract<OverviewStat, { type: "count" }>;
}) {
  const { ref, rounded } = useCountUp(stat.value);

  return (
    <dt
      ref={ref}
      className="text-foreground text-2xl font-semibold tracking-tight"
    >
      <motion.span>{rounded}</motion.span>
      {stat.suffix}
    </dt>
  );
}

/**
 * A 2x2 (mobile) / 4-across (desktop) grid of overview stat cards.
 * Numeric stats (`type: "count"`) animate counting up once in view; text
 * stats ("Enterprise", "Cloud") render as-is.
 *
 * Imports `skillsOverview` directly — while these particular stats don't
 * carry icons, importing content directly (rather than via props) is the
 * consistent pattern used everywhere else in the app.
 */
export function SkillsOverview() {
  return (
    <motion.dl
      variants={staggerContainer(0.08, 0)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="grid grid-cols-2 gap-3 sm:grid-cols-4"
    >
      {skillsOverview.map((stat) => (
        <motion.div
          key={stat.id}
          variants={cardFadeUp}
          className="border-border bg-surface/60 hover:border-border-strong hover:bg-surface flex flex-col gap-2 rounded-xl border p-5 backdrop-blur-sm transition-colors"
        >
          {stat.type === "count" ? (
            <CountStat stat={stat} />
          ) : (
            <dt className="text-foreground text-2xl font-semibold tracking-tight">
              {stat.value}
            </dt>
          )}
          <dd className="text-muted-foreground text-xs">{stat.label}</dd>
        </motion.div>
      ))}
    </motion.dl>
  );
}
