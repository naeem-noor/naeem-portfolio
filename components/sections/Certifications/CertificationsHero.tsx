"use client";

import { motion } from "framer-motion";

import { PageHeader } from "@/components/shared/page-header";
import { certificationsHeader } from "@/content/certifications";
import { fadeUp } from "@/lib/motion";

/**
 * The Certifications page's hero: label, headline, and a short summary of
 * the commitment to continuous learning that the rest of the page shows
 * evidence for.
 */
export function CertificationsHero() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        label={certificationsHeader.label}
        headline={certificationsHeader.headline}
      />
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="text-muted-foreground max-w-2xl text-lg leading-relaxed text-pretty"
      >
        {certificationsHeader.description}
      </motion.p>
    </div>
  );
}
