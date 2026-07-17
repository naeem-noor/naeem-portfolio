"use client";

import { motion } from "framer-motion";

import {
  staggerContainer,
  timelineItemVariant,
  timelineLineVariant,
} from "@/components/sections/Certifications/constants";
import { developmentTimeline } from "@/content/certifications";
import { cn } from "@/lib/utils";

/**
 * The Professional Development timeline: a connecting line that draws
 * itself in as it scrolls into view, with each milestone (mixing
 * education, certifications, and skill milestones into one narrative)
 * fading/sliding in after it in sequence.
 *
 * Imports `developmentTimeline` directly — same icon-reference reasoning
 * as `CertificationGrid`.
 */
export function LearningTimeline() {
  return (
    <div className="relative max-w-2xl">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={timelineLineVariant}
        style={{ transformOrigin: "top" }}
        className="bg-border absolute top-6 left-3.75 h-[calc(100%-3rem)] w-px"
        aria-hidden="true"
      />

      <motion.ol
        variants={staggerContainer(0.12, 0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-6"
      >
        {developmentTimeline.map(
          ({ id, title, description, icon: Icon, current }) => (
            <motion.li
              key={id}
              variants={timelineItemVariant}
              className="relative flex gap-4 pl-0"
            >
              <span
                className={cn(
                  "border-background relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2",
                  current ? "bg-primary" : "bg-surface border-border",
                )}
              >
                <Icon
                  className={cn(
                    "h-3.5 w-3.5",
                    current
                      ? "text-primary-foreground"
                      : "text-muted-foreground",
                  )}
                  aria-hidden="true"
                />
              </span>

              <div className="border-border bg-surface/60 hover:border-border-strong flex-1 rounded-xl border p-4 backdrop-blur-sm transition-colors">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-foreground text-sm font-semibold">
                    {title}
                  </h3>
                  {current ? (
                    <span className="bg-primary/10 text-primary rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wide uppercase">
                      Current Focus
                    </span>
                  ) : null}
                </div>
                <p className="text-muted-foreground mt-1 text-sm leading-relaxed text-pretty">
                  {description}
                </p>
              </div>
            </motion.li>
          ),
        )}
      </motion.ol>
    </div>
  );
}
