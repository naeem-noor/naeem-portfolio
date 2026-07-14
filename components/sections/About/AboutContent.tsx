"use client";

import { motion } from "framer-motion";

import {
  fadeUp,
  staggerContainer,
} from "@/components/sections/About/constants";
import type { StoryParagraph } from "@/components/sections/About/types";

export interface AboutContentProps {
  paragraphs: StoryParagraph[];
}

/**
 * The professional-story paragraphs. Client-only for the scroll-triggered,
 * staggered fade/slide entrance of each paragraph.
 */
export function AboutContent({ paragraphs }: AboutContentProps) {
  return (
    <motion.div
      variants={staggerContainer(0.15, 0.05)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="flex max-w-2xl flex-col gap-5"
    >
      {paragraphs.map((paragraph, index) => (
        <motion.p
          key={index}
          variants={fadeUp}
          className="text-muted-foreground text-base leading-relaxed text-pretty sm:text-lg"
        >
          {paragraph}
        </motion.p>
      ))}
    </motion.div>
  );
}
