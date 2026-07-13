import Link from "next/link";
import { TerminalSquare } from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const SIZE_CLASSES = {
  sm: { icon: "h-5 w-5", text: "text-sm" },
  lg: { icon: "h-9 w-9", text: "text-2xl" },
} as const;

export interface LogoProps {
  className?: string;
  /** `sm` (default) for the Navbar/Footer, `lg` for the LoadingScreen. */
  size?: keyof typeof SIZE_CLASSES;
}

/**
 * Wordmark used across the Navbar, Footer, and LoadingScreen. Kept in
 * `components/shared` since it is reused across more than one layout region.
 */
export function Logo({ className, size = "sm" }: LogoProps) {
  const { icon, text } = SIZE_CLASSES[size];

  return (
    <Link
      href="/"
      className={cn(
        "text-foreground hover:text-primary flex items-center gap-2 font-semibold tracking-tight transition-colors",
        text,
        className,
      )}
    >
      <TerminalSquare className={cn("text-primary", icon)} aria-hidden="true" />
      <span>{siteConfig.shortName}</span>
    </Link>
  );
}
