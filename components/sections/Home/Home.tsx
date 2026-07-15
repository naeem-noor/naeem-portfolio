import { Section } from "@/components/layout/section";
import { FeaturedProjects } from "@/components/sections/Home/FeaturedProjects";
import { HomeCTA } from "@/components/sections/Home/HomeCTA";
import { HomeIntro } from "@/components/sections/Home/HomeIntro";
import { LatestExperience } from "@/components/sections/Home/LatestExperience";
import { Hero } from "@/components/sections/Hero";

/**
 * The Home (`/`) page content.
 *
 * Deliberately lean: per the multi-page architecture, Home only teases each
 * major section (a short intro, a handful of featured projects, the most
 * recent experience) and links out to the corresponding dedicated route —
 * it does not render the full About/Experience/Projects/Skills/
 * Certifications/Contact content inline.
 */
export function Home() {
  return (
    <>
      <Hero />
      <HomeIntro />

      <Section spacing="lg">
        <div className="flex flex-col gap-24">
          <FeaturedProjects />
          <LatestExperience />
        </div>
      </Section>

      <Section spacing="lg">
        <HomeCTA />
      </Section>
    </>
  );
}
