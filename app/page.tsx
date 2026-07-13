import { FoundationHero } from "@/components/sections/foundation-hero";

/**
 * Temporary Phase 1 landing content.
 *
 * This intentionally does NOT contain portfolio sections (About, Projects,
 * Experience, Contact) — those are scoped to a later phase. It exists only
 * to prove the app shell (fonts, theme, Navbar, Footer, design tokens)
 * renders correctly end-to-end.
 */
export default function HomePage() {
  return <FoundationHero />;
}
