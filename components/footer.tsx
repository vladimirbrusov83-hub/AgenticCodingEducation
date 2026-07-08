import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                style={{ backgroundColor: "#185FA5" }}
                aria-hidden="true"
              >
                &lt;/&gt;
              </span>
              <span className="font-semibold text-stone-900 text-sm">
                Agentic Coding for Educators
              </span>
            </div>
            <p className="text-sm text-stone-500 leading-relaxed">
              Learn to build and ship your own web tools with AI — for college and
              university faculty and academic librarians, no coding experience needed.
            </p>
          </div>

          {/* Curriculum links */}
          <div>
            <h3 className="text-sm font-semibold text-stone-700 mb-3">
              Curriculum
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/level/foundations" className="text-sm text-stone-500 hover:text-stone-800 transition-colors">
                  Level 1: Foundations
                </Link>
              </li>
              <li>
                <Link href="/level/applied" className="text-sm text-stone-500 hover:text-stone-800 transition-colors">
                  Level 2: Applied
                </Link>
              </li>
              <li>
                <Link href="/level/advanced" className="text-sm text-stone-500 hover:text-stone-800 transition-colors">
                  Level 3: Advanced
                </Link>
              </li>
              <li>
                <Link href="/curriculum" className="text-sm text-stone-500 hover:text-stone-800 transition-colors">
                  Full Curriculum
                </Link>
              </li>
            </ul>
          </div>

          {/* Site links */}
          <div>
            <h3 className="text-sm font-semibold text-stone-700 mb-3">Site</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-stone-500 hover:text-stone-800 transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-stone-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-xs text-stone-400 max-w-2xl">
            You review, test, and can explain what your tools do — the AI writing the code
            is beside the point. This course teaches responsible building, and its own
            pages collect no personal data.
          </p>
          <p className="text-xs text-stone-400 flex-shrink-0">
            © 2026
          </p>
        </div>

        <div className="mt-6 pt-5 border-t border-stone-100">
          <p className="text-xs text-stone-400 leading-relaxed max-w-3xl">
            Compliance material (FERPA, accessibility, IRB, IP ownership, campus policy)
            is general guidance, not legal advice. Your institution&apos;s policy and
            counsel govern.
          </p>
        </div>
      </div>
    </footer>
  );
}
