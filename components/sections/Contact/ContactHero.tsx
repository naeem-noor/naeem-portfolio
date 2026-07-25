"use client";

import { motion } from "framer-motion";

import { PageHeader } from "@/components/shared/page-header";
import { contactHeader } from "@/content/contact";
import { fadeUp } from "@/lib/motion";

/**
 * The Contact page's hero: label, headline, and a description of the
 * kinds of roles/collaboration being sought.
 */
export function ContactHero() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        label={contactHeader.label}
        headline={contactHeader.headline}
      />
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="text-muted-foreground max-w-2xl text-lg leading-relaxed text-pretty"
      >
        {contactHeader.description}
      </motion.p>
    </div>
  );
}
