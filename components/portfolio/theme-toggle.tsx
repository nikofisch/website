"use client";

import { Moon, Sun } from "lucide-react";
import { useState } from "react";

type Theme = "light" | "dark";

function getActiveTheme(): Theme {
  if (typeof document === "undefined") {
    return "light";
  }

  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getActiveTheme);

  function toggleTheme() {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      onClick={toggleTheme}
      className="inline-flex h-10 items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--card)] px-3 text-sm font-medium text-[var(--text-muted)] hover:bg-[var(--card-hover)]"
    >
      {isDark ? (
        <Sun className="h-4 w-4 text-[var(--icon)]" strokeWidth={1.9} />
      ) : (
        <Moon className="h-4 w-4 text-[var(--icon)]" strokeWidth={1.9} />
      )}
      <span>{isDark ? "Dark" : "Light"}</span>
    </button>
  );
}
