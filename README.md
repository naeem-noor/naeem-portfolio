# Portfolio — Cloud & DevOps Engineer

> **Status: v1 · Phase 1 — Foundation.** This phase ships the application
> shell, design system, tooling, and Docker pipeline only. The portfolio
> content sections (About, Experience, Projects, Contact) are intentionally
> **not** built yet and will land in a later phase.

## Project Overview

A production-grade personal portfolio for a Cloud & DevOps Engineer,
built to double as a demonstration of modern frontend engineering practices:
a typed, modular Next.js architecture, a token-driven design system, strict
tooling, and a container pipeline that mirrors how the app would actually be
shipped in production.

## Tech Stack

| Concern       | Choice                                                        |
| ------------- | ------------------------------------------------------------- |
| Framework     | [Next.js 15](https://nextjs.org) (App Router)                 |
| Language      | TypeScript (strict mode)                                      |
| Styling       | [Tailwind CSS v4](https://tailwindcss.com) (CSS-first theme)  |
| UI primitives | [shadcn/ui](https://ui.shadcn.com) + class-variance-authority |
| Animation     | [Framer Motion](https://www.framer.com/motion/)               |
| Icons         | [lucide-react](https://lucide.dev)                            |
| Theming       | [next-themes](https://github.com/pacocoursey/next-themes)     |
| Forms         | React Hook Form + Zod + `@hookform/resolvers`                 |
| Fonts         | Geist Sans / Geist Mono                                       |
| Package mgr   | npm                                                           |
| Containers    | Docker (multi-stage, Alpine) + Docker Compose                 |
| CI            | GitHub Actions                                                |

## Folder Structure

```
.
├── app/                    # App Router: layout, global styles, route segments
├── components/
│   ├── ui/                 # shadcn/ui primitives (Button, etc.)
│   ├── layout/              # App shell: Navbar, Footer, Container, Section, theme
│   ├── sections/            # Page sections (placeholder in Phase 1)
│   └── shared/               # Small components reused across layout regions
├── hooks/                   # Reusable React hooks
├── lib/                      # App-level config & helpers (site config, cn())
├── utils/                    # Generic, dependency-free utility functions
├── types/                    # Shared TypeScript types
├── data/                     # Static content (nav items, social links)
├── styles/                   # Design tokens & Tailwind v4 theme mapping
├── public/
│   ├── images/               # Static images
│   ├── icons/                 # Favicon & icon assets
│   └── resume/                 # Downloadable resume/CV
├── docker/                    # Supplementary Docker assets (see docker/README.md)
├── .github/workflows/          # CI pipeline
├── Dockerfile                   # Multi-stage production image
├── docker-compose.yml             # Local/production container orchestration
└── .env.example                    # Documented environment variables
```

Every folder has one job: `lib` is app-aware configuration and helpers,
`utils` is pure and app-agnostic, `data` is static content, `types` is shared
contracts, and `components/*` is split by how broadly a component is reused
(`ui` = design-system primitive, `layout` = app shell, `shared` = cross-cutting,
`sections` = page content).

## Installation

```bash
git clone <your-repo-url>
cd portfolio
cp .env.example .env
npm install
```

## Environment Variables

Copy `.env.example` to `.env` and fill in your own values:

| Variable               | Description                                     |
| ---------------------- | ----------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL, used in metadata/Open Graph |
| `NEXT_PUBLIC_GITHUB`   | GitHub profile URL                              |
| `NEXT_PUBLIC_LINKEDIN` | LinkedIn profile URL                            |
| `NEXT_PUBLIC_EMAIL`    | Contact email address                           |

## Development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000). Dark mode is the
default theme; use the toggle in the navbar to cycle light → dark → system.

### Available scripts

| Script                 | Purpose                           |
| ---------------------- | --------------------------------- |
| `npm run dev`          | Start the dev server              |
| `npm run build`        | Production build                  |
| `npm run start`        | Serve the production build        |
| `npm run lint`         | Run ESLint                        |
| `npm run lint:fix`     | Run ESLint with autofix           |
| `npm run typecheck`    | Run `tsc --noEmit`                |
| `npm run format`       | Format the codebase with Prettier |
| `npm run format:check` | Check formatting without writing  |
| `npm run docker:build` | Build the production Docker image |
| `npm run docker:run`   | Build & run via Docker Compose    |

### Git hooks

Husky + lint-staged run on every commit:

1. `lint-staged` — ESLint (`--fix`) and Prettier on staged files
2. `npm run typecheck` — full-project TypeScript check

A commit is blocked if either step fails.

## Build

```bash
npm run build
npm run start
```

`next.config.ts` sets `output: "standalone"`, so `next build` also produces a
minimal, self-contained server bundle under `.next/standalone` — this is what
the Docker image copies into its final stage.

## Docker

Build and run the production image directly:

```bash
docker build -t portfolio:latest .
docker run --rm -p 3000:3000 --env-file .env portfolio:latest
```

Or with Compose (recommended — reads `.env` automatically):

```bash
cp .env.example .env   # first time only
docker compose up --build
```

The app is available at [http://localhost:3000](http://localhost:3000).
The image is a 3-stage build (`deps` → `builder` → `runner`) on
`node:22-alpine`, runs as a non-root user, and only ships the traced
standalone output — no dev dependencies or full `node_modules` in the final
image.

## Deployment

The container is platform-agnostic and runs anywhere that accepts a Docker
image: a VM, a container-orchestration platform (ECS, Cloud Run, AKS/EKS/GKE),
or a PaaS with Docker support. The included GitHub Actions workflow
(`.github/workflows/ci.yml`) lints, typechecks, format-checks, builds the app,
and builds the Docker image on every push and pull request to `main` — wire a
deploy step onto the end of that pipeline for your target platform (e.g.
push to a registry and trigger a rolling deploy).

## Future Roadmap

- [ ] **Phase 2** — Build portfolio content sections: About, Experience,
      Skills, Projects, Contact form (React Hook Form + Zod validation)
- [ ] **Phase 3** — Populate `data/` with real project and experience content
- [ ] **Phase 4** — Add a contact form API route + email delivery
- [ ] **Phase 5** — SEO pass: structured data, sitemap, `robots.txt`
- [ ] **Phase 6** — Deployment pipeline: registry push + rolling deploy in CI
- [ ] **Phase 7** — Add basic component/unit tests

## Code Quality

- Strict TypeScript, no `any` (enforced via ESLint's
  `@typescript-eslint/no-explicit-any`)
- `noUncheckedIndexedAccess` enabled for safer array/object access
- Single design-token source of truth in `styles/tokens.css`
- No duplicated layout logic — `Container` and `Section` are the only
  places that own page width and vertical rhythm
- Every dependency in `package.json` is actually imported and used somewhere
  in the codebase
