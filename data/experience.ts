import {
  Activity,
  Clock,
  Cloud,
  Globe,
  ShieldCheck,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";

import type {
  SummaryStat,
  WorkExperience,
} from "@/components/sections/Experience/types";
import type { HeadlineLine } from "@/types";

export const experienceHeader = {
  label: "Professional Experience",
  headline: [
    [{ text: "Building Enterprise" }],
    [
      { text: "Infrastructure Through " },
      { text: "Experience.", accent: true },
    ],
  ] satisfies HeadlineLine[],
  intro:
    "Five years across enterprise IT support, airport-scale infrastructure operations, and remote SaaS environments — each role adding another layer to how I think about reliability, before pointing that experience at cloud and DevOps.",
};

export const experienceSummary: SummaryStat[] = [
  { id: "years", value: "5+", label: "Years Experience", icon: Clock },
  { id: "countries", value: "3", label: "Countries", icon: Globe },
  {
    id: "orgs",
    value: "4",
    label: "Enterprise Organizations",
    icon: Users,
  },
  { id: "domain", value: "Cloud", label: "Core Domain", icon: Cloud },
];

export const experienceCta = {
  heading: "Want to see where that experience is headed next?",
  primary: { label: "View Skills", href: "/skills" },
  secondary: { label: "Get In Touch", href: "/contact" },
};

/**
 * ⚠️ REVIEW BEFORE PUBLISHING
 * Company names and locations are drawn from prior conversation context and
 * should be accurate. Everything else — exact employment dates,
 * employment type, specific responsibilities, and achievements — is
 * written to be plausible and honest in *tone*, but is NOT verified fact.
 * Replace every `duration` and double-check each bullet against your
 * actual record before this goes live. Listed most-recent-first.
 */
export const workExperience: WorkExperience[] = [
  {
    id: "hader",
    company: "Hader Security & Communications Systems",
    location: "Abu Dhabi",
    country: "UAE",
    employmentType: "Full-time", // TODO: confirm
    role: "Information Technology Support Technician",
    duration: "March 2026 | Present", // TODO: confirm
    environment: "Enterprise Security & Tele Communications",
    summary:
      "Expanded into broader enterprise infrastructure networking, security systems, and tele communications equipment across a larger, more complex environment than earlier roles.",
    responsibilities: [
      "Provided IT support across enterprise networking and communications infrastructure",
      "Maintained security systems and access control equipment",
      "Diagnosed and resolved infrastructure issues across multiple sites",
      "Documented network configurations and support procedures",
    ],
    achievements: [
      {
        text: "Supported mission-critical security infrastructure",
        icon: ShieldCheck,
      },
      { text: "Improved internal documentation practices", icon: TrendingUp },
    ],
    technologies: [
      "Windows Server",
      "Networking",
      "Active Directory",
      "Security Systems",
      "Martrola Radios",
      "Tele Communications Equipment",
      "Radio Configuration and Troubleshooting",
    ],
    current: true,
  },
  {
    id: "transguard",
    company: "Transguard Group | Emirates Engineering",
    location: "Dubai International Airport",
    country: "UAE",
    employmentType: "Full-time", // TODO: confirm
    role: "IT Administrative Assistant",
    duration: "January 2024 | February 2026", // TODO: confirm
    environment: "Airport Operations",
    summary:
      "Worked inside one of the busiest airports in the world, where downtime isn't an inconvenience it's an incident. That environment taught reliability-first thinking above everything else.",
    responsibilities: [
      "Delivered technical support across mission-critical airport IT systems",
      "Responded to and resolved incidents under tight operational time pressure",
      "Coordinated with cross-functional teams to minimize service disruption",
      "Maintained end-user hardware, software, and network connectivity airport-wide",
    ],
    achievements: [
      {
        text: "Supported enterprise-scale, mission-critical infrastructure",
        icon: Activity,
      },
      {
        text: "Maintained service reliability under high operational pressure",
        icon: ShieldCheck,
      },
    ],
    technologies: [
      "Windows",
      "Networking",
      "Active Directory",
      "Jira",
      "Microsoft 365",
    ],
  },
  {
    id: "priceoye",
    company: "PriceOye Technologies",
    location: "Islamabad",
    country: "Pakistan",
    employmentType: "Full-time", // TODO: confirm
    role: "IT Support & Software Development",
    duration: "September 2022 | December 2023", // TODO: confirm
    environment: "E-Commerce Enterprise IT",
    summary:
      "Where it started fixing what other people's infrastructure broke: laptops, networks, Active Directory, whatever an E-Commerce enterprise environment could throw at a support desk, while building early software development skills alongside it.",
    responsibilities: [
      "Provided first- and second-line IT support across the organization",
      "Maintained Windows and Active Directory environments",
      "Assisted with internal software development tasks",
      "Built foundational troubleshooting and documentation habits",
    ],
    achievements: [
      {
        text: "Built the technical foundation for everything since",
        icon: TrendingUp,
      },
    ],
    technologies: [
      "Docker",
      "Windows",
      "Gitlab",
      "Git",
      "QuickBooks",
      "API integration",
      "Vue.js",
      "JavaScript",
      "PHP",
    ],
  },
  {
    id: "currinda",
    company: "Currinda Pty Ltd",
    location: "Melbourne (Remote)",
    country: "Australia",
    employmentType: "Remote", // TODO: confirm
    role: "Technical Support Engineer",
    duration: "June 2021 | February 2022", // TODO: confirm
    environment: "Remote SaaS Operations",
    summary:
      "Supported SaaS products remotely, collaborating with international engineering teams and adjusting to a fully distributed workflow a different discipline from on-site enterprise support.",
    responsibilities: [
      "Provided remote technical support for SaaS product users",
      "Collaborated with engineering teams across time zones",
      "Triaged and escalated product issues through internal tooling",
      "Contributed to internal support documentation and processes",
    ],
    achievements: [
      {
        text: "Adapted quickly to a fully distributed, async-first workflow",
        icon: Workflow,
      },
      { text: "Strengthened cross-team communication practices", icon: Users },
    ],
    technologies: [
      "SaaS Platforms",
      "Ticketing Systems",
      "Remote Collaboration Tools",
      "Docker",
      "Bitbucket",
      "Jira",
      "API Integration",
    ],
  },
];
