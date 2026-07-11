import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Agentic Coding for Educators — why it exists, who it's for, how the two tracks work, and the responsible-building principles baked into every module.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-6">About this course</h1>

      <div className="prose-doc">
        <p>
          <strong>Agentic Coding for Educators</strong> teaches college and university faculty
          and academic librarians — with zero programming experience — to build and ship
          their own web tools using AI. You describe what you want in plain language, AI
          writes the code, and you check the result and ask for changes. By the end you&apos;ll
          have taken three real tools from idea to a live URL: a class quiz app, a flashcard
          study site, and a full course portal.
        </p>

        <h2>Why this course exists</h2>
        <p>
          Almost everyone in higher ed now uses AI for work, and many faculty and librarians
          already build their own learning activities and tools — often ones their institution
          never handed them. The bottleneck isn&apos;t desire or ability; it&apos;s that nobody
          gave them the map from &ldquo;I have an idea&rdquo; to &ldquo;it&apos;s live on the
          internet.&rdquo; This course is that map, taught in plain words for people who
          don&apos;t have a computer-science background.
        </p>

        <h2>Two tracks: faculty and academic librarians</h2>
        <p>
          The course is academic higher-ed only. Pick <strong>Faculty</strong> (professors,
          lecturers, adjuncts, instructional designers) or <strong>Academic Librarian</strong>
          {" "}(reference, instruction, scholarly communication, systems, special collections),
          and the worked examples and project ideas tune to your world — course tools on one
          side, research guides and library tools on the other. You do not have to choose —
          every module serves both audiences inline, with the faculty and academic-librarian
          versions written side by side.
        </p>

        <h2>Responsible building, from the start</h2>
        <p>
          This is real building, not &ldquo;let the AI run wild.&rdquo; You review, test, and
          can always explain what your tools do — the fact that AI wrote the code is beside
          the point. The default you&apos;ll learn is safe by design: tools that collect no
          personal data, with accessibility and your institution&apos;s rules built in. A full
          module covers the higher-ed spine — FERPA, accessibility law, IRB, who owns what you
          build, and campus AI policy — as plain-language guidance (not legal advice).
        </p>

        <h2>How it&apos;s structured</h2>
        <p>
          Fourteen short modules across three levels, meant to be worked through in order.
          Each has a hands-on exercise, a five-question quiz to check your understanding, and a
          plain &ldquo;what you can now do&rdquo; summary. The course is self-paced and free to
          take, and it collects no personal data about you.
        </p>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-3">
        <Link
          href="/curriculum"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm"
          style={{ backgroundColor: "#185FA5" }}
        >
          Browse the curriculum →
        </Link>
        <Link
          href="/level/foundations"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium border border-stone-300 text-stone-700 hover:border-stone-400 text-sm"
        >
          Start with Level 1
        </Link>
      </div>
    </div>
  );
}
