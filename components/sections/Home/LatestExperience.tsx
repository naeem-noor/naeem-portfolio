"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { cardFadeUp, staggerContainer } from "@/lib/motion";
import { journeyItems } from "@/data/experience";

/**
 * Home page preview of the two most recent stops on the professional
 * journey (the full timeline lives on `/experience`). Deliberately doesn't
 * reuse `JourneyCard`/its connecting-line dot — that visual motif is
 * specific to an actual multi-stop timeline, not a two-item preview.
 */
export function LatestExperience() {
  const latest = journeyItems.slice(-2);

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
          View full journey
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
                {item.place}
              </h3>
              <span className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
                {item.period}
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <Link
        href="/experience"
        className="text-primary inline-flex items-center gap-1.5 text-sm font-medium hover:underline sm:hidden"
      >
        View full journey
        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
      </Link>
    </div>
  );
}
