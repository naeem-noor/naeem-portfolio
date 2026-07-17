import {
  AppWindow,
  Atom,
  Boxes,
  Braces,
  Cloud,
  CloudCog,
  Container,
  Database,
  FileCode,
  GitBranch,
  GitCommit,
  Globe,
  HardDrive,
  LayoutTemplate,
  Route,
  Send,
  Server,
  Settings2,
  Share2,
  Shield,
  ShieldAlert,
  ShieldCheck,
  SquareCode,
  SquareTerminal,
  Terminal,
  TerminalSquare,
  Triangle,
  Waypoints,
  Workflow,
} from "lucide-react";

import { GitHubIcon } from "@/components/shared/brand-icons";
import type { HeadlineLine } from "@/types";
import type {
  LearningRoadmapItem,
  OverviewStat,
  Skill,
  WorkflowStep,
} from "@/types/skills";

export const skillsHeader = {
  label: "Skills",
  headline: [
    [{ text: "Technology Stack &" }],
    [{ text: "Engineering ", accent: true }, { text: "Expertise." }],
  ] satisfies HeadlineLine[],
  description:
    "Five years across enterprise IT, networking, and infrastructure support, now extending into cloud platforms, DevOps automation, and modern web development.",
};

export const skillsOverview: OverviewStat[] = [
  {
    id: "years",
    type: "count",
    value: 5,
    suffix: "+",
    label: "Years Experience",
  },
  {
    id: "technologies",
    type: "count",
    value: 35,
    suffix: "+",
    label: "Technologies",
  },
  {
    id: "domain-1",
    type: "text",
    value: "Enterprise",
    label: "Infrastructure",
  },
  { id: "domain-2", type: "text", value: "Cloud", label: "DevOps Journey" },
];

/**
 * ⚠️ REVIEW BEFORE PUBLISHING
 * Every technology listed here is genuinely part of the background
 * established across earlier phases (enterprise IT support, networking,
 * and the current cloud/DevOps transition). Proficiency `level` and
 * `years` are reasonable estimates, not precise verified figures —
 * double-check both before this goes live.
 */
export const skills: Skill[] = [
  // Cloud
  {
    id: "aws",
    name: "AWS",
    category: "Cloud",
    level: "Intermediate",
    description:
      "Core AWS services for hosting and deploying infrastructure-as-code-managed workloads.",
    years: 1,
    icon: Cloud,
    featured: true,
    currentlyLearning: false,
    useCases: ["Infrastructure hosting", "Deployment targets for IaC projects"],
  },
  {
    id: "azure",
    name: "Azure",
    category: "Cloud",
    level: "Learning",
    description: "Actively building familiarity with Azure's core services.",
    years: 0,
    icon: CloudCog,
    featured: false,
    currentlyLearning: true,
  },

  // Infrastructure
  {
    id: "windows-server",
    name: "Windows Server",
    category: "Infrastructure",
    level: "Advanced",
    description:
      "Administered and supported Windows Server environments across enterprise IT roles.",
    years: 5,
    icon: Server,
    featured: false,
    currentlyLearning: false,
  },
  {
    id: "linux",
    name: "Linux",
    category: "Infrastructure",
    level: "Advanced",
    description:
      "Day-to-day Linux administration for both enterprise support and modern DevOps workflows.",
    years: 4,
    icon: Terminal,
    featured: true,
    currentlyLearning: false,
    useCases: ["Server administration", "Docker host environments"],
  },
  {
    id: "active-directory",
    name: "Active Directory",
    category: "Infrastructure",
    level: "Advanced",
    description:
      "Managed users, groups, and access policy across enterprise Active Directory environments.",
    years: 5,
    icon: Shield,
    featured: false,
    currentlyLearning: false,
  },
  {
    id: "virtualization",
    name: "Virtualization",
    category: "Infrastructure",
    level: "Intermediate",
    description:
      "Virtual machine provisioning and management in enterprise IT environments.",
    years: 3,
    icon: HardDrive,
    featured: false,
    currentlyLearning: false,
  },

  // Networking
  {
    id: "tcp-ip",
    name: "TCP/IP",
    category: "Networking",
    level: "Advanced",
    description:
      "Core networking fundamentals underpinning every support role since day one.",
    years: 5,
    icon: Globe,
    featured: false,
    currentlyLearning: false,
  },
  {
    id: "dns",
    name: "DNS",
    category: "Networking",
    level: "Advanced",
    description:
      "DNS configuration and troubleshooting across enterprise networks.",
    years: 5,
    icon: Globe,
    featured: false,
    currentlyLearning: false,
  },
  {
    id: "dhcp",
    name: "DHCP",
    category: "Networking",
    level: "Advanced",
    description:
      "DHCP scope management and troubleshooting in enterprise environments.",
    years: 5,
    icon: Share2,
    featured: false,
    currentlyLearning: false,
  },
  {
    id: "vpn",
    name: "VPN",
    category: "Networking",
    level: "Advanced",
    description:
      "VPN configuration and support for secure remote connectivity.",
    years: 4,
    icon: ShieldCheck,
    featured: false,
    currentlyLearning: false,
  },
  {
    id: "routing",
    name: "Routing",
    category: "Networking",
    level: "Intermediate",
    description:
      "Routing fundamentals across enterprise and airport-scale network operations.",
    years: 4,
    icon: Route,
    featured: false,
    currentlyLearning: false,
  },
  {
    id: "switching",
    name: "Switching",
    category: "Networking",
    level: "Intermediate",
    description:
      "Switch configuration and troubleshooting in enterprise environments.",
    years: 4,
    icon: Waypoints,
    featured: false,
    currentlyLearning: false,
  },
  {
    id: "firewall",
    name: "Firewall",
    category: "Networking",
    level: "Intermediate",
    description:
      "Firewall rule management supporting secure enterprise network operations.",
    years: 3,
    icon: ShieldAlert,
    featured: false,
    currentlyLearning: false,
  },

  // DevOps
  {
    id: "docker",
    name: "Docker",
    category: "DevOps",
    level: "Advanced",
    description:
      "Containerization for local development, deployment consistency, and DevOps workflows.",
    years: 2,
    icon: Container,
    featured: true,
    currentlyLearning: false,
    useCases: ["Local development parity", "Multi-stage production builds"],
  },
  {
    id: "github-actions",
    name: "GitHub Actions",
    category: "DevOps",
    level: "Intermediate",
    description:
      "CI pipelines for linting, type-checking, and build verification.",
    years: 1,
    icon: Workflow,
    featured: true,
    currentlyLearning: false,
    useCases: ["Continuous integration", "Automated Docker image builds"],
  },
  {
    id: "terraform",
    name: "Terraform",
    category: "DevOps",
    level: "Intermediate",
    description:
      "Infrastructure as code for reproducible, version-controlled infrastructure.",
    years: 1,
    icon: Settings2,
    featured: true,
    currentlyLearning: false,
    useCases: ["Reproducible infrastructure", "Environment consistency"],
  },
  {
    id: "ci-cd",
    name: "CI/CD",
    category: "DevOps",
    level: "Intermediate",
    description:
      "Pipeline design for automated testing, building, and deployment.",
    years: 1,
    icon: GitBranch,
    featured: false,
    currentlyLearning: false,
  },
  {
    id: "nginx",
    name: "Nginx",
    category: "DevOps",
    level: "Intermediate",
    description:
      "Reverse proxy and static asset serving in containerized deployments.",
    years: 1,
    icon: Server,
    featured: false,
    currentlyLearning: false,
  },
  {
    id: "kubernetes",
    name: "Kubernetes",
    category: "DevOps",
    level: "Learning",
    description:
      "Building hands-on orchestration experience beyond single-container Docker.",
    years: 0,
    icon: Boxes,
    featured: false,
    currentlyLearning: true,
  },

  // Programming
  {
    id: "typescript",
    name: "TypeScript",
    category: "Programming",
    level: "Advanced",
    description:
      "Primary language for frontend and backend application development.",
    years: 2,
    icon: Braces,
    featured: true,
    currentlyLearning: false,
    useCases: ["Typed frontend applications", "API and backend logic"],
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "Programming",
    level: "Advanced",
    description: "Foundation for all frontend and Node.js-based work.",
    years: 3,
    icon: FileCode,
    featured: false,
    currentlyLearning: false,
  },
  {
    id: "python",
    name: "Python",
    category: "Programming",
    level: "Intermediate",
    description: "Scripting, automation, and backend service development.",
    years: 2,
    icon: SquareCode,
    featured: false,
    currentlyLearning: false,
  },
  {
    id: "bash",
    name: "Bash",
    category: "Programming",
    level: "Intermediate",
    description:
      "Shell scripting for automation and Linux system administration.",
    years: 3,
    icon: TerminalSquare,
    featured: false,
    currentlyLearning: false,
  },
  {
    id: "php",
    name: "PHP",
    category: "Programming",
    level: "Intermediate",
    description:
      "Backend development experience from earlier support-and-development roles.",
    years: 2,
    icon: FileCode,
    featured: false,
    currentlyLearning: false,
  },
  {
    id: "react",
    name: "React",
    category: "Programming",
    level: "Advanced",
    description:
      "Component-based UI development across personal and client projects.",
    years: 2,
    icon: Atom,
    featured: false,
    currentlyLearning: false,
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "Programming",
    level: "Advanced",
    description:
      "App Router architecture, server components, and full-stack React applications.",
    years: 1,
    icon: Triangle,
    featured: true,
    currentlyLearning: false,
    useCases: ["Production web applications", "This portfolio"],
  },
  {
    id: "laravel",
    name: "Laravel",
    category: "Programming",
    level: "Intermediate",
    description:
      "PHP backend framework experience from earlier development work.",
    years: 2,
    icon: LayoutTemplate,
    featured: false,
    currentlyLearning: false,
  },

  // Databases
  {
    id: "mysql",
    name: "MySQL",
    category: "Databases",
    level: "Intermediate",
    description:
      "Relational database design and querying for application backends.",
    years: 2,
    icon: Database,
    featured: false,
    currentlyLearning: false,
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "Databases",
    level: "Intermediate",
    description:
      "Primary database for recent full-stack and SaaS project work.",
    years: 1,
    icon: Database,
    featured: false,
    currentlyLearning: false,
  },
  {
    id: "sql-server",
    name: "SQL Server",
    category: "Databases",
    level: "Intermediate",
    description:
      "Database administration experience from enterprise IT support roles.",
    years: 3,
    icon: Database,
    featured: false,
    currentlyLearning: false,
  },

  // Tools
  {
    id: "git",
    name: "Git",
    category: "Tools",
    level: "Advanced",
    description: "Version control for every project, solo or collaborative.",
    years: 3,
    icon: GitCommit,
    featured: false,
    currentlyLearning: false,
  },
  {
    id: "github",
    name: "GitHub",
    category: "Tools",
    level: "Advanced",
    description:
      "Source hosting, CI/CD, and project workflow for every active project.",
    years: 3,
    icon: GitHubIcon,
    featured: false,
    currentlyLearning: false,
  },
  {
    id: "vscode",
    name: "VS Code",
    category: "Tools",
    level: "Expert",
    description:
      "Daily-driver editor across every language and project in this stack.",
    years: 4,
    icon: AppWindow,
    featured: false,
    currentlyLearning: false,
  },
  {
    id: "postman",
    name: "Postman",
    category: "Tools",
    level: "Advanced",
    description:
      "API design, testing, and documentation during backend development.",
    years: 2,
    icon: Send,
    featured: false,
    currentlyLearning: false,
  },
  {
    id: "powershell",
    name: "PowerShell",
    category: "Tools",
    level: "Advanced",
    description:
      "Windows automation and administration scripting in enterprise IT roles.",
    years: 4,
    icon: SquareTerminal,
    featured: false,
    currentlyLearning: false,
  },
  {
    id: "microsoft-365",
    name: "Microsoft 365",
    category: "Tools",
    level: "Advanced",
    description:
      "Administration and end-user support across enterprise M365 environments.",
    years: 4,
    icon: AppWindow,
    featured: false,
    currentlyLearning: false,
  },
];

export const learningRoadmap: LearningRoadmapItem[] = [
  {
    id: "aws-roadmap",
    title: "AWS",
    reason:
      "Deepening beyond core services toward production-grade, well-architected deployments.",
    icon: Cloud,
  },
  {
    id: "terraform-roadmap",
    title: "Terraform",
    reason:
      "Moving from basic infrastructure-as-code toward reusable, modular deployment patterns.",
    icon: Settings2,
  },
  {
    id: "github-actions-roadmap",
    title: "GitHub Actions",
    reason:
      "Extending CI pipelines toward full automated deployment, not just build verification.",
    icon: Workflow,
  },
  {
    id: "kubernetes-roadmap",
    title: "Kubernetes",
    reason:
      "Building real orchestration experience beyond single-container Docker deployments.",
    icon: Boxes,
  },
  {
    id: "monitoring-roadmap",
    title: "Monitoring (Prometheus, Grafana)",
    reason:
      "Learning to observe systems in production, not just deploy them and hope.",
    icon: Server,
  },
  {
    id: "iac-roadmap",
    title: "Infrastructure as Code",
    reason:
      "Treating infrastructure changes with the same rigor as application code — reviewed, versioned, repeatable.",
    icon: GitBranch,
  },
];

/**
 * The "current" production workflow. Note: adapted from the brief's
 * illustrative example — "Netlify" was replaced with "Docker Deploy" since
 * that's what's actually been built (a self-hosted Docker pipeline), not
 * a Netlify deployment.
 */
export const workflowSteps: WorkflowStep[] = [
  { id: "code", label: "Code", icon: FileCode },
  { id: "git", label: "Git", icon: GitCommit },
  { id: "github", label: "GitHub", icon: GitHubIcon },
  { id: "actions", label: "GitHub Actions", icon: Workflow },
  { id: "docker", label: "Docker", icon: Container },
  { id: "deploy", label: "Docker Deploy", icon: Server },
];

export const workflowFutureSteps: WorkflowStep[] = [
  { id: "aws-future", label: "AWS", icon: Cloud, future: true },
  { id: "terraform-future", label: "Terraform", icon: Settings2, future: true },
  { id: "monitoring-future", label: "Monitoring", icon: Server, future: true },
];

export const skillsCta = {
  heading: "Curious how these come together in practice?",
  primary: { label: "View Projects", href: "/projects" },
  secondary: { label: "Get In Touch", href: "/contact" },
};
