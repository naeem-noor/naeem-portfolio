"use client";

import { ArrowRight, Layers } from "lucide-react";

import { CtaBanner } from "@/components/shared/cta-banner";
import { experienceCta } from "@/data/experience";

/**
 * Experience's closing call-to-action. Thin wrapper around the shared
 * `CtaBanner` — same pattern as `AboutCTA`/`HomeCTA`, different copy.
 */
export function ExperienceCTA() {
  return (
    <CtaBanner
      heading={experienceCta.heading}
      primary={{ ...experienceCta.primary, icon: Layers }}
      secondary={{ ...experienceCta.secondary, icon: ArrowRight }}
    />
  );
}
