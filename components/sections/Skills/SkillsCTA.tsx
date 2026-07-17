"use client";

import { ArrowRight, FolderGit2 } from "lucide-react";

import { CtaBanner } from "@/components/shared/cta-banner";
import { skillsCta } from "@/content/skills";

/**
 * Skills' closing call-to-action. Thin wrapper around the shared
 * `CtaBanner` — same pattern as every other page's closing CTA.
 */
export function SkillsCTA() {
  return (
    <CtaBanner
      heading={skillsCta.heading}
      primary={{ ...skillsCta.primary, icon: FolderGit2 }}
      secondary={{ ...skillsCta.secondary, icon: ArrowRight }}
    />
  );
}
