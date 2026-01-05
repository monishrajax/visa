"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth spring configuration for the Bitcoin symbol (slower, more elegant)
  const springConfig = { damping: 25, stiffness: 200, mass: 0.8 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  // Faster spring for the dot (follows cursor more closely)
  const dotSpringConfig = { damping: 30, stiffness: 500, mass: 0.3 };
  const dotX = useSpring(cursorX, dotSpringConfig);
  const dotY = useSpring(cursorY, dotSpringConfig);

  useEffect(() => {
    // Only show custom cursor on desktop (not mobile/touch devices)
    const isDesktop = window.matchMedia("(pointer: fine)").matches;
    if (!isDesktop) {
      return;
    }

    setMounted(true);

    // Hide default cursor
    document.body.style.cursor = "none";

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        (target.closest("button") !== null) ||
        (target.closest("a") !== null) ||
        (target.closest('[role="button"]') !== null) ||
        (target.closest('[data-cursor="pointer"]') !== null) ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsHovering(isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  // Don't render on mobile/touch devices
  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Custom Cursor - Bitcoin Symbol */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 1.4 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          scale: { type: "spring", damping: 25, stiffness: 250 },
          opacity: { duration: 0.2 },
        }}
      >
        {/* Bitcoin Symbol */}
        <div className="relative">
          <motion.div
            className="text-3xl font-bold text-primary drop-shadow-lg"
            style={{
              filter: "drop-shadow(0 0 8px rgba(247, 182, 0, 0.6))",
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            ₿
          </motion.div>

          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 -z-10 blur-2xl"
            animate={{
              scale: isHovering ? 1.8 : 1.2,
              opacity: isHovering ? 0.7 : 0.4,
            }}
            transition={{
              duration: 0.3,
            }}
            style={{
              background: "radial-gradient(circle, rgba(247, 182, 0, 0.6), transparent 70%)",
              width: "60px",
              height: "60px",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
      </motion.div>

      {/* Cursor Dot (smaller, follows more closely) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 1.2 : 0.8,
          opacity: isVisible ? 0.8 : 0,
        }}
        transition={{
          scale: { type: "spring", damping: 30, stiffness: 500 },
          opacity: { duration: 0.15 },
        }}
      >
        <div
          className="w-2.5 h-2.5 rounded-full bg-primary"
          style={{
            boxShadow: "0 0 10px rgba(247, 182, 0, 0.8)",
          }}
        />
      </motion.div>
    </>
  );
}

