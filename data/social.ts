import { Mail } from "lucide-react";

import { GitHubIcon, LinkedInIcon } from "@/components/shared/brand-icons";
import { siteConfig } from "@/lib/site-config";
import type { SocialLink } from "@/types";

/**
 * Social / contact links rendered as icon buttons in the Navbar and Footer.
 * Sourced from `siteConfig`, which in turn resolves the public env vars.
 */
export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: siteConfig.links.github, icon: GitHubIcon },
  { label: "LinkedIn", href: siteConfig.links.linkedin, icon: LinkedInIcon },
  { label: "Email", href: `mailto:${siteConfig.links.email}`, icon: Mail },
];
