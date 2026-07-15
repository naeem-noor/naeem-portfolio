import type { Metadata } from "next";

import { Experience } from "@/components/sections/Experience";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Experience",
  description:
    "A chronological look at Naeem Noor's professional journey across enterprise IT, airport infrastructure, and remote SaaS support, now heading into Cloud & DevOps.",
  path: "/experience",
});

export default function ExperiencePage() {
  return <Experience />;
}
