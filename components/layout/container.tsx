import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /** Renders a `<section>` instead of a `<div>` when used as a page section. */
  as?: "div" | "section";
}

/**
 * Horizontally centers content and applies the app's max-width and
 * responsive gutter. This is the single place that owns the page's
 * horizontal rhythm — page sections should not redefine their own padding.
 */
export function Container({
  as: Tag = "div",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-(--container-max) px-6 md:px-8",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
