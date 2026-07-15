import type { Metadata } from "next";

import { Home } from "@/components/sections/Home";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createPageMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return <Home />;
}
