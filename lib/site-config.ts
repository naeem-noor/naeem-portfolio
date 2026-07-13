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
  name: "Naeem — Cloud & DevOps Engineer",
  shortName: "Naeem",
  title: "Naeem | Cloud & DevOps Engineer",
  description:
    "Portfolio of a Cloud & DevOps Engineer specializing in infrastructure automation, containerization, and reliable, scalable systems.",
  url: process.env.NEXT_PUBLIC_SITE_URL || FALLBACK_SITE_URL,
  /** Served from `public/resume` — drop the actual file at this path. */
  resumeUrl: "/resume/resume.pdf",
  links: {
    github: process.env.NEXT_PUBLIC_GITHUB || "https://github.com",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN || "https://linkedin.com",
    email: process.env.NEXT_PUBLIC_EMAIL || "hello@example.com",
  },
} as const;

export type SiteConfig = typeof siteConfig;
