"use client";

import { motion } from "framer-motion";

import { timelineItemVariant } from "@/components/sections/Experience/constants";
import type { JourneyItem } from "@/components/sections/Experience/types";
import { cn } from "@/lib/utils";

export interface JourneyCardProps {
  item: JourneyItem;
}

/**
 * One stop on the journey timeline: a dot on the vertical line plus a card
 * with the place, period, and description. Purely presentational — always
 * rendered inside `JourneyTimeline`'s motion container, so its own entrance
 * variant is inherited via `variants` rather than set independently.
 */
export function JourneyCard({ item }: JourneyCardProps) {
  return (
    <motion.li variants={timelineItemVariant} className="relative pl-10">
      <span
        className={cn(
          "border-background absolute top-1.5 left-[-5px] h-3.5 w-3.5 rounded-full border-2",
          item.current ? "bg-primary" : "bg-border-strong",
        )}
        aria-hidden="true"
      />

      <div className="border-border bg-surface/60 hover:border-border-strong rounded-xl border p-5 backdrop-blur-sm transition-colors">
        <div className="mb-1.5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-foreground text-base font-semibold">
            {item.place}
          </h3>
          <span className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
            {item.period}
          </span>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
          {item.description}
        </p>
      </div>
    </motion.li>
  );
}
