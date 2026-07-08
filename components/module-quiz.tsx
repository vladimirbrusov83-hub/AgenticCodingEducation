"use client";

import { useState } from "react";
import type { QuizQuestion } from "@/lib/types";
import { saveBestScore } from "@/lib/quiz";

const PASS_MARK = 4; // out of 5

export default function ModuleQuiz({
  slug,
  questions,
  accent,
}: {
  slug: string;
  questions: QuizQuestion[];
  accent: string;
}) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const total = questions.length;
  const q = questions[current];

  function check() {
    if (selected === null) return;
    setChecked(true);
    if (selected === q.correctIndex) setScore((s) => s + 1);
  }

  function next() {
    if (current + 1 < total) {
      setCurrent((c) => c + 1);
      setSelected(null);
      setChecked(false);
    } else {
      setFinished(true);
      saveBestScore(slug, score);
    }
  }

  function retake() {
    setCurrent(0);
    setSelected(null);
    setChecked(false);
    setScore(0);
    setFinished(false);
  }

  if (finished) {
    const passed = score >= PASS_MARK;
    return (
      <section
        className="rounded-xl border p-6 sm:p-8 text-center"
        style={{ borderColor: `${accent}30`, backgroundColor: `${accent}0d` }}
        aria-live="polite"
      >
        <p className="text-sm font-semibold uppercase tracking-wide text-stone-500 mb-2">
          Quiz complete
        </p>
        <p className="text-4xl font-bold text-stone-900 mb-2">
          {score}/{total}
        </p>
        <p className="text-stone-600 mb-6">
          {passed
            ? "Great job — you've got this. Mark the module complete below."
            : "Close! Review the module and retake the quiz whenever you're ready."}
        </p>
        <button
          onClick={retake}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold border border-stone-300 text-stone-700 hover:border-stone-400 transition-colors"
        >
          Retake quiz
        </button>
      </section>
    );
  }

  const isCorrect = checked && selected === q.correctIndex;

  return (
    <section className="rounded-xl border border-stone-200 p-6 sm:p-8">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-stone-500">
          Check your understanding
        </h2>
        <span className="text-sm text-stone-400">
          Question {current + 1} of {total}
        </span>
      </div>

      <p className="text-lg font-medium text-stone-900 mb-5">{q.question}</p>

      <fieldset className="space-y-2.5 mb-6" disabled={checked}>
        <legend className="sr-only">{q.question}</legend>
        {q.options.map((opt, i) => {
          const isSel = selected === i;
          const showCorrect = checked && i === q.correctIndex;
          const showWrong = checked && isSel && i !== q.correctIndex;
          return (
            <label
              key={i}
              className={`flex items-start gap-3 rounded-lg border p-3.5 cursor-pointer transition-colors ${
                showCorrect
                  ? "border-emerald-400 bg-emerald-50"
                  : showWrong
                    ? "border-rose-400 bg-rose-50"
                    : isSel
                      ? "border-stone-400 bg-stone-50"
                      : "border-stone-200 hover:border-stone-300"
              }`}
            >
              <input
                type="radio"
                name={`q-${current}`}
                value={i}
                checked={isSel}
                onChange={() => setSelected(i)}
                className="mt-1"
              />
              <span className="text-stone-700 leading-snug">{opt}</span>
            </label>
          );
        })}
      </fieldset>

      {checked && (
        <div
          className={`rounded-lg p-4 mb-6 text-sm ${
            isCorrect
              ? "bg-emerald-50 text-emerald-900"
              : "bg-rose-50 text-rose-900"
          }`}
          aria-live="polite"
        >
          <p className="font-semibold mb-1">
            {isCorrect ? "Correct" : "Not quite"}
          </p>
          <p className="leading-relaxed">{q.explanation}</p>
        </div>
      )}

      {!checked ? (
        <button
          onClick={check}
          disabled={selected === null}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          style={{ backgroundColor: accent }}
        >
          Check answer
        </button>
      ) : (
        <button
          onClick={next}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-colors"
          style={{ backgroundColor: accent }}
        >
          {current + 1 < total ? "Next question →" : "See your score →"}
        </button>
      )}
    </section>
  );
}
