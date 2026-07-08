"use client";

import { useBestScore } from "@/lib/quiz";

// Renders the learner's best quiz score for a module. SSR-safe: shows nothing
// on the server and until hydrated, so it never causes a hydration mismatch.
export default function QuizScoreBadge({ slug }: { slug: string }) {
  const best = useBestScore(slug);
  if (best === null) return null;
  const passed = best >= 4;
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium border ${
        passed
          ? "bg-emerald-50 text-emerald-700 border-emerald-200"
          : "bg-stone-100 text-stone-500 border-stone-200"
      }`}
      title="Your best quiz score"
    >
      Quiz {best}/5
    </span>
  );
}
