import Link from "next/link";

const cards = [
  {
    id: "educator",
    label: "I'm faculty",
    subtitle: "Professors, lecturers, adjuncts, instructional designers",
    description:
      "You teach in higher ed. Every hands-on build includes a course-flavored version for you to follow (a class quiz, a study-guide portal), alongside FERPA and accessibility guidance throughout.",
    color: "#185FA5",
    light: "#E6F1FB",
    border: "#b8d5f2",
  },
  {
    id: "librarian",
    label: "I'm an academic librarian",
    subtitle: "Reference, instruction, scholarly communication, systems",
    description:
      "You work in a college or university library. Every hands-on build includes a library-flavored version for you to follow (an info-literacy quiz, a self-owned research guide), alongside patron-privacy and accessibility guidance throughout.",
    color: "#0F6E56",
    light: "#E1F5EE",
    border: "#b2e8d4",
  },
];

export default function RoleEntry() {
  return (
    <div>
      <div className="grid sm:grid-cols-2 gap-5">
        {cards.map((c) => (
          <div
            key={c.id}
            className="rounded-xl border p-6 transition-all hover:shadow-md"
            style={{ borderColor: c.border, backgroundColor: c.light }}
          >
            <p className="text-xs font-semibold uppercase tracking-wide mb-0.5" style={{ color: c.color }}>
              {c.subtitle}
            </p>
            <h3 className="text-xl font-bold text-stone-900 mb-2">{c.label}</h3>
            <p className="text-sm text-stone-600 leading-relaxed mb-5">
              {c.description}
            </p>
            <Link
              href="/level/foundations"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-white"
              style={{ backgroundColor: c.color }}
            >
              Start here →
            </Link>
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-stone-500 mt-6">
        Not sure, or a bit of both?{" "}
        <Link href="/curriculum" className="font-medium underline hover:text-stone-800 transition-colors">
          Browse all 14 modules
        </Link>{" "}
        — the same course serves everyone, with both versions of every build shown side by side.
      </p>
    </div>
  );
}
