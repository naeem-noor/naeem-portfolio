"use client";

import { ArrowRight, Download } from "lucide-react";

import { CtaBanner } from "@/components/shared/cta-banner";
import { certificationsCta } from "@/content/certifications";
import { siteConfig } from "@/lib/site-config";

/**
 * Certifications' closing CTA — leads with Download Resume per the page
 * structure's explicit "Download Resume CTA" section, unlike other pages'
 * closing banners which lead with a different primary action.
 */
export function CertificationCTA() {
  return (
    <CtaBanner
      heading={certificationsCta.heading}
      primary={{
        label: "Download Resume",
        href: siteConfig.resumeUrl,
        download: true,
        icon: Download,
      }}
      secondary={{ ...certificationsCta.secondary, icon: ArrowRight }}
    />
  );
}
