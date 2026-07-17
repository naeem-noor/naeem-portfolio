import type { Metadata } from "next";

import { Projects } from "@/components/sections/Projects";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Projects",
  description:
    "Engineering case studies from Naeem Noor — an AI-assisted university discovery platform, a multi-tenant support-ticket automation SaaS, and this portfolio itself.",
  path: "/projects",
});

export default function ProjectsPage() {
  // return <Projects />;
  return (
    <div>
      <h1>Projects</h1>
      <p>Hello</p>
    </div>
  );
}
