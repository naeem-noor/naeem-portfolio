import { Section } from "@/components/layout/section";
// import { FeaturedProjects } from "@/components/sections/Projects/FeaturedProjects";
import { FutureProjects } from "@/components/sections/Projects/FutureProjects";
import { GitHubSection } from "@/components/sections/Projects/GitHubSection";
import { ProjectsCTA } from "@/components/sections/Projects/ProjectsCTA";
import { ProjectsGrid } from "@/components/sections/Projects/ProjectsGrid";
import { ProjectsHero } from "@/components/sections/Projects/ProjectsHero";
import { getGitHubStats } from "@/lib/github";

/**
 * The Projects page's content, in the required order: hero, featured
 * projects, category filters + full grid, GitHub/open-source, future
 * roadmap, closing CTA.
 *
 * An async Server Component — `getGitHubStats()` fetches real public
 * GitHub data server-side, once, before render. Every other animated
 * piece (`ProjectsHero`, `FeaturedProjects`, `ProjectsGrid`,
 * `FutureProjects`, `ProjectsCTA`) is an isolated Client Component; only
 * `GitHubSection` needs the resolved fetch result, and it stays a Server
 * Component itself since that data has no functions in it.
 */
export async function Projects() {
  const githubStats = await getGitHubStats();

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
          className="animate-glow-pulse absolute top-0 left-1/3 h-72 w-72 rounded-full opacity-25 blur-[110px]"
          style={{ backgroundColor: "var(--accent)" }}
        />
      </div>

      <div className="flex flex-col gap-20">
        <ProjectsHero />

        {/* <div className="flex flex-col gap-8">
          <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
            Featured Projects
          </h2>
          <FeaturedProjects />
        </div> */}

        <div className="flex flex-col gap-8">
          <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
            Projects
          </h2>
          {/* <ProjectsGrid /> */}
        </div>

        <div className="flex flex-col gap-8">
          <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
            GitHub & Open Source
          </h2>
          <GitHubSection stats={githubStats} />
        </div>

        <div className="flex flex-col gap-8">
          <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl">
            What&rsquo;s Next
          </h2>
          <FutureProjects />
        </div>

        <ProjectsCTA />
      </div>
    </Section>
  );
}
