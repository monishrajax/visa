import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

export function Card({
  className,
  children
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card/70 backdrop-blur supports-[backdrop-filter]:bg-card/60 shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  children
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={cn("p-5 pb-3", className)}>{children}</div>;
}

export function CardTitle({
  className,
  children
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={cn("text-sm font-semibold", className)}>{children}</div>;
}

export function CardDescription({
  className,
  children
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("text-sm text-muted-foreground leading-relaxed", className)}>
      {children}
    </div>
  );
}

export function CardContent({
  className,
  children
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={cn("p-5 pt-0", className)}>{children}</div>;
}


