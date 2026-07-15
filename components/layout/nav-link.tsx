"use client";

import Link from "next/link";
import type { ReactNode } from "react";

import { useActiveRoute } from "@/hooks/use-active-route";
import { cn } from "@/lib/utils";

export interface NavLinkProps {
  href: string;
  className?: string;
  activeClassName?: string;
  onClick?: () => void;
  children: ReactNode;
}

/**
 * A `next/link` that knows whether it points at the current route, so both
 * the desktop Navbar and the mobile drawer can highlight the active page
 * without duplicating the pathname-comparison logic.
 *
 * `className` is the link's base styling, always applied; `activeClassName`
 * is layered on top only for the current route. Deliberately has no
 * hardcoded "inactive" default — the desktop nav and the mobile drawer want
 * different base looks (muted vs. full-strength text), so the caller owns
 * both states explicitly.
 */
export function NavLink({
  href,
  className,
  activeClassName,
  onClick,
  children,
}: NavLinkProps) {
  const isActive = useActiveRoute(href);

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={cn(className, isActive && activeClassName)}
    >
      {children}
    </Link>
  );
}
