"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import { cardFadeUp } from "@/components/sections/Certifications/constants";
import { STATUS_BADGE_VARIANT } from "@/components/sections/Certifications/types";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Certification } from "@/types/certifications";

export interface CertificationCardProps {
  certification: Certification;
  /** Renders the larger Featured Certifications treatment. */
  featured?: boolean;
}

/**
 * A single certification card: icon (logo fallback), title, issuer,
 * status, issue date, credential ID, skills covered, and a verification
 * link when a real credential URL exists.
 */
export function CertificationCard({
  certification,
  featured = false,
}: CertificationCardProps) {
  const {
    title,
    issuer,
    issueDate,
    credentialId,
    credentialUrl,
    status,
    skills,
    icon: Icon,
  } = certification;

  return (
    <motion.div
      variants={cardFadeUp}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={cn(
        "border-border bg-surface/60 hover:border-border-strong hover:bg-surface flex flex-col gap-4 rounded-2xl border backdrop-blur-sm transition-colors",
        featured ? "p-6 sm:p-7" : "p-5",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3.5">
          <div className="bg-primary/10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
            <Icon className="text-primary h-5 w-5" aria-hidden="true" />
          </div>
          <div className="flex flex-col gap-0.5">
            <h3 className="text-foreground text-base leading-snug font-semibold">
              {title}
            </h3>
            <p className="text-muted-foreground text-sm">{issuer}</p>
          </div>
        </div>
        <Badge variant={STATUS_BADGE_VARIANT[status]}>{status}</Badge>
      </div>

      <div className="text-muted-foreground flex flex-wrap gap-x-4 gap-y-1 text-xs">
        {issueDate ? <span>Issued {issueDate}</span> : null}
        {credentialId ? <span>ID: {credentialId}</span> : null}
      </div>

      {skills.length > 0 ? (
        <div className="flex flex-wrap gap-1.5">
          {skills.map((skill) => (
            <span
              key={skill}
              className="border-border text-muted-foreground rounded-full border px-2.5 py-1 text-xs font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      ) : null}

      {credentialUrl ? (
        <a
          href={credentialUrl}
          target="_blank"
          rel="noreferrer"
          className="text-primary mt-auto inline-flex w-fit items-center gap-1.5 text-sm font-medium hover:underline"
        >
          Verify Credential
          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      ) : null}
    </motion.div>
  );
}
