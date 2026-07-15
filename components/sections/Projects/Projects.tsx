"use client";

import { motion } from "framer-motion";

import { Section } from "@/components/layout/section";
import { ProjectCard } from "@/components/shared/project-card";
import { PageHeader } from "@/components/shared/page-header";
import { staggerContainer } from "@/lib/motion";
import { projects } from "@/data/projects";
import type { HeadlineLine } from "@/types";

const projectsHeadline: HeadlineLine[] = [
  [{ text: "What I've Been" }],
  [{ text: "Building, ", accent: true }, { text: "Lately." }],
];

/**
 * The Projects page's content: a header plus every project, using the same
 * `ProjectCard` the Home page's featured preview uses. Client Component
 * overall since it imports `projects` directly (the icons are component
 * references — see `FeaturedProjects` for the same reasoning) and drives
 * the grid's stagger entrance.
 */
export function Projects() {
  return (
    <Section spacing="lg">
      <div className="flex flex-col gap-14">
        <PageHeader label="Projects" headline={projectsHeadline} />

        <motion.div
          variants={staggerContainer(0.1, 0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
