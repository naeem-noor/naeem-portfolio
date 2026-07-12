import { zodResolver } from "@hookform/resolvers/zod";
import {
  useForm,
  type UseFormProps,
  type FieldValues,
  type Resolver,
} from "react-hook-form";
import type { ZodType, z } from "zod";

/**
 * A thin, typed wrapper around `useForm` that wires up Zod validation via
 * `@hookform/resolvers`, so every form in the app validates the same way.
 *
 * No portfolio form exists yet in Phase 1 — this hook is foundation-level
 * plumbing for the Contact form (and any future form) built in Phase 2.
 *
 * @example
 * const schema = z.object({ email: z.string().email() });
 * const form = useZodForm(schema, { defaultValues: { email: "" } });
 */
export function useZodForm<TSchema extends ZodType<FieldValues, FieldValues>>(
  schema: TSchema,
  options?: Omit<UseFormProps<z.infer<TSchema>>, "resolver">,
) {
  return useForm<z.infer<TSchema>>({
    ...options,
    resolver: zodResolver(schema) as Resolver<z.infer<TSchema>>,
  });
}
