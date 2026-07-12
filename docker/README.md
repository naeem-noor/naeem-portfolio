# docker/

The primary `Dockerfile`, `docker-compose.yml`, and `.dockerignore` live at the
**project root** — that's where Docker and most CI/CD providers expect to
find them by convention, and it's required for `docker-compose.yml`'s build
`context: .` to see the whole project.

This folder is reserved for **supplementary, environment-specific Docker
assets** as the project grows, for example:

- `docker/nginx/` — a reverse-proxy config, if the app is later served behind
  Nginx instead of directly.
- `docker/compose.override.staging.yml` — a Compose override for a staging
  environment.
- Additional Dockerfiles for auxiliary services (e.g. a preview/CMS
  container), should the architecture expand beyond a single Next.js app.

There is nothing here yet in Phase 1 — the single-service setup at the
project root is all this stage needs.
