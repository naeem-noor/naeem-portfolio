"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { ExpandPanel } from "@/components/shared/expand-panel";
import { useDisclosure } from "@/hooks/use-disclosure";

import {
  staggerContainer,
  timelineLineVariant,
} from "@/components/sections/Experience/constants";
import { TimelineItem } from "@/components/sections/Experience/TimelineItem";
import { workExperience } from "@/data/experience";

interface ExperienceTimelineProps {
  initialCount?: number;
}

export function ExperienceTimeline({
  initialCount = 2,
}: ExperienceTimelineProps) {
  const { isOpen, toggle, panelId } = useDisclosure();

  const visible = workExperience.slice(0, initialCount);
  const hidden = workExperience.slice(initialCount);

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
        {visible.map((item) => (
          <TimelineItem key={item.id} experience={item} />
        ))}

        {hidden.length > 0 && (
          <ExpandPanel isOpen={isOpen} id={panelId}>
            <div className="flex flex-col gap-8">
              {hidden.map((item) => (
                <TimelineItem key={item.id} experience={item} />
              ))}
            </div>
          </ExpandPanel>
        )}
      </motion.ol>

      {hidden.length > 0 && (
        <button
          type="button"
          onClick={toggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="text-primary mt-6 inline-flex items-center gap-1 text-sm font-medium hover:underline"
        >
          {isOpen ? "View Less" : "View More"}

          <ChevronDown
            className={cn(
              "h-3.5 w-3.5 transition-transform duration-200",
              isOpen && "rotate-180",
            )}
          />
        </button>
      )}
    </div>
  );
}
