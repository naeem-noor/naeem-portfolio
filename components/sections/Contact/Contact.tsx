import { Section } from "@/components/layout/section";
import { AvailabilitySection } from "@/components/sections/Contact/AvailabilitySection";
import { ContactForm } from "@/components/sections/Contact/ContactForm";
import { ContactHero } from "@/components/sections/Contact/ContactHero";
import { ContactInformation } from "@/components/sections/Contact/ContactInformation";
import { ResumeCTA } from "@/components/sections/Contact/ResumeCTA";

/**
 * The Contact page's content, in the required order: hero, contact
 * information, contact form, availability/collaboration, resume CTA,
 * social links.
 *
 * Independent by design — this is the *only* place the full contact form
 * renders; Home's own CTA only links here (`/contact`), it never
 * duplicates this form.
 *
 * Stays a Server Component: the background is pure CSS, and each animated
 * or interactive piece (`ContactInformation`, `ContactForm`,
 * `AvailabilitySection`, `ResumeCTA`, `SocialLinks`) is an isolated Client
 * Component composed in here rather than pulling the whole page across
 * the boundary.
 */
export function Contact() {
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
          className="animate-glow-pulse absolute top-0 right-1/3 h-72 w-72 rounded-full opacity-25 blur-[110px]"
          style={{ backgroundColor: "var(--primary)" }}
        />
      </div>

      <div className="flex flex-col gap-16">
        <ContactHero />

        <div className="grid gap-8 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-12">
          <ContactInformation />
          <ContactForm />
        </div>

        <AvailabilitySection />

        {/* <ResumeCTA /> */}
      </div>
    </Section>
  );
}
