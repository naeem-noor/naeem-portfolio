import { Section } from "@/components/layout/section";
import { HomeCTA } from "@/components/sections/Home/HomeCTA";
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

      <Section spacing="sm">
        <HomeCTA />
      </Section>
    </>
  );
}
