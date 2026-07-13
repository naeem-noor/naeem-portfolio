# AI_CONTEXT.md

# Naeem Portfolio

## AI Project Context & Development Guide

---

# Project Overview

This repository contains the source code for my professional portfolio website.

This is **not** just a portfolio.

It is a long-term software engineering project designed to showcase my experience while serving as a real-world laboratory for learning and demonstrating modern Cloud Engineering, DevOps, Infrastructure Automation, and Frontend Engineering.

Every feature should be implemented using production-quality engineering practices.

---

# About Me

Name

Naeem Noor

Profession

Technical Support Engineer

Career Goal

Transition into

- Cloud Engineer
- DevOps Engineer
- Platform Engineer
- Infrastructure Engineer

Portfolio Purpose

Showcase

- Professional Experience
- Technical Skills
- Certifications
- Projects
- Blog
- DevOps Journey

while demonstrating software engineering best practices.

---

# Project Vision

The portfolio should feel like a premium SaaS product.

It should immediately communicate

Professionalism

Engineering Excellence

Attention to Detail

Modern UI

Performance

Accessibility

Scalability

Every design decision should support this vision.

---

# Design Inspiration

The design language should take inspiration from

- Vercel
- Linear
- Stripe
- Raycast
- Apple
- Notion

Characteristics

✓ Minimal

✓ Premium

✓ Spacious

✓ Elegant

✓ Fast

✓ Clean

Avoid

❌ Generic portfolio templates

❌ Excessive gradients

❌ Heavy shadows

❌ Neon colors

❌ Busy layouts

Less is more.

---

# Technology Stack

Frontend

- Next.js 15
- App Router
- React
- TypeScript

Styling

- Tailwind CSS v4

UI

- shadcn/ui

Animations

- Framer Motion

Icons

- Lucide React

Theme

- next-themes

Forms

- React Hook Form
- Zod

Utilities

- clsx
- tailwind-merge
- class-variance-authority

Package Manager

- npm

---

# DevOps Stack

The portfolio is also a DevOps practice project.

Technologies

- Docker
- Docker Compose
- GitHub
- GitHub Actions
- Netlify
- Terraform (later)
- AWS (later)
- Kubernetes (later)
- Nginx (later)
- Prometheus (later)
- Grafana (later)

Whenever possible, new features should support future DevOps integrations.

---

# Coding Philosophy

Always write production-quality code.

Prioritize

- readability
- maintainability
- scalability
- simplicity

Never write quick hacks.

Never duplicate code.

Prefer composition over repetition.

---

# TypeScript Rules

Strict mode.

Never use

any

Always create interfaces and types.

Prefer explicit typing.

---

# React Guidelines

Use

Server Components

whenever possible.

Client Components

only when necessary.

Avoid unnecessary re-renders.

Use memoization only when it provides value.

---

# Folder Organization

Keep files small.

Every component should have one responsibility.

Preferred structure

components/

layout/

shared/

sections/

ui/

No huge component files.

---

# Naming Conventions

Components

PascalCase

Hooks

useSomething

Types

SomethingProps

Utilities

camelCase

Constants

UPPER_CASE

Files

kebab-case when appropriate

---

# Styling Rules

Use Tailwind utilities.

Do not use inline styles.

Use design tokens.

Prefer reusable utility classes.

Spacing should follow an 8px grid.

---

# Color Palette

Background

#030712

Surface

#111827

Card

#1F2937

Primary

#2563EB

Accent

#38BDF8

Text

#F8FAFC

Muted

#94A3B8

Border

rgba(255,255,255,.08)

Radius

16px

---

# Typography

Font

Geist Sans

Use consistent typography.

Large headings.

Comfortable reading width.

Proper spacing.

---

# Performance Goals

Target Lighthouse

Performance

100

Accessibility

100

Best Practices

100

SEO

100

Avoid unnecessary JavaScript.

Optimize images.

Lazy load when appropriate.

Use Server Components.

---

# Accessibility

Always support

Keyboard navigation

ARIA labels

Semantic HTML

Visible focus states

Reduced motion

Color contrast

---

# SEO Goals

Use

Metadata API

OpenGraph

Twitter Cards

robots.txt

sitemap.xml

Canonical URLs

Structured data when appropriate.

---

# Git Workflow

Never work directly on main.

Workflow

main

↓

develop

↓

feature branch

↓

Pull Request

↓

develop

↓

main

Use Conventional Commits.

Examples

feat:

fix:

refactor:

style:

docs:

perf:

chore:

---

# Docker Philosophy

The application should always be Docker compatible.

Every new feature should continue to support containerization.

Never introduce changes that break Docker builds.

---

# Code Quality

Maintain

ESLint

Prettier

Husky

lint-staged

No warnings.

No unused imports.

No unused files.

---

# Reusable Components

Always prefer reusable components over duplicated markup.

Think in systems.

Not pages.

---

# Development Phases

## Phase 1

Status

✅ Completed

Includes

- Next.js
- TypeScript
- Tailwind
- Docker
- Theme
- Project foundation
- Tooling

---

## Phase 2

Status

🚧 In Progress

Goals

Application Shell

Navbar

Footer

Container

Theme Toggle

Loading Screen

Scroll Progress

Scroll To Top

Page Transition

---

## Phase 3

Hero Section

Premium landing experience.

---

## Phase 4

About

Experience

Journey

---

## Phase 5

Skills

Technology showcase

---

## Phase 6

Projects

Interactive project cards

Case studies

Architecture diagrams

GitHub links

Live demos

---

## Phase 7

Certifications

Education

Achievements

---

## Phase 8

Contact

Resume

Social Links

---

## Phase 9

Blog

Markdown

Syntax highlighting

Categories

Search

---

## Phase 10

Admin Dashboard

Content management

Authentication

---

## Phase 11

DevOps

GitHub Actions

Docker

Terraform

AWS

Nginx

CI/CD

Monitoring

---

# UI Principles

Everything should feel

Premium

Elegant

Fast

Responsive

Minimal

Professional

Micro animations should be subtle.

Never distracting.

---

# Before Writing Code

Always

1. Analyze the existing project.

2. Reuse existing architecture.

3. Reuse existing utilities.

4. Reuse existing hooks.

5. Reuse existing styles.

6. Avoid duplication.

7. Preserve consistency.

---

# AI Instructions

Whenever continuing development:

- Read this file first.
- Analyze the current repository.
- Understand previous phases.
- Continue from the current state.
- Never rewrite working code without reason.
- Improve existing architecture rather than replacing it.
- Keep code production-ready.
- Explain architectural decisions when making significant changes.

---

# Definition of Done

A task is complete only if:

✓ Project builds successfully

✓ No TypeScript errors

✓ No ESLint errors

✓ Docker build succeeds

✓ Responsive on all screen sizes

✓ Accessible

✓ Production ready

✓ Clean code

✓ Reusable architecture

✓ Consistent with project vision

---

# End of Context

This file is the single source of truth for the project.

Every AI session must read this file before making any changes.
