import { Section } from "@/components/layout/section";
import { TechnologyFocus } from "@/components/sections/Skills/TechnologyFocus";
import { PageHeader } from "@/components/shared/page-header";
import { skillsHeader, techFocus } from "@/data/skills";

/**
 * The Skills page's content: a header plus the full technology chip cloud.
 * Stays a Server Component — `PageHeader` and `TechnologyFocus` are the
 * only pieces that need client JS.
 */
export function Skills() {
  return (
    <Section spacing="lg">
      <div className="flex flex-col gap-14">
        <PageHeader
          label={skillsHeader.label}
          headline={skillsHeader.headline}
        />
        <TechnologyFocus chips={techFocus} />
      </div>
    </Section>
  );
}
