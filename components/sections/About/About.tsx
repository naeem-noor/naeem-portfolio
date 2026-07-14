import { CircleCheck } from "lucide-react";

import { Section } from "@/components/layout/section";
import { AboutContent } from "@/components/sections/About/AboutContent";
import { AboutCTA } from "@/components/sections/About/AboutCTA";
import { AboutHeader } from "@/components/sections/About/AboutHeader";
import { ExperienceHighlights } from "@/components/sections/About/ExperienceHighlights";
import { JourneyTimeline } from "@/components/sections/About/JourneyTimeline";
import { TechnologyFocus } from "@/components/sections/About/TechnologyFocus";
import { ValuesGrid } from "@/components/sections/About/ValuesGrid";
import {
  aboutCta,
  aboutHeader,
  aboutSidebar,
  aboutStory,
  journeyItems,
  sidebarLocationIcon as LocationIcon,
  techFocus,
} from "@/data/about";

/**
 * The About / Professional Journey section.
 *
 * Stays a Server Component: the sidebar (portrait placeholder, badge,
 * location, availability, tech highlights) needs no client JS at all. Each
 * animated piece (`AboutHeader`, `AboutContent`, `JourneyTimeline`,
 * `ExperienceHighlights`, `TechnologyFocus`, `ValuesGrid`, `AboutCTA`) is an
 * isolated Client Component composed in here rather than pulling the whole
 * section across the boundary.
 */
export function About() {
  return (
    <Section
      id="about"
      spacing="lg"
      className="relative isolate overflow-hidden"
    >
      {/* Background — very subtle grid + glow, purely decorative. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent)",
          }}
        />
        <div
          className="animate-glow-pulse absolute top-1/3 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full opacity-30 blur-[110px]"
          style={{ backgroundColor: "var(--primary)" }}
        />
      </div>

      <div className="grid gap-16 lg:grid-cols-[280px_1fr] lg:gap-16 xl:grid-cols-[320px_1fr]">
        {/* Left column — sidebar. Static, no client JS required. */}
        <aside className="flex flex-col gap-6 lg:sticky lg:top-28 lg:h-fit">
          <div className="relative w-full max-w-[260px] lg:max-w-none">
            <div
              className="from-surface to-background border-border relative aspect-[4/5] w-full overflow-hidden rounded-2xl border bg-gradient-to-br"
              role="img"
              aria-label="Portrait placeholder for Naeem Noor"
            >
              <span className="text-primary/15 absolute inset-0 flex items-center justify-center text-8xl font-bold select-none">
                NN
              </span>
            </div>

            <span className="border-background bg-primary text-primary-foreground absolute right-4 -bottom-4 rounded-full border-4 px-3 py-1 text-xs font-semibold shadow-lg">
              {aboutSidebar.experienceBadge}
            </span>
          </div>

          <div className="border-border bg-surface/60 flex flex-col gap-3 rounded-xl border p-4 backdrop-blur-sm">
            <div className="text-muted-foreground flex items-center gap-2 text-sm">
              <LocationIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
              {aboutSidebar.location}
            </div>
            <div className="text-muted-foreground flex items-center gap-2 text-sm">
              <CircleCheck
                className="text-success h-4 w-4 shrink-0"
                aria-hidden="true"
              />
              {aboutSidebar.availability}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {aboutSidebar.techHighlights.map((tech) => (
              <span
                key={tech}
                className="border-border bg-surface text-muted-foreground rounded-full border px-3 py-1 text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </aside>

        {/* Right column — story. */}
        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-8">
            <AboutHeader header={aboutHeader} />
            <AboutContent paragraphs={aboutStory} />
          </div>

          <JourneyTimeline items={journeyItems} />

          <ExperienceHighlights />
        </div>
      </div>

      <div className="mt-20 flex flex-col gap-20">
        <TechnologyFocus chips={techFocus} />
        <ValuesGrid />
        <AboutCTA cta={aboutCta} />
      </div>
    </Section>
  );
}
