"use client";

import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { ExpandPanel } from "@/components/shared/expand-panel";
import { useDisclosure } from "@/hooks/use-disclosure";

export interface ResponsibilitiesProps {
  items: string[];
  /** How many items show before the "View More" toggle. Defaults to 3. */
  initialCount?: number;
}

/**
 * A bulleted list of responsibilities. Shows the first `initialCount`
 * items; the rest expand in smoothly via a `grid-template-rows` animation
 * (animating to `auto` height directly isn't supported by Framer Motion,
 * so `0fr` → `1fr` on a single-row grid is the standard trick).
 */
export function Responsibilities({
  items,
  initialCount = 2,
}: ResponsibilitiesProps) {
  const { isOpen, toggle, panelId } = useDisclosure();

  const visible = items.slice(0, initialCount);
  const hidden = items.slice(initialCount);

  return (
    <div className="flex flex-col gap-3">
      <ul className="text-muted-foreground flex flex-col gap-2 text-sm">
        {visible.map((item, index) => (
          <li key={index} className="flex gap-2.5">
            <span className="text-primary" aria-hidden="true">
              —
            </span>
            <span className="text-pretty">{item}</span>
          </li>
        ))}
      </ul>

      {hidden.length > 0 ? (
        <>
          <ExpandPanel isOpen={isOpen} id={panelId}>
            <ul className="text-muted-foreground flex min-h-0 flex-col gap-2 text-sm">
              {hidden.map((item, index) => (
                <li key={index} className="flex gap-2.5 pt-2 first:pt-0">
                  <span className="text-primary" aria-hidden="true">
                    —
                  </span>
                  <span className="text-pretty">{item}</span>
                </li>
              ))}
            </ul>
          </ExpandPanel>

          <button
            type="button"
            onClick={toggle}
            aria-expanded={isOpen}
            aria-controls={panelId}
            className="text-primary inline-flex w-fit items-center gap-1 text-sm font-medium hover:underline"
          >
            {isOpen ? "View Less" : "View More"}
            <ChevronDown
              className={cn(
                "h-3.5 w-3.5 transition-transform duration-200",
                isOpen && "rotate-180",
              )}
              aria-hidden="true"
            />
          </button>
        </>
      ) : null}
    </div>
  );
}
