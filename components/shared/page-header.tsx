"use client";

import { motion } from "framer-motion";

import { fadeUp, staggerContainer } from "@/lib/motion";
import type { HeadlineLine } from "@/types";

export interface PageHeaderProps {
  label: string;
  headline: HeadlineLine[];
  className?: string;
}

/**
 * Small uppercase eyebrow label + a large accented, multi-line headline.
 * Used at the top of every dedicated page (About, Experience, Skills,
 * Projects, Certifications, Contact) so the pattern lives in exactly one
 * place instead of being reimplemented per page.
 */
export function PageHeader({ label, headline, className }: PageHeaderProps) {
  return (
    <motion.div
      variants={staggerContainer(0.1, 0)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={className ?? "flex flex-col gap-4"}
    >
      <motion.p
        variants={fadeUp}
        className="text-primary text-sm font-semibold tracking-[0.14em] uppercase"
      >
        {label}
      </motion.p>

      <motion.h1
        variants={fadeUp}
        className="text-3xl leading-[1.15] font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]"
      >
        {headline.map((line, lineIndex) => (
          <span key={lineIndex} className="block">
            {line.map((segment, segmentIndex) => (
              <span
                key={segmentIndex}
                className={segment.accent ? "text-primary" : undefined}
              >
                {segment.text}
              </span>
            ))}
          </span>
        ))}
      </motion.h1>
    </motion.div>
  );
}
