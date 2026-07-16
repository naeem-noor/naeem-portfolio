"use client";

import { useId, useState } from "react";

export interface Disclosure {
  isOpen: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void;
  /** A stable id for `aria-controls`/`aria-expanded` wiring. */
  panelId: string;
}

/**
 * Open/closed boolean state plus a stable id for `aria-controls` — shared
 * by any "View More"-style expandable panel (`Responsibilities`,
 * `ProjectCaseStudy`) so each doesn't reimplement the same three lines.
 */
export function useDisclosure(defaultOpen = false): Disclosure {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const panelId = useId();

  return {
    isOpen,
    toggle: () => setIsOpen((value) => !value),
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    panelId,
  };
}
