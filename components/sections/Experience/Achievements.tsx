import type { Achievement } from "@/components/sections/Experience/types";

export interface AchievementsProps {
  items: Achievement[];
}

/**
 * A grid of small achievement cards, each led by an icon. Purely
 * presentational and static — no motion of its own, since it's always
 * rendered inside `CompanyCard`'s already-animated entrance.
 */
export function Achievements({ items }: AchievementsProps) {
  if (items.length === 0) return null;

  return (
    <ul className="grid gap-2 sm:grid-cols-2">
      {items.map(({ text, icon: Icon }, index) => (
        <li
          key={index}
          className="border-border bg-background/60 flex items-start gap-2.5 rounded-lg border p-3"
        >
          <Icon
            className="text-success mt-0.5 h-4 w-4 shrink-0"
            aria-hidden="true"
          />
          <span className="text-foreground text-sm leading-snug text-pretty">
            {text}
          </span>
        </li>
      ))}
    </ul>
  );
}
