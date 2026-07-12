import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind class names, resolving conflicting utility classes
 * (e.g. `p-2 p-4` -> `p-4`) in a predictable, last-wins order.
 *
 * This is the canonical `cn` helper expected by shadcn/ui components.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
