import type { NavItem } from "@/types";

/**
 * Primary navigation displayed in the Navbar and mobile drawer.
 *
 * These are placeholder in-page anchors — the actual sections (`#projects`,
 * `#experience`, etc.) are built in a later phase. The shell only needs the
 * links to exist and behave correctly.
 */
export const primaryNav: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];
