"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import type { LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useMounted } from "@/hooks/use-mounted";
import type { ThemeMode } from "@/types";

const THEME_ORDER: ThemeMode[] = ["light", "dark", "system"];

const THEME_ICON: Record<ThemeMode, LucideIcon> = {
  light: Sun,
  dark: Moon,
  system: Monitor,
};

const THEME_LABEL: Record<ThemeMode, string> = {
  light: "Light",
  dark: "Dark",
  system: "System",
};

/**
 * Cycles the color scheme through light -> dark -> system on each click.
 *
 * Rendering is gated behind `useMounted` so the server-rendered icon always
 * matches the first client render, preventing a hydration mismatch (the
 * server has no knowledge of the persisted theme preference).
 */
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();

  const current = (theme as ThemeMode | undefined) ?? "dark";
  const Icon = THEME_ICON[current];

  function handleClick() {
    const currentIndex = THEME_ORDER.indexOf(current);
    const next = THEME_ORDER[(currentIndex + 1) % THEME_ORDER.length] ?? "dark";
    setTheme(next);
  }

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" aria-label="Toggle theme" disabled>
        <Sun className="h-4 w-4" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleClick}
      aria-label={`Switch theme (current: ${THEME_LABEL[current]})`}
      title={`Theme: ${THEME_LABEL[current]}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={current}
          initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="flex"
        >
          <Icon className="h-4 w-4" />
        </motion.span>
      </AnimatePresence>
    </Button>
  );
}
