"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import type { ReactNode } from "react";

interface ImageRevealProps {
  children: ReactNode;
  revealImage?: string;
  className?: string;
}

export function ImageReveal({ children, revealImage, className = "" }: ImageRevealProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) / rect.width;
    const deltaY = (e.clientY - centerY) / rect.height;

    mouseX.set(deltaX * 20);
    mouseY.set(deltaY * 20);

    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Original Content */}
      <motion.div
        style={{
          rotateX: useTransform(y, [-20, 20], [5, -5]),
          rotateY: useTransform(x, [-20, 20], [-5, 5]),
        }}
        className="relative z-10 transition-transform duration-300"
      >
        {children}
      </motion.div>

      {/* Reveal Layer */}
      {revealImage && (
        <motion.div
          className="absolute inset-0 z-20 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${revealImage})`,
              clipPath: isHovered
                ? `circle(150px at ${mousePosition.x * 100}% ${mousePosition.y * 100}%)`
                : "circle(0px at 50% 50%)",
            }}
          />
        </motion.div>
      )}

      {/* WebGL-like Shine Effect */}
      <motion.div
        className="absolute inset-0 z-30 pointer-events-none opacity-0"
        animate={{ opacity: isHovered ? 0.3 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background: `radial-gradient(circle 150px at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(247, 182, 0, 0.4), transparent)`,
        }}
      />
    </div>
  );
}

