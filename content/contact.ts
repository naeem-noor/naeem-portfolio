import {
  Cloud,
  Headset,
  Mail,
  MapPin,
  Network,
  Server,
  Sparkles,
  Workflow,
} from "lucide-react";

import { GitHubIcon, LinkedInIcon } from "@/components/shared/brand-icons";
import { siteConfig } from "@/lib/site-config";
import type { HeadlineLine } from "@/types";
import type { AvailabilityContent, ContactInfoItem } from "@/types/contact";

export const contactHeader = {
  label: "Get In Touch",
  headline: [
    [{ text: "Let's Build Something" }],
    [{ text: "Reliable.", accent: true }],
  ] satisfies HeadlineLine[],
  description:
    "Open to cloud engineering and DevOps roles, infrastructure work, and IT support positions and genuinely interested in technical collaboration, freelance projects, and consulting outside of that too. If it involves building or maintaining systems people actually depend on, I want to hear about it.",
};

/**
 * Contact Information cards. Sourced entirely from `siteConfig` — no
 * contact detail is hardcoded here or in any component.
 */
export const contactInfo: ContactInfoItem[] = [
  {
    id: "email",
    label: "Email",
    value: siteConfig.links.email,
    href: `mailto:${siteConfig.links.email}`,
    icon: Mail,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: siteConfig.links.linkedin,
    icon: LinkedInIcon,
  },
  {
    id: "github",
    label: "GitHub",
    value: "View my work",
    href: siteConfig.links.github,
    icon: GitHubIcon,
  },
  {
    id: "location",
    label: "Location",
    value: "Pakistan",
    icon: MapPin,
  },
];

export const availability: AvailabilityContent = {
  status: "Open to Opportunities",
  description:
    "Actively looking for roles and projects across the areas below — remote-friendly, and open to relocation for the right opportunity.",
  areas: [
    { id: "cloud", label: "Cloud Engineering", icon: Cloud },
    { id: "devops", label: "DevOps", icon: Workflow },
    { id: "infrastructure", label: "Infrastructure", icon: Server },
    { id: "it-support", label: "IT Support", icon: Headset },
    { id: "network", label: "Network Engineering", icon: Network },
  ],
};

export const resumeCtaContent = {
  heading: "Prefer the short version?",
  description:
    "Download the resume for a quick overview of experience and skills.",
  icon: Sparkles,
};
