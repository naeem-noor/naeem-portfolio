import {
  Activity,
  Bot,
  Boxes,
  CloudCog,
  GitBranch,
  CalendarDays,
  Layers,
  ServerCog,
  ShoppingCart,
  Network,
  Server,
} from "lucide-react";

import type { Project, RoadmapItem } from "@/types/projects";

/**
 * ⚠️ REVIEW BEFORE PUBLISHING
 * These are your three real, currently-in-progress projects — not the
 * illustrative example names from the Phase 7 brief ("Pakistan Farming
 * Platform", "Legal Document Generator", etc.), since I have no evidence
 * those are real projects of yours. Case-study content (challenges,
 * lessons learned, architecture notes) is written to be accurate to what's
 * been discussed, but double-check every section — especially `year` and
 * anything under `caseStudy` — before this goes live.
 */
export const projects: Project[] = [
  {
    id: "priceoye",
    slug: "priceoye",
    title: "PriceOye",
    summary:
      "A large-scale Pakistani e-commerce platform focused on smartphones, electronics, and accessories, combining real-time pricing, installment options, and a streamlined shopping experience.",
    description:
      "Analyzed as a production-grade e-commerce application, demonstrating scalable frontend architecture, product catalog management, modern checkout flows, and a customer-focused shopping experience.",
    category: ["E-Commerce", "Frontend", "Backend"],
    status: "Live",
    featured: true,
    year: "2022–2023",
    role: "Developer & DevOps Engineer",
    demo: "https://priceoye.pk/",
    thumbnail: undefined,
    coverImage: undefined,
    technologies: [
      "Vue.js",
      "Laravel",
      "QuickBooks",
      "Tailwind CSS",
      "REST APIs",
    ],
    icon: ShoppingCart,
  },
  {
    id: "currinda",
    slug: "currinda",
    title: "Currinda",
    summary:
      "A unified event and association management platform that brings registrations, abstract submissions, memberships, payments, websites, and mobile apps into a single ecosystem.",
    description:
      "A production-scale SaaS platform designed for conferences, associations, and professional organizations, emphasizing workflow automation, centralized administration, and an integrated user experience across the entire event lifecycle.",
    category: ["SaaS", "Frontend", "Backend"],
    status: "Live",
    featured: true,
    year: "2021–2022",
    role: "Technical Support Engineer ",
    demo: "https://www.currinda.com/",
    thumbnail: undefined,
    coverImage: undefined,
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
    ],
    icon: CalendarDays,
  },
  {
    id: "portfolio",
    slug: "portfolio",
    title: "This Portfolio",
    summary:
      "A production-grade personal site that doubles as a demonstration of modern frontend development, from a typed component architecture to a full container pipeline.",
    description:
      "Built to be judged on the same criteria a hiring engineer would use: typed architecture, a token-driven design system, CI, and a Docker deployment pipeline not just the visible page content.",
    category: ["Frontend"],
    status: "In Progress",
    featured: true,
    year: "2026",
    role: "Solo Developer",
    github: "https://github.com/naeem-noor/naeem-portfolio",
    thumbnail: undefined,
    coverImage: undefined,
    technologies: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS v4",
      "Docker",
      "Framer Motion",
    ],
    icon: Layers,
  },
  {
    id: "office-network-design",
    slug: "office-network-design",
    title: "Office Network Design & Subnetting Lab",
    summary:
      "Designed and configured a small office network in Cisco Packet Tracer, implementing subnetting, routing, and inter-department connectivity.",
    description:
      "A networking lab focused on planning and deploying a segmented office network using IPv4 subnetting, routing, and switching concepts. The project demonstrates practical knowledge of IP address management, network topology design, and device configuration.",
    category: ["Networking"],
    status: "Completed",
    featured: false,
    year: "2025",
    role: "Network Engineer",
    github: undefined,
    thumbnail: undefined,
    coverImage: undefined,
    technologies: [
      "Cisco Packet Tracer",
      "IPv4",
      "TCP/IP",
      "Subnetting",
      "Routing",
      "Switching",
    ],
    icon: Network,
  },
  {
    id: "windows-server-deployment",
    slug: "windows-server-deployment",
    title: "Windows Server Deployment Lab",
    summary:
      "Built a virtual Windows Server 2022 environment with Active Directory, DNS, DHCP, and Group Policy to simulate enterprise infrastructure management.",
    description:
      "A hands-on Windows Server lab focused on deploying and administering a domain-based network in a virtualized environment. The project covers Active Directory, centralized authentication, network services, and Group Policy management while demonstrating core Windows infrastructure administration skills.",
    category: ["Infrastructure", "Networking"],
    status: "Completed",
    featured: false,
    year: "2025",
    role: "System Administrator",
    github: undefined,
    thumbnail: undefined,
    coverImage: undefined,
    technologies: [
      "Windows Server 2022",
      "Oracle VirtualBox",
      "Active Directory",
      "DNS",
      "DHCP",
      "Group Policy",
      "Windows Networking",
    ],
    icon: Server,
  },
  {
    id: "active-directory-home-lab",
    slug: "active-directory-home-lab",
    title: "Active Directory Home Lab Environment",
    summary:
      "Designed and deployed a virtual Windows Server 2022 lab featuring Active Directory, DNS, DHCP, Group Policy, and PowerShell administration in a simulated enterprise environment.",
    description:
      "A home lab built to develop practical Windows infrastructure and system administration skills. The environment simulates a real enterprise network, covering domain services, centralized user management, policy enforcement, network services, and administrative automation using PowerShell.",
    category: ["Infrastructure"],
    status: "Completed",
    featured: true,
    year: "2026",
    role: "System Administrator",
    github: undefined,
    thumbnail: undefined,
    coverImage: undefined,
    technologies: [
      "Windows Server",
      "VirtualBox",
      "Active Directory",
      "DNS",
      "DHCP",
      "Group Policy",
      "PowerShell",
    ],
    icon: ServerCog,
  },
];

export const projectsCta = {
  heading:
    "Have a project in mind, or want to build something reliable together?",
  primary: { label: "Get In Touch", href: "/contact" },
  secondary: { label: "View Experience", href: "/experience" },
};

/**
 * Roadmap ideas for the Future Projects section — genuinely planned, not
 * started yet. Kept separate from `projects` since these aren't real
 * shipped work.
 */
export const futureProjects: RoadmapItem[] = [
  {
    id: "ai-platform",
    title: "AI Platform",
    description:
      "A more general-purpose AI-assisted tooling platform, building on what EduPilot's scoring engine started.",
    icon: Bot,
  },
  {
    id: "cloud-lab",
    title: "Cloud Infrastructure Lab",
    description:
      "A hands-on multi-cloud lab environment for practicing infrastructure-as-code patterns beyond a single provider.",
    icon: CloudCog,
  },
  {
    id: "k8s-homelab",
    title: "Kubernetes Home Lab",
    description:
      "A self-hosted Kubernetes cluster for learning orchestration, scaling, and cluster operations hands-on.",
    icon: Boxes,
  },
  {
    id: "aws-projects",
    title: "AWS Projects",
    description:
      "A series of focused AWS projects — VPC design, IAM least-privilege patterns, and serverless workflows.",
    icon: ServerCog,
  },
  {
    id: "monitoring-stack",
    title: "Monitoring Stack",
    description:
      "A self-hosted observability stack (metrics, logs, alerting) to practice production-grade monitoring.",
    icon: Activity,
  },
  {
    id: "cicd-templates",
    title: "CI/CD Templates",
    description:
      "Reusable GitHub Actions workflow templates for common deployment patterns across future projects.",
    icon: GitBranch,
  },
];
