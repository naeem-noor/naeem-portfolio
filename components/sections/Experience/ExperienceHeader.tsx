"use client";

import { motion } from "framer-motion";

import { PageHeader } from "@/components/shared/page-header";
import { fadeUp } from "@/lib/motion";
import type { HeadlineLine } from "@/types";

export interface ExperienceHeaderProps {
  label: string;
  headline: HeadlineLine[];
  intro: string;
}

/**
 * Experience's page header: the shared `PageHeader` (label + headline)
 * plus a short introduction paragraph underneath, describing the journey
 * across enterprise IT, infrastructure operations, and the move to cloud.
 */
export function ExperienceHeader({
  label,
  headline,
  intro,
}: ExperienceHeaderProps) {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader label={label} headline={headline} />
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="text-muted-foreground max-w-2xl text-lg leading-relaxed text-pretty"
      >
        {intro}
      </motion.p>
    </div>
  );
}
