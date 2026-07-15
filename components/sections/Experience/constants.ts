import type { Variants } from "framer-motion";

import { EASE_OUT } from "@/lib/motion";

export { EASE_OUT, cardFadeUp, fadeUp, staggerContainer } from "@/lib/motion";

/**
 * The connecting line of the timeline draws itself in from top to bottom as
 * it scrolls into view.
 */
export const timelineLineVariant: Variants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 1.2, ease: EASE_OUT },
  },
};

/** Fade + slide in from the left, used for each timeline node + card. */
export const timelineItemVariant: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
};

/**
 * Smoothly expands/collapses the hidden responsibilities behind "View
 * More" — animates `height`/`opacity` via `grid-template-rows` so it works
 * without measuring the content's pixel height up front.
 */
export const expandVariant: Variants = {
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
