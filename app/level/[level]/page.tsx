import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { modules, levelMeta } from "@/content/modules";
import ModuleCard from "@/components/module-card";
import type { Level } from "@/lib/types";

const validLevels: Level[] = ["foundations", "applied", "advanced"];

export function generateStaticParams() {
  return validLevels.map((level) => ({ level }));
}

export async function generateMetadata({
  params,
}: {
  params: { level: string };
}): Promise<Metadata> {
  const level = params.level as Level;
  if (!validLevels.includes(level)) return {};
  const meta = levelMeta[level];
  return {
    title: meta.label,
    description: meta.description,
  };
}

const levelConfig: Record<
  Level,
  { accent: string; bg: string; border: string; audience: string; prerequisite: Level | null; next: Level | null }
> = {
  foundations: {
    accent: "#0F6E56",
    bg: "#E1F5EE",
    border: "#b2e8d4",
    audience:
      "For everyone starting out — faculty and academic librarians alike. These five modules give you the vibe-coding mindset, your first build inside Claude, and just enough plain-words vocabulary to never feel lost.",
    prerequisite: null,
    next: "applied",
  },
  applied: {
    accent: "#185FA5",
    bg: "#E6F1FB",
    border: "#b8d5f2",
    audience:
      "Where you build and ship real tools. Set up your toolbox, then complete two guided builds — a class quiz app and a flashcard study site — each ending at a live URL you can share.",
    prerequisite: "foundations",
    next: "advanced",
  },
  advanced: {
    accent: "#854F0B",
    bg: "#FAEEDA",
    border: "#f0d4a0",
    audience:
      "Become a builder. Step up to Claude Code, ship a full multi-page course portal, learn to build responsibly (data, privacy, accessibility, ownership, policy), and finish your capstone.",
    prerequisite: "applied",
    next: null,
  },
};

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://learn.brusovcoach.org";

export default function LevelPage({ params }: { params: { level: string } }) {
  const level = params.level as Level;
  if (!validLevels.includes(level)) notFound();

  const meta = levelMeta[level];
  const config = levelConfig[level];
  const levelModules = modules.filter((m) => m.level === level);

  const levelJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: meta.label,
    description: meta.description,
    url: `${SITE_URL}/level/${level}`,
    isAccessibleForFree: true,
    inLanguage: "en-US",
    educationalLevel: "Professional Development",
    isPartOf: {
      "@type": "Course",
      name: "Agentic Coding for Educators",
      url: `${SITE_URL}/curriculum`,
    },
    hasPart: levelModules.map((m) => ({
      "@type": "LearningResource",
      name: m.title,
      url: `${SITE_URL}/module/${m.slug}`,
    })),
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(levelJsonLd) }}
      />
      {/* Level hero */}
      <div className="border-b" style={{ backgroundColor: config.bg, borderColor: config.border }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="flex items-center gap-2 mb-3">
            <Link href="/curriculum" className="text-sm text-stone-500 hover:text-stone-700 transition-colors">
              Curriculum
            </Link>
            <span className="text-stone-300" aria-hidden="true">/</span>
            <span className="text-sm font-medium" style={{ color: config.accent }}>
              {meta.label}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="max-w-xl">
              <h1 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: config.accent }}>
                {meta.label}
              </h1>
              <p className="text-stone-700 leading-relaxed text-base">{meta.description}</p>
            </div>
            <div className="flex-shrink-0 text-sm text-stone-600 space-y-1">
              <p>
                <span className="font-medium">{levelModules.length}</span> modules
              </p>
              <p>{meta.audience}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        {/* Audience guidance */}
        <div className="rounded-xl border border-stone-200 bg-stone-50 p-5 mb-10">
          <p className="text-sm font-semibold text-stone-700 mb-0.5">Who this level is for</p>
          <p className="text-sm text-stone-600">{config.audience}</p>
        </div>

        {/* Modules */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {levelModules.map((m) => (
            <ModuleCard key={m.slug} module={m} />
          ))}
        </div>

        {/* Navigation between levels */}
        <div className="mt-14 pt-8 border-t border-stone-200 flex flex-col sm:flex-row justify-between gap-4">
          {config.prerequisite && (
            <Link
              href={`/level/${config.prerequisite}`}
              className="flex items-center gap-2 text-sm text-stone-500 hover:text-stone-800 transition-colors group"
            >
              <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {levelMeta[config.prerequisite].label}
            </Link>
          )}
          {config.next && (
            <Link
              href={`/level/${config.next}`}
              className="flex items-center gap-2 text-sm font-medium transition-colors group ml-auto"
              style={{ color: config.accent }}
            >
              {levelMeta[config.next].label}
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
