"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";

export type ActiveRole = "educator" | "librarian" | null;

interface RoleContextValue {
  role: ActiveRole;
  setRole: (role: ActiveRole) => void;
  hydrated: boolean;
}

const STORAGE_KEY = "evc-role-v1";

const RoleContext = createContext<RoleContextValue>({
  role: null,
  setRole: () => {},
  hydrated: false,
});

export function RoleProvider({ children }: { children: ReactNode }) {
  const [role, setRoleState] = useState<ActiveRole>(null);
  const [hydrated, setHydrated] = useState(false);

  // Restore the chosen role on first client render (reload-safe).
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "educator" || stored === "librarian") {
        setRoleState(stored);
      }
    } catch {
      // localStorage unavailable — fall back to no role.
    }
    setHydrated(true);
  }, []);

  const setRole = useCallback((next: ActiveRole) => {
    setRoleState(next);
    try {
      if (next) window.localStorage.setItem(STORAGE_KEY, next);
      else window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore persistence failures
    }
  }, []);

  return (
    <RoleContext.Provider value={{ role, setRole, hydrated }}>
      {children}
    </RoleContext.Provider>
  );
}

export function useRole() {
  return useContext(RoleContext);
}
