"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { Section } from "@/components/layout/section";

const CHECKLIST = [
  "Next.js 15 App Router + TypeScript (strict)",
  "Tailwind CSS v4 design tokens (light/dark)",
  "shadcn/ui + class-variance-authority",
  "next-themes with dark as the default",
  "Framer Motion, Lucide, Geist Sans/Mono",
  "Docker multi-stage build & docker compose",
] as const;

/**
 * Placeholder landing content for Phase 1. Demonstrates that the design
 * tokens, theme system, and animation stack are wired together correctly.
 * Replaced by the real portfolio sections in a later phase.
 */
export function FoundationHero() {
  return (
    <Section
      id="foundation"
      className="flex min-h-[calc(100vh-4rem)] items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto flex max-w-2xl flex-col items-start gap-6"
      >
        <span className="border-border bg-surface text-accent rounded-full border px-3 py-1 font-mono text-xs">
          v1 · phase 1 · foundation
        </span>

        <h1 className="text-foreground text-4xl font-semibold tracking-tight sm:text-5xl">
          Project foundation is up and running.
        </h1>

        <p className="text-muted-foreground text-lg">
          Portfolio sections come next. This page only proves the app shell —
          theming, typography, layout primitives, and tooling — is solid.
        </p>

        <ul className="flex flex-col gap-3">
          {CHECKLIST.map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: 0.1 + index * 0.06 }}
              className="text-foreground flex items-center gap-3 text-sm"
            >
              <CheckCircle2 className="text-success h-4 w-4 shrink-0" />
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </Section>
  );
}
