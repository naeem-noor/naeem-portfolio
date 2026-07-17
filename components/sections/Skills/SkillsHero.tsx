"use client";

import { motion } from "framer-motion";

import { PageHeader } from "@/components/shared/page-header";
import { skillsHeader } from "@/content/skills";
import { fadeUp } from "@/lib/motion";

/**
 * The Skills page's hero: label, headline, and a short summary of the
 * background behind the stack that follows.
 */
export function SkillsHero() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader label={skillsHeader.label} headline={skillsHeader.headline} />
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="text-muted-foreground max-w-2xl text-lg leading-relaxed text-pretty"
      >
        {skillsHeader.description}
      </motion.p>
    </div>
  );
}
