"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import type { ReactNode } from "react";

interface WebGLHoverProps {
  children: ReactNode;
  intensity?: number;
  className?: string;
}

export function WebGLHover({ children, intensity = 15, className = "" }: WebGLHoverProps) {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const scaleValue = useMotionValue(1);

  const springConfig = { damping: 25, stiffness: 200 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  // 3D Transform values
  const rotateX = useTransform(y, [-intensity, intensity], [intensity * 0.5, -intensity * 0.5]);
  const rotateY = useTransform(x, [-intensity, intensity], [-intensity * 0.5, intensity * 0.5]);
  const scale = useTransform(scaleValue, [0.98, 1.02], [0.98, 1.02]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = ((e.clientX - centerX) / rect.width) * intensity * 2;
    const deltaY = ((e.clientY - centerY) / rect.height) * intensity * 2;

    mouseX.set(deltaX);
    mouseY.set(deltaY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
    scaleValue.set(1);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    scaleValue.set(1.02);
  };

  return (
    <motion.div
      ref={containerRef}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {/* Shine effect overlay */}
      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none z-10 opacity-0"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background: `linear-gradient(135deg, rgba(247, 182, 0, 0.1) 0%, transparent 50%, rgba(247, 182, 0, 0.1) 100%)`,
          mixBlendMode: "overlay",
        }}
      />

      {/* Glow effect */}
      <motion.div
        className="absolute -inset-1 rounded-lg pointer-events-none z-0 blur-xl"
        animate={{
          opacity: isHovered ? 0.5 : 0,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.3 }}
        style={{
          background: `radial-gradient(circle, rgba(247, 182, 0, 0.3), transparent 70%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-0">{children}</div>
    </motion.div>
  );
}

