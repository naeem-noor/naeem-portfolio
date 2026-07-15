"use client";

import { useState } from "react";
import { Download, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { MobileNav } from "@/components/layout/mobile-nav";
import { NavLink } from "@/components/layout/nav-link";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Logo } from "@/components/shared/logo";
import { primaryNav } from "@/data/navigation";
import { useScrollTrigger } from "@/hooks/use-scroll-trigger";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

/**
 * Sticky, glassmorphic primary navigation.
 *
 * Nav items are real App Router routes (`/about`, `/projects`, etc.) — the
 * active route is highlighted via `NavLink`. The shell itself (desktop
 * links, mobile drawer, resume CTA, theme toggle, scroll reactivity) is
 * production-ready; each route's own page content is defined under `app/`.
 */
export function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const scrolled = useScrollTrigger(8);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
        <Container
          className={cn(
            "flex h-14 items-center justify-between rounded-full border px-3 transition-all duration-300 md:px-3",
            scrolled
              ? "border-border bg-background/70 shadow-lg backdrop-blur-xl"
              : "border-transparent bg-transparent shadow-none backdrop-blur-none",
          )}
        >
          <Logo className="pl-2" />

          <nav
            aria-label="Primary"
            className="hidden items-center gap-7 lg:flex"
          >
            {primaryNav.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
                activeClassName="text-foreground"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="hidden rounded-full lg:inline-flex"
            >
              <a
                href={siteConfig.resumeUrl}
                download
                aria-label="Download resume"
              >
                <Download className="h-4 w-4" />
                Resume
              </a>
            </Button>

            <ThemeToggle />

            <Button
              variant="ghost"
              size="icon"
              className="rounded-full lg:hidden"
              aria-label="Open menu"
              aria-expanded={isMobileOpen}
              aria-haspopup="dialog"
              onClick={() => setIsMobileOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </Container>
      </header>

      <MobileNav open={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  );
}
