"use client";

import { motion } from "framer-motion";

export interface TechnologyBadgesProps {
  items: string[];
  className?: string;
}

/**
 * A row of technology badges with a subtle lift-and-highlight on hover.
 * Shared by `CompanyCard` for its "environment" tag and its technology
 * stack list — the only difference between those two uses is the data
 * passed in.
 */
export function TechnologyBadges({ items, className }: TechnologyBadgesProps) {
  return (
    <ul className={className ?? "flex flex-wrap gap-2"}>
      {items.map((item) => (
        <motion.li
          key={item}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
        >
          <span className="border-border bg-surface hover:border-border-strong hover:bg-surface-hover text-muted-foreground hover:text-foreground inline-block rounded-full border px-3 py-1 text-xs font-medium transition-colors">
            {item}
          </span>
        </motion.li>
      ))}
    </ul>
  );
}
