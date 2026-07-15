"use client";

import { motion } from "framer-motion";

import {
  staggerContainer,
  timelineLineVariant,
} from "@/components/sections/Experience/constants";
import { TimelineItem } from "@/components/sections/Experience/TimelineItem";
import { workExperience } from "@/data/experience";

/**
 * The vertical timeline: a connecting line that draws itself in top-to-
 * bottom as it scrolls into view, with each `TimelineItem` fading/sliding
 * in after it in sequence.
 *
 * Imports `workExperience` directly rather than via a prop — each role's
 * achievements carry icon component references, which can't cross the
 * Server-to-Client prop boundary (same reasoning as `SummaryCards`).
 */
export function ExperienceTimeline() {
  return (
    <div className="relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={timelineLineVariant}
        style={{ transformOrigin: "top" }}
        className="bg-border absolute top-7 left-[10px] h-[calc(100%-3.5rem)] w-px sm:left-[26px]"
        aria-hidden="true"
      />

      <motion.ol
        variants={staggerContainer(0.15, 0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-8"
      >
        {workExperience.map((item) => (
          <TimelineItem key={item.id} experience={item} />
        ))}
      </motion.ol>
    </div>
  );
}
