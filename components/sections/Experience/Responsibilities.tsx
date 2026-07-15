"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";

import { expandVariant } from "@/components/sections/Experience/constants";
import { cn } from "@/lib/utils";

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
  initialCount = 3,
}: ResponsibilitiesProps) {
  const [expanded, setExpanded] = useState(false);
  const panelId = useId();

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
          <motion.div
            id={panelId}
            initial="collapsed"
            animate={expanded ? "expanded" : "collapsed"}
            variants={expandVariant}
            style={{ display: "grid" }}
            className="overflow-hidden"
          >
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
          </motion.div>

          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            aria-expanded={expanded}
            aria-controls={panelId}
            className="text-primary inline-flex w-fit items-center gap-1 text-sm font-medium hover:underline"
          >
            {expanded ? "View Less" : "View More"}
            <ChevronDown
              className={cn(
                "h-3.5 w-3.5 transition-transform duration-200",
                expanded && "rotate-180",
              )}
              aria-hidden="true"
            />
          </button>
        </>
      ) : null}
    </div>
  );
}
