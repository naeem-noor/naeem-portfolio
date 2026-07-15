"use client";

import { motion } from "framer-motion";

import { CompanyCard } from "@/components/sections/Experience/CompanyCard";
import { timelineItemVariant } from "@/components/sections/Experience/constants";
import type { WorkExperience } from "@/components/sections/Experience/types";
import { cn } from "@/lib/utils";

export interface TimelineItemProps {
  experience: WorkExperience;
}

/**
 * One node on the timeline: a dot on the connecting line plus its
 * `CompanyCard`. The dot itself uses `variants` (not its own `initial`)
 * so it enters in sync with the card via the parent's variant propagation.
 */
export function TimelineItem({ experience }: TimelineItemProps) {
  return (
    <li className="relative pl-10 sm:pl-14">
      <motion.span
        variants={timelineItemVariant}
        className={cn(
          "border-background absolute top-7 left-[3px] h-3.5 w-3.5 rounded-full border-2 sm:left-[19px]",
          experience.current ? "bg-primary" : "bg-border-strong",
        )}
        aria-hidden="true"
      />

      <CompanyCard experience={experience} />
    </li>
  );
}
