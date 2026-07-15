import { PageHeader } from "@/components/shared/page-header";
import type { AboutHeaderData } from "@/components/sections/About/types";

export interface AboutHeaderProps {
  header: AboutHeaderData;
}

/**
 * About's page header. Thin wrapper around the shared `PageHeader` — now
 * that About is its own route (`/about`), this headline is the page's
 * `<h1>`.
 */
export function AboutHeader({ header }: AboutHeaderProps) {
  return <PageHeader label={header.label} headline={header.headline} />;
}
