# Agentic Coding for Educators

A free, self-paced course that teaches **college and university faculty and academic
librarians — with zero programming experience — to build and ship their own web tools with
AI**. You describe what you want in plain language, AI writes the code, you check it and ask
for changes. Along the way learners take three real tools from idea to a live URL: a class
quiz app, a flashcard study site, and a full course portal, plus a capstone of their own.

The tool chain taught is Claude.ai artifacts → GitHub → Vercel → Claude Code.

This repository is the course site itself — a Next.js app that is also meant to be a credible
example of the kind of tool a graduate could build.

## Who it's for

Academic higher ed only:

- **Faculty** — professors, lecturers, adjuncts, TAs, instructional designers.
- **Academic librarians** — reference, instruction, scholarly communication, systems,
  special collections.

Every module serves both audiences inline, with the faculty and academic-librarian worked
examples written side by side. K-12 teachers and public/community libraries are out of scope.

## The curriculum

Fourteen sequential modules across three levels. Each has a lesson body, a hands-on exercise,
a five-question quiz, a "what you can now do" summary, and real references.

**Level 1 — Foundations** (green `#0F6E56`)

1. You Can Build Software Now
2. Meet Your AI Builder
3. How to Talk to AI: Prompting for Builders
4. What Is a Website, Really?
5. Plan Before You Build

**Level 2 — Applied** (blue `#185FA5`)

6. Your Toolbox: Claude, GitHub, Vercel
7. Build #1: A Class Quiz App
8. Getting It Online
9. Fixing and Changing Things
10. Build #2: A Flashcard Study Site

**Level 3 — Advanced** (amber `#854F0B`)

11. Meet Claude Code
12. Build #3: A Full Course Portal
13. Building Responsibly: Data, Privacy, Accessibility, Ownership & Policy
14. Good Habits, Costs & Your Capstone

All 14 modules are published.

## Stack

- Next.js 14.2.29 (App Router) + React 18 + TypeScript
- Tailwind CSS 3.4, Inter via Google Fonts
- `@vercel/analytics`
- No database, no accounts, no server state. Learner progress and quiz scores live in the
  visitor's own browser (`localStorage`); the site collects no personal data.

## Running it locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

Node 18+ recommended.

## Layout

```
app/                    routes (App Router)
  page.tsx              landing page
  curriculum/           full 14-module curriculum
  level/[level]/        one page per level (foundations | applied | advanced)
  module/[slug]/        the lesson page — renders content, TOC, references, quiz
  layout.tsx            metadata, fonts, nav/footer shell
  sitemap.ts robots.ts  SEO
components/             nav, footer, module card, quiz, TOC, badges, progress
content/
  modules.ts            SINGLE SOURCE OF TRUTH — all 14 modules + level/skill metadata
  references.ts         per-module references, keyed by module id
lib/
  types.ts              Module, Level, Role, BuilderSkill, QuizQuestion
  progress.ts           "mark complete" state (localStorage: evc-progress-v1)
  quiz.ts               best quiz score per module (localStorage: evc-quiz-v1)
  slugify.ts            heading → anchor id
public/                 course map, diagrams, screenshots, walkthrough mockups, llms.txt
```

Adding or editing a lesson means editing `content/modules.ts` (and `content/references.ts`
for its sources). There are no per-module page files — every module renders through
`app/module/[slug]/page.tsx`.

## Configuration

`NEXT_PUBLIC_SITE_URL` sets the canonical site URL used by metadata, `sitemap.ts`, `robots.ts`,
and the module page's JSON-LD. It defaults to `https://learn.brusovcoach.org`, which is the
intended domain — **not connected yet**. Set the variable in Vercel once the real domain is
live.

## Deploying

Deployment is git-based: commit and push, and Vercel builds and deploys automatically.

## License / use

Course content © Vladimir Brusov. Written for higher-ed faculty and academic librarians.
Legal and compliance material in the course (FERPA, accessibility law, IRB, IP ownership) is
plain-language guidance, not legal advice.
