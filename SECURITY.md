# Security Policy

## Reporting a vulnerability

This is a personal portfolio site, not a service handling sensitive user
data — but if you find a real security issue (XSS, an exposed secret, a
way to abuse the contact form's API route, etc.), please report it
privately rather than opening a public issue:

- Email: see the address in [`content/contact.ts`](content/contact.ts) /
  the site's `/contact` page.

Please include steps to reproduce. A fix will be prioritized based on
actual impact.

## Scope

In scope: this repository's own code (`app/`, `components/`, `lib/`,
`services/`, the Dockerfile, and CI workflows).

Out of scope: third-party services this project depends on (Netlify,
Resend, GitHub) — report those directly to the provider.

## Supply chain

- Dependencies are reviewed via `npm audit` and kept current via
  [Dependabot](.github/dependabot.yml).
- `package-lock.json` is committed and CI installs with `npm ci` (exact,
  frozen versions) — never `npm install`.
- No secrets are committed to this repository. See
  [`docs/DEVOPS.md`](docs/DEVOPS.md#environment-variables) for the full
  list of environment variables and where each one is expected to live.

## In this codebase specifically

- The contact form (`app/api/contact/route.ts`) validates all input
  server-side with the same Zod schema the client uses — client-side
  validation is never trusted alone.
- No API keys or secrets are ever read in Client Components — only inside
  Server Components, Route Handlers, or build-time config.
- The Docker image runs as a non-root user (see `Dockerfile`).
