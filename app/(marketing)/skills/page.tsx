import type { Metadata } from "next";

import { Skills } from "@/components/sections/Skills";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Skills",
  description:
    "Naeem Noor's technology stack — enterprise infrastructure and networking expertise extending into cloud platforms, DevOps automation, and modern web development.",
  path: "/skills",
});

export default function SkillsPage() {
  return <Skills />;
}
