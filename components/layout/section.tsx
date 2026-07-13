import type { HTMLAttributes } from "react";

import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  /** Anchor id used for in-page navigation (e.g. the Navbar links). */
  id?: string;
  /** Disables the default vertical rhythm, for sections needing custom spacing. */
  unpadded?: boolean;
}

/**
 * A full-width page section that owns consistent vertical spacing and wraps
 * its content in `Container` for horizontal alignment. Future portfolio
 * sections (`About`, `Projects`, etc.) should compose this rather than
 * re-implementing spacing and width rules.
 */
export function Section({
  id,
  unpadded = false,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("w-full", !unpadded && "py-16 md:py-24", className)}
      {...props}
    >
      <Container>{children}</Container>
    </section>
  );
}
