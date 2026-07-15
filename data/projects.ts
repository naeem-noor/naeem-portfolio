import { GraduationCap, Headset, Layers } from "lucide-react";

import type { IconComponent } from "@/types";

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  status: string;
  href: string;
  icon: IconComponent;
  /** Shown only on the full /projects page, not the Home preview. */
  featured?: boolean;
}

/**
 * Real, currently in-progress work — not filler placeholder projects.
 * Descriptions stay high-level since detailed case studies are a later
 * phase; this is what's genuinely underway right now.
 */
export const projects: Project[] = [
  {
    id: "edupilot",
    title: "EduPilot",
    description:
      "An AI-assisted university discovery platform that helps students find realistic degree matches based on GPA, IELTS score, budget, and career goals across five countries.",
    tags: ["React", "Supabase", "Rule-Based Scoring"],
    status: "In Development",
    href: "https://github.com/naeem-noor",
    icon: GraduationCap,
    featured: true,
  },
  {
    id: "support-saas",
    title: "AI Support Ticket Automation",
    description:
      "A multi-tenant SaaS foundation for support-ticket automation — organization management, member invitations, and role-based access control, built on a fully tested, typed foundation.",
    tags: ["FastAPI", "Next.js", "PostgreSQL", "Docker"],
    status: "Phase 1 Complete",
    href: "https://github.com/naeem-noor",
    icon: Headset,
    featured: true,
  },
  {
    id: "portfolio",
    title: "This Portfolio",
    description:
      "A production-grade personal site built to double as a demonstration of modern frontend engineering: typed architecture, a token-driven design system, and a full container pipeline.",
    tags: ["Next.js 15", "TypeScript", "Tailwind v4", "Docker"],
    status: "In Development",
    href: "https://github.com/naeem-noor/naeem-portfolio",
    icon: Layers,
    featured: true,
  },
];
