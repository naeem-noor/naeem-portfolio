import { Boxes, Clock, Cloud, FileText, FolderGit2, Globe } from "lucide-react";

import { socialLinks } from "@/data/social";
import { siteConfig } from "@/lib/site-config";
import type {
  HeroContentData,
  HeroCtas,
  HeroFloatingCard,
  HeroStat,
  HeroTerminalLine,
} from "@/components/sections/Hero/types";
import type { SocialLink } from "@/types";

export const heroContent: HeroContentData = {
  greeting: "Hi, I'm",
  name: "Naeem Noor",
  role: "Technical Support Engineer",
  roleTags: ["Infrastructure", "Cloud", "DevOps"],
  headline: [
    [{ text: "Building " }, { text: "Reliable Infrastructure,", accent: true }],
    [{ text: "Cloud Solutions", accent: true }, { text: " &" }],
    [{ text: "Modern " }, { text: "DevOps Workflows.", accent: true }],
  ],
  description:
    "5+ years supporting enterprise IT infrastructure across Pakistan, the UAE, and Australia. These days I'm moving deeper into cloud and DevOps — shipping production-grade infrastructure projects and automating the systems I used to support by hand.",
  availability: {
    status: "Open to Opportunities",
    tags: ["Cloud", "DevOps", "Infrastructure"],
  },
};

export const heroCtas: HeroCtas = {
  primary: { label: "View Projects", href: "#projects" },
  secondary: {
    label: "Download Resume",
    href: siteConfig.resumeUrl,
    download: true,
  },
  outline: { label: "Contact Me", href: "#contact" },
};

export const heroStats: HeroStat[] = [
  { id: "experience", value: "5+", label: "Years Experience", icon: Clock },
  { id: "projects", value: "20+", label: "Projects", icon: FolderGit2 },
  { id: "countries", value: "3", label: "Countries Worked", icon: Globe },
  { id: "focus", value: "Cloud", label: "DevOps", icon: Cloud },
];

/**
 * GitHub / LinkedIn / Email come straight from the shared `data/social.ts`
 * (single source of truth for those links); Resume is Hero-specific, so
 * it's appended here rather than added to the global social link list.
 */
export const heroSocialLinks: SocialLink[] = [
  ...socialLinks,
  { label: "Resume", href: siteConfig.resumeUrl, icon: FileText },
];

/** Lines rendered inside the illustration's terminal-window mockup. */
export const heroTerminalLines: HeroTerminalLine[] = [
  { kind: "command", text: "terraform apply" },
  { kind: "success", text: "Infrastructure provisioned" },
  { kind: "command", text: "docker compose up -d" },
  { kind: "success", text: "4 services healthy" },
];

/** Small metric cards floated over the terminal illustration. */
export const heroFloatingCards: HeroFloatingCard[] = [
  { id: "uptime", icon: Cloud, label: "Uptime", value: "99.98%" },
  { id: "containers", icon: Boxes, label: "Services", value: "Healthy" },
];
