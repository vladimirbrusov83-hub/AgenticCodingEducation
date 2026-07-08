"use client";

import { useEffect, useState } from "react";

// Best quiz score per module, stored as { [slug]: bestScore }.
const STORAGE_KEY = "evc-quiz-v1";
const QUIZ_EVENT = "evc-quiz-change";

type ScoreMap = Record<string, number>;

function readScores(): ScoreMap {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ScoreMap) : {};
  } catch {
    return {};
  }
}

export function getBestScore(slug: string): number | null {
  const scores = readScores();
  return slug in scores ? scores[slug] : null;
}

// Records a score only if it beats the stored best; broadcasts a change so any
// mounted best-score badges update without a reload.
export function saveBestScore(slug: string, score: number) {
  if (typeof window === "undefined") return;
  const scores = readScores();
  const prev = scores[slug] ?? -1;
  if (score <= prev) return;
  scores[slug] = score;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(scores));
    window.dispatchEvent(new Event(QUIZ_EVENT));
  } catch {
    // ignore persistence failures
  }
}

// SSR-safe: returns null on the server and first client render, then hydrates.
export function useBestScore(slug: string): number | null {
  const [score, setScore] = useState<number | null>(null);

  useEffect(() => {
    const update = () => setScore(getBestScore(slug));
    update();
    window.addEventListener(QUIZ_EVENT, update);
    return () => window.removeEventListener(QUIZ_EVENT, update);
  }, [slug]);

  return score;
}
