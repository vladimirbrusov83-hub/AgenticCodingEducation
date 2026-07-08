"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import RoleToggle from "@/components/role-toggle";

const navLinks = [
  { href: "/curriculum", label: "Curriculum" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-stone-200">
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 font-semibold text-stone-900 hover:text-brand-DEFAULT"
        >
          <span
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold"
            style={{ backgroundColor: "#185FA5" }}
            aria-hidden="true"
          >
            &lt;/&gt;
          </span>
          <span className="text-sm leading-tight">Agentic Coding for Educators</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname.startsWith(link.href)
                  ? "text-stone-900 bg-stone-100"
                  : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="ml-2 mr-1">
            <RoleToggle />
          </div>
          <Link
            href="/level/foundations"
            className="ml-1 px-4 py-2 rounded-lg text-sm font-medium text-white transition-colors"
            style={{ backgroundColor: "#185FA5" }}
          >
            Start Learning
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          {open ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-stone-200 bg-white px-4 py-3 space-y-1"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                pathname.startsWith(link.href)
                  ? "text-stone-900 bg-stone-100"
                  : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
              }`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="px-3 py-2.5">
            <RoleToggle compact />
          </div>
          <Link
            href="/level/foundations"
            className="block mt-2 px-3 py-2.5 rounded-lg text-sm font-medium text-white text-center"
            style={{ backgroundColor: "#185FA5" }}
            onClick={() => setOpen(false)}
          >
            Start Learning
          </Link>
        </div>
      )}
    </header>
  );
}
