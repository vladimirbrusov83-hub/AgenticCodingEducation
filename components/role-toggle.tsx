"use client";

import { useRole, type ActiveRole } from "@/components/role-context";

const OPTIONS: { value: Exclude<ActiveRole, null> | ""; label: string }[] = [
  { value: "", label: "Both tracks" },
  { value: "educator", label: "Faculty" },
  { value: "librarian", label: "Academic Librarian" },
];

export default function RoleToggle({ compact = false }: { compact?: boolean }) {
  const { role, setRole, hydrated } = useRole();

  return (
    <label className="inline-flex items-center gap-2">
      <span
        className={`text-xs font-medium text-stone-500 ${compact ? "" : "hidden lg:inline"}`}
      >
        Your track:
      </span>
      <select
        aria-label="Choose your learning track"
        value={role ?? ""}
        disabled={!hydrated}
        onChange={(e) => setRole((e.target.value || null) as ActiveRole)}
        className="rounded-lg border border-stone-300 bg-white px-2.5 py-1.5 text-sm font-medium text-stone-700 focus:outline-none focus:ring-2 focus:ring-brand-DEFAULT focus:border-brand-DEFAULT disabled:opacity-60"
        style={{ color: role ? "#12497f" : undefined }}
      >
        {OPTIONS.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}
