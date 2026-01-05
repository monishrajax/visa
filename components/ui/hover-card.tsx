"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import type { ReactNode } from "react";

interface HoverCardProps {
  trigger: ReactNode;
  content: ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  align?: "start" | "center" | "end";
  delayDuration?: number;
  className?: string;
}

export function HoverCard({
  trigger,
  content,
  side = "top",
  align = "center",
  delayDuration = 200,
  className = "",
}: HoverCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsOpen(true);
    }, delayDuration);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

  // Calculate positioning classes
  const getPositionClasses = () => {
    const sideClasses = {
      top: "bottom-full left-1/2 -translate-x-1/2 mb-3",
      bottom: "top-full left-1/2 -translate-x-1/2 mt-3",
      left: "right-full top-1/2 -translate-y-1/2 mr-3",
      right: "left-full top-1/2 -translate-y-1/2 ml-3",
    };

    const alignClasses = {
      start: {
        top: "left-0 -translate-x-0",
        bottom: "left-0 -translate-x-0",
        left: "top-0 -translate-y-0",
        right: "top-0 -translate-y-0",
      },
      center: {
        top: "left-1/2 -translate-x-1/2",
        bottom: "left-1/2 -translate-x-1/2",
        left: "top-1/2 -translate-y-1/2",
        right: "top-1/2 -translate-y-1/2",
      },
      end: {
        top: "right-0 translate-x-0",
        bottom: "right-0 translate-x-0",
        left: "bottom-0 translate-y-0",
        right: "bottom-0 translate-y-0",
      },
    };

    return `${sideClasses[side]} ${alignClasses[align][side]}`;
  };

  const getTransformOrigin = () => {
    return {
      top: "bottom center",
      bottom: "top center",
      left: "right center",
      right: "left center",
    }[side];
  };

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {trigger}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: side === "top" ? 8 : side === "bottom" ? -8 : 0,
              x: side === "left" ? 8 : side === "right" ? -8 : 0,
            }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: side === "top" ? 8 : side === "bottom" ? -8 : 0,
              x: side === "left" ? 8 : side === "right" ? -8 : 0,
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{
              position: "absolute",
              zIndex: 1000,
              transformOrigin: getTransformOrigin(),
            }}
            className={`pointer-events-none ${getPositionClasses()}`}
          >
            <div className="rounded-xl bg-card border border-border shadow-2xl p-4 min-w-[240px] max-w-[320px] glass-card backdrop-blur-xl">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
