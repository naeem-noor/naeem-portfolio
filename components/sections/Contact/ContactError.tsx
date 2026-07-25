"use client";

import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

export interface ContactErrorProps {
  message: string;
  onRetry: () => void;
}

/**
 * The form's error state — shown for network failures or server-side
 * errors (not validation errors, which render inline on the field via
 * `ContactFormFields` instead).
 */
export function ContactError({ message, onRetry }: ContactErrorProps) {
  return (
    <motion.div
      role="alert"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="border-danger/30 bg-danger/5 flex flex-col items-center gap-4 rounded-2xl border p-8 text-center"
    >
      <div className="bg-danger/10 flex h-12 w-12 items-center justify-center rounded-full">
        <AlertCircle className="text-danger h-6 w-6" aria-hidden="true" />
      </div>
      <p className="text-foreground max-w-sm text-sm leading-relaxed text-pretty">
        {message}
      </p>
      <button
        type="button"
        onClick={onRetry}
        className="text-primary text-sm font-medium hover:underline"
      >
        Try again
      </button>
    </motion.div>
  );
}
