"use client";

import { Download, FolderGit2 } from "lucide-react";

import { CtaBanner } from "@/components/shared/cta-banner";
import type { AboutCtaData } from "@/components/sections/About/types";

export interface AboutCTAProps {
  cta: AboutCtaData;
}

/**
 * About's closing call-to-action. Thin wrapper around the shared
 * `CtaBanner` — supplies About-specific copy and icons.
 */
export function AboutCTA({ cta }: AboutCTAProps) {
  return (
    <CtaBanner
      heading={cta.heading}
      primary={{ ...cta.primary, icon: FolderGit2 }}
      secondary={{ ...cta.secondary, icon: Download }}
    />
  );
}
