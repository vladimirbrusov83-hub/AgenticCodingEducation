import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { modules, getModuleBySlug, levelMeta, skillMeta } from "@/content/modules";
import { LevelBadge, AudienceBadge } from "@/components/badges";
import ModuleQuiz from "@/components/module-quiz";
import type { Level } from "@/lib/types";

export function generateStaticParams() {
  return modules.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const mod = getModuleBySlug(params.slug);
  if (!mod) return {};
  return {
    title: mod.title,
    description: mod.description,
  };
}

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://learn.brusovcoach.org";

const levelAccent: Record<string, string> = {
  foundations: "#0F6E56",
  applied: "#185FA5",
  advanced: "#854F0B",
};

export default function ModulePage({ params }: { params: { slug: string } }) {
  const mod = getModuleBySlug(params.slug);
  if (!mod) notFound();

  const accent = levelAccent[mod.level];
  const meta = levelMeta[mod.level as Level];
  const isComingSoon = mod.status === "coming-soon";

  const relatedModuleData = mod.relatedModules
    .map((slug) => modules.find((m) => m.slug === slug))
    .filter(Boolean) as typeof modules;

  const moduleJsonLd = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: mod.title,
    description: mod.description,
    url: `${SITE_URL}/module/${mod.slug}`,
    learningResourceType: "Module",
    isAccessibleForFree: true,
    inLanguage: "en-US",
    educationalLevel: "Professional Development",
    ...(mod.estimatedMinutes && { timeRequired: `PT${mod.estimatedMinutes}M` }),
    teaches: mod.objectives,
    isPartOf: {
      "@type": "Course",
      name: "Agentic Coding for Educators",
      url: `${SITE_URL}/curriculum`,
    },
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(moduleJsonLd) }}
      />
      <nav className="flex items-center gap-1.5 mb-8 text-sm" aria-label="Breadcrumb">
        <Link href="/curriculum" className="text-stone-400 hover:text-stone-600 transition-colors">
          Curriculum
        </Link>
        <span className="text-stone-300" aria-hidden="true">/</span>
        <Link href={`/level/${mod.level}`} className="text-stone-400 hover:text-stone-600 transition-colors">
          {meta.shortLabel}
        </Link>
        <span className="text-stone-300" aria-hidden="true">/</span>
        <span className="text-stone-600 truncate">{mod.title}</span>
      </nav>

      <header className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <LevelBadge level={mod.level} />
          <AudienceBadge audience={mod.audience} />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-3">{mod.title}</h1>
        <div className="flex items-center gap-3 text-sm text-stone-400">
          <span>~{mod.estimatedMinutes} min</span>
          <span aria-hidden="true">·</span>
          <span>Module {String(mod.id).padStart(2, "0")}</span>
        </div>
      </header>

      {/* Coming-soon note — full lesson content is written one module at a time */}
      {isComingSoon && (
        <div
          className="rounded-lg border-l-4 px-4 py-3 mb-8 text-sm"
          style={{ borderColor: accent, backgroundColor: `${accent}12` }}
        >
          <p className="font-semibold" style={{ color: accent }}>
            In development
          </p>
          <p className="text-stone-700 mt-0.5">
            The full lesson, hands-on exercise, and quiz are being written. Here&apos;s
            what this module will cover.
          </p>
        </div>
      )}

      {/* Lead description */}
      <div className="border-l-4 pl-5 py-1 mb-8" style={{ borderColor: accent }}>
        <p className="text-lg text-stone-700 leading-relaxed m-0">{mod.description}</p>
      </div>

      {/* Objectives */}
      <div
        className="rounded-xl p-6 mb-8 border"
        style={{ borderColor: `${accent}30`, backgroundColor: `${accent}0d` }}
      >
        <h2 className="text-sm font-semibold uppercase tracking-wide mb-4" style={{ color: accent }}>
          What you&apos;ll be able to do
        </h2>
        <ul className="space-y-2">
          {mod.objectives.map((obj, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-stone-700">
              <span
                className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold"
                style={{ backgroundColor: accent }}
                aria-hidden="true"
              >
                {i + 1}
              </span>
              {obj}
            </li>
          ))}
        </ul>
      </div>

      {/* Topics covered */}
      <div className="mb-8">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-stone-500 mb-4">
          What&apos;s inside
        </h2>
        <ul className="space-y-2">
          {mod.topics.map((t, i) => (
            <li key={i} className="flex items-start gap-3 text-stone-700">
              <span
                className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: accent }}
                aria-hidden="true"
              />
              <span className="leading-relaxed">{t}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Builder skills */}
      <div className="p-5 rounded-xl bg-stone-50 border border-stone-200 mb-8">
        <h2 className="text-sm font-semibold text-stone-700 mb-3">Builder skills you&apos;ll practice</h2>
        <div className="flex flex-wrap gap-2">
          {mod.skills.map((s) => (
            <span
              key={s}
              className="px-3 py-1 rounded-md text-sm font-medium bg-white border border-stone-200 text-stone-700"
            >
              {skillMeta[s].label}
            </span>
          ))}
        </div>
      </div>

      {/* Quiz — rendered when the module has one */}
      {mod.quiz && mod.quiz.length > 0 && (
        <div className="mb-8">
          <ModuleQuiz slug={mod.slug} questions={mod.quiz} accent={accent} />
        </div>
      )}

      {/* Related modules */}
      {relatedModuleData.length > 0 && (
        <div className="mt-10">
          <h2 className="text-sm font-semibold text-stone-700 mb-4">Related modules</h2>
          <div className="grid sm:grid-cols-3 gap-3">
            {relatedModuleData.map((related) => (
              <Link
                key={related.slug}
                href={`/module/${related.slug}`}
                className="block p-4 rounded-lg border border-stone-200 hover:border-stone-300 hover:shadow-sm transition-all"
              >
                <p className="text-xs text-stone-400 mb-1">Module {String(related.id).padStart(2, "0")}</p>
                <p className="text-sm font-medium text-stone-800 leading-snug">{related.title}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Prev / next by module number */}
      <div className="mt-10 pt-8 border-t border-stone-200 flex justify-between gap-4">
        {(() => {
          const prev = modules.find((m) => m.id === mod.id - 1);
          return prev ? (
            <Link
              href={`/module/${prev.slug}`}
              className="flex items-center gap-2 text-sm text-stone-500 hover:text-stone-800 transition-colors group"
            >
              <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="truncate max-w-[140px] sm:max-w-none">{prev.title}</span>
            </Link>
          ) : <span />;
        })()}

        {(() => {
          const next = modules.find((m) => m.id === mod.id + 1);
          return next ? (
            <Link
              href={`/module/${next.slug}`}
              className="flex items-center gap-2 text-sm font-medium transition-colors group ml-auto"
              style={{ color: accent }}
            >
              <span className="truncate max-w-[140px] sm:max-w-none">{next.title}</span>
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ) : null;
        })()}
      </div>
    </div>
  );
}
