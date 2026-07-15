import type { Metadata } from "next";

import { siteConfig } from "@/lib/site-config";

export interface PageMetadataInput {
  /** Rendered through the root layout's title template, e.g. "About | Naeem". */
  title: string;
  description: string;
  /** Route path, e.g. "/about". Used for the canonical URL and OG url. */
  path: string;
}

/**
 * Builds a complete per-page `Metadata` object: title, description,
 * canonical URL, and OpenGraph/Twitter cards. Next.js overwrites (rather
 * than deep-merges) object-typed metadata fields like `openGraph` when a
 * page defines its own, so each route needs a full object rather than a
 * partial override — centralized here so that boilerplate isn't repeated
 * across every `app/**\/page.tsx`.
 */
export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  const url = path === "/" ? siteConfig.url : `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      url,
      title: `${title} | ${siteConfig.shortName}`,
      description,
      siteName: siteConfig.shortName,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.shortName}`,
      description,
    },
  };
}
