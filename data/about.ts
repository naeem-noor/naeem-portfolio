import {
  BadgeCheck,
  MapPin,
  Sparkles,
  TrendingUp,
  Workflow,
} from "lucide-react";

import type {
  AboutCtaData,
  AboutHeaderData,
  AboutSidebarData,
  StoryParagraph,
  ValueItem,
} from "@/components/sections/About/types";
import { siteConfig } from "@/lib/site-config";

export const aboutSidebar: AboutSidebarData = {
  experienceBadge: "5+ Years",
  location: "Based in Pakistan",
  availability: "Open to remote & relocation",
  techHighlights: ["AWS", "Docker", "Terraform", "Linux"],
};

export const aboutHeader: AboutHeaderData = {
  label: "About Me",
  headline: [
    [{ text: "Engineering Reliable Infrastructure," }],
    [
      { text: "Powering Modern IT with Networking " },
      { text: "Cloud & DevOps.", accent: true },
    ],
  ],
};

/**
 * Written to tell the story, not restate the resume — short paragraphs,
 * plain language, no filler adjectives.
 */
export const aboutStory: StoryParagraph[] = [
  "I started out fixing what other people's infrastructure broke laptops, networks, Active Directory, whatever an enterprise environment could throw at a support desk. Five years in, across Pakistan, the UAE, and Australia, that's given me a pretty unglamorous but honest education in how IT actually runs when a lot of people depend on it working.",
  "Some of that time was inside one of the busiest airports in the world, where downtime isn't an inconvenience, it's an incident. That environment taught me to think in terms of reliability first, features second a habit that's followed me into everything since.",
  "These days I'm pointing that same instinct at cloud and DevOps: Docker, Terraform, CI/CD pipelines, infrastructure as code. Less time keeping existing systems alive by hand, more time building the automation that keeps them alive on its own.",
];

export const values: ValueItem[] = [
  {
    id: "learning",
    title: "Continuous Learning",
    description: "Always improving skills and embracing new technologies.",
    icon: Sparkles,
  },
  {
    id: "reliability",
    title: "Reliability",
    description: "Build systems that are stable and dependable.",
    icon: BadgeCheck,
  },
  {
    id: "automation",
    title: "Automation",
    description: "Reduce manual work through smart automation.",
    icon: Workflow,
  },
  {
    id: "growth",
    title: "Growth Mindset",
    description: "Always learning, always improving.",
    icon: TrendingUp,
  },
];

export const aboutCta: AboutCtaData = {
  heading: "Interested in working together?",
  primary: { label: "View Projects", href: "/projects" },
  secondary: {
    label: "Download Resume",
    href: siteConfig.resumeUrl,
    download: true,
  },
};

/**
 * Rendered by `About.tsx` (a Server Component) next to the sidebar's
 * location line — re-exported here so the data layer stays the single
 * place that owns which icon goes with which piece of content.
 */
export const sidebarLocationIcon = MapPin;
