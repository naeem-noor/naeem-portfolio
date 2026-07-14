import {
  buttonFadeUp,
  cardFadeUp,
  EASE_OUT,
  fadeUp,
  staggerContainer,
} from "@/lib/motion";

/**
 * Hero-specific Framer Motion aliases.
 *
 * These re-export the shared primitives from `lib/motion.ts` under the
 * Hero's existing names so `HeroContent`, `HeroButtons`, `HeroStats`, and
 * `HeroIllustration` don't need to change their imports. Add a genuinely
 * Hero-only variant here if one is ever needed — shared building blocks
 * belong in `lib/motion.ts`, not duplicated per section.
 */

export const HERO_EASE_OUT = EASE_OUT;
export const heroFadeUp = fadeUp;
export const heroStaggerContainer = staggerContainer;
export const heroButtonVariant = buttonFadeUp;
export const heroCardVariant = cardFadeUp;
