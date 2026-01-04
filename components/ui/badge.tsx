import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

export function Badge({
  className,
  children,
  variant = "default"
}: {
  className?: string;
  children: ReactNode;
  variant?: "default" | "subtle";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium",
        variant === "default"
          ? "border-border bg-card text-foreground"
          : "border-border/70 bg-muted text-muted-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}


