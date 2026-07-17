"use client";

import {
  animate,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

/**
 * Animates a number counting up from 0 to `value` once the returned ref
 * scrolls into view. Returns a Framer Motion `MotionValue<string>` ready
 * to bind to a `<motion.span>`'s text via `useTransform`, plus the ref to
 * attach to the element that should trigger it.
 */
export function useCountUp(value: number, duration = 1.2) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) =>
    Math.round(latest).toString(),
  );

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(motionValue, value, {
      duration,
      ease: "easeOut",
    });
    return () => controls.stop();
  }, [isInView, value, duration, motionValue]);

  return { ref, rounded };
}
