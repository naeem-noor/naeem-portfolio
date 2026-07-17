import {
  Award,
  BookOpenCheck,
  Boxes,
  Cloud,
  Container,
  GraduationCap,
  Server,
  Settings2,
  Shield,
  Workflow,
  Code2,
  Globe,
  Network,
} from "lucide-react";

import type { HeadlineLine } from "@/types";
import type {
  Certification,
  DevelopmentMilestone,
} from "@/types/certifications";

export const certificationsHeader = {
  label: "Certifications",
  headline: [
    [{ text: "Continuous Learning" }],
    [{ text: "Never ", accent: true }, { text: "Stops." }],
  ] satisfies HeadlineLine[],
  description:
    "A commitment to lifelong learning across enterprise infrastructure, networking, cloud technologies, and DevOps practice credentials earned, and a clear roadmap for what's next.",
};

export const professionalSummary =
  "Credentials have never been the goal on their own they're checkpoints along a longer path from enterprise IT support toward cloud and DevOps engineering. Google's IT Support certification formalized fundamentals already built through five years of hands-on work; CCNA, currently in progress, is deepening the networking side of that foundation. What follows below is a real roadmap, not a wish list: the certifications actively being worked toward next.";

/**
 * ⚠️ REVIEW BEFORE PUBLISHING
 * Google IT Support, Google Project Management, and CCNA (in progress) are
 * real. Everything marked "Planned" is a genuine future goal, not a
 * completed credential — none of them have real issue dates, credential
 * IDs, or verification URLs, since they haven't been earned yet.
 */
export const certifications: Certification[] = [
  {
    id: "google-it-support",
    title: "Google IT Support Professional Certificate",
    issuer: "Google",
    issueDate: "2024",
    status: "Completed",
    category: "Infrastructure",
    skills: [
      "Troubleshooting",
      "Networking",
      "Operating Systems",
      "System Administration",
    ],
    featured: true,
    icon: Award,
  },
  {
    id: "google-it-Security",
    title: "Google IT Security: Defense against the digital dark arts",
    issuer: "Google",
    issueDate: "2024",
    status: "Completed",
    category: "Security",
    skills: [
      "Security Monitoring",
      "Network Security",
      "OS Security",
      "Malware Identification",
    ],
    featured: true,
    icon: Shield,
  },
  {
    id: "google-system-administration",
    title: "Google System Administration and IT Infrastructure Services",
    issuer: "Google",
    issueDate: "2024",
    status: "Completed",
    category: "Infrastructure",
    skills: [
      "Security Monitoring",
      "Active Directory",
      "Virtualization",
      "Network Services",
    ],
    featured: true,
    icon: Server,
  },
  {
    id: "google-pm",
    title: "Google Foundations of Project Management",
    issuer: "Google",
    issueDate: "2022",
    status: "Completed",
    category: "Infrastructure",
    skills: ["Project Planning", "Agile", "Stakeholder Communication"],
    featured: true,
    icon: BookOpenCheck,
  },
  {
    id: "ccna",
    title: "Cisco Certified Network Associate",
    issuer: "Cisco",
    status: "Planned",
    category: "Networking",
    skills: [
      "Routing",
      "Switching",
      "Networking Fundamentals",
      "IP Addressing",
    ],
    featured: false,
    icon: Shield,
  },
  {
    id: "aws-cloud-practitioner",
    title: "AWS Certified Cloud Practitioner",
    issuer: "AWS",
    status: "Planned",
    category: "Cloud",
    skills: ["Cloud Fundamentals", "AWS Core Services", "Billing & Support"],
    featured: false,
    icon: Cloud,
  },
  {
    id: "aws-solutions-architect",
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "AWS",
    status: "Planned",
    category: "Cloud",
    skills: ["Cloud Architecture", "AWS Networking", "Cost Optimization"],
    featured: false,
    icon: Cloud,
  },
  {
    id: "terraform-associate",
    title: "HashiCorp Certified: Terraform Associate",
    issuer: "HashiCorp",
    status: "Planned",
    category: "DevOps",
    skills: ["Infrastructure as Code", "Terraform", "State Management"],
    featured: false,
    icon: Settings2,
  },
  {
    id: "github-actions-goal",
    title: "GitHub Actions (Advanced CI/CD)",
    issuer: "GitHub",
    status: "Planned",
    category: "DevOps",
    skills: ["CI/CD Pipelines", "Workflow Automation"],
    featured: false,
    icon: Workflow,
  },
  {
    id: "docker-certified-associate",
    title: "Docker Certified Associate",
    issuer: "Docker",
    status: "Planned",
    category: "DevOps",
    skills: ["Containerization", "Docker Compose", "Image Optimization"],
    featured: false,
    icon: Container,
  },
  {
    id: "cka",
    title: "Certified Kubernetes Administrator (CKA)",
    issuer: "CNCF",
    status: "Planned",
    category: "DevOps",
    skills: ["Kubernetes", "Container Orchestration", "Cluster Administration"],
    featured: false,
    icon: Boxes,
  },
];

export const developmentTimeline: DevelopmentMilestone[] = [
  {
    id: "degree",
    title: "Bachelor of Science in Computer Science",
    description:
      "Earned a BS in Computer Science, building a strong foundation in software development, algorithms, databases, networking, and modern computing principles.",
    icon: GraduationCap,
  },
  {
    id: "website-developer",
    title: "Website Developer",
    description:
      "Professional experience as a Full Stack Developer, creating scalable web applications, integrating APIs, optimizing performance, and delivering end-to-end solutions.",
    icon: Code2,
  },
  {
    id: "google-it-support-certification",
    title: "Google IT Support Professional Certificate",
    description:
      "Completed Google's IT Support Professional Certificate, strengthening skills in IT support, troubleshooting, networking, system administration, and cybersecurity fundamentals.",
    icon: Award,
  },
  {
    id: "international-it-exposure",
    title: "International IT Exposure",
    description:
      "Provided IT support across Pakistan, the UAE, and Australia, working with international teams and enterprise environments.",
    icon: Globe,
  },
  {
    id: "networking-certification",
    title: "Networking Knowledge",
    description:
      "Expanded networking expertise through professional training, covering network architecture, protocols, troubleshooting, and secure connectivity.",
    icon: Network,
    current: true,
  },
  {
    id: "devops-learning",
    title: "DevOps Practices",
    description:
      "Developed practical DevOps skills in CI/CD pipelines, Docker, Git, Linux, cloud services, and deployment automation.",
    icon: Workflow,
    current: true,
  },
];

export const certificationsCta = {
  heading: "See it all together, credentials, experience, and skills.",
  secondary: { label: "View Experience", href: "/experience" },
};
