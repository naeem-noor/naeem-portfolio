/**
 * Generic, dependency-free string helpers shared across the app.
 */

/**
 * Capitalizes the first character of a string, leaving the rest untouched.
 */
export function capitalize(value: string): string {
  if (value.length === 0) return value;
  return value.charAt(0).toUpperCase() + value.slice(1);
}
