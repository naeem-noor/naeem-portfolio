"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  cardFadeUp,
  staggerContainer,
} from "@/components/sections/Contact/constants";
import { contactInfo } from "@/content/contact";

/**
 * Contact Information cards: Email, LinkedIn, GitHub, Location. Imports
 * `contactInfo` directly rather than via a prop — each item carries an
 * icon component reference, which can't cross the Server-to-Client prop
 * boundary (same reasoning throughout this app since Phase 3's
 * `HeroStats`).
 */
export function ContactInformation() {
  return (
    <motion.div
      variants={staggerContainer(0.08, 0)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="flex flex-col gap-4"
    >
      {contactInfo.map(({ id, label, value, href, icon: Icon }) => {
        const content = (
          <div className="flex items-center gap-3.5">
            <div className="bg-primary/10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
              <Icon className="text-primary h-5 w-5" aria-hidden="true" />
            </div>
            <div className="flex flex-col">
              <span className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
                {label}
              </span>
              <span className="text-foreground text-sm font-semibold">
                {value}
              </span>
            </div>
          </div>
        );

        const cardClassName =
          "border-border bg-surface/60 flex items-center rounded-xl border p-5 backdrop-blur-sm transition-colors" +
          (href ? " hover:border-border-strong hover:bg-surface" : "");

        return (
          <motion.div key={id} variants={cardFadeUp}>
            {href ? (
              <Link
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className={cardClassName}
              >
                {content}
              </Link>
            ) : (
              <div className={cardClassName}>{content}</div>
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
