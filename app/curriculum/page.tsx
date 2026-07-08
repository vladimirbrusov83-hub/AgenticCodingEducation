import type { Metadata } from "next";
import CurriculumView from "@/components/curriculum-view";

export const metadata: Metadata = {
  title: "Full Curriculum — 14 Modules Across 3 Levels",
  description:
    "Browse all 14 modules in Agentic Coding for Educators — from your first build in Claude to a live course portal — across three progressive levels.",
};

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://learn.brusovcoach.org";

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Agentic Coding for Educators",
  description:
    "A 14-module, hands-on course teaching higher-ed faculty and academic librarians to build and ship their own web tools with AI, across three progressive levels.",
  url: `${SITE_URL}/curriculum`,
  isAccessibleForFree: true,
  inLanguage: "en-US",
  educationalLevel: "Professional Development",
  hasPart: [
    { "@type": "Course", name: "Level 1: Foundations", url: `${SITE_URL}/level/foundations` },
    { "@type": "Course", name: "Level 2: Applied", url: `${SITE_URL}/level/applied` },
    { "@type": "Course", name: "Level 3: Advanced", url: `${SITE_URL}/level/advanced` },
  ],
};

export default function CurriculumPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <CurriculumView />
    </>
  );
}
