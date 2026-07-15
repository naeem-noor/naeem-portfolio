"use client";

import { usePathname } from "next/navigation";

/**
 * Returns whether `href` matches the current route, for highlighting the
 * active nav link. Exact match for `/`; prefix match for everything else so
 * a future nested route (e.g. `/projects/[slug]`) still highlights
 * `/projects` in the nav.
 */
export function useActiveRoute(href: string): boolean {
  const pathname = usePathname();

  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
