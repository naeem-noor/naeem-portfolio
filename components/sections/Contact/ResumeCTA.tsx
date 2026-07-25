"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

import { fadeUp } from "@/components/sections/Contact/constants";
import { Button } from "@/components/ui/button";
import { resumeCtaContent } from "@/content/contact";
import { siteConfig } from "@/lib/site-config";

/**
 * A prominent Download Resume card. Uses `siteConfig.resumeUrl` as the
 * single source of truth for the asset path (same value every other page
 * uses) — see the README for the expected file location.
 */
export function ResumeCTA() {
  const Icon = resumeCtaContent.icon;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="border-border bg-surface/60 flex flex-col items-center gap-4 rounded-2xl border p-8 text-center backdrop-blur-sm sm:flex-row sm:justify-between sm:text-left"
    >
      <div className="flex items-center gap-4">
        <div className="bg-primary/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
          <Icon className="text-primary h-5 w-5" aria-hidden="true" />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-foreground text-base font-semibold">
            {resumeCtaContent.heading}
          </h3>
          <p className="text-muted-foreground text-sm">
            {resumeCtaContent.description}
          </p>
        </div>
      </div>

      <Button asChild size="lg" className="w-full rounded-full sm:w-auto">
        <a
          href={siteConfig.resumeUrl}
          download
          aria-label="Download resume (PDF)"
        >
          <Download className="h-4 w-4" />
          Download Resume
        </a>
      </Button>
    </motion.div>
  );
}
