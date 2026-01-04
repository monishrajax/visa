import { cn } from "@/lib/cn";

export function Kpi({
  label,
  value,
  hint,
  delta,
  className
}: {
  label: string;
  value: string;
  hint?: string;
  delta?: { value: string; tone: "good" | "warn" | "bad" | "neutral" };
  className?: string;
}) {
  const tone =
    delta?.tone === "good"
      ? "text-emerald-600 dark:text-emerald-400"
      : delta?.tone === "warn"
        ? "text-amber-600 dark:text-amber-400"
        : delta?.tone === "bad"
          ? "text-rose-600 dark:text-rose-400"
          : "text-muted-foreground";

  return (
    <div className={cn("rounded-xl border border-border bg-card/70 p-4 shadow-sm", className)}>
      <div className="flex items-baseline justify-between gap-4">
        <div className="text-xs text-muted-foreground">{label}</div>
        {delta ? <div className={cn("text-xs font-medium", tone)}>{delta.value}</div> : null}
      </div>
      <div className="mt-2 text-xl font-semibold tracking-tight">{value}</div>
      {hint ? <div className="mt-1 text-xs text-muted-foreground">{hint}</div> : null}
    </div>
  );
}


