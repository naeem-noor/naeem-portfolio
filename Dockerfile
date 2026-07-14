# syntax=docker/dockerfile:1

# =============================================================================
# Stage 1: deps — install dependencies in isolation for maximum layer caching.
# =============================================================================
FROM node:22-alpine AS deps
WORKDIR /app

# libc6-compat is required by some native Node addons on Alpine.
RUN apk add --no-cache libc6-compat

COPY package.json package-lock.json ./
RUN npm ci

# =============================================================================
# Stage 2: builder — compile the Next.js production build.
# =============================================================================
FROM node:22-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Public env vars must be present at build time since Next.js inlines them
# into the client bundle. Override with --build-arg as needed.
ARG NEXT_PUBLIC_SITE_URL=http://localhost:3000
ARG NEXT_PUBLIC_GITHUB=https://github.com
ARG NEXT_PUBLIC_LINKEDIN=https://linkedin.com
ARG NEXT_PUBLIC_EMAIL=hello@example.com
ENV NEXT_PUBLIC_SITE_URL=${NEXT_PUBLIC_SITE_URL} \
    NEXT_PUBLIC_GITHUB=${NEXT_PUBLIC_GITHUB} \
    NEXT_PUBLIC_LINKEDIN=${NEXT_PUBLIC_LINKEDIN} \
    NEXT_PUBLIC_EMAIL=${NEXT_PUBLIC_EMAIL} \
    NEXT_TELEMETRY_DISABLED=1

RUN npm run build

# =============================================================================
# Stage 3: runner — minimal runtime image, only the standalone output.
# =============================================================================
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0

# Run as a non-root user for defense-in-depth.
RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

# `output: "standalone"` (see next.config.ts) traces only the files needed at
# runtime, so this stage never installs the full node_modules tree.
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/ || exit 1

CMD ["node", "server.js"]
