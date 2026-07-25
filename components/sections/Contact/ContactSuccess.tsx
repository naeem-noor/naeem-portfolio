"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export interface ContactSuccessProps {
  message: string;
  delivered: boolean;
  onReset: () => void;
}

/**
 * The form's success state. Deliberately renders the server's exact
 * `message` rather than a generic "Message sent!" — when `delivered` is
 * false (no email provider configured yet), the copy honestly says so
 * instead of implying an email went out.
 */
export function ContactSuccess({ message, onReset }: ContactSuccessProps) {
  return (
    <motion.div
      role="status"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="border-border bg-surface/60 flex flex-col items-center gap-4 rounded-2xl border p-8 text-center"
    >
      <div className="bg-success/10 flex h-12 w-12 items-center justify-center rounded-full">
        <CheckCircle2 className="text-success h-6 w-6" aria-hidden="true" />
      </div>
      <p className="text-foreground max-w-sm text-sm leading-relaxed text-pretty">
        {message}
      </p>
      <button
        type="button"
        onClick={onReset}
        className="text-primary text-sm font-medium hover:underline"
      >
        Send another message
      </button>
    </motion.div>
  );
}
