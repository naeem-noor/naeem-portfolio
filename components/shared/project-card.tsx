"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { cardFadeUp } from "@/lib/motion";
import type { Project } from "@/data/projects";

export interface ProjectCardProps {
  project: Project;
}

/**
 * A single project card: icon, status, title, description, tag chips, and a
 * link out to the repo. Shared between the Home page's featured preview and
 * the full `/projects` listing so the two never duplicate this markup.
 */
export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div variants={cardFadeUp} className="group h-full">
      <Link
        href={project.href}
        target="_blank"
        rel="noreferrer"
        className="border-border bg-surface/60 hover:border-border-strong hover:bg-surface flex h-full flex-col gap-4 rounded-xl border p-6 backdrop-blur-sm transition-colors"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg">
            <project.icon className="text-primary h-5 w-5" aria-hidden="true" />
          </div>
          <ArrowUpRight
            className="text-muted-foreground group-hover:text-foreground h-4 w-4 shrink-0 transition-colors"
            aria-hidden="true"
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-foreground text-base font-semibold">
              {project.title}
            </h3>
            <Badge variant="accent">{project.status}</Badge>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
            {project.description}
          </p>
        </div>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border-border text-muted-foreground rounded-full border px-2.5 py-1 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}
