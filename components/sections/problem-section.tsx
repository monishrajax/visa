"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, Clock, FileWarning, ShieldAlert } from "lucide-react";

const painPoints = [
  {
    icon: Clock,
    title: "Manual Compliance is Reactive & Slow",
    description:
      "Traditional audit cycles take months. By the time issues are found, the damage is already done.",
  },
  {
    icon: FileWarning,
    title: "Regulatory Overload",
    description:
      "PCI DSS, GDPR, SOC 2, CCPA — regulations evolve faster than compliance teams can track and implement.",
  },
  {
    icon: AlertTriangle,
    title: "Hidden Data Exposure",
    description:
      "PCI/PII data leaks across systems, emails, and logs are nearly impossible to detect manually.",
  },
  {
    icon: ShieldAlert,
    title: "Audit Anxiety",
    description:
      "Evidence gathering is fragmented, incomplete, and stressful. Teams scramble before every audit.",
  },
];

export function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="problem"
      className="relative py-24 lg:py-32 bg-secondary overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              The Problem
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Compliance shouldn&apos;t be a{" "}
              <span className="text-primary">constant fire drill</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Financial institutions face mounting regulatory pressure, but legacy
              compliance tools weren&apos;t built for today&apos;s speed. Teams are
              overwhelmed, audits are stressful, and risks slip through the cracks.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-card border border-border">
                <p className="text-3xl font-bold text-primary">$14.8M</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Avg. cost of non-compliance
                </p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <p className="text-3xl font-bold text-primary">67%</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Of breaches from unknown data
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Pain Point Cards */}
          <div className="space-y-4">
            {painPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-xl bg-card/50 border border-border hover:border-primary/30 transition-all yellow-glow-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <point.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {point.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

