"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

export function FinalCtaSection() {
  return (
    <Section className="pb-24">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-border bg-gradient-to-br from-primary/12 to-accent/10 p-8 sm:p-10 shadow-soft"
      >
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Experience Autonomous Compliance
            </h3>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
              See how agentic AI continuously interprets regulations, detects PCI/PII exposure, orchestrates
              remediation, and produces evidence that auditors trust.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Button href="#dashboard" className="gap-2">
              Launch Demo <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="secondary" href="#architecture">
              View Architecture
            </Button>
            <Button variant="ghost" href="#contact" className="gap-2">
              <Mail className="h-4 w-4" /> Contact Team
            </Button>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}


