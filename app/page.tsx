import type { Metadata } from "next";
import Link from "next/link";
import { modules } from "@/content/modules";
import ModuleCard from "@/components/module-card";
import RoleEntry from "@/components/role-entry";

export const metadata: Metadata = {
  title: "Agentic Coding for Educators",
  description:
    "Learn to build and ship your own web tools with AI — a hands-on, no-code course for college and university faculty and academic librarians. From your first page in Claude to a live course portal.",
};

const levelPreviews = [
  {
    key: "foundations",
    eyebrow: "Start here",
    title: "Level 1: Foundations",
    blurb: "Five modules. What vibe-coding is, your first build in Claude, prompting, and planning.",
    accent: "#0F6E56",
  },
  {
    key: "applied",
    eyebrow: "Next step",
    title: "Level 2: Applied",
    blurb: "Five modules. Set up your toolbox, then ship a quiz app and a flashcard site to live URLs.",
    accent: "#185FA5",
  },
  {
    key: "advanced",
    eyebrow: "Become a builder",
    title: "Level 3: Advanced",
    blurb: "Four modules. Claude Code, a full course portal, building responsibly, and your capstone.",
    accent: "#854F0B",
  },
] as const;

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="bg-white pt-14 pb-16 sm:pt-20 sm:pb-20 border-b border-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium mb-6"
            style={{ color: "#185FA5", backgroundColor: "#E6F1FB", borderColor: "#b8d5f2" }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#185FA5" }} aria-hidden="true" />
            For higher-ed faculty and academic librarians — no coding experience needed.
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 leading-tight mb-3">
            You can build software now.
          </h1>

          <p className="text-base font-semibold mb-5" style={{ color: "#185FA5" }}>
            A hands-on course in building your own web tools with AI.
          </p>

          <p className="text-lg sm:text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto mb-8">
            Describe what you want in plain language, let AI write the code, check it, and
            ship it. In fourteen short modules you&apos;ll go from your first page in Claude
            to a live quiz app, a flashcard site, and a full course portal on the internet.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/level/foundations"
              className="btn-primary text-white font-semibold px-6 py-3 rounded-xl text-base"
              style={{ backgroundColor: "#185FA5" }}
            >
              Start with Level 1: Foundations
            </Link>
            <Link
              href="/curriculum"
              className="btn-outline border-stone-300 text-stone-700 hover:border-stone-400 font-medium px-6 py-3 rounded-xl text-base"
            >
              Browse the full curriculum
            </Link>
          </div>

          <p className="text-xs text-stone-400 mt-4">
            No math, no coding classes, no expensive software. Just a free Claude account.
          </p>
        </div>
      </section>

      {/* ─── Trust signals ─── */}
      <section className="border-b border-stone-100 bg-stone-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-2xl font-bold text-stone-900">3 real builds</p>
              <p className="text-sm text-stone-500 mt-0.5">
                A quiz app, a flashcard site, and a full course portal — all live on the internet
              </p>
            </div>
            <div className="sm:border-x border-stone-200">
              <p className="text-2xl font-bold text-stone-900">14 modules</p>
              <p className="text-sm text-stone-500 mt-0.5">
                Short, hands-on, and sequential — each with an exercise and a quick quiz
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-stone-900">$0 to start</p>
              <p className="text-sm text-stone-500 mt-0.5">
                Free tiers of Claude, GitHub, and Vercel are genuinely enough
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Choose your track ─── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-3">
              Pick your track
            </h2>
            <p className="text-stone-500 text-base max-w-xl mx-auto">
              Every module works for both. The worked examples and project ideas come in a
              faculty version and a librarian version, shown side by side throughout the course.
            </p>
          </div>
          <RoleEntry />
        </div>
      </section>

      {/* ─── Level previews ─── */}
      {levelPreviews.map((lvl, idx) => {
        const levelModules = modules
          .filter((m) => m.level === lvl.key)
          .slice(0, 3);
        return (
          <section
            key={lvl.key}
            className={`py-16 sm:py-20 ${idx % 2 === 0 ? "bg-stone-50 border-y border-stone-100" : ""}`}
          >
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
              <div className="flex items-end justify-between mb-8 gap-4">
                <div>
                  <span
                    className="inline-block text-xs font-semibold uppercase tracking-wide mb-1.5"
                    style={{ color: lvl.accent }}
                  >
                    {lvl.eyebrow}
                  </span>
                  <h2 className="text-2xl font-bold text-stone-900">{lvl.title}</h2>
                  <p className="text-stone-500 text-sm mt-1">{lvl.blurb}</p>
                </div>
                <Link
                  href={`/level/${lvl.key}`}
                  className="flex-shrink-0 text-sm font-medium transition-colors"
                  style={{ color: lvl.accent }}
                >
                  All modules →
                </Link>
              </div>

              <div className="grid sm:grid-cols-3 gap-5">
                {levelModules.map((m) => (
                  <ModuleCard key={m.slug} module={m} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* ─── About teaser ─── */}
      <section className="py-16 sm:py-20 border-t border-stone-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">
            Real building, not &ldquo;let the AI run wild&rdquo;
          </h2>
          <p className="text-stone-600 leading-relaxed mb-6">
            You&apos;ll always look at what got built, test it, and be able to say what it
            does. The course builds in privacy, accessibility, and your institution&apos;s
            rules from the start — so what you ship is safe to put in front of students and
            colleagues.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
            style={{ color: "#185FA5" }}
          >
            About this course →
          </Link>
        </div>
      </section>
    </>
  );
}
