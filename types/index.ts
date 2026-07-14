import type { ComponentType, SVGProps } from "react";

/**
 * A single link in the primary site navigation.
 */
export interface NavItem {
  /** Visible label. */
  label: string;
  /** In-page anchor or route, e.g. "#projects" or "/projects". */
  href: string;
  /** Opens in a new tab when true (used for external links). */
  external?: boolean;
}

/** Any icon component accepting standard SVG props (lucide icons or brand SVGs). */
export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

/**
 * A link to an external profile or contact channel, rendered as an icon
 * button (e.g. in the navbar and footer).
 */
export interface SocialLink {
  label: string;
  href: string;
  icon: IconComponent;
}

/**
 * Supported color-scheme values surfaced by the theme toggle.
 * Mirrors the subset of `next-themes` themes this app supports.
 */
export type ThemeMode = "light" | "dark" | "system";
