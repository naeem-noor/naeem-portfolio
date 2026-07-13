import type { HeroAvailability } from "@/components/sections/Hero/types";

export interface HeroBadgeProps {
  availability: HeroAvailability;
}

/**
 * Availability pill with a pulsing status dot, plus a small specialization
 * caption underneath. Pure CSS (`animate-pulse`) — no motion library needed
 * for a two-state blink, so this stays a Server Component.
 */
export function HeroBadge({ availability }: HeroBadgeProps) {
  return (
    <div className="flex flex-col gap-2">
      <span className="border-border bg-surface/80 inline-flex w-fit items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm font-medium backdrop-blur-sm">
        <span className="relative flex h-2 w-2" aria-hidden="true">
          <span className="bg-success absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
          <span className="bg-success relative inline-flex h-2 w-2 rounded-full" />
        </span>
        {availability.status}
      </span>

      <p className="text-muted-foreground pl-1 text-xs font-medium tracking-wide uppercase">
        {availability.tags.join(" • ")}
      </p>
    </div>
  );
}
