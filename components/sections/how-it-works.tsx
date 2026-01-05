"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Connect",
    description:
      "Integrate with your cloud infrastructure, data stores, and compliance frameworks in minutes — not months.",
  },
  {
    number: "02",
    title: "Discover",
    description:
      "AI agents automatically map your data flows, identify PCI/PII, and assess your current compliance posture.",
  },
  {
    number: "03",
    title: "Monitor",
    description:
      "Continuous monitoring detects drift, violations, and risks in real-time with intelligent alerting.",
  },
  {
    number: "04",
    title: "Remediate",
    description:
      "Automated workflows fix issues, generate evidence, and keep you audit-ready at all times.",
  },
];

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="solutions"
      className="relative py-24 lg:py-32 bg-secondary overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 noise-overlay" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            From integration to{" "}
            <span className="text-primary">compliance confidence</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Get started in four simple steps. No complex implementations, no
            consultant armies.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-[60px] left-[calc(12.5%+60px)] right-[calc(12.5%+60px)] h-0.5 border-t-2 border-dashed border-muted-foreground/30" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative text-center lg:text-left"
              >
                {/* Step Number */}
                <div className="relative inline-flex mx-auto lg:mx-0 mb-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: index * 0.15 + 0.2,
                    }}
                    className="relative z-10 h-[72px] w-[72px] rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow"
                  >
                    <span className="text-2xl font-bold text-primary-foreground">
                      {step.number}
                    </span>
                  </motion.div>
                  {/* Pulse effect */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                    className="absolute inset-0 rounded-full bg-primary/30"
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="#demo"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-primary border-2 border-primary/30 rounded-xl hover:border-primary hover:bg-primary/5 transition-all"
          >
            See it in action
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

