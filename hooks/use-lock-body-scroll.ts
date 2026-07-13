"use client";

import { useEffect } from "react";

/**
 * Locks `<body>` scrolling while `locked` is true, restoring the previous
 * overflow value on unmount/unlock. Used by the mobile navigation drawer so
 * the page behind it can't scroll while it's open.
 */
export function useLockBodyScroll(locked: boolean): void {
  useEffect(() => {
    if (!locked) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [locked]);
}
