"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Fragment } from "react";

import {
  fadeUp,
  staggerContainer,
} from "@/components/sections/Skills/constants";
import { workflowFutureSteps, workflowSteps } from "@/content/skills";
import { cn } from "@/lib/utils";
import type { WorkflowStep } from "@/types/skills";

function StepNode({ step }: { step: WorkflowStep }) {
  return (
    <motion.div
      variants={fadeUp}
      className={cn(
        "border-border bg-surface/60 flex flex-col items-center gap-2 rounded-xl border p-4 text-center",
        step.future && "bg-surface/30 border-dashed",
      )}
    >
      <div
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-lg",
          step.future ? "bg-muted-foreground/10" : "bg-primary/10",
        )}
      >
        <step.icon
          className={cn(
            "h-4.5 w-4.5",
            step.future ? "text-muted-foreground" : "text-primary",
          )}
          aria-hidden="true"
        />
      </div>
      <span
        className={cn(
          "text-xs font-medium",
          step.future ? "text-muted-foreground" : "text-foreground",
        )}
      >
        {step.label}
      </span>
    </motion.div>
  );
}

function Connector({ future = false }: { future?: boolean }) {
  return (
    <motion.div
      variants={fadeUp}
      className="flex items-center justify-center"
      aria-hidden="true"
    >
      <ChevronRight
        className={cn(
          "h-4 w-4 shrink-0 rotate-90 sm:rotate-0",
          future ? "text-muted-foreground/50" : "text-primary/60",
        )}
      />
    </motion.div>
  );
}

function StepRow({
  steps,
  future = false,
}: {
  steps: WorkflowStep[];
  future?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-2 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-2">
      {steps.map((step, index) => (
        <Fragment key={step.id}>
          {index > 0 ? <Connector future={future} /> : null}
          <StepNode step={step} />
        </Fragment>
      ))}
    </div>
  );
}

/**
 * The development workflow, shown as a chain of connected steps. The
 * "current" row is the real, in-use pipeline; the "future" row is
 * genuinely aspirational and styled distinctly (dashed borders, muted
 * icons) rather than presented as already in place.
 */
export function WorkflowDiagram() {
  return (
    <motion.div
      variants={staggerContainer(0.06, 0)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="flex flex-col gap-10"
    >
      <div className="flex flex-col gap-4">
        <span className="text-foreground text-xs font-semibold tracking-wide uppercase">
          Current
        </span>
        <StepRow steps={workflowSteps} />
      </div>

      <div className="flex flex-col gap-4">
        <span className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
          Future
        </span>
        <StepRow steps={workflowFutureSteps} future />
      </div>
    </motion.div>
  );
}
