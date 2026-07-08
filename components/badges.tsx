import type { Role, Level, BuilderSkill } from "@/lib/types";
import { skillMeta } from "@/content/modules";

// UI labels: code roles are educator/librarian, but rendered text must read
// "Faculty" / "Academic Librarian" (never bare "Educator" — reads K-12).
const audienceConfig: Record<Role, { label: string; classes: string }> = {
  educator: {
    label: "Faculty",
    classes: "bg-sky-50 text-sky-700 border border-sky-200",
  },
  librarian: {
    label: "Academic Librarian",
    classes: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  },
  both: {
    label: "Both tracks",
    classes: "bg-stone-100 text-stone-600 border border-stone-200",
  },
};

const levelConfig: Record<
  Level,
  { label: string; bg: string; text: string; border: string }
> = {
  foundations: {
    label: "Level 1: Foundations",
    bg: "#E1F5EE",
    text: "#0b5342",
    border: "#b2e8d4",
  },
  applied: {
    label: "Level 2: Applied",
    bg: "#E6F1FB",
    text: "#12497f",
    border: "#b8d5f2",
  },
  advanced: {
    label: "Level 3: Advanced",
    bg: "#FAEEDA",
    text: "#653c08",
    border: "#f0d4a0",
  },
};

export function AudienceBadge({
  audience,
  size = "sm",
}: {
  audience: Role;
  size?: "xs" | "sm";
}) {
  const config = audienceConfig[audience];
  return (
    <span
      className={`inline-flex items-center rounded-full font-medium ${config.classes} ${
        size === "xs" ? "px-2 py-0.5 text-xs" : "px-2.5 py-1 text-xs"
      }`}
    >
      {config.label}
    </span>
  );
}

export function LevelBadge({
  level,
  size = "sm",
}: {
  level: Level;
  size?: "xs" | "sm";
}) {
  const config = levelConfig[level];
  return (
    <span
      className={`inline-flex items-center rounded-full font-medium border ${
        size === "xs" ? "px-2 py-0.5 text-xs" : "px-2.5 py-1 text-xs"
      }`}
      style={{
        backgroundColor: config.bg,
        color: config.text,
        borderColor: config.border,
      }}
    >
      {config.label}
    </span>
  );
}

// Builder-skill tag (prompting / planning / building / debugging / shipping).
export function SkillBadge({
  skill,
  size = "sm",
}: {
  skill: BuilderSkill;
  size?: "xs" | "sm";
}) {
  return (
    <span
      className={`inline-flex items-center rounded-md bg-stone-100 text-stone-600 font-medium ${
        size === "xs" ? "px-1.5 py-0.5 text-xs" : "px-2 py-0.5 text-xs"
      }`}
      title={`Builder skill: ${skillMeta[skill].label}`}
    >
      {skillMeta[skill].label}
    </span>
  );
}

export function ComingSoonBadge() {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-stone-100 text-stone-500 border border-stone-200">
      Coming Soon
    </span>
  );
}
