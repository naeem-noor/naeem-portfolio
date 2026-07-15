import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Section } from "@/components/layout/section";
import { homeIntro } from "@/data/home";

/**
 * A short, standalone introduction directly under the Hero — not a copy of
 * the About page's story. Stays a Server Component itself; `Section`'s
 * `animate` prop (a Client Component) handles the scroll-triggered entrance,
 * so nothing here needs `"use client"`.
 */
export function HomeIntro() {
  return (
    <Section id="intro" spacing="md" animate>
      <div className="flex flex-col items-start gap-5">
        <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed text-pretty sm:text-xl">
          {homeIntro.paragraph}
        </p>
        <Link
          href={homeIntro.cta.href}
          className="text-primary inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
        >
          {homeIntro.cta.label}
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>
    </Section>
  );
}
