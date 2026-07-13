"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export interface PageTransitionProps {
  children: ReactNode;
}

/**
 * Wraps route content in a subtle fade + slide transition on navigation.
 *
 * The current portfolio is a single page of in-page anchors, so this has
 * little to animate yet — it exists as shell plumbing for future routes
 * (e.g. a dedicated `/projects/[slug]` page) added in a later phase.
 */
export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
