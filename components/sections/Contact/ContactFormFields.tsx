"use client";

import type {
  FieldErrors,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";

import {
  CONTACT_FIELD_LIMITS,
  type ContactFormValues,
} from "@/lib/validations/contact";
import { cn } from "@/lib/utils";

export interface ContactFormFieldsProps {
  register: UseFormRegister<ContactFormValues>;
  errors: FieldErrors<ContactFormValues>;
  watch: UseFormWatch<ContactFormValues>;
  disabled: boolean;
}

const fieldClassName =
  "border-border bg-background/60 text-foreground placeholder:text-muted-foreground rounded-lg border px-3.5 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background disabled:opacity-60";

const errorClassName = "border-danger focus:ring-danger";

/**
 * The form's actual input fields: Name, Email, Subject, Message, plus a
 * visually-hidden honeypot field for spam deterrence. Purely
 * presentational — all form state (`register`, `errors`, submit handling)
 * lives in the parent `ContactForm`.
 */
export function ContactFormFields({
  register,
  errors,
  watch,
  disabled,
}: ContactFormFieldsProps) {
  const messageLength = watch("message")?.length ?? 0;

  return (
    <div className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="contact-name"
            className="text-foreground text-sm font-medium"
          >
            Name <span className="text-danger">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            disabled={disabled}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={cn(fieldClassName, errors.name && errorClassName)}
            {...register("name")}
          />
          {errors.name ? (
            <p
              id="contact-name-error"
              role="alert"
              className="text-danger text-xs"
            >
              {errors.name.message}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="contact-email"
            className="text-foreground text-sm font-medium"
          >
            Email <span className="text-danger">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            disabled={disabled}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={cn(fieldClassName, errors.email && errorClassName)}
            {...register("email")}
          />
          {errors.email ? (
            <p
              id="contact-email-error"
              role="alert"
              className="text-danger text-xs"
            >
              {errors.email.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="contact-subject"
          className="text-foreground text-sm font-medium"
        >
          Subject <span className="text-danger">*</span>
        </label>
        <input
          id="contact-subject"
          type="text"
          maxLength={CONTACT_FIELD_LIMITS.subject.max}
          disabled={disabled}
          aria-invalid={!!errors.subject}
          aria-describedby={
            errors.subject ? "contact-subject-error" : undefined
          }
          className={cn(fieldClassName, errors.subject && errorClassName)}
          {...register("subject")}
        />
        {errors.subject ? (
          <p
            id="contact-subject-error"
            role="alert"
            className="text-danger text-xs"
          >
            {errors.subject.message}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="flex items-baseline justify-between">
          <label
            htmlFor="contact-message"
            className="text-foreground text-sm font-medium"
          >
            Message <span className="text-danger">*</span>
          </label>
          <span
            className={cn(
              "text-xs",
              messageLength > CONTACT_FIELD_LIMITS.message.max
                ? "text-danger"
                : "text-muted-foreground",
            )}
          >
            {messageLength}/{CONTACT_FIELD_LIMITS.message.max}
          </span>
        </div>
        <textarea
          id="contact-message"
          rows={6}
          maxLength={CONTACT_FIELD_LIMITS.message.max}
          disabled={disabled}
          aria-invalid={!!errors.message}
          aria-describedby={
            errors.message ? "contact-message-error" : undefined
          }
          className={cn(
            fieldClassName,
            "resize-none",
            errors.message && errorClassName,
          )}
          {...register("message")}
        />
        {errors.message ? (
          <p
            id="contact-message-error"
            role="alert"
            className="text-danger text-xs"
          >
            {errors.message.message}
          </p>
        ) : null}
      </div>

      {/* Honeypot — hidden from sighted users and screen readers alike;
          real users never interact with it, so any bot that fills it in
          gets flagged server-side. */}
      <div
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
      >
        <label htmlFor="contact-company">Company</label>
        <input
          id="contact-company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("company")}
        />
      </div>
    </div>
  );
}
