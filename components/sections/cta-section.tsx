"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function CtaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Yellow Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="cta-grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.5" fill="currentColor" className="text-visa-dark" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-visa-dark/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-visa-dark/10 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-visa-dark/10 border border-visa-dark/20 mb-8"
        >
          <Sparkles className="h-4 w-4 text-visa-dark" />
          <span className="text-sm font-medium text-visa-dark">
            Start your free trial today
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-visa-dark leading-tight"
        >
          Ready to automate your
          <br />
          compliance journey?
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg text-visa-dark/80 max-w-2xl mx-auto"
        >
          Join 500+ financial institutions that trust VisaGuard for continuous
          compliance. No credit card required, no commitment.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/sign-up"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold bg-visa-dark text-visa-gold rounded-xl hover:bg-visa-blue transition-all shadow-lg"
          >
            Start Free Trial
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#demo"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-visa-dark border-2 border-visa-dark/30 rounded-xl hover:border-visa-dark hover:bg-visa-dark/5 transition-all"
          >
            Schedule Demo
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-visa-dark/70"
        >
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>14-day free trial</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Setup in minutes</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

