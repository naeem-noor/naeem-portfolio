"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";

import { fadeUp } from "@/components/sections/Certifications/constants";
import type { EducationRecord } from "@/content/education";

export interface EducationCardProps {
  education: EducationRecord;
}

/**
 * A single, larger education card: university, degree, duration,
 * location, relevant coursework, and achievements.
 */
export function EducationCard({ education }: EducationCardProps) {
  const { university, degree, duration, location, coursework, achievements } =
    education;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="border-border bg-surface/60 flex flex-col gap-5 rounded-2xl border p-6 backdrop-blur-sm sm:p-8"
    >
      <div className="flex items-start gap-4">
        <div className="bg-primary/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
          <GraduationCap className="text-primary h-6 w-6" aria-hidden="true" />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-foreground text-lg font-semibold">{degree}</h3>
          <p className="text-muted-foreground text-sm">{university}</p>
          <div className="text-muted-foreground flex flex-wrap items-center gap-x-4 gap-y-1 pt-1 text-xs">
            <span>{duration}</span>
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" aria-hidden="true" />
              {location}
            </span>
          </div>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <h4 className="text-foreground text-xs font-semibold tracking-wide uppercase">
            Relevant Coursework
          </h4>
          <ul className="text-muted-foreground flex flex-col gap-1 text-sm">
            {coursework.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-primary" aria-hidden="true">
                  —
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="text-foreground text-xs font-semibold tracking-wide uppercase">
            Achievements
          </h4>
          <ul className="text-muted-foreground flex flex-col gap-1 text-sm">
            {achievements.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-primary" aria-hidden="true">
                  —
                </span>
                <span className="text-pretty">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
