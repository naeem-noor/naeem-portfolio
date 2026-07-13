"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { Logo } from "@/components/shared/logo";

const SESSION_KEY = "portfolio:has-loaded";
const VISIBLE_DURATION_MS = 800;

/**
 * A brief, elegant loading screen shown once per browser session, on the
 * very first page load — not on subsequent client-side navigations. No
 * spinner: it's just the wordmark fading in, holding briefly, then fading
 * out into the app shell.
 */
export function LoadingScreen() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasLoaded = window.sessionStorage.getItem(SESSION_KEY);
    if (hasLoaded) return;

    setVisible(true);
    window.sessionStorage.setItem(SESSION_KEY, "true");

    const timer = window.setTimeout(
      () => setVisible(false),
      VISIBLE_DURATION_MS,
    );
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          role="status"
          aria-label="Loading"
          className="bg-background fixed inset-0 z-[100] flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Logo size="lg" />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
