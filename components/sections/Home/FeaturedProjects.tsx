"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { ProjectCard } from "@/components/shared/project-card";
import { staggerContainer } from "@/lib/motion";
import { projects } from "@/data/projects";

/**
 * Home page preview of featured projects. Imports `projects` directly
 * rather than via a prop — each project carries an icon component
 * reference, which can't cross the Server-to-Client prop boundary (same
 * reasoning as `HeroStats`/`ExperienceHighlights`).
 */
export function FeaturedProjects() {
  const featured = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
          Featured Projects
        </h2>
        <Link
          href="/projects"
          className="text-primary hidden items-center gap-1.5 text-sm font-medium hover:underline sm:inline-flex"
        >
          View all projects
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>

      <motion.div
        variants={staggerContainer(0.1, 0)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>

      <Link
        href="/projects"
        className="text-primary inline-flex items-center gap-1.5 text-sm font-medium hover:underline sm:hidden"
      >
        View all projects
        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
      </Link>
    </div>
  );
}
