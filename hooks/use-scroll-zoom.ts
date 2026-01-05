"use client";

import { useEffect, useState, useRef } from "react";
import { useMotionValue, useSpring, useTransform } from "framer-motion";

interface UseScrollZoomOptions {
  minScale?: number;
  maxScale?: number;
  scrollRange?: number;
  damping?: number;
  stiffness?: number;
}

export function useScrollZoom({
  minScale = 0.9,
  maxScale = 1.1,
  scrollRange = 300,
  damping = 30,
  stiffness = 200,
}: UseScrollZoomOptions = {}) {
  const elementRef = useRef<HTMLElement | null>(null);
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;
      
      // Calculate distance from viewport center
      const elementCenterY = rect.top + rect.height / 2;
      const elementCenterX = rect.left + rect.width / 2;
      const viewportCenterY = windowHeight / 2;
      const viewportCenterX = windowWidth / 2;
      
      // Calculate distance from center
      const distanceY = Math.abs(elementCenterY - viewportCenterY);
      const distanceX = Math.abs(elementCenterX - viewportCenterX);
      const distance = Math.sqrt(distanceY * distanceY + distanceX * distanceX);
      
      // Calculate zoom factor based on distance
      // Closer to center = more zoomed in
      const maxDistance = scrollRange;
      const normalizedDistance = Math.min(distance / maxDistance, 1);
      
      // Invert so closer = higher scale
      const zoomFactor = 1 - normalizedDistance;
      const currentScale = minScale + (maxScale - minScale) * zoomFactor;
      
      // Opacity based on distance (fade when far)
      const opacityFactor = 1 - Math.min(distance / (maxDistance * 1.5), 0.5);
      
      setScale(currentScale);
      setOpacity(opacityFactor);
    };

    // Initial calculation
    handleScroll();

    // Throttle scroll events for performance
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [minScale, maxScale, scrollRange]);

  return {
    ref: elementRef,
    scale,
    opacity,
  };
}

// Hook with Framer Motion values for smoother animations
export function useScrollZoomMotion(options: UseScrollZoomOptions = {}) {
  const elementRef = useRef<HTMLElement | null>(null);
  const scrollY = useMotionValue(0);
  const scaleValue = useMotionValue(1);
  const opacityValue = useMotionValue(1);

  const {
    minScale = 0.95,
    maxScale = 1.15,
    scrollRange = 400,
    damping = 35,
    stiffness = 180,
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const updateScroll = () => {
      if (!element) return;
      
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;
      
      // Calculate distance from viewport center
      const elementCenterY = rect.top + rect.height / 2;
      const elementCenterX = rect.left + rect.width / 2;
      const viewportCenterY = windowHeight / 2;
      const viewportCenterX = windowWidth / 2;
      
      // Calculate distance from center
      const distanceY = Math.abs(elementCenterY - viewportCenterY);
      const distanceX = Math.abs(elementCenterX - viewportCenterX);
      const distance = Math.sqrt(distanceY * distanceY + distanceX * distanceX);
      
      // Calculate zoom factor
      const maxDistance = scrollRange;
      const normalizedDistance = Math.min(distance / maxDistance, 1);
      const zoomFactor = 1 - normalizedDistance;
      const targetScale = minScale + (maxScale - minScale) * zoomFactor;
      
      // Opacity
      const opacityFactor = 1 - Math.min(distance / (maxDistance * 1.5), 0.4);
      
      scaleValue.set(targetScale);
      opacityValue.set(opacityFactor);
    };

    // Initial calculation
    updateScroll();

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, [minScale, maxScale, scrollRange, scaleValue, opacityValue]);

  const scale = useSpring(scaleValue, {
    damping,
    stiffness,
    mass: 0.8,
  });

  const opacity = useSpring(opacityValue, {
    damping: damping + 5,
    stiffness: stiffness + 20,
    mass: 0.6,
  });

  return {
    ref: elementRef,
    scale,
    opacity,
  };
}

