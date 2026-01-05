"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Building,
  Wallet,
  CreditCard,
  ClipboardCheck,
  ShieldCheck,
  BarChart3,
  CheckCircle2,
} from "lucide-react";
import { HoverCard } from "@/components/ui/hover-card";
import { WebGLHover } from "@/components/ui/webgl-hover";
import { ScrollZoomHeadline } from "@/components/ui/scroll-zoom-headline";

const useCases = [
  {
    icon: Building,
    title: "Banks & Credit Unions",
    description:
      "Streamline PCI DSS compliance across branch networks, ATM systems, and digital banking platforms.",
    highlight: "Reduce audit prep by 80%",
  },
  {
    icon: Wallet,
    title: "FinTech Companies",
    description:
      "Move fast without breaking compliance. Automated controls that scale with your product velocity.",
    highlight: "Ship 3x faster",
  },
  {
    icon: CreditCard,
    title: "Payment Processors",
    description:
      "Real-time PCI monitoring across millions of transactions. Never miss a compliance drift.",
    highlight: "24/7 monitoring",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance Teams",
    description:
      "Replace spreadsheets with intelligent automation. Evidence at your fingertips, not in email chains.",
    highlight: "10x efficiency",
  },
  {
    icon: ShieldCheck,
    title: "Risk Officers",
    description:
      "Quantified risk scoring, exposure analysis, and board-ready reporting on demand.",
    highlight: "Real-time risk view",
  },
  {
    icon: BarChart3,
    title: "Auditors & Assessors",
    description:
      "Pre-packaged evidence, clear control mappings, and continuous audit trails simplify assessments.",
    highlight: "50% faster audits",
  },
];

export function UseCases() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
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
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Who It&apos;s For
          </span>
          <ScrollZoomHeadline minScale={0.96} maxScale={1.12} scrollRange={450}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Built for <span className="text-primary">financial services</span>
            </h2>
          </ScrollZoomHeadline>
          <p className="mt-6 text-lg text-muted-foreground">
            Whether you&apos;re a global bank or a fast-growing fintech, our
            platform adapts to your compliance needs.
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <WebGLHover intensity={6} className="h-full">
                <HoverCard
                  trigger={
                    <div className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all yellow-glow-hover cursor-pointer">
                    {/* Icon */}
                    <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                      <useCase.icon className="h-6 w-6 text-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {useCase.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {useCase.description}
                    </p>

                    {/* Highlight Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {useCase.highlight}
                    </div>
                  </div>
                }
                content={
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground text-base">Key Benefits</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Customized compliance workflows for your industry</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Pre-built templates and control mappings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Dedicated support and onboarding assistance</span>
                      </li>
                    </ul>
                    </div>
                  }
                  side={index >= 3 ? "top" : "bottom"}
                  align="start"
                  delayDuration={300}
                />
              </WebGLHover>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

