import type { Metadata } from "next";

import { Projects } from "@/components/sections/Projects";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Projects",
  description:
    "Projects Naeem Noor is building, from an AI-assisted university discovery platform to a multi-tenant support-ticket automation SaaS.",
  path: "/projects",
});

export default function ProjectsPage() {
  return <Projects />;
}
