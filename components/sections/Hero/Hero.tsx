import Link from "next/link";
import { ChevronDown } from "lucide-react";

import { Container } from "@/components/layout/container";
import { HeroBadge } from "@/components/sections/Hero/HeroBadge";
import { HeroButtons } from "@/components/sections/Hero/HeroButtons";
import { HeroContent } from "@/components/sections/Hero/HeroContent";
import { HeroIllustration } from "@/components/sections/Hero/HeroIllustration";
import { HeroStats } from "@/components/sections/Hero/HeroStats";
import { heroContent, heroCtas, heroSocialLinks } from "@/data/hero";

/**
 * The landing Hero section.
 *
 * Stays a Server Component: the decorative background and `HeroBadge` need
 * no client JS at all, and the animated pieces (`HeroContent`, `HeroButtons`,
 * `HeroStats`, `HeroIllustration`) are isolated Client Components composed
 * in here rather than forcing the whole section across the boundary.
 */
export function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative isolate overflow-hidden"
    >
      {/* Background — subtle radial glow + faint grid, purely decorative. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 55% at 50% -10%, color-mix(in oklab, var(--primary) 16%, transparent), transparent)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "linear-gradient(to bottom, black, transparent 85%)",
          }}
        />
      </div>

      <Container className="grid items-center gap-16 pt-4 pb-16 md:gap-14 md:pt-6 md:pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:pt-8 lg:pb-24">
        <div className="flex flex-col gap-8">
          <HeroBadge availability={heroContent.availability} />

          <HeroContent
            content={{
              greeting: heroContent.greeting,
              name: heroContent.name,
              role: heroContent.role,
              roleTags: heroContent.roleTags,
              headline: heroContent.headline,
              description: heroContent.description,
            }}
          />

          <HeroButtons ctas={heroCtas} />

          <nav
            aria-label="Social"
            className="border-border flex items-center gap-5 border-t pt-6"
          >
            {heroSocialLinks.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={label}
                className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm transition-colors"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                <span className="hidden sm:inline">{label}</span>
              </Link>
            ))}
          </nav>

          <HeroStats />
        </div>

        <HeroIllustration />
      </Container>

      <div className="hidden justify-center pb-8 md:flex">
        <a
          href="#intro"
          aria-label="Scroll to introduction"
          className="text-muted-foreground hover:text-foreground animate-bounce-y transition-colors"
        >
          <ChevronDown className="h-5 w-5" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
