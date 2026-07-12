import Link from "next/link";
import { TerminalSquare } from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export interface LogoProps {
  className?: string;
}

/**
 * Wordmark used in both the Navbar and Footer. Kept in `components/shared`
 * since it is reused across more than one layout region.
 */
export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "text-foreground hover:text-primary flex items-center gap-2 text-sm font-semibold tracking-tight transition-colors",
        className,
      )}
    >
      <TerminalSquare className="text-primary h-5 w-5" aria-hidden="true" />
      <span>{siteConfig.shortName}</span>
    </Link>
  );
}
