"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { cardFadeUp, staggerContainer } from "@/lib/motion";
import { workExperience } from "@/data/experience";

/**
 * Home page preview of the two most recent roles (the full timeline with
 * responsibilities, achievements, and tech stacks lives on `/experience`).
 * `workExperience` is already ordered most-recent-first, so this just
 * takes the first two.
 */
export function LatestExperience() {
  const latest = workExperience.slice(-2);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
          Latest Experience
        </h2>
        <Link
          href="/experience"
          className="text-primary hidden items-center gap-1.5 text-sm font-medium hover:underline sm:inline-flex"
        >
          View full experience
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>

      <motion.div
        variants={staggerContainer(0.12, 0)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid gap-4 sm:grid-cols-2"
      >
        {latest.map((item) => (
          <motion.div
            key={item.id}
            variants={cardFadeUp}
            className="border-border bg-surface/60 flex flex-col gap-2 rounded-xl border p-5 backdrop-blur-sm"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-foreground text-base font-semibold">
                {item.company}
              </h3>
              <span className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
                {item.duration}
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
              {item.role}
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
              {item.summary}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <Link
        href="/experience"
        className="text-primary inline-flex items-center gap-1.5 text-sm font-medium hover:underline sm:hidden"
      >
        View full experience
        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
      </Link>
    </div>
  );
}
