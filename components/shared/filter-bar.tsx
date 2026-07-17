"use client";

import { motion } from "framer-motion";

export interface FilterBarProps<T extends string> {
  options: T[];
  selected: T;
  onChange: (option: T) => void;
  /** Distinguishes the shared layout animation between multiple filter
   * bars that might be mounted on the same page at once. */
  layoutId: string;
  "aria-label": string;
}

/**
 * A row of filter chips with a shared-layout active indicator that glides
 * between options. Generic over the option type so it works for any
 * closed set of string categories — used by both Projects' category
 * filter and Skills' technology filter, which would otherwise be two
 * near-identical implementations of the same interaction.
 */
export function FilterBar<T extends string>({
  options,
  selected,
  onChange,
  layoutId,
  "aria-label": ariaLabel,
}: FilterBarProps<T>) {
  return (
    <div role="group" aria-label={ariaLabel} className="flex flex-wrap gap-2">
      {options.map((option) => {
        const isActive = option === selected;

        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            aria-pressed={isActive}
            className={
              "relative rounded-full px-4 py-2 text-sm font-medium transition-colors " +
              (isActive
                ? "text-primary-foreground"
                : "text-muted-foreground hover:text-foreground")
            }
          >
            {isActive ? (
              <motion.span
                layoutId={layoutId}
                className="bg-primary absolute inset-0 rounded-full"
                transition={{ duration: 0.25, ease: "easeOut" }}
              />
            ) : null}
            <span className="relative">{option}</span>
          </button>
        );
      })}
    </div>
  );
}
