"use client";

import { motion } from "framer-motion";
import { CircleDot } from "lucide-react";

import {
  fadeUp,
  staggerContainer,
} from "@/components/sections/Contact/constants";
import { availability } from "@/content/contact";

/**
 * The Availability / Collaboration section: an "Open to Opportunities"
 * status line plus the areas of collaboration being sought. Imports
 * `availability` directly — same icon-reference reasoning as
 * `ContactInformation`.
 */
export function AvailabilitySection() {
  return (
    <motion.div
      variants={staggerContainer(0.08, 0)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="border-border bg-surface/60 flex flex-col gap-6 rounded-2xl border p-6 backdrop-blur-sm sm:p-8"
    >
      <motion.div variants={fadeUp} className="flex flex-col gap-2">
        <span className="border-border bg-background/60 text-success inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold">
          <CircleDot className="h-3 w-3" aria-hidden="true" />
          {availability.status}
        </span>
        <p className="text-muted-foreground max-w-xl text-sm leading-relaxed text-pretty">
          {availability.description}
        </p>
      </motion.div>

      <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
        {availability.areas.map(({ id, label, icon: Icon }) => (
          <span
            key={id}
            className="border-border bg-background/60 text-foreground inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm font-medium"
          >
            <Icon className="text-primary h-3.5 w-3.5" aria-hidden="true" />
            {label}
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
}
