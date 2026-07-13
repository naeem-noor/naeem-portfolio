"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

import { useScrollTrigger } from "@/hooks/use-scroll-trigger";

/**
 * Floating scroll-to-top button, bottom-right, that fades/scales in once the
 * page has been scrolled past 300px.
 */
export function ScrollToTop() {
  const visible = useScrollTrigger(300);

  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          onClick={handleClick}
          aria-label="Scroll to top"
          initial={{ opacity: 0, scale: 0.8, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 8 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="border-border bg-background/80 text-foreground hover:bg-surface-hover fixed right-6 bottom-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border shadow-lg backdrop-blur-md"
        >
          <ArrowUp className="h-4 w-4" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
