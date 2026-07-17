"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo } from "react";
import { CertificationCard } from "@/components/sections/Certifications/CertificationCard";
import { certifications } from "@/content/certifications";

export interface CertificationGridProps {
  /** "featured" renders only `certifications.filter(c => c.featured)`;
   * "planned" renders only status === "Planned" (Future Certification
   * Goals) — both with no filter UI. Defaults to the full filterable
   * grid. */
  variant?: "featured" | "planned";
}

/**
 * The certification grid. In its default ("all") variant, owns the
 * selected filter (a status or a category) and re-renders with a smooth
 * fade/stagger whenever it changes. In its "featured" variant, renders
 * only the curated featured set with no filter bar.
 *
 * Imports `certifications` directly rather than via a prop — each
 * certification carries an icon component reference, which can't cross
 * the Server-to-Client prop boundary (same reasoning throughout this app
 * since Phase 3's `HeroStats`).
 */
export function CertificationGrid({ variant }: CertificationGridProps) {
  const filtered = useMemo(() => {
    if (variant === "featured") {
      return certifications.filter((cert) => cert.featured);
    }
    if (variant === "planned") {
      return certifications.filter((cert) => cert.status === "Planned");
    }
    return certifications;
  }, [variant]);

  return (
    <div className="flex flex-col gap-8">
      <motion.div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            filtered.map((certification) => (
              <motion.div
                key={certification.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <CertificationCard
                  certification={certification}
                  featured={variant === "featured"}
                />
              </motion.div>
            ))
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-muted-foreground col-span-full py-10 text-center text-sm"
            >
              Nothing in this category yet.
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
