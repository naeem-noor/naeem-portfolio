"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Loader2, Send } from "lucide-react";
import { useState } from "react";

import { ContactError } from "@/components/sections/Contact/ContactError";
import { ContactFormFields } from "@/components/sections/Contact/ContactFormFields";
import { ContactSuccess } from "@/components/sections/Contact/ContactSuccess";
import type { FormStatus } from "@/components/sections/Contact/types";
import { Button } from "@/components/ui/button";
import { useZodForm } from "@/hooks/use-zod-form";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/validations/contact";
import { submitContactForm } from "@/services/contact";

/**
 * The contact form: React Hook Form + the shared Zod schema (via
 * `useZodForm`, built in an earlier phase specifically for this moment),
 * submitting through the `submitContactForm` service abstraction rather
 * than talking to `/api/contact` directly.
 *
 * Owns a small state machine (`idle` → `submitting` → `success`/`error`)
 * distinct from React Hook Form's own `isSubmitting`, since the result
 * needs to persist and render a full success/error view, not just
 * disable the submit button momentarily.
 */
export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [resultMessage, setResultMessage] = useState("");
  const [delivered, setDelivered] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setError,
    formState: { errors },
  } = useZodForm(contactFormSchema, {
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      company: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setStatus("submitting");

    const result = await submitContactForm(values);

    if (result.success) {
      setDelivered(result.delivered);
      setResultMessage(result.message);
      setStatus("success");
      reset();
      return;
    }

    // Server-side validation errors map back onto the relevant fields
    // rather than only showing the generic error state.
    if (result.fieldErrors) {
      for (const [field, messages] of Object.entries(result.fieldErrors)) {
        if (Array.isArray(messages) && messages[0]) {
          setError(field as keyof ContactFormValues, {
            type: "server",
            message: messages[0],
          });
        }
      }
      setStatus("idle");
      return;
    }

    setResultMessage(result.message);
    setStatus("error");
  }

  function handleReset() {
    setStatus("idle");
    setResultMessage("");
  }

  return (
    <div className="border-border bg-surface/40 rounded-2xl border p-6 backdrop-blur-sm sm:p-8">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <ContactSuccess
            key="success"
            message={resultMessage}
            delivered={delivered}
            onReset={handleReset}
          />
        ) : status === "error" ? (
          <ContactError
            key="error"
            message={resultMessage}
            onRetry={handleReset}
          />
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col gap-6"
          >
            <ContactFormFields
              register={register}
              errors={errors}
              watch={watch}
              disabled={status === "submitting"}
            />

            <Button
              type="submit"
              size="lg"
              disabled={status === "submitting"}
              className="w-full rounded-full sm:w-auto"
            >
              {status === "submitting" ? (
                <>
                  <Loader2
                    className="h-4 w-4 animate-spin"
                    aria-hidden="true"
                  />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
