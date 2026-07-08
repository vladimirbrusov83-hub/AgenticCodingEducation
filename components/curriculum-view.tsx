import Link from "next/link";
import { modules, levelMeta } from "@/content/modules";
import ModuleCard from "@/components/module-card";

const levels = ["foundations", "applied", "advanced"] as const;

const levelStyle: Record<string, { accent: string; bg: string; border: string }> = {
  foundations: { accent: "#0F6E56", bg: "#E1F5EE", border: "#b2e8d4" },
  applied: { accent: "#185FA5", bg: "#E6F1FB", border: "#b8d5f2" },
  advanced: { accent: "#854F0B", bg: "#FAEEDA", border: "#f0d4a0" },
};

export default function CurriculumView() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="max-w-2xl mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
          Full Curriculum
        </h1>
        <p className="text-stone-600 leading-relaxed text-lg">
          Fourteen modules across three levels. Work through them in order, 1 to 14 —
          each build stands on the one before it. Pick a track from the top bar and the
          worked examples tune to faculty or academic-librarian work.
        </p>
      </div>

      {levels.map((levelKey) => {
        const meta = levelMeta[levelKey];
        const levelModules = modules.filter((m) => m.level === levelKey);
        const style = levelStyle[levelKey];
        return (
          <section key={levelKey} className="mb-16">
            <div
              className="rounded-xl p-6 mb-7 border"
              style={{ backgroundColor: style.bg, borderColor: style.border }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h2 className="text-xl font-bold" style={{ color: style.accent }}>
                    {meta.label}
                  </h2>
                  <p className="text-stone-700 text-sm mt-1">{meta.description}</p>
                </div>
                <div className="flex-shrink-0 text-right">
                  <p className="text-sm font-medium text-stone-700">
                    {levelModules.length} modules
                  </p>
                  <Link
                    href={`/level/${levelKey}`}
                    className="text-xs font-medium mt-0.5 inline-block transition-colors"
                    style={{ color: style.accent }}
                  >
                    View level hub →
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {levelModules.map((m) => (
                <ModuleCard key={m.slug} module={m} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
