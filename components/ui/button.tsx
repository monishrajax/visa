import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground shadow-soft hover:opacity-95 border border-primary/20",
  secondary:
    "bg-card text-foreground border border-border hover:bg-muted shadow-sm",
  ghost: "bg-transparent text-foreground hover:bg-muted"
};

const sizeStyles: Record<Size, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-5 text-base"
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  href,
  target,
  rel,
  children
}: {
  className?: string;
  variant?: Variant;
  size?: Size;
  href?: string;
  target?: string;
  rel?: string;
  children: ReactNode;
}) {
  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background disabled:pointer-events-none disabled:opacity-50";

  const classes = cn(base, variantStyles[variant], sizeStyles[size], className);

  if (href) {
    return (
      <Link href={href} target={target} rel={rel} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
}


