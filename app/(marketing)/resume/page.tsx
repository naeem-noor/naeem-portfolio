import type { Metadata } from "next";
import { Download } from "lucide-react";

import { Section } from "@/components/layout/section";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";
import type { HeadlineLine } from "@/types";

export const metadata: Metadata = createPageMetadata({
  title: "Resume",
  description:
    "View or download Naeem Noor's resume — a quick overview of experience across enterprise IT, infrastructure, and the ongoing move into Cloud & DevOps.",
  path: "/resume",
});

const headline: HeadlineLine[] = [
  [{ text: "The Short" }],
  [{ text: "Version.", accent: true }],
];

/**
 * A viewing/download experience for the resume PDF — deliberately not a
 * second, HTML-rendered copy of resume content (that content already
 * lives across `/about`, `/experience`, `/skills`, and `/certifications`).
 * This page's only job is to get someone to the actual PDF quickly.
 */
export default function ResumePage() {
  return (
    <Section spacing="lg">
      <div className="flex flex-col gap-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <PageHeader label="Resume" headline={headline} />
          <Button asChild size="lg" className="rounded-full">
            <a
              href={siteConfig.resumeUrl}
              download
              aria-label="Download resume (PDF)"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </a>
          </Button>
        </div>

        <div className="border-border bg-surface/40 overflow-hidden rounded-2xl border">
          <object
            data={siteConfig.resumeUrl}
            type="application/pdf"
            className="h-[75vh] w-full"
            aria-label="Resume PDF preview"
          >
            <div className="flex h-[50vh] flex-col items-center justify-center gap-4 p-8 text-center">
              <p className="text-muted-foreground max-w-sm text-sm leading-relaxed text-pretty">
                Your browser can&rsquo;t preview the PDF inline. Use the
                download button above to get it directly.
              </p>
            </div>
          </object>
        </div>
      </div>
    </Section>
  );
}
