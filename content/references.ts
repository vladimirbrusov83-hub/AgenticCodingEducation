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
    {
      text: "Willison, S. (2025, March 19). *Not all AI-assisted programming is vibe coding (but vibe coding rocks)* [Blog post].",
      url: "https://simonwillison.net/2025/Mar/19/vibe-coding/",
      note: "Distinguishes vibe coding (accepting AI-written code without review) from reviewed AI-assisted programming, and states his rule of never committing code he could not explain to someone else.",
    },
    {
      text: "EDUCAUSE. (2026). *The impact of AI on work in higher education.* EDUCAUSE Research.",
      url: "https://www.educause.edu/research/2026/the-impact-of-ai-on-work-in-higher-education",
      note: "Found that 94% of higher-ed staff and faculty had used AI tools for work in the prior six months, and 56% had used AI tools not provided by their institution.",
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

  4: [
    {
      text: "U.S. Department of Justice, Civil Rights Division. (2024). *Nondiscrimination on the basis of disability; accessibility of web information and services of state and local government entities* [Final rule, 28 C.F.R. Part 35].",
      url: "https://www.ada.gov/resources/2024-03-08-web-rule/",
      note: "Requires state and local government entities, including public colleges and universities, to make web content and mobile apps conform to WCAG 2.1 AA, with compliance required by April 2027 for larger entities.",
    },
  ],

  5: [
    {
      text: "Dakan, R., & Feller, A. (2025). *AI fluency: Framework & foundations* [Online course]. Anthropic Academy.",
      url: "https://anthropic.skilljar.com/ai-fluency-framework-foundations",
    },
  ],

  7: [
    {
      text: "Willison, S. (2025, March 19). *Not all AI-assisted programming is vibe coding (but vibe coding rocks)* [Blog post].",
      url: "https://simonwillison.net/2025/Mar/19/vibe-coding/",
      note: "His rule of never committing code he could not explain to someone else underlies this module's “look under the hood” checkpoint.",
    },
  ],

  9: [
    {
      text: "NBC News. (2025, July). *Tea app hacked: 13,000 photos leaked on 4chan spark call to action.*",
      url: "https://www.nbcnews.com/tech/social-media/tea-app-hacked-13000-photos-leaked-4chan-call-action-rcna221139",
      note: "An unsecured database exposed roughly 72,000 images from the women's-safety app Tea, including thousands of identity-verification photos.",
    },
    {
      text: "The Register. (2025, July 21). *SaaStr founder stunned after Replit AI agent deletes company database.*",
      url: "https://www.theregister.com/2025/07/21/replit_saastr_vibe_coding_incident/",
      note: "An AI coding agent deleted a founder's live production database during an active code freeze, despite explicit instructions not to touch it.",
    },
  ],
};

export function getModuleReferences(moduleId: number): ModuleReference[] {
  return moduleReferences[moduleId] ?? [];
}
