# Contributing

This is a personal portfolio, but it's built and maintained like a real
production project — this doc describes the actual workflow used to ship
changes to it.

## Branch strategy

| Branch      | Purpose                                                                            |
| ----------- | ---------------------------------------------------------------------------------- |
| `main`      | Production. Deploys to Netlify automatically on every push. Always deployable.     |
| `develop`   | Integration branch. Where feature branches land before they're promoted to `main`. |
| `feature/*` | New functionality, e.g. `feature/skills-page`.                                     |
| `fix/*`     | Bug fixes, e.g. `fix/mobile-nav-overflow`.                                         |
| `chore/*`   | Tooling, dependencies, docs, CI — anything that isn't a feature or a fix.          |

## Workflow

```
feature/* (or fix/*, chore/*)
        │
        ▼
   Pull Request → develop
        │
        ▼
   CI validation (lint, typecheck, build, Docker)
        │
        ▼
   Code review
        │
        ▼
      develop
        │
        ▼
   Pull Request → main
        │
        ▼
   CI validation again
        │
        ▼
        main
        │
        ▼
   Netlify production deployment (automatic)
```

1. Branch off `develop` for anything in progress.
2. Open a PR back into `develop`. CI (`.github/workflows/ci.yml` and
   `docker.yml`) runs automatically and must pass.
3. Once `develop` is in a good state, open a PR from `develop` into `main`.
4. Merging to `main` triggers Netlify's production deployment automatically
   — there's no manual deploy step.

## Before opening a PR

```bash
npm run lint
npm run typecheck
npm run build
```

All three should pass locally before you push — CI runs the same checks,
but there's no reason to wait for CI to tell you something you can check
in 30 seconds.

## Commit messages

Conventional, short, present tense: `feat(skills): add technology filter`,
`fix(navbar): correct mobile menu z-index`, `chore(deps): bump next to
15.5.22`.

## Releases

See [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) for how a release/tag is cut.
