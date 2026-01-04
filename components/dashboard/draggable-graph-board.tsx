"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/cn";

type BoardItem = {
  id: string;
  title: string;
  description?: string;
  initial: { x: number; y: number };
  size: "sm" | "md" | "lg";
  content: React.ReactNode;
};

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);
  return isDesktop;
}

export function DraggableGraphBoard({
  items,
  className
}: {
  items: BoardItem[];
  className?: string;
}) {
  const constraintsRef = useRef<HTMLDivElement | null>(null);
  const isDesktop = useIsDesktop();

  const sizes = useMemo(
    () => ({
      sm: "w-[320px] h-[240px]",
      md: "w-[360px] h-[260px]",
      lg: "w-[440px] h-[300px]"
    }),
    []
  );

  return (
    <div
      ref={constraintsRef}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-background/40",
        "h-[760px] lg:h-[560px]",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-50 grid-mask" />

      {items.map((it) => (
        <motion.div
          key={it.id}
          className={cn(
            "absolute touch-none select-none",
            sizes[it.size],
            "rounded-2xl border border-border bg-card/80 backdrop-blur shadow-sm"
          )}
          style={{ left: 24, top: 24 }}
          drag={isDesktop}
          dragConstraints={constraintsRef}
          dragMomentum={false}
          dragElastic={0.08}
          whileTap={{ scale: 0.99 }}
          initial={false}
          animate={it.initial}
        >
          <div className="flex items-start justify-between gap-4 border-b border-border px-4 py-3">
            <div className="min-w-0">
              <div className="text-sm font-semibold tracking-tight truncate">{it.title}</div>
              {it.description ? (
                <div className="mt-0.5 text-xs text-muted-foreground truncate">{it.description}</div>
              ) : null}
            </div>
            <div className="hidden lg:block text-[11px] text-muted-foreground">Drag</div>
          </div>
          <div className="h-[calc(100%-52px)] p-4">{it.content}</div>
        </motion.div>
      ))}

      <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-border bg-card/70 px-3 py-2 text-xs text-muted-foreground">
        {isDesktop ? "Tip: drag charts to rearrange your view." : "Tip: open on desktop to drag and rearrange charts."}
      </div>
    </div>
  );
}


