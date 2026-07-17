"use client";

import { motion } from "framer-motion";

import {
  cardFadeUp,
  staggerContainer,
} from "@/components/sections/Skills/constants";
import { learningRoadmap } from "@/content/skills";

/**
 * Roadmap cards for what's actively being learned, each with a brief
 * explanation of *why*. Imports `learningRoadmap` directly — same
 * icon-reference reasoning as `TechnologyGrid`.
 */
export function LearningRoadmap() {
  return (
    <motion.div
      variants={staggerContainer(0.1, 0)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      {learningRoadmap.map(({ id, title, reason, icon: Icon }) => (
        <motion.div
          key={id}
          variants={cardFadeUp}
          className="border-border bg-surface/40 hover:border-border-strong hover:bg-surface/60 flex flex-col gap-3 rounded-xl border border-dashed p-5 backdrop-blur-sm transition-colors"
        >
          <div className="bg-primary/10 flex h-9 w-9 items-center justify-center rounded-lg">
            <Icon className="text-primary h-4.5 w-4.5" aria-hidden="true" />
          </div>
          <h4 className="text-foreground text-sm font-semibold">{title}</h4>
          <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
            {reason}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
