"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2, Calendar, MapPin } from "lucide-react";

import { Achievements } from "@/components/sections/Experience/Achievements";
import { timelineItemVariant } from "@/components/sections/Experience/constants";
import { Responsibilities } from "@/components/sections/Experience/Responsibilities";
import { TechnologyBadges } from "@/components/sections/Experience/TechnologyBadges";
import type { WorkExperience } from "@/components/sections/Experience/types";
import { Badge } from "@/components/ui/badge";

export interface CompanyCardProps {
  experience: WorkExperience;
}

/**
 * A single role's full card: company header (logo fallback, role,
 * duration, location, employment type), environment, responsibilities
 * (expandable), achievements, and the technology stack. No motion of its
 * own beyond `variants` — always rendered inside `TimelineItem`'s already
 * animated wrapper, so its entrance is inherited via variant propagation.
 */
export function CompanyCard({ experience }: CompanyCardProps) {
  const {
    company,
    role,
    duration,
    location,
    country,
    employmentType,
    environment,
    summary,
    responsibilities,
    achievements,
    technologies,
    current,
  } = experience;

  return (
    <motion.div
      variants={timelineItemVariant}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="border-border bg-surface/60 hover:border-border-strong hover:bg-surface flex flex-col gap-5 rounded-2xl border p-6 backdrop-blur-sm transition-colors sm:p-7"
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <div className="bg-primary/10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
            <Building2 className="text-primary h-5 w-5" aria-hidden="true" />
          </div>
          <div className="flex flex-col gap-0.5">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-foreground text-lg font-semibold">
                {company}
              </h3>
              {current ? <Badge variant="accent">Current</Badge> : null}
            </div>
            <p className="text-muted-foreground text-sm font-medium">{role}</p>
          </div>
        </div>
      </div>

      <div className="text-muted-foreground flex flex-wrap gap-x-5 gap-y-2 text-xs">
        <span className="flex items-center gap-1.5">
          <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
          {duration}
        </span>
        <span className="flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          {location}, {country}
        </span>
        <span className="flex items-center gap-1.5">
          <Briefcase className="h-3.5 w-3.5" aria-hidden="true" />
          {employmentType}
        </span>
      </div>

      <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
        {summary}
      </p>

      <div className="flex flex-col gap-2">
        <span className="text-foreground text-xs font-semibold tracking-wide uppercase">
          {environment}
        </span>
        <Responsibilities items={responsibilities} />
      </div>

      <Achievements items={achievements} />

      <TechnologyBadges items={technologies} />
    </motion.div>
  );
}
