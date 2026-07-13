/**
 * Generic, dependency-free date helpers.
 *
 * Distinct from `lib/`: this folder holds small, pure utility functions with
 * no knowledge of app configuration, whereas `lib/` holds app-level concerns
 * (site config, the `cn` styling helper, etc.).
 */

/**
 * Returns the current four-digit year, e.g. for footer copyright notices.
 */
export function getCurrentYear(): number {
  return new Date().getFullYear();
}
