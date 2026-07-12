import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Logo } from "@/components/shared/logo";
import { socialLinks } from "@/data/social";
import { getCurrentYear } from "@/utils/date";

/**
 * Site footer shell. Placeholder content only — copy and layout are
 * production-ready; the surrounding portfolio sections are built later.
 */
export function Footer() {
  return (
    <footer className="border-border w-full border-t">
      <Container className="flex flex-col items-center gap-6 py-10 md:flex-row md:justify-between">
        <Logo />

        <p className="text-muted-foreground text-center text-sm md:text-left">
          &copy; {getCurrentYear()} — Built with Next.js, deployed with Docker.
        </p>

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
      </Container>
    </footer>
  );
}
