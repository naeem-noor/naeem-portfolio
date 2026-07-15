"use client";

import { motion } from "framer-motion";

import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/shared/page-header";
import { cardFadeUp, staggerContainer } from "@/lib/motion";
import { certifications } from "@/data/certifications";
import type { HeadlineLine } from "@/types";

const headline: HeadlineLine[] = [
  [{ text: "Credentials That Back" }],
  [{ text: "the Work.", accent: true }],
];

/**
 * The Certifications page's content: a header plus a grid of certification
 * cards. Client Component overall since it imports `certifications`
 * directly (icon component references) and drives the grid's stagger
 * entrance.
 */
export function Certifications() {
  return (
    <Section spacing="lg">
      <div className="flex flex-col gap-14">
        <PageHeader label="Certifications" headline={headline} />

        <motion.div
          variants={staggerContainer(0.1, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {certifications.map(({ id, title, issuer, status, icon: Icon }) => (
            <motion.div
              key={id}
              variants={cardFadeUp}
              className="border-border bg-surface/60 hover:border-border-strong hover:bg-surface flex flex-col gap-3 rounded-xl border p-5 backdrop-blur-sm transition-colors"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg">
                  <Icon className="text-primary h-5 w-5" aria-hidden="true" />
                </div>
                <Badge variant={status === "Completed" ? "accent" : "default"}>
                  {status}
                </Badge>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-foreground text-sm font-semibold">
                  {title}
                </h3>
                <p className="text-muted-foreground text-xs">{issuer}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
