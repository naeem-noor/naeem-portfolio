"use client";

import { motion } from "framer-motion";

import {
  staggerContainer,
  timelineLineVariant,
} from "@/components/sections/About/constants";
import { JourneyCard } from "@/components/sections/About/JourneyCard";
import type { JourneyItem } from "@/components/sections/About/types";

export interface JourneyTimelineProps {
  items: JourneyItem[];
}

/**
 * A vertical timeline: a connecting line that draws itself in top-to-bottom
 * as it scrolls into view, with each `JourneyCard` fading/sliding in after
 * it in sequence.
 */
export function JourneyTimeline({ items }: JourneyTimelineProps) {
  return (
    <div className="relative">
      <h3 className="text-foreground mb-6 text-sm font-semibold tracking-wide uppercase">
        Professional Journey
      </h3>

      <div className="relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={timelineLineVariant}
          style={{ transformOrigin: "top" }}
          className="bg-border absolute top-1.5 left-[3px] h-[calc(100%-1.5rem)] w-px"
          aria-hidden="true"
        />

        <motion.ol
          variants={staggerContainer(0.15, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-5"
        >
          {items.map((item) => (
            <JourneyCard key={item.id} item={item} />
          ))}
        </motion.ol>
      </div>
    </div>
  );
}
