import type { Variants } from "framer-motion";

import { EASE_OUT } from "@/lib/motion";

export {
  EASE_OUT,
  buttonFadeUp,
  cardFadeUp,
  fadeUp,
  staggerContainer,
} from "@/lib/motion";

/**
 * The connecting line of the journey timeline draws itself in from top to
 * bottom as it scrolls into view. Unique to `JourneyTimeline`, so it lives
 * here rather than in the shared `lib/motion.ts`.
 */
export const timelineLineVariant: Variants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 1.1, ease: EASE_OUT },
  },
};

/** Fade + slide in from the left, used for each timeline item's dot + card. */
export const timelineItemVariant: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
};
