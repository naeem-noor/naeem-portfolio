"use client";

import { motion } from "framer-motion";

import { PageHeader } from "@/components/shared/page-header";
import { fadeUp } from "@/lib/motion";
import type { HeadlineLine } from "@/types";

const headline: HeadlineLine[] = [
  [{ text: "Engineering Solutions That" }],
  [{ text: "Solve Real ", accent: true }, { text: "Problems." }],
];

/**
 * The Projects page's hero: label, headline, and a short description
 * framing the projects that follow as evidence of real engineering
 * practice, not just a list of side projects.
 */
export function ProjectsHero() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader label="Projects" headline={headline} />
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="text-muted-foreground max-w-2xl text-lg leading-relaxed text-pretty"
      >
        These projects reflect hands-on experience across web development,
        infrastructure, DevOps automation, and modern engineering practice —
        built to be judged on architecture and decision-making, not just the
        finished screenshots.
      </motion.p>
    </div>
  );
}
