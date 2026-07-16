"use client";

import { ArrowRight, Mail } from "lucide-react";

import { CtaBanner } from "@/components/shared/cta-banner";
import { projectsCta } from "@/content/projects";

/**
 * Projects' closing call-to-action. Thin wrapper around the shared
 * `CtaBanner` — same pattern as `AboutCTA`/`HomeCTA`/`ExperienceCTA`.
 */
export function ProjectsCTA() {
  return (
    <CtaBanner
      heading={projectsCta.heading}
      primary={{ ...projectsCta.primary, icon: Mail }}
      secondary={{ ...projectsCta.secondary, icon: ArrowRight }}
    />
  );
}
