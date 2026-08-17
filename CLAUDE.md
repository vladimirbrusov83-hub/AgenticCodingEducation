# Agentic Coding for Educators — working rules

This repo is the Next.js course site for **Agentic Coding for Educators** (see `README.md` for
what it is and how to run it). Repo root = the app root; there is no `src/`.

Locally this repo sits inside `~/Documents/EduVibeCoding/`, whose parent folder also holds
`PLAN.html` (scope + curriculum source of truth), `MATERIALS-PLAN.html`, `materials/` (course
assets: diagrams, starter repos, cheat sheet, sample data), the research dossiers, and a
parent `CLAUDE.md`. **None of those are in this repo** — don't reference them by a repo-relative
path, and don't copy them in.

## Audience — academic higher ed only

Faculty (professors, lecturers, adjuncts, TAs, instructional designers) and academic
librarians (reference, instruction, scholarly communication, systems, special collections).

Out of scope, do not add: K-12 school teachers, public/community libraries, and their framing
(COPPA/under-13, IEPs, school districts, summer-reading programs). If an example or compliance
note only makes sense outside a college or university, it doesn't belong here.

Every module serves both audiences **inline** — write the faculty and academic-librarian
variants side by side ("If you teach a course… if you work in an academic library…"). All 14
modules use `audience: "both"`.

**No role toggle.** It was removed deliberately (it was dead UI — nothing read the value).
There is no `role-context`, no `RoleToggle`, no `evc-role-v1` key. Don't reintroduce one
without also wiring the module renderer to actually swap content. `Role` / `audience` in
`lib/types.ts` is a separate static concern (the AudienceBadge) and stays.

## Writing a module

- **One module per session.** Insert or edit only that module's object in `content/modules.ts`
  — never rewrite the whole file (it's ~2,250 lines).
- Shape: `content.intro` + ~6–7 `sections` + `summary[]` ("What you can now do"), a hands-on
  exercise section, and a 5-question `quiz`. Then `status: "published"`.
- References go in `content/references.ts`, keyed by module **id** (not slug). They must be
  real and verifiable — no invented sources. `text` supports `*italic*` and inline links.
- After writing: `npm run build`, then commit and push.

## Voice

**Yulia Brusova's academic practitioner voice** — load the `yulia-voice` skill before writing
any lesson content. This matches the AI-for-Academic-Libraries sibling project and overrides
the earlier "6th-grade, second person" rule in `PLAN.html`. Markers: first-person author +
second-person to the learner; "For example," after every claim; "In order to X, Y"; "It is
evident that / There is no doubt that / Undoubtedly"; post-citation interpretation ("This
indicates…"); no contractions; long sentences.

## Markdown subset in lesson bodies

`renderBody` in `app/module/[slug]/page.tsx` supports only:

- `**bold**`, `*italic*`, `[text](url)`, `**[text](url)**`
- blank line = paragraph break
- `\n- ` = bullet list (text before the first bullet becomes a lead paragraph)
- `![alt](/path.png)` **on its own paragraph** = a figure with the alt text as caption
  (this one isn't mentioned in the `ModuleContent` comment in `lib/types.ts`)

Anything else (headings inside a body, tables, code fences) renders as literal text. Section
headings are their own field and become anchor ids via `lib/slugify.ts`.

## Conventions

- Levels have their own accent: foundations `#0F6E56` green, applied `#185FA5` blue, advanced
  `#854F0B` amber. Brand = applied blue. Never encode meaning in color alone — pair with labels.
- localStorage keys: progress `evc-progress-v1`, quiz best scores `evc-quiz-v1`. Both read
  through effects so server and first client render match — keep it hydration-safe.
- Target WCAG 2.1 AA: ≥4.5:1 body contrast, keyboard operable with visible focus, meaningful
  alt text on every image and diagram.
- After any UI change, check the 375px mobile layout before calling it done.
- Adding a module or a route means checking `app/sitemap.ts` and `public/llms.txt` — both list
  the modules and neither updates itself (`llms.txt` is hand-maintained).
- Deploy = git add → commit → push; Vercel auto-deploys. `PRODUCT.md` is intentionally
  untracked — stage files by name, not `git add .`.

## State

All 14 modules published. Screenshots in `public/images/screenshots/` and the tool-walkthrough
mockups in `public/images/walkthrough/` are in place; the walkthrough images are drawn mockups,
not real captures. Still open: connect Vercel and the `learn.brusovcoach.org` subdomain (it
currently 404s), then a final polish pass — 375px mobile, take every quiz, walk prev/next
through all 14 modules.
