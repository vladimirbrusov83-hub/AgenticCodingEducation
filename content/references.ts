// Per-module references, keyed by module id. Populated as each module's
// content is written (one module per session). Rendered on the module page
// when a module has references. Same shape as the AI-for-Academic-Libraries
// sibling; `text` supports *italic* for titles and inline [links](url).
export interface ModuleReference {
  text: string;
  url?: string;
  note?: string;
}

export const moduleReferences: Record<number, ModuleReference[]> = {
  1: [
    {
      text: "Karpathy, A. (2025, February 2). *There's a new kind of coding I call \"vibe coding\"* [Post]. X.",
      url: "https://x.com/karpathy/status/1886192184808149383",
    },
    {
      text: "Collins Dictionary. (2025). *Word of the Year 2025: Vibe coding.* Collins.",
      url: "https://www.collinsdictionary.com/woty",
      note: "\"Vibe coding\" was named Collins Word of the Year for 2025.",
    },
    {
      text: "Anthropic. (2025). *Claude* [Large language model]. Anthropic.",
      url: "https://claude.ai",
    },
    {
      text: "Brusova, Y. (2025). *AI for academic libraries* [Curriculum portal]. Vercel.",
      url: "https://ai-in-academic-libraries.vercel.app",
    },
  ],

  2: [
    {
      text: "Anthropic. (2025). *Claude* [Large language model]. Anthropic.",
      url: "https://claude.ai",
    },
    {
      text: "Dakan, R., & Feller, A. (2025). *AI fluency: Framework & foundations* [Online course]. Anthropic Academy.",
      url: "https://anthropic.skilljar.com/ai-fluency-framework-foundations",
    },
  ],

  3: [
    {
      text: "Tony, C., Díaz Ferreyra, N. E., Mutas, M., Dhiff, S., & Scandariato, R. (2025). Prompting techniques for secure code generation: A systematic investigation. *ACM Transactions on Software Engineering and Methodology.*",
      url: "https://arxiv.org/abs/2407.07064",
      note: "Found that explicit security instructions in a prompt measurably reduce security weaknesses in AI-generated code compared with prompts that omit them.",
    },
  ],
};

export function getModuleReferences(moduleId: number): ModuleReference[] {
  return moduleReferences[moduleId] ?? [];
}
