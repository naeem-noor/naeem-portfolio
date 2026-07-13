"use client";

import { motion } from "framer-motion";

import {
  heroFadeUp,
  heroStaggerContainer,
} from "@/components/sections/Hero/constants";
import type { HeroContentData } from "@/components/sections/Hero/types";

export interface HeroContentProps {
  content: Pick<
    HeroContentData,
    "greeting" | "name" | "role" | "roleTags" | "headline" | "description"
  >;
}

/**
 * The animated text stack: greeting, name, role, headline, and description.
 * Client-only because it needs the fade/slide-in entrance animation —
 * everything static around it (badge, social links) stays server-rendered.
 */
export function HeroContent({ content }: HeroContentProps) {
  const { greeting, name, role, roleTags, headline, description } = content;

  return (
    <motion.div
      variants={heroStaggerContainer(0.12, 0.1)}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-6"
    >
      <motion.div variants={heroFadeUp} className="flex flex-col gap-1.5">
        <p className="text-muted-foreground text-lg">{greeting}</p>
        <h1 className="text-foreground text-4xl font-semibold tracking-tight sm:text-5xl">
          {name}
        </h1>
        <p className="text-foreground/80 text-base font-medium sm:text-lg">
          {role}
          <span className="text-muted-foreground font-normal">
            {" "}
            — {roleTags.join(" | ")}
          </span>
        </p>
      </motion.div>

      <motion.h2
        variants={heroFadeUp}
        className="text-3xl leading-[1.15] font-bold tracking-tight text-balance sm:text-5xl lg:text-[3.25rem]"
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
      </motion.h2>

      <motion.p
        variants={heroFadeUp}
        className="text-muted-foreground max-w-xl text-base leading-relaxed text-pretty sm:text-lg"
      >
        {description}
      </motion.p>
    </motion.div>
  );
}
