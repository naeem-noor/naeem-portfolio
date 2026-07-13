"use client";

import { motion } from "framer-motion";

import { HERO_EASE_OUT } from "@/components/sections/Hero/constants";
import { heroFloatingCards, heroTerminalLines } from "@/data/hero";

/**
 * The Hero's right-side visual: an abstract "engineering workspace" built
 * from a terminal-window mockup and small floating metric cards, over a
 * very subtle animated glow. Deliberately not a portrait/avatar/illustration
 * of a person — the brief. Client-only for the entrance stagger.
 *
 * Imports its content directly from the data layer rather than receiving it
 * as props from the (Server Component) parent: the floating cards carry
 * icon component references, which can't be passed as props across the
 * server/client boundary — a plain module import avoids that entirely.
 */
export function HeroIllustration() {
  return (
    <div
      className="relative mx-auto flex h-[320px] w-full max-w-md items-center justify-center sm:h-[380px] lg:h-[440px] lg:max-w-none"
      aria-hidden="true"
    >
      {/* Ambient glow — very slow, subtle pulse via pure CSS; purely decorative. */}
      <div className="bg-primary/20 animate-glow-pulse absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px]" />
      <div
        className="bg-accent/10 animate-glow-pulse absolute top-1/2 left-1/2 h-48 w-48 -translate-x-[70%] translate-y-[10%] rounded-full blur-[80px]"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Faint grid backdrop. */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />

      {/* Terminal window. */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: HERO_EASE_OUT, delay: 0.3 }}
        className="border-border bg-surface/90 relative z-10 w-[85%] max-w-sm overflow-hidden rounded-xl border shadow-lg backdrop-blur-md sm:w-[80%]"
      >
        <div className="border-border flex items-center gap-1.5 border-b px-4 py-3">
          <span className="bg-danger/70 h-2.5 w-2.5 rounded-full" />
          <span className="bg-warning/70 h-2.5 w-2.5 rounded-full" />
          <span className="bg-success/70 h-2.5 w-2.5 rounded-full" />
          <span className="text-muted-foreground ml-2 font-mono text-[11px]">
            infra.sh
          </span>
        </div>

        <div className="flex flex-col gap-2.5 p-4 font-mono text-[13px] leading-relaxed">
          {heroTerminalLines.map((line, index) => (
            <motion.p
              key={`${line.kind}-${index}`}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.4,
                ease: HERO_EASE_OUT,
                delay: 0.7 + index * 0.18,
              }}
              className={
                line.kind === "success"
                  ? "text-success pl-4"
                  : "text-foreground"
              }
            >
              {line.kind === "command" ? (
                <>
                  <span className="text-primary">$ </span>
                  {line.text}
                </>
              ) : (
                <>✓ {line.text}</>
              )}
            </motion.p>
          ))}
          <motion.span
            aria-hidden="true"
            className="bg-primary mt-0.5 inline-block h-3.5 w-1.5"
            animate={{ opacity: [1, 1, 0, 0] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>

      {/* Floating metric cards. */}
      {heroFloatingCards.map((card, index) => (
        <motion.div
          key={card.id}
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.6,
            ease: HERO_EASE_OUT,
            delay: 1.1 + index * 0.15,
          }}
          className={
            "absolute z-20 " +
            (index === 0
              ? "top-2 right-0 sm:-right-4"
              : "bottom-4 left-0 sm:-left-6")
          }
        >
          {/* Inner wrapper owns the continuous idle bob (pure CSS) so it
              never fights the outer element's one-shot entrance transform. */}
          <div
            className={
              "border-border bg-background/90 flex items-center gap-2.5 rounded-lg border px-3.5 py-2.5 shadow-md backdrop-blur-md " +
              (index === 0 ? "animate-float-slow" : "animate-float-slower")
            }
          >
            <card.icon className="text-accent h-4 w-4" aria-hidden="true" />
            <div className="flex flex-col leading-none">
              <span className="text-foreground text-sm font-semibold">
                {card.value}
              </span>
              <span className="text-muted-foreground text-[11px]">
                {card.label}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
