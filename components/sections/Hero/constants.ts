import type { Variants } from "framer-motion";

/**
 * Shared Framer Motion configuration for the Hero section.
 *
 * Centralized here so `HeroContent`, `HeroButtons`, and `HeroStats` animate
 * with the same easing/timing language instead of each hand-rolling its own
 * transition object. The easing curve mirrors `--ease-out` in
 * `styles/tokens.css`.
 */

export const HERO_EASE_OUT: [number, number, number, number] = [
  0.16, 1, 0.3, 1,
];

/** Fade + slide up, used for individual headline lines and text blocks. */
export const heroFadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: HERO_EASE_OUT },
  },
};

/** Wraps a group of children and staggers their `heroFadeUp` entrance. */
export function heroStaggerContainer(
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

/** Fade + slight scale used for the CTA buttons. */
export const heroButtonVariant: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: HERO_EASE_OUT },
  },
};

/** Fade-up used for the quick-stats cards, triggered on scroll into view. */
export const heroCardVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: HERO_EASE_OUT },
  },
};
