"use client";

import { Download, Mail } from "lucide-react";

import { CtaBanner } from "@/components/shared/cta-banner";
import { homeCta } from "@/data/home";

/**
 * Home's closing call-to-action. Thin wrapper around the shared
 * `CtaBanner` — same pattern as `AboutCTA`, different copy and icons.
 */
export function HomeCTA() {
  return (
    <CtaBanner
      heading={homeCta.heading}
      primary={{ ...homeCta.primary, icon: Mail }}
      secondary={{ ...homeCta.secondary, icon: Download }}
    />
  );
}
