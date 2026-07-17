import type { Variants } from "framer-motion";

import { EASE_OUT } from "@/lib/motion";

export {
  EASE_OUT,
  buttonFadeUp,
  cardFadeUp,
  fadeUp,
  staggerContainer,
} from "@/lib/motion";

/** The connecting line draws itself in top-to-bottom as it scrolls into
 * view — same technique as Experience's timeline. */
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
