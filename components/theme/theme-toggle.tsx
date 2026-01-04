"use client";

import { useEffect, useMemo, useState } from "react";
import { Monitor, Moon, Sun } from "lucide-react";

import { cn } from "@/lib/cn";

type Theme = "light" | "dark" | "system";

function resolveTheme(theme: Theme) {
  if (theme !== "system") return theme;
  const systemDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? false;
  return systemDark ? "dark" : "light";
}

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("system");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = (localStorage.getItem("theme") as Theme | null) ?? "system";
    setTheme(stored);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("theme", theme);
    const resolved = resolveTheme(theme);
    document.documentElement.classList.toggle("dark", resolved === "dark");
  }, [theme, mounted]);

  const Icon = useMemo(() => {
    if (!mounted) return Monitor;
    if (theme === "dark") return Moon;
    if (theme === "light") return Sun;
    return Monitor;
  }, [theme, mounted]);

  const label = mounted ? `Theme: ${theme}` : "Theme";

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <button
        type="button"
        aria-label={label}
        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card text-foreground shadow-sm hover:bg-muted transition-colors"
        onClick={() =>
          setTheme((t) => (t === "system" ? "light" : t === "light" ? "dark" : "system"))
        }
      >
        <Icon className="h-4 w-4" />
      </button>
      <span className="hidden sm:block text-xs text-muted-foreground">{label}</span>
    </div>
  );
}


