import type { Variants } from "framer-motion";

/**
 * Shared Framer Motion primitives, reused across page sections (Hero,
 * About, and whatever follows) so they all animate with the same
 * easing/timing language instead of each section hand-rolling its own.
 * The easing curve mirrors `--ease-out` in `styles/tokens.css`.
 *
 * Section-specific variants (e.g. a headline-only effect unique to one
 * section) belong in that section's own `constants.ts`, not here — this
 * file is only for genuinely shared building blocks.
 */

export const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Fade + slide up, used for individual text blocks and headline lines. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

/** Wraps a group of children and staggers their entrance. */
export function staggerContainer(
  staggerChildren = 0.12,
  delayChildren = 0,
): Variants {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren, delayChildren },
    },
  };
}

/** Fade + slight scale, used for buttons and other interactive controls. */
export const buttonFadeUp: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: EASE_OUT },
  },
};

/** Fade-up used for cards, typically triggered on scroll into view. */
export const cardFadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
};
