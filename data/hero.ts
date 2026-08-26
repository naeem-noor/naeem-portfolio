import {
  Clock,
  FlaskConical,
  Globe,
  ShieldCheck,
  Activity,
} from "lucide-react";

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
  name: "Naeem Noor Awan",
  role: "Cybersecurity Analyst | SOC Analyst",
  roleTags: ["Security Operations", "Threat Detection", "Incident Response"],
  headline: [
    [
      { text: "I don't just learn" },
      { text: " cybersecurity tools.", accent: true },
    ],
    [{ text: "I build,", accent: true }, { text: " monitor" }],
    [
      { text: "and investigate " },
      { text: "security environments.", accent: true },
    ],
  ],
  description:
    "5+ years of experience supporting enterprise technology environments across Pakistan, the UAE, and Australia. Now specializing in cybersecurity and Security Operations.",
  availability: {
    status: "Open to Opportunities",
    tags: ["Cybersecurity Analyst", "SOC Analyst"],
  },
};

export const heroCtas: HeroCtas = {
  primary: { label: "View Projects", href: "/projects" },
  secondary: {
    label: "Download Resume",
    href: siteConfig.resumeUrl,
    download: true,
  },
  outline: { label: "Contact Me", href: "/contact" },
};

export const heroStats: HeroStat[] = [
  { id: "experience", value: "5+", label: "Years in Technology", icon: Clock },
  { id: "labs", value: "05+", label: "Security Labs", icon: FlaskConical },
  {
    id: "countries",
    value: "PAK . AUS . UAE",
    label: "Global Experience",
    icon: Globe,
  },
  {
    id: "focus",
    value: "Cybersecurity",
    label: "Security Operations",
    icon: ShieldCheck,
  },
];

/**
 * GitHub / LinkedIn / Email come straight from the shared `data/social.ts`
 * (single source of truth for those links); Resume is Hero-specific, so
 * it's appended here rather than added to the global social link list.
 */
export const heroSocialLinks: SocialLink[] = [...socialLinks];

/** Lines rendered inside the illustration's terminal-window mockup. */
export const heroTerminalLines: HeroTerminalLine[] = [
  { kind: "command", text: "security-monitor --status" },
  { kind: "success", text: "SIEM ONLINE" },
  { kind: "success", text: "Threat Detection ACTIVE" },
  { kind: "success", text: "Log Monitoring ACTIVE" },
  { kind: "command", text: "security-alerts --latest" },
  { kind: "success", text: "HIGH: Brute Force Detected" },
];

/** Small metric cards floated over the terminal illustration. */
export const heroFloatingCards: HeroFloatingCard[] = [
  {
    id: "threat-detection",
    icon: ShieldCheck,
    label: "Threat Detection",
    value: "ACTIVE",
  },
  {
    id: "security-operations",
    icon: Activity,
    label: "Security Operations",
    value: "SOC",
  },
];
