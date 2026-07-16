"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";

import { GitHubIcon } from "@/components/shared/brand-icons";
// import { ExpandPanel } from "@/components/shared/expand-panel";
import { TechnologyBadges } from "@/components/shared/technology-badges";
import { cardFadeUp } from "@/components/sections/Projects/constants";
// import { ProjectCaseStudy } from "@/components/sections/Projects/ProjectCaseStudy";
import { STATUS_BADGE_VARIANT } from "@/components/sections/Projects/types";
import { Badge } from "@/components/ui/badge";
import { useDisclosure } from "@/hooks/use-disclosure";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/projects";

export interface ProjectCardProps {
  project: Project;
  /** Renders a slightly larger treatment for the Featured Projects row. */
  featured?: boolean;
}

/**
 * A single project card: icon/thumbnail, name, category, status, short
 * description, year/role, tech badges, repository/demo links, and a
 * "Case Study" toggle that expands the full `ProjectCaseStudy` in place.
 */
export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  // const { isOpen, toggle, panelId } = useDisclosure();

  return (
    <motion.article
      variants={cardFadeUp}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn(
        "border-border bg-surface/60 hover:border-border-strong hover:bg-surface flex flex-col gap-5 rounded-2xl border p-6 backdrop-blur-sm transition-colors",
        featured && "sm:p-7",
      )}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-start gap-3.5">
          <div className="bg-primary/10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
            <project.icon className="text-primary h-5 w-5" aria-hidden="true" />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-foreground text-lg font-semibold">
              {project.title}
            </h3>
            <div className="flex flex-wrap items-center gap-1.5">
              <Badge variant="outline">{project.category.join(" | ")}</Badge>
              <Badge variant={STATUS_BADGE_VARIANT[project.status]}>
                {project.status}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
        {featured ? project.description : project.summary}
      </p>

      <div className="text-muted-foreground flex flex-wrap gap-x-4 gap-y-1 text-xs">
        <span>{project.year}</span>
        <span aria-hidden="true">•</span>
        <span>{project.role}</span>
      </div>

      <TechnologyBadges items={project.technologies} />

      <div className="flex flex-wrap items-center gap-4 pt-1">
        {project.github ? (
          <Link
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
          >
            <GitHubIcon className="h-4 w-4" aria-hidden="true" />
            Repository
          </Link>
        ) : null}

        {project.demo ? (
          <Link
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            Live Demo
          </Link>
        ) : null}

        {/* <button
          type="button"
          onClick={toggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="text-primary ml-auto inline-flex items-center gap-1 text-sm font-medium hover:underline"
        >
          Case Study
          <ChevronDown
            className={cn(
              "h-3.5 w-3.5 transition-transform duration-200",
              isOpen && "rotate-180",
            )}
            aria-hidden="true"
          />
        </button> */}
      </div>

      {/* <ExpandPanel isOpen={isOpen} id={panelId}>
        <ProjectCaseStudy project={project} />
      </ExpandPanel> */}
    </motion.article>
  );
}
