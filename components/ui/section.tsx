import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

export function Section({
  id,
  className,
  children
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("relative py-16 sm:py-20", className)}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  const isCenter = align === "center";
  return (
    <div className={cn(isCenter ? "text-center" : "text-left", "mb-10")}>
      {eyebrow ? (
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {eyebrow}
        </div>
      ) : null}
      <h2 className={cn("mt-4 text-2xl sm:text-3xl font-semibold tracking-tight")}>
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-3 max-w-3xl text-sm sm:text-base text-muted-foreground", isCenter && "mx-auto")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}


