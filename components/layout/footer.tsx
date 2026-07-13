import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/layout/container";
import { Logo } from "@/components/shared/logo";
import { primaryNav } from "@/data/navigation";
import { socialLinks } from "@/data/social";
import { techStack } from "@/data/tech-stack";
import { siteConfig } from "@/lib/site-config";
import { getCurrentYear } from "@/utils/date";

/**
 * Site footer shell. Placeholder copy only — the surrounding portfolio
 * sections are built in a later phase, but the layout, navigation, and
 * credit line are all production-ready.
 */
export function Footer() {
  return (
    <footer className="border-border w-full border-t">
      <Container className="grid gap-12 py-16 md:grid-cols-[2fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="text-muted-foreground max-w-sm text-sm text-pretty">
            {siteConfig.description}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-foreground text-sm font-semibold">
            Navigation
          </span>
          <nav aria-label="Footer" className="flex flex-col gap-3">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-foreground w-fit text-sm transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-foreground text-sm font-semibold">Connect</span>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={label}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </Container>

      <div className="border-border border-t">
        <Container className="flex flex-col items-center gap-4 py-6 md:flex-row md:justify-between">
          <p className="text-muted-foreground text-center text-sm md:text-left">
            &copy; {getCurrentYear()} {siteConfig.shortName}. All rights
            reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {techStack.map(({ label, icon: Icon }) => (
              <Badge key={label}>
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                {label}
              </Badge>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
