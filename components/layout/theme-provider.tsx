"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ComponentProps } from "react";

type ThemeProviderProps = ComponentProps<typeof NextThemesProvider>;

/**
 * Wraps `next-themes` so the app can toggle between `light`, `dark`, and
 * `system` color schemes. Dark is the default theme (see `defaultTheme` in
 * the root layout), matching the product's default visual identity.
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
