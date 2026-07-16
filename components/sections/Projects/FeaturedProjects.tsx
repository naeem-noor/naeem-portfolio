"use client";

import { motion } from "framer-motion";

import { staggerContainer } from "@/components/sections/Projects/constants";
import { ProjectCard } from "@/components/sections/Projects/ProjectCard";
import { projects } from "@/content/projects";

/**
 * The flagship-projects row: 3–5 featured projects rendered with
 * `ProjectCard`'s larger treatment.
 *
 * Imports `projects` directly from the content layer rather than via a
 * prop — each project carries an `icon` component reference, which can't
 * cross the Server-to-Client prop boundary (same reasoning as `HeroStats`
 * and every other icon-bearing data set in this app).
 */
export function FeaturedProjects() {
  const featured = projects.filter((project) => project.featured);

  return (
    <motion.div
      variants={staggerContainer(0.12, 0)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="grid gap-5 lg:grid-cols-3"
    >
      {featured.map((project) => (
        <ProjectCard key={project.id} project={project} featured />
      ))}
    </motion.div>
  );
}
