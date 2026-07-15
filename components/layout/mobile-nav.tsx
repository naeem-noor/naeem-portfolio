"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Download, X } from "lucide-react";
import { useEffect, useRef } from "react";

import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/layout/nav-link";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { primaryNav } from "@/data/navigation";
import { socialLinks } from "@/data/social";
import { useFocusTrap } from "@/hooks/use-focus-trap";
import { useLockBodyScroll } from "@/hooks/use-lock-body-scroll";
import { siteConfig } from "@/lib/site-config";

// The mobile drawer only surfaces GitHub/LinkedIn — email is already one tap
// away via the Contact section, so it's omitted here to keep the drawer lean.
const drawerSocialLinks = socialLinks.filter((link) => link.label !== "Email");

export interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

/**
 * Fullscreen slide-over navigation drawer for small screens.
 *
 * Handles the interaction contract a modal overlay is expected to honor:
 * Escape closes it, clicking the backdrop closes it, body scroll is locked
 * while it's open, and keyboard focus is trapped inside it.
 */
export function MobileNav({ open, onClose }: MobileNavProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useLockBodyScroll(open);
  useFocusTrap(panelRef, open);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="bg-background/95 fixed inset-0 z-[60] backdrop-blur-md md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onClick={onClose}
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            tabIndex={-1}
            className="flex h-full w-full flex-col outline-none"
            initial={{ x: "6%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "6%", opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex h-16 items-center justify-between px-6">
              <span className="text-muted-foreground text-sm font-medium">
                Menu
              </span>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Close menu"
                onClick={onClose}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <nav
              aria-label="Mobile"
              className="flex flex-1 flex-col justify-center gap-2 px-8"
            >
              {primaryNav.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 + index * 0.05 }}
                >
                  <NavLink
                    href={item.href}
                    onClick={onClose}
                    className="text-foreground hover:text-primary block py-3 text-3xl font-semibold tracking-tight transition-colors"
                    activeClassName="text-primary"
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <div className="flex flex-col gap-6 px-8 pb-10">
              <Button asChild size="lg" className="w-full rounded-full">
                <a
                  href={siteConfig.resumeUrl}
                  download
                  onClick={onClose}
                  aria-label="Download resume"
                >
                  <Download className="h-4 w-4" />
                  Resume
                </a>
              </Button>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {drawerSocialLinks.map(({ label, href, icon: Icon }) => (
                    <Link
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
