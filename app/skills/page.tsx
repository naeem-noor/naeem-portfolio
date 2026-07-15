import type { Metadata } from "next";

import { Skills } from "@/components/sections/Skills";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Skills",
  description:
    "The tools and technologies Naeem Noor works with across cloud infrastructure, DevOps automation, and networking — AWS, Docker, Terraform, and more.",
  path: "/skills",
});

export default function SkillsPage() {
  return <Skills />;
}
