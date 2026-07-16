import type { ReactNode } from "react";

import { TechnologyBadges } from "@/components/shared/technology-badges";
import type { Project } from "@/types/projects";

export interface ProjectCaseStudyProps {
  project: Project;
}

function CaseStudySection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-foreground text-sm font-semibold tracking-wide uppercase">
        {title}
      </h4>
      {children}
    </div>
  );
}

/**
 * The full case-study content for a project: overview, problem statement,
 * goals, architecture, features, challenges/solutions, lessons learned,
 * and future improvements. Purely presentational — the open/close
 * animation is owned by `ExpandPanel` in the parent `ProjectCard`.
 */
export function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  const { caseStudy } = project;

  return (
    <div className="border-border flex flex-col gap-6 border-t pt-6">
      <CaseStudySection title="Overview">
        <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
          {caseStudy?.overview}
        </p>
      </CaseStudySection>

      <CaseStudySection title="Problem Statement">
        <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
          {caseStudy?.problemStatement}
        </p>
      </CaseStudySection>

      <CaseStudySection title="Goals">
        <ul className="text-muted-foreground flex flex-col gap-1.5 text-sm">
          {caseStudy?.goals.map((goal, index) => (
            <li key={index} className="flex gap-2.5">
              <span className="text-primary" aria-hidden="true">
                —
              </span>
              <span className="text-pretty">{goal}</span>
            </li>
          ))}
        </ul>
      </CaseStudySection>

      <CaseStudySection title="Architecture">
        <p className="text-muted-foreground mb-3 text-sm leading-relaxed text-pretty">
          {caseStudy?.architecture.overview}
        </p>
        <dl className="grid gap-3 sm:grid-cols-2">
          {[
            ["Data Flow", caseStudy?.architecture.dataFlow],
            ["Deployment Strategy", caseStudy?.architecture.deploymentStrategy],
            ["Infrastructure", caseStudy?.architecture.infrastructureNotes],
            ["Containerization", caseStudy?.architecture.containerization],
            ["Future Scalability", caseStudy?.architecture.futureScalability],
          ].map(([label, value]) => (
            <div
              key={label}
              className="border-border bg-background/60 rounded-lg border p-3"
            >
              <dt className="text-foreground text-xs font-semibold">{label}</dt>
              <dd className="text-muted-foreground mt-1 text-xs leading-relaxed text-pretty">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </CaseStudySection>

      <CaseStudySection title="Features">
        <ul className="text-muted-foreground flex flex-col gap-1.5 text-sm">
          {caseStudy?.features.map((feature, index) => (
            <li key={index} className="flex gap-2.5">
              <span className="text-primary" aria-hidden="true">
                —
              </span>
              <span className="text-pretty">{feature}</span>
            </li>
          ))}
        </ul>
      </CaseStudySection>

      <CaseStudySection title="Challenges & Solutions">
        <div className="flex flex-col gap-3">
          {caseStudy?.challenges.map(({ challenge, solution }, index) => (
            <div
              key={index}
              className="border-border bg-background/60 rounded-lg border p-3"
            >
              <p className="text-foreground text-xs font-semibold">Challenge</p>
              <p className="text-muted-foreground mt-1 text-xs leading-relaxed text-pretty">
                {challenge}
              </p>
              <p className="text-foreground mt-2 text-xs font-semibold">
                Solution
              </p>
              <p className="text-muted-foreground mt-1 text-xs leading-relaxed text-pretty">
                {solution}
              </p>
            </div>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection title="Lessons Learned">
        <ul className="text-muted-foreground flex flex-col gap-1.5 text-sm">
          {caseStudy?.lessonsLearned.map((lesson, index) => (
            <li key={index} className="flex gap-2.5">
              <span className="text-primary" aria-hidden="true">
                —
              </span>
              <span className="text-pretty">{lesson}</span>
            </li>
          ))}
        </ul>
      </CaseStudySection>

      <CaseStudySection title="Future Improvements">
        <ul className="text-muted-foreground flex flex-col gap-1.5 text-sm">
          {caseStudy?.futureImprovements.map((item, index) => (
            <li key={index} className="flex gap-2.5">
              <span className="text-primary" aria-hidden="true">
                —
              </span>
              <span className="text-pretty">{item}</span>
            </li>
          ))}
        </ul>
      </CaseStudySection>

      <CaseStudySection title="Tech Stack">
        <TechnologyBadges items={project.technologies} />
      </CaseStudySection>
    </div>
  );
}
