"use client";

import { motion } from "framer-motion";
import type { HTMLAttributes, ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

const SPACING_CLASSES = {
  none: "",
  sm: "py-10 md:py-14",
  md: "py-14 md:py-20",
  lg: "py-16 md:py-24",
} as const;

export interface SectionProps extends Omit<
  HTMLAttributes<HTMLElement>,
  "title" | "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart"
> {
  /** Anchor id used for in-page navigation (e.g. the Navbar links). */
  id?: string;
  /** Optional heading rendered above `children`. */
  title?: ReactNode;
  /** Optional supporting copy rendered below `title`. */
  subtitle?: ReactNode;
  /** Vertical rhythm. Defaults to `lg`. */
  spacing?: keyof typeof SPACING_CLASSES;
  /** Wraps content in `Container` for horizontal alignment. Defaults to `true`. */
  container?: boolean;
  /** Fades/slides the section in as it enters the viewport. Defaults to `false`. */
  animate?: boolean;
}

/**
 * A full-width page section that owns consistent vertical spacing and,
 * by default, wraps its content in `Container` for horizontal alignment.
 * Future portfolio sections (`About`, `Projects`, etc.) should compose this
 * rather than re-implementing spacing, width, or entrance-animation rules.
 */
export function Section({
  id,
  title,
  subtitle,
  spacing = "lg",
  container = true,
  animate = false,
  className,
  children,
  ...props
}: SectionProps) {
  const heading =
    title || subtitle ? (
      <div className="mb-10 flex flex-col gap-3 md:mb-14">
        {title ? (
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {title}
          </h2>
        ) : null}
        {subtitle ? (
          <p className="text-muted-foreground max-w-2xl text-lg text-pretty">
            {subtitle}
          </p>
        ) : null}
      </div>
    ) : null;

  const body = (
    <>
      {heading}
      {children}
    </>
  );

  return (
    <motion.section
      id={id}
      className={cn("w-full", SPACING_CLASSES[spacing], className)}
      initial={animate ? { opacity: 0, y: 24 } : undefined}
      whileInView={animate ? { opacity: 1, y: 0 } : undefined}
      viewport={animate ? { once: true, margin: "-80px" } : undefined}
      transition={animate ? { duration: 0.5, ease: "easeOut" } : undefined}
      {...props}
    >
      {container ? <Container>{body}</Container> : body}
    </motion.section>
  );
}
