import { Section } from "@/components/layout/section";
import { ExperienceCTA } from "@/components/sections/Experience/ExperienceCTA";
import { ExperienceHeader } from "@/components/sections/Experience/ExperienceHeader";
import { ExperienceTimeline } from "@/components/sections/Experience/ExperienceTimeline";
import { SummaryCards } from "@/components/sections/Experience/SummaryCards";
import { experienceHeader } from "@/data/experience";

/**
 * The Experience page's content: header + intro, summary stat cards, the
 * full timeline of roles, and a closing CTA.
 *
 * Stays a Server Component: the background is pure CSS, and each animated
 * piece (`ExperienceHeader`, `SummaryCards`, `ExperienceTimeline`,
 * `ExperienceCTA`) is an isolated Client Component composed in here rather
 * than pulling the whole page across the boundary.
 */
export function Experience() {
  return (
    <Section spacing="lg" className="relative isolate overflow-hidden">
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
              "radial-gradient(ellipse 70% 60% at 50% 15%, black, transparent)",
          }}
        />
        <div
          className="animate-glow-pulse absolute top-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full opacity-25 blur-[110px]"
          style={{ backgroundColor: "var(--primary)" }}
        />
      </div>

      <div className="flex flex-col gap-16">
        <ExperienceHeader
          label={experienceHeader.label}
          headline={experienceHeader.headline}
          intro={experienceHeader.intro}
        />

        <SummaryCards />

        <div className="max-w-3xl">
          <ExperienceTimeline />
        </div>

        <ExperienceCTA />
      </div>
    </Section>
  );
}
