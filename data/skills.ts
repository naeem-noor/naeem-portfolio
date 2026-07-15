import type { TechChip } from "@/components/sections/Skills/types";
import type { HeadlineLine } from "@/types";

export const skillsHeader = {
  label: "Skills",
  headline: [
    [{ text: "The Tools Behind" }],
    [{ text: "Reliable, ", accent: true }, { text: "Automated Systems." }],
  ] satisfies HeadlineLine[],
};

export const techFocus: TechChip[] = [
  { label: "AWS" },
  { label: "Docker" },
  { label: "Terraform" },
  { label: "GitHub Actions" },
  { label: "Linux" },
  { label: "Networking" },
  { label: "React" },
  { label: "Next.js" },
  { label: "TypeScript" },
  { label: "Kubernetes", status: "Learning" },
  { label: "Python" },
  { label: "Bash" },
];
