import { Braces, Container, Triangle, Wind } from "lucide-react";

import type { IconComponent } from "@/types";

export interface TechStackItem {
  label: string;
  icon: IconComponent;
}

/**
 * Displayed in the Footer's "Built With" row.
 *
 * Uses generic, thematically-fitting lucide icons (a triangle for Next.js,
 * braces for TypeScript, wind for Tailwind, a container for Docker) rather
 * than recreated brand logos — this is a decorative credit line, not a
 * clickable brand link, so exact marks aren't necessary.
 */
export const techStack: TechStackItem[] = [
  { label: "Next.js", icon: Triangle },
  { label: "TypeScript", icon: Braces },
  { label: "Tailwind CSS", icon: Wind },
  { label: "Docker", icon: Container },
];
