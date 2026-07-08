// Per-module references, keyed by module id. Populated as each module's
// content is written (one module per session). Rendered on the module page
// when a module has references.
export interface Reference {
  title: string;
  url?: string;
  source?: string;
  note?: string;
}

export const references: Record<number, Reference[]> = {
  // 1: [ ... ], 2: [ ... ], etc.
};

export function getReferences(moduleId: number): Reference[] {
  return references[moduleId] ?? [];
}
