"use client";

import { cn } from "@/lib/cn";

type Cell = {
  system: string;
  severity: "low" | "medium" | "high" | "critical";
  signal: string;
};

const tone: Record<Cell["severity"], string> = {
  low: "bg-emerald-500/18 border-emerald-500/30",
  medium: "bg-amber-500/18 border-amber-500/30",
  high: "bg-orange-500/18 border-orange-500/30",
  critical: "bg-rose-500/18 border-rose-500/30"
};

export function RiskHeatmap({
  cells,
  className
}: {
  cells: Cell[];
  className?: string;
}) {
  return (
    <div className={cn("grid grid-cols-2 gap-2 sm:grid-cols-3", className)}>
      {cells.map((c) => (
        <div
          key={`${c.system}-${c.signal}`}
          className={cn(
            "rounded-lg border p-3 bg-card/50",
            tone[c.severity]
          )}
        >
          <div className="flex items-center justify-between gap-2">
            <div className="text-xs font-medium">{c.system}</div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-wide">{c.severity}</div>
          </div>
          <div className="mt-1 text-xs text-muted-foreground">{c.signal}</div>
        </div>
      ))}
    </div>
  );
}


