// Code-level role names. UI labels must render "Faculty" and
// "Academic Librarian" (see badges.tsx) — "Educator" alone reads
// K-12-inclusive to a visitor.
export type Role = "educator" | "librarian" | "both";

export type Level = "foundations" | "applied" | "advanced";

// Competency axis for this course — the hands-on builder skills.
export type BuilderSkill =
  | "prompting"
  | "planning"
  | "building"
  | "debugging"
  | "shipping";

export type ModuleStatus = "published" | "coming-soon";

export interface QuizQuestion {
  question: string;
  options: string[]; // exactly 4
  correctIndex: number; // 0-3
  explanation: string; // shown after answering, plain words
}

// Rich lesson body, written one module at a time. Same shape as the
// AI-for-Academic-Libraries sibling so the module page renders identically.
// `body` supports a small markdown subset: **bold**, *italic*, [text](url),
// **[text](url)**, blank-line paragraph breaks, and "\n- " bullet lists.
export interface ModuleContent {
  intro: string;
  sections: {
    heading: string;
    body: string;
  }[];
  summary?: string[];
}

export interface Module {
  id: number;
  slug: string;
  title: string;
  level: Level;
  audience: Role;
  skills: BuilderSkill[];
  topics: string[];
  objectives: string[];
  estimatedMinutes: number;
  status: ModuleStatus;
  description: string;
  content?: ModuleContent;
  quiz?: QuizQuestion[];
  relatedModules: string[];
}
