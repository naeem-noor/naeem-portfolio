import { Section } from "@/components/layout/section";
import { JourneyTimeline } from "@/components/sections/Experience/JourneyTimeline";
import { PageHeader } from "@/components/shared/page-header";
import { experienceHeader, journeyItems } from "@/data/experience";

/**
 * The Experience page's content: a header plus the full professional
 * journey timeline. Stays a Server Component — `PageHeader` and
 * `JourneyTimeline` are the only pieces that need client JS (for their
 * scroll-triggered entrances), each isolated in its own file.
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
              "radial-gradient(ellipse 70% 60% at 50% 20%, black, transparent)",
          }}
        />
      </div>

      <div className="flex flex-col gap-14">
        <PageHeader
          label={experienceHeader.label}
          headline={experienceHeader.headline}
        />

        <div className="max-w-2xl">
          <JourneyTimeline items={journeyItems} />
        </div>
      </div>
    </Section>
  );
}
