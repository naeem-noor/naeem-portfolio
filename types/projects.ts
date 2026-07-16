import type { IconComponent } from "@/types";

export type ProjectCategory =
  // | "DevOps"
  | "E-Commerce"
  | "Frontend"
  | "Backend"
  | "SaaS"
  | "AI"
  | "Infrastructure"
  | "Networking"
  | "System Administration";

export type ProjectStatus =
  "Production" | "Completed" | "In Progress" | "Learning" | "Archived" | "Live";

export interface ProjectArchitecture {
  /** High-level description of how the system fits together. */
  overview: string;
  dataFlow: string;
  deploymentStrategy: string;
  infrastructureNotes: string;
  containerization: string;
  futureScalability: string;
}

export interface ProjectChallenge {
  challenge: string;
  solution: string;
}

export interface ProjectCaseStudyContent {
  overview: string;
  problemStatement: string;
  goals: string[];
  architecture: ProjectArchitecture;
  features: string[];
  challenges: ProjectChallenge[];
  lessonsLearned: string[];
  futureImprovements: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  /** One-line summary shown on compact cards. */
  summary: string;
  /** Slightly longer description shown on the full grid card. */
  description: string;
  category: ProjectCategory[];
  status: ProjectStatus;
  featured: boolean;
  year: string;
  role: string;
  github?: string;
  demo?: string;
  /** Small square/card image. Optional — falls back to an icon treatment. */
  thumbnail?: string;
  /** Wide banner image for the case study header. Optional, same fallback. */
  coverImage?: string;
  technologies: string[];
  caseStudy?: ProjectCaseStudyContent;
  /** Decorative icon used wherever no thumbnail/coverImage exists yet. */
  icon: IconComponent;
}

/** A planned-but-not-started idea shown in the Future Projects roadmap. */
export interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  icon: IconComponent;
}
