"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { EASE_OUT } from "@/lib/motion";

const expandVariant = {
  collapsed: {
    gridTemplateRows: "0fr",
    opacity: 0,
    transition: { duration: 0.35, ease: EASE_OUT },
  },
  expanded: {
    gridTemplateRows: "1fr",
    opacity: 1,
    transition: { duration: 0.35, ease: EASE_OUT },
  },
};

export interface ExpandPanelProps {
  isOpen: boolean;
  id?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Smoothly expands/collapses `children` via a `grid-template-rows: 0fr →
 * 1fr` animation rather than measuring pixel height — Framer Motion can't
 * animate to `auto`, and this avoids a `ResizeObserver`-based workaround.
 * Shared by `Responsibilities` (Experience) and `ProjectCaseStudy`
 * (Projects) — both needed the identical technique.
 */
export function ExpandPanel({
  isOpen,
  id,
  children,
  className,
}: ExpandPanelProps) {
  return (
    <motion.div
      id={id}
      initial="collapsed"
      animate={isOpen ? "expanded" : "collapsed"}
      variants={expandVariant}
      style={{ display: "grid" }}
      className={className ?? "overflow-hidden"}
    >
      <div className="min-h-0">{children}</div>
    </motion.div>
  );
}
