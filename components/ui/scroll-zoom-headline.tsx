"use client";

import { motion } from "framer-motion";
import { useScrollZoomMotion } from "@/hooks/use-scroll-zoom";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ScrollZoomHeadlineProps {
  children: ReactNode;
  className?: string;
  minScale?: number;
  maxScale?: number;
  scrollRange?: number;
}

export function ScrollZoomHeadline({
  children,
  className = "",
  minScale = 0.95,
  maxScale = 1.2,
  scrollRange = 450,
}: ScrollZoomHeadlineProps) {
  const { ref, scale, opacity } = useScrollZoomMotion({
    minScale,
    maxScale,
    scrollRange,
    damping: 40,
    stiffness: 150,
  });

  return (
    <motion.div
      ref={ref as any}
      style={{
        scale,
        opacity,
        transformOrigin: "center center",
      }}
      className={cn("will-change-transform", className)}
      transition={{
        type: "spring",
        damping: 40,
        stiffness: 150,
        mass: 0.8,
      }}
    >
      {children}
    </motion.div>
  );
}

