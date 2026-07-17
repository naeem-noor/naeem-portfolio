import { Section } from "@/components/layout/section";
import { LearningRoadmap } from "@/components/sections/Skills/LearningRoadmap";
import { SkillsCategories } from "@/components/sections/Skills/SkillsCategories";
import { SkillsCTA } from "@/components/sections/Skills/SkillsCTA";
import { SkillsHero } from "@/components/sections/Skills/SkillsHero";
import { SkillsOverview } from "@/components/sections/Skills/SkillsOverview";
import { WorkflowDiagram } from "@/components/sections/Skills/WorkflowDiagram";

/**
 * The Skills page's content, in the required order: hero, overview stats,
 * technical categories, featured technologies, learning roadmap,
 * development workflow, tools & platforms, closing CTA.
 *
 * Stays a Server Component: the background is pure CSS, and each animated
 * piece is an isolated Client Component composed in here rather than
 * pulling the whole page across the boundary. `TechnologyGrid` is reused
 * twice — once in its "featured" variant (no filter UI, detailed cards),
 * once in its default filterable variant — rather than building a second
 * near-identical component for Featured Technologies.
 */
export function Skills() {
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
          className="animate-glow-pulse absolute top-0 right-1/4 h-72 w-72 rounded-full opacity-25 blur-[110px]"
          style={{ backgroundColor: "var(--primary)" }}
        />
      </div>

      <div className="flex flex-col gap-20">
        <SkillsHero />

        <SkillsOverview />

        <div className="flex flex-col gap-8">
          <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
            Technical Categories
          </h2>
          <SkillsCategories />
        </div>

        <div className="flex flex-col gap-8">
          <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
            Currently Learning
          </h2>
          <LearningRoadmap />
        </div>

        <div className="flex flex-col gap-8">
          <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
            Development Workflow
          </h2>
          <WorkflowDiagram />
        </div>

        {/* <div className="flex flex-col gap-8">
          <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
            Tools &amp; Platforms
          </h2>
          <ToolsGrid />
        </div> */}

        <SkillsCTA />
      </div>
    </Section>
  );
}
