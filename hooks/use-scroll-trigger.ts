"use client";

import { useEffect, useState } from "react";

/**
 * Returns `true` once the page has been scrolled past `threshold` pixels.
 *
 * Shared by the Navbar (which tightens/blurs itself on scroll) and
 * `ScrollToTop` (which only appears after the page has scrolled a bit), so
 * the scroll-listener logic exists in exactly one place.
 */
export function useScrollTrigger(threshold = 8): boolean {
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setTriggered(window.scrollY > threshold);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return triggered;
}
