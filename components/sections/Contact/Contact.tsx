import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Section } from "@/components/layout/section";
import { PageHeader } from "@/components/shared/page-header";
import { socialLinks } from "@/data/social";
import { siteConfig } from "@/lib/site-config";
import type { HeadlineLine } from "@/types";

const headline: HeadlineLine[] = [
  [{ text: "Let's Talk" }],
  [{ text: "Infrastructure.", accent: true }],
];

/**
 * The Contact page's content: a header plus direct contact channels.
 * Deliberately not a form yet — a validated contact form is real,
 * substantial scope of its own (and the `useZodForm` hook is already wired
 * up and waiting for it); until then, these are real, working links rather
 * than a stub.
 *
 * Stays a Server Component: `PageHeader` is the only piece needing client
 * JS, everything else here is static.
 */
export function Contact() {
  return (
    <Section spacing="lg">
      <div className="flex flex-col gap-14">
        <PageHeader label="Contact" headline={headline} />

        <div className="flex max-w-2xl flex-col gap-6">
          <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
            The fastest way to reach me is email — I&rsquo;m also on GitHub and
            LinkedIn if you&rsquo;d rather connect there first.
          </p>

          <div className="flex flex-col gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="border-border bg-surface/60 hover:border-border-strong hover:bg-surface group flex items-center justify-between gap-3 rounded-xl border p-4 backdrop-blur-sm transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg">
                    <Icon
                      className="text-primary h-4.5 w-4.5"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-foreground text-sm font-semibold">
                      {label}
                    </span>
                    <span className="text-muted-foreground text-xs">
                      {label === "Email" ? siteConfig.links.email : href}
                    </span>
                  </div>
                </div>
                <ArrowUpRight
                  className="text-muted-foreground group-hover:text-foreground h-4 w-4 shrink-0 transition-colors"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
