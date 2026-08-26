/**
 * Central site configuration.
 *
 * Every environment-dependent or content value used across the shell
 * (metadata, social links, contact info) is resolved here once, so no
 * component ever reads `process.env` directly. This keeps the source of
 * truth in one place and makes the values easy to mock in tests.
 */

const FALLBACK_SITE_URL = "http://localhost:3000";

export const siteConfig = {
  name: "Naeem Noor — Cybersecurity Analyst",
  shortName: "Naeem",
  title: "Naeem Noor | Cybersecurity Analyst",
  description:
    "Naeem Noor — Cybersecurity Analyst specializing in threat detection, Security Operations, incident response, and security monitoring.",
  url: process.env.NEXT_PUBLIC_SITE_URL || FALLBACK_SITE_URL,
  /** Served from `public/resume` — drop the actual file at this path. */
  resumeUrl: "/resume/naeem_noor.pdf",
  links: {
    github: process.env.NEXT_PUBLIC_GITHUB || "https://github.com",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN || "https://linkedin.com",
    email: process.env.NEXT_PUBLIC_EMAIL || "hello@example.com",
  },
} as const;

export type SiteConfig = typeof siteConfig;
