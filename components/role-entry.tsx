"use client";

import Link from "next/link";
import { useRole } from "@/components/role-context";

const cards = [
  {
    id: "educator" as const,
    label: "I'm faculty",
    subtitle: "Professors, lecturers, adjuncts, instructional designers",
    description:
      "You teach in higher ed. Same 14-module course either way — the hands-on builds just include a course-flavored version for you to follow (a class quiz, a study-guide portal), alongside FERPA and accessibility guidance throughout.",
    color: "#185FA5",
    light: "#E6F1FB",
    border: "#b8d5f2",
  },
  {
    id: "librarian" as const,
    label: "I'm an academic librarian",
    subtitle: "Reference, instruction, scholarly communication, systems",
    description:
      "You work in a college or university library. Same 14-module course either way — the hands-on builds just include a library-flavored version for you to follow (an info-literacy quiz, a self-owned research guide), alongside patron-privacy and accessibility guidance throughout.",
    color: "#0F6E56",
    light: "#E1F5EE",
    border: "#b2e8d4",
  },
];

export default function RoleEntry() {
  const { role, setRole, hydrated } = useRole();

  return (
    <div>
      {hydrated && role && (
        <div className="mb-8 rounded-xl border border-brand-light bg-brand-light/60 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#12497f" }}>
              Picking up where you left off
            </p>
            <p className="text-stone-700 text-sm mt-0.5">
              Same 14 modules for everyone — the hands-on builds include a version for{" "}
              <span className="font-semibold">
                {role === "educator" ? "faculty" : "academic librarians"}
              </span>
              . Start at Module 1 and work straight through.
            </p>
          </div>
          <Link
            href="/curriculum"
            className="flex-shrink-0 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-sm font-semibold text-white"
            style={{ backgroundColor: "#185FA5" }}
          >
            Go to the curriculum →
          </Link>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-5">
        {cards.map((c) => {
          const active = role === c.id;
          return (
            <div
              key={c.id}
              className="rounded-xl border p-6 transition-all hover:shadow-md"
              style={{
                borderColor: active ? c.color : c.border,
                backgroundColor: c.light,
                boxShadow: active ? `0 0 0 2px ${c.color}` : undefined,
              }}
            >
              <div className="flex items-center justify-between mb-0.5">
                <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: c.color }}>
                  {c.subtitle}
                </p>
                {active && (
                  <span className="text-xs font-semibold" style={{ color: c.color }}>
                    ✓ Selected
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">{c.label}</h3>
              <p className="text-sm text-stone-600 leading-relaxed mb-5">
                {c.description}
              </p>
              <Link
                href="/curriculum"
                onClick={() => setRole(c.id)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-white"
                style={{ backgroundColor: c.color }}
              >
                {active ? "View the curriculum" : "Start here"} →
              </Link>
            </div>
          );
        })}
      </div>

      <p className="text-center text-sm text-stone-500 mt-6">
        Not sure, or a bit of both?{" "}
        <Link href="/curriculum" className="font-medium underline hover:text-stone-800 transition-colors">
          Browse all 14 modules
        </Link>{" "}
        — you can switch tracks anytime from the top bar.
      </p>
    </div>
  );
}
