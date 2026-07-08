import Link from "next/link";
import type { Module } from "@/lib/types";
import { AudienceBadge, SkillBadge, ComingSoonBadge } from "@/components/badges";
import QuizScoreBadge from "@/components/quiz-score-badge";

const levelColors: Record<
  string,
  { border: string; numBg: string; numText: string; accent: string }
> = {
  foundations: {
    border: "border-stone-200 hover:border-emerald-300",
    numBg: "#E1F5EE",
    numText: "#0b5342",
    accent: "#0F6E56",
  },
  applied: {
    border: "border-stone-200 hover:border-sky-300",
    numBg: "#E6F1FB",
    numText: "#12497f",
    accent: "#185FA5",
  },
  advanced: {
    border: "border-stone-200 hover:border-amber-300",
    numBg: "#FAEEDA",
    numText: "#653c08",
    accent: "#854F0B",
  },
};

export default function ModuleCard({
  module,
  step,
  totalSteps,
  dimmed = false,
}: {
  module: Module;
  step?: number;
  totalSteps?: number;
  dimmed?: boolean;
}) {
  const colors = levelColors[module.level];
  const isLocked = module.status === "coming-soon";

  const cardContent = (
    <div
      className={`card border ${colors.border} hover:shadow-md h-full flex flex-col rounded-xl bg-white p-6 transition-all duration-150 ${
        dimmed ? "opacity-50" : ""
      }`}
    >
      {/* Header row */}
      <div className="flex items-start gap-4 mb-4">
        <span
          className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold"
          style={{ backgroundColor: colors.numBg, color: colors.numText }}
          aria-hidden="true"
        >
          {step ? step : String(module.id).padStart(2, "0")}
        </span>
        <div className="flex-1 min-w-0">
          {step && totalSteps && (
            <p
              className="text-xs font-semibold uppercase tracking-wide mb-0.5"
              style={{ color: colors.accent }}
            >
              Step {step} of {totalSteps}
            </p>
          )}
          <h3 className="font-semibold text-stone-900 text-base leading-snug mb-2">
            {module.title}
          </h3>
          <div className="flex flex-wrap gap-1.5">
            <AudienceBadge audience={module.audience} size="xs" />
            {isLocked && <ComingSoonBadge />}
            <QuizScoreBadge slug={module.slug} />
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-stone-600 leading-relaxed mb-4 flex-1">
        {module.description}
      </p>

      {/* Builder-skill tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {module.skills.map((s) => (
          <SkillBadge key={s} skill={s} size="xs" />
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-stone-100">
        <span className="text-xs text-stone-400">
          {module.estimatedMinutes} min
        </span>
        <span className="text-xs font-medium" style={{ color: colors.accent }}>
          {isLocked ? "Preview module →" : "Open module →"}
        </span>
      </div>
    </div>
  );

  return (
    <Link
      href={`/module/${module.slug}`}
      className="block h-full"
      aria-label={`Open module: ${module.title}`}
    >
      {cardContent}
    </Link>
  );
}
