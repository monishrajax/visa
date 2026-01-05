"use client";

import { motion } from "framer-motion";

function CreditCard({ index }: { index: number }) {
  const cardNumbers = [
    "4532 •••• •••• 8901",
    "4716 •••• •••• 2345",
    "4929 •••• •••• 6789",
    "4539 •••• •••• 1234",
    "4485 •••• •••• 5678",
    "4556 •••• •••• 9012",
  ];

  const cardholders = [
    "SARAH JOHNSON",
    "MICHAEL CHEN",
    "EMILY RODRIGUEZ",
    "JAMES WILLIAMS",
    "OLIVIA PATEL",
    "DAVID KIM",
  ];

  const expiries = ["12/27", "03/28", "09/26", "06/29", "11/27", "08/28"];

  const gradients = [
    "from-slate-800 via-slate-700 to-slate-900",
    "from-indigo-900 via-indigo-800 to-slate-900",
    "from-violet-900 via-purple-800 to-slate-900",
    "from-blue-900 via-blue-800 to-slate-900",
    "from-cyan-900 via-teal-800 to-slate-900",
    "from-emerald-900 via-green-800 to-slate-900",
  ];

  const i = index % cardNumbers.length;

  return (
    <div
      className={`relative flex-shrink-0 w-80 h-48 rounded-2xl bg-gradient-to-br ${gradients[i]} p-6 shadow-2xl border border-white/10 overflow-hidden`}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 400 250">
          <defs>
            <pattern id={`grid-${index}`} width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-${index})`} />
        </svg>
      </div>

      {/* Holographic effect */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/10 via-transparent to-transparent rounded-full blur-xl" />

      {/* Visa Logo - Left Corner */}
      <div className="absolute top-4 left-5">
        <svg viewBox="0 0 100 32" className="w-16 h-6" fill="white">
          <path d="M40.4 1.2L26.3 30.8h-9.1L10.5 8.5c-.4-1.5-.7-2-1.9-2.6-1.9-1-5-1.9-7.7-2.5l.2-.9h14.6c1.9 0 3.5 1.2 4 3.3l3.6 19.1 8.9-22.5h9.2v.8zM72.6 21.3c0-7.9-10.9-8.3-10.8-11.8 0-1.1 1-2.2 3.3-2.5 1.1-.1 4.2-.3 7.7 1.3l1.4-6.4c-1.9-.7-4.3-1.3-7.4-1.3-7.8 0-13.3 4.1-13.4 10.1-.1 4.4 3.9 6.8 6.9 8.3 3.1 1.5 4.1 2.4 4.1 3.8 0 2-2.5 2.9-4.7 3-4 .1-6.3-1.1-8.1-1.9l-1.4 6.7c1.8.8 5.2 1.6 8.7 1.6 8.3 0 13.7-4.1 13.7-10.5v-.4zM93.5 30.8h8.1L94.3 1.2h-7.5c-1.7 0-3.1 1-3.7 2.5L70.8 30.8h9.2l1.8-5h11.2l1.1 5h-.6zm-9.8-11.9l4.6-12.7 2.6 12.7h-7.2zM48.5 1.2l-7.2 29.6h-8.8l7.2-29.6h8.8z" />
        </svg>
      </div>

      {/* EMV Chip */}
      <div className="absolute top-14 left-5">
        <div className="w-12 h-9 rounded-md bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-600 shadow-inner">
          <div className="w-full h-full grid grid-cols-3 gap-0.5 p-1">
            <div className="bg-yellow-600/40 rounded-sm" />
            <div className="bg-yellow-600/40 rounded-sm" />
            <div className="bg-yellow-600/40 rounded-sm" />
            <div className="bg-yellow-600/40 rounded-sm" />
            <div className="bg-yellow-600/40 rounded-sm" />
            <div className="bg-yellow-600/40 rounded-sm" />
          </div>
        </div>
      </div>

      {/* Contactless Icon */}
      <div className="absolute top-14 left-20">
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M8.5 14.5A4 4 0 0112 12a4 4 0 013.5 2.5" />
          <path d="M6 17a7 7 0 016-5 7 7 0 016 5" />
          <path d="M3.5 19.5A10 10 0 0112 14a10 10 0 018.5 5.5" />
        </svg>
      </div>

      {/* Card Number */}
      <div className="absolute bottom-16 left-5 right-5">
        <p className="text-white text-lg font-mono tracking-[0.2em] font-medium">
          {cardNumbers[i]}
        </p>
      </div>

      {/* Card Details Bottom Row */}
      <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
        <div>
          <p className="text-white/50 text-[9px] uppercase tracking-wider mb-0.5">Card Holder</p>
          <p className="text-white text-xs font-medium tracking-wide">{cardholders[i]}</p>
        </div>
        <div className="text-right">
          <p className="text-white/50 text-[9px] uppercase tracking-wider mb-0.5">Expires</p>
          <p className="text-white text-xs font-medium tracking-wide">{expiries[i]}</p>
        </div>
        <div className="text-right">
          <p className="text-white/50 text-[9px] uppercase tracking-wider mb-0.5">CVV</p>
          <p className="text-white text-xs font-medium tracking-wide">•••</p>
        </div>
      </div>

      {/* Visa Hologram Effect */}
      <div className="absolute bottom-4 right-5">
        <div className="w-10 h-6 rounded bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30 backdrop-blur-sm flex items-center justify-center">
          <span className="text-white/80 text-[8px] font-bold italic">VISA</span>
        </div>
      </div>
    </div>
  );
}

export function CreditCardScroller() {
  // Create array of cards for infinite scroll effect
  const cards = Array.from({ length: 12 }, (_, i) => i);

  return (
    <section className="relative w-full overflow-hidden py-12 bg-gradient-to-b from-background to-muted/30">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-8 px-4">
        <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Trusted by Leading Financial Institutions</p>
        <h3 className="text-xl font-semibold text-foreground">Protecting Millions of Transactions Daily</h3>
      </div>

      {/* Scrolling Cards */}
      <motion.div
        className="flex gap-6 px-8"
        animate={{
          x: [0, -1920],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          },
        }}
      >
        {cards.map((i) => (
          <CreditCard key={i} index={i} />
        ))}
        {/* Duplicate for seamless loop */}
        {cards.map((i) => (
          <CreditCard key={`dup-${i}`} index={i} />
        ))}
      </motion.div>

      {/* Bottom Stats */}
      <div className="mt-10 flex justify-center gap-12 px-4 flex-wrap">
        <div className="text-center">
          <p className="text-2xl font-bold text-primary">$2.4T+</p>
          <p className="text-xs text-muted-foreground">Transactions Monitored</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-primary">99.97%</p>
          <p className="text-xs text-muted-foreground">Compliance Accuracy</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-primary">500+</p>
          <p className="text-xs text-muted-foreground">Financial Partners</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-primary">0 Breaches</p>
          <p className="text-xs text-muted-foreground">Under Protection</p>
        </div>
      </div>
    </section>
  );
}
