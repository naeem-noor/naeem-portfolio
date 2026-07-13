"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  heroButtonVariant,
  heroStaggerContainer,
} from "@/components/sections/Hero/constants";
import type { HeroCtas } from "@/components/sections/Hero/types";

export interface HeroButtonsProps {
  ctas: HeroCtas;
}

/**
 * The three Hero call-to-action buttons. A client component: the staggered
 * entrance and hover/tap micro-interactions both require Framer Motion.
 */
export function HeroButtons({ ctas }: HeroButtonsProps) {
  return (
    <motion.div
      variants={heroStaggerContainer(0.08, 0.4)}
      initial="hidden"
      animate="visible"
      className="flex flex-wrap items-center gap-3"
    >
      <motion.div
        variants={heroButtonVariant}
        whileHover={{ y: -2 }}
        whileTap={{ y: 0, scale: 0.98 }}
      >
        <Button asChild size="lg" className="rounded-full">
          <Link href={ctas.primary.href}>
            {ctas.primary.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </motion.div>

      <motion.div
        variants={heroButtonVariant}
        whileHover={{ y: -2 }}
        whileTap={{ y: 0, scale: 0.98 }}
      >
        <Button asChild variant="outline" size="lg" className="rounded-full">
          <a
            href={ctas.secondary.href}
            download={ctas.secondary.download}
            aria-label={ctas.secondary.label}
          >
            <Download className="h-4 w-4" />
            {ctas.secondary.label}
          </a>
        </Button>
      </motion.div>

      <motion.div
        variants={heroButtonVariant}
        whileHover={{ y: -2 }}
        whileTap={{ y: 0, scale: 0.98 }}
      >
        <Button asChild variant="ghost" size="lg" className="rounded-full">
          <Link href={ctas.outline.href}>
            <Mail className="h-4 w-4" />
            {ctas.outline.label}
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  );
}
