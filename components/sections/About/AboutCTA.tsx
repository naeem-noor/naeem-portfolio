"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

import {
  fadeUp,
  staggerContainer,
} from "@/components/sections/About/constants";
import type { AboutCtaData } from "@/components/sections/About/types";
import { Button } from "@/components/ui/button";

export interface AboutCTAProps {
  cta: AboutCtaData;
}

/**
 * Closing call-to-action banner: a heading plus the two actions a recruiter
 * is most likely to want next. Client-only for the scroll-triggered
 * fade/slide entrance.
 */
export function AboutCTA({ cta }: AboutCTAProps) {
  return (
    <motion.div
      variants={staggerContainer(0.12, 0)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="border-border bg-surface/60 flex flex-col items-center gap-6 rounded-2xl border px-6 py-12 text-center backdrop-blur-sm sm:px-12"
    >
      <motion.h3
        variants={fadeUp}
        className="text-foreground max-w-xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
      >
        {cta.heading}
      </motion.h3>

      <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
        <Button asChild size="lg" className="rounded-full">
          <Link href={cta.primary.href}>{cta.primary.label}</Link>
        </Button>

        <Button asChild variant="outline" size="lg" className="rounded-full">
          <a href={cta.secondary.href} download={cta.secondary.download}>
            <Download className="h-4 w-4" />
            {cta.secondary.label}
          </a>
        </Button>
      </motion.div>
    </motion.div>
  );
}
