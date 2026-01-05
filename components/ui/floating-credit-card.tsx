"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function FloatingCreditCard() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]">
      {/* Multiple floating cards at different positions across the entire screen */}
      {Array.from({ length: 6 }).map((_, i) => {
        const positions = [
          { left: "5%", top: "15%", scale: 0.8, mobile: true },
          { left: "80%", top: "25%", scale: 0.7, mobile: false },
          { left: "15%", top: "65%", scale: 0.9, mobile: true },
          { left: "85%", top: "70%", scale: 0.75, mobile: false },
          { left: "50%", top: "10%", scale: 0.65, mobile: false },
          { left: "60%", top: "85%", scale: 0.85, mobile: true },
        ];

        const position = positions[i];
        
        return (
          <motion.div
            key={`card-${i}`}
            className={`absolute ${position.mobile ? 'hidden md:block' : ''}`}
            style={{
              left: position.left,
              top: position.top,
              transformStyle: "preserve-3d",
              perspective: "1000px",
              transform: `scale(${position.scale})`,
            }}
            animate={{
              rotateZ: [0, 360],
              y: [0, -50, 0],
              x: [0, Math.sin(i) * 30, 0],
              rotateY: [0, 15, -15, 0],
            }}
            transition={{
              duration: 18 + i * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
          >
            <div 
              className="relative w-72 h-44 rounded-2xl border-2 border-primary/40 shadow-2xl" 
              style={{ 
                perspective: "1000px",
                opacity: 0.6 + (i % 3) * 0.1, // Varying opacity for depth
              }}
            >
              {/* Card Front */}
              <motion.div
                className="absolute inset-0 rounded-2xl p-6 backdrop-blur-sm"
                style={{
                  transformStyle: "preserve-3d",
                  background: "linear-gradient(135deg, #0B1C2D 0%, #102A43 50%, #1A1F71 100%)",
                  border: "2px solid rgba(247, 182, 0, 0.4)",
                  boxShadow: "0 8px 32px rgba(247, 182, 0, 0.15)",
                }}
                animate={{
                  rotateY: [0, 360],
                  rotateX: [0, 12, -12, 0],
                  rotateZ: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 25 + i * 6,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 2,
                }}
              >
                {/* Holographic effect */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-full blur-2xl" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary/10 via-transparent to-transparent rounded-full blur-xl" />
                </div>

                {/* Visa Logo - Top Left */}
                <div className="relative z-10 mb-8">
                  <svg viewBox="0 0 100 32" className="h-8 w-auto" fill="#F7B600">
                    <path d="M40.4 1.2L26.3 30.8h-9.1L10.5 8.5c-.4-1.5-.7-2-1.9-2.6-1.9-1-5-1.9-7.7-2.5l.2-.9h14.6c1.9 0 3.5 1.2 4 3.3l3.6 19.1 8.9-22.5h9.2v.8zM72.6 21.3c0-7.9-10.9-8.3-10.8-11.8 0-1.1 1-2.2 3.3-2.5 1.1-.1 4.2-.3 7.7 1.3l1.4-6.4c-1.9-.7-4.3-1.3-7.4-1.3-7.8 0-13.3 4.1-13.4 10.1-.1 4.4 3.9 6.8 6.9 8.3 3.1 1.5 4.1 2.4 4.1 3.8 0 2-2.5 2.9-4.7 3-4 .1-6.3-1.1-8.1-1.9l-1.4 6.7c1.8.8 5.2 1.6 8.7 1.6 8.3 0 13.7-4.1 13.7-10.5v-.4zM93.5 30.8h8.1L94.3 1.2h-7.5c-1.7 0-3.1 1-3.7 2.5L70.8 30.8h9.2l1.8-5h11.2l1.1 5h-.6zm-9.8-11.9l4.6-12.7 2.6 12.7h-7.2zM48.5 1.2l-7.2 29.6h-8.8l7.2-29.6h8.8z" />
                  </svg>
                </div>

                {/* EMV Chip */}
                <div className="relative z-10 mb-4">
                  <div className="w-12 h-9 rounded-md bg-gradient-to-br from-primary via-accent to-primary shadow-inner border border-primary/50">
                    <div className="w-full h-full grid grid-cols-3 gap-0.5 p-1">
                      {Array.from({ length: 6 }).map((_, idx) => (
                        <div key={idx} className="bg-primary/30 rounded-sm" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Number */}
                <div className="relative z-10 mb-6">
                  <p className="text-primary font-mono text-xl tracking-widest font-semibold">
                    4532 •••• •••• 8901
                  </p>
                </div>

                {/* Card Details Bottom */}
                <div className="relative z-10 flex justify-between items-end">
                  <div>
                    <p className="text-xs text-primary/60 uppercase tracking-wider mb-1">Card Holder</p>
                    <p className="text-sm text-primary font-semibold tracking-wide">SARAH JOHNSON</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-primary/60 uppercase tracking-wider mb-1">Expires</p>
                    <p className="text-sm text-primary font-semibold tracking-wide">12/27</p>
                  </div>
                </div>

                {/* Contactless Icon */}
                <div className="absolute top-6 right-6 z-10">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 text-primary/40" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M8.5 14.5A4 4 0 0112 12a4 4 0 013.5 2.5" />
                    <path d="M6 17a7 7 0 016-5 7 7 0 016 5" />
                    <path d="M3.5 19.5A10 10 0 0112 14a10 10 0 018.5 5.5" />
                  </svg>
                </div>
              </motion.div>

              {/* Card Glow Effect - Enhanced */}
              <motion.div 
                className="absolute -inset-4 bg-primary/30 rounded-2xl blur-3xl"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

