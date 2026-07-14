"use client";

import { motion } from "framer-motion";

import {
  fadeUp,
  staggerContainer,
} from "@/components/sections/About/constants";
import type { TechChip } from "@/components/sections/About/types";

export interface TechnologyFocusProps {
  chips: TechChip[];
}

/**
 * A wrapping cloud of technology chips. Client-only for the
 * scroll-triggered stagger — the chips themselves are static text, no
 * icons, so this stays lightweight.
 */
export function TechnologyFocus({ chips }: TechnologyFocusProps) {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-foreground text-sm font-semibold tracking-wide uppercase">
        Technology Focus
      </h3>

      <motion.ul
        variants={staggerContainer(0.04, 0)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="flex flex-wrap gap-2.5"
      >
        {chips.map((chip) => (
          <motion.li key={chip.label} variants={fadeUp}>
            <span className="border-border bg-surface/60 hover:border-border-strong hover:bg-surface text-foreground inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-colors">
              {chip.label}
              {chip.status ? (
                <span className="bg-primary/10 text-primary rounded-full px-1.5 py-0.5 text-[10px] font-semibold tracking-wide uppercase">
                  {chip.status}
                </span>
              ) : null}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
