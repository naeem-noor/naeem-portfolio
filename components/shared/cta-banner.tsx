"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { fadeUp, staggerContainer } from "@/lib/motion";
import type { IconComponent } from "@/types";

export interface CtaBannerAction {
  label: string;
  href: string;
  icon: IconComponent;
  download?: boolean;
}

export interface CtaBannerProps {
  heading: string;
  primary: CtaBannerAction;
  secondary: CtaBannerAction;
}

/**
 * A centered, bordered call-to-action banner: a heading plus two buttons.
 * Used as the closing element of both the About page and the Home page —
 * extracted here so the two don't duplicate the same markup with slightly
 * different copy.
 */
export function CtaBanner({ heading, primary, secondary }: CtaBannerProps) {
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
        {heading}
      </motion.h3>

      <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
        <Button asChild size="lg" className="rounded-full">
          <Link href={primary.href}>
            <primary.icon className="h-4 w-4" />
            {primary.label}
          </Link>
        </Button>

        <Button asChild variant="outline" size="lg" className="rounded-full">
          <a href={secondary.href} download={secondary.download}>
            <secondary.icon className="h-4 w-4" />
            {secondary.label}
          </a>
        </Button>
      </motion.div>
    </motion.div>
  );
}
