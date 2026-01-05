"use client";

import { motion } from "framer-motion";

// Single rotating credit card component - designed to blend with hero section
export function HeroVisaCard() {
  return (
    <motion.div
      className="relative mt-8"
      style={{
        perspective: "1200px",
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      {/* Subtle ambient glow that blends with dark background */}
      <div className="absolute inset-0 bg-gradient-to-br from-visa-blue/30 via-transparent to-primary/20 rounded-3xl blur-3xl scale-110" />
      
      {/* Card container with 3D rotation */}
      <motion.div
        className="relative w-full max-w-[340px] mx-auto"
        style={{
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateY: [0, 15, -15, 0],
          rotateX: [0, 5, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* The Credit Card */}
        <div 
          className="relative aspect-[1.586/1] rounded-2xl overflow-hidden"
          style={{
            background: "linear-gradient(145deg, rgba(16, 42, 67, 0.9) 0%, rgba(11, 28, 45, 0.95) 40%, rgba(26, 31, 113, 0.85) 100%)",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(247, 182, 0, 0.15), inset 0 1px 0 rgba(255,255,255,0.05)",
            backdropFilter: "blur(20px)",
          }}
        >
          {/* Subtle holographic shimmer effect */}
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              background: "linear-gradient(105deg, transparent 40%, rgba(247, 182, 0, 0.15) 45%, rgba(247, 182, 0, 0.25) 50%, rgba(247, 182, 0, 0.15) 55%, transparent 60%)",
              backgroundSize: "200% 100%",
            }}
            animate={{
              backgroundPosition: ["200% 0", "-200% 0"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Card content */}
          <div className="relative z-10 p-6 h-full flex flex-col justify-between">
            {/* Top row - Visa logo and contactless */}
            <div className="flex items-start justify-between">
              <svg viewBox="0 0 100 32" className="h-7 w-auto opacity-90" fill="#F7B600">
                <path d="M40.4 1.2L26.3 30.8h-9.1L10.5 8.5c-.4-1.5-.7-2-1.9-2.6-1.9-1-5-1.9-7.7-2.5l.2-.9h14.6c1.9 0 3.5 1.2 4 3.3l3.6 19.1 8.9-22.5h9.2v.8zM72.6 21.3c0-7.9-10.9-8.3-10.8-11.8 0-1.1 1-2.2 3.3-2.5 1.1-.1 4.2-.3 7.7 1.3l1.4-6.4c-1.9-.7-4.3-1.3-7.4-1.3-7.8 0-13.3 4.1-13.4 10.1-.1 4.4 3.9 6.8 6.9 8.3 3.1 1.5 4.1 2.4 4.1 3.8 0 2-2.5 2.9-4.7 3-4 .1-6.3-1.1-8.1-1.9l-1.4 6.7c1.8.8 5.2 1.6 8.7 1.6 8.3 0 13.7-4.1 13.7-10.5v-.4zM93.5 30.8h8.1L94.3 1.2h-7.5c-1.7 0-3.1 1-3.7 2.5L70.8 30.8h9.2l1.8-5h11.2l1.1 5h-.6zm-9.8-11.9l4.6-12.7 2.6 12.7h-7.2zM48.5 1.2l-7.2 29.6h-8.8l7.2-29.6h8.8z" />
              </svg>
              
              {/* Contactless icon */}
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-foreground/40" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M8.5 14.5A4 4 0 0112 12a4 4 0 013.5 2.5" />
                <path d="M6 17a7 7 0 016-5 7 7 0 016 5" />
                <path d="M3.5 19.5A10 10 0 0112 14a10 10 0 018.5 5.5" />
              </svg>
            </div>

            {/* EMV Chip */}
            <div className="my-4">
              <div 
                className="w-11 h-8 rounded-md"
                style={{
                  background: "linear-gradient(145deg, rgba(247, 182, 0, 0.5) 0%, rgba(247, 182, 0, 0.25) 50%, rgba(247, 182, 0, 0.4) 100%)",
                  boxShadow: "inset 0 1px 2px rgba(0,0,0,0.2), 0 1px 0 rgba(255,255,255,0.1)",
                }}
              >
                <div className="w-full h-full grid grid-cols-3 grid-rows-2 gap-px p-1">
                  {Array.from({ length: 6 }).map((_, idx) => (
                    <div key={idx} className="bg-primary/20 rounded-[2px]" />
                  ))}
                </div>
              </div>
            </div>

            {/* Card Number */}
            <p className="text-foreground/80 font-mono text-base tracking-[0.2em] mb-4">
              4532 •••• •••• 8901
            </p>

            {/* Bottom row - Name and Expiry */}
            <div className="flex justify-between items-end">
              <div>
                <p className="text-[10px] text-foreground/40 uppercase tracking-wider mb-0.5">Card Holder</p>
                <p className="text-xs text-foreground/70 font-medium tracking-wide">VISAGUARD DEMO</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-foreground/40 uppercase tracking-wider mb-0.5">Valid Thru</p>
                <p className="text-xs text-foreground/70 font-medium tracking-wide">12/28</p>
              </div>
            </div>
          </div>

          {/* Decorative corner gradient */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-visa-blue/20 to-transparent rounded-tr-full" />
        </div>
      </motion.div>
    </motion.div>
  );
}

// Empty placeholder for backward compatibility - no longer shows floating cards
export function FloatingCreditCard() {
  return null;
}

