import type { Metadata } from "next";

import { About } from "@/components/sections/About";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "Naeem Noor's professional story — five years in enterprise IT support across Pakistan, the UAE, and Australia, now transitioning into Cloud & DevOps Engineering.",
  path: "/about",
});

export default function AboutPage() {
  return <About />;
}
