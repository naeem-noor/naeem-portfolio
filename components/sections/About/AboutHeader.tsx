"use client";

import { motion } from "framer-motion";

import {
  fadeUp,
  staggerContainer,
} from "@/components/sections/About/constants";
import type { AboutHeaderData } from "@/components/sections/About/types";

export interface AboutHeaderProps {
  header: AboutHeaderData;
}

/**
 * Small uppercase section label + the large accented headline. Client-only
 * for the scroll-triggered fade/slide entrance — everything below the fold
 * in this section animates on scroll rather than on mount, unlike the Hero.
 */
export function AboutHeader({ header }: AboutHeaderProps) {
  return (
    <motion.div
      variants={staggerContainer(0.1, 0)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="flex flex-col gap-4"
    >
      <motion.p
        variants={fadeUp}
        className="text-primary text-sm font-semibold tracking-[0.14em] uppercase"
      >
        {header.label}
      </motion.p>

      <motion.h2
        variants={fadeUp}
        className="text-3xl leading-[1.15] font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]"
      >
        {header.headline.map((line, lineIndex) => (
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
      </motion.h2>
    </motion.div>
  );
}
