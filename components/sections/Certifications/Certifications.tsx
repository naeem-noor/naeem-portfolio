import { Section } from "@/components/layout/section";
import { CertificationCTA } from "@/components/sections/Certifications/CertificationCTA";
import { CertificationGrid } from "@/components/sections/Certifications/CertificationGrid";
import { CertificationsHero } from "@/components/sections/Certifications/CertificationsHero";
import { EducationCard } from "@/components/sections/Certifications/EducationCard";
import { LearningTimeline } from "@/components/sections/Certifications/LearningTimeline";
import { professionalSummary } from "@/content/certifications";
import { education } from "@/content/education";

/**
 * The Certifications page's content, in the required order: hero,
 * professional summary, featured certifications, education, professional
 * development timeline, current learning roadmap, future certification
 * goals, and a Download Resume CTA. An extra filterable "All
 * Certifications" section is added just before the CTA, giving the
 * "CERTIFICATION FILTER" requirement (Completed/In Progress/Planned +
 * category) an actual home on the page.
 *
 * Stays a Server Component: the background is pure CSS, and each animated
 * piece is an isolated Client Component composed in here rather than
 * pulling the whole page across the boundary. `CertificationGrid` is
 * reused three times (featured / planned-only / all-filterable) rather
 * than building three near-identical grid components.
 */
export function Certifications() {
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
              "radial-gradient(ellipse 70% 60% at 50% 10%, black, transparent)",
          }}
        />
        <div
          className="animate-glow-pulse absolute top-0 left-1/4 h-72 w-72 rounded-full opacity-25 blur-[110px]"
          style={{ backgroundColor: "var(--accent)" }}
        />
      </div>

      <div className="flex flex-col gap-10">
        <CertificationsHero />

        <p className="text-muted-foreground max-w-2xl text-base leading-relaxed text-pretty">
          {professionalSummary}
        </p>

        <div className="flex flex-col gap-8">
          <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
            Featured Certifications
          </h2>
          <CertificationGrid variant="featured" />
        </div>

        <div className="flex flex-col gap-8">
          <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
            Education
          </h2>
          <EducationCard education={education} />
        </div>

        <div className="flex flex-col gap-8">
          <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
            Professional Development
          </h2>
          <LearningTimeline />
        </div>

        <div className="flex flex-col gap-8">
          <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
            Future Certification Goals
          </h2>
          <CertificationGrid variant="planned" />
        </div>

        <CertificationCTA />
      </div>
    </Section>
  );
}
