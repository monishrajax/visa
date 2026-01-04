"use client";

import { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";

import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

const nav = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "Features", href: "#features" },
  { label: "Architecture", href: "#architecture" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Scenario", href: "#scenario" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const MobileIcon = useMemo(() => (open ? X : Menu), [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/75 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary/90 to-accent/90 shadow-soft" />
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-tight">Agentic Compliance</div>
            <div className="text-[11px] text-muted-foreground">Continuous PCI/PII</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle className="hidden sm:flex" />
          <div className="hidden md:block">
            <Button variant="secondary" href="#contact">
              Contact
            </Button>
          </div>
          <button
            type="button"
            className={cn(
              "md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card hover:bg-muted transition-colors"
            )}
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <MobileIcon className="h-4 w-4" />
          </button>
        </div>
      </div>

      {open ? (
        <div className="md:hidden border-t border-border bg-background/95">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4">
            <div className="flex items-center justify-between">
              <ThemeToggle className="flex" />
              <Button variant="secondary" href="#contact">
                Contact
              </Button>
            </div>
            <div className="mt-4 grid gap-2">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  className="rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {n.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}


