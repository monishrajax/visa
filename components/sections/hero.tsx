"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

export function HeroSection() {
  return (
    <Section className="pt-14 sm:pt-20">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-2"
          >
            <Badge className="gap-2">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Agentic AI for Regulated Financial Systems
            </Badge>
            <Badge variant="subtle" className="gap-2">
              <ShieldCheck className="h-3.5 w-3.5" />
              Audit-ready evidence, continuously
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 text-4xl sm:text-5xl font-semibold tracking-tight"
          >
            Autonomous Agentic AI for Continuous PCI & PII Compliance
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-5 max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed"
          >
            Real-time regulatory interpretation, risk detection, and audit-ready evidence — without
            manual compliance overhead.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button href="#dashboard" className="gap-2">
              View Demo <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="secondary" href="#architecture">
              Architecture
            </Button>
            <Button variant="ghost" href="#dashboard">
              Compliance Dashboard
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 grid gap-3 sm:grid-cols-3"
          >
            {[
              { k: "Continuous coverage", v: "Policies + controls mapped 24/7" },
              { k: "Agentic remediation", v: "Tasks created + validated automatically" },
              { k: "Evidence-as-code", v: "Audit packages generated on demand" }
            ].map((x) => (
              <div key={x.k} className="rounded-xl border border-border bg-card/60 p-4 shadow-sm">
                <div className="text-sm font-medium">{x.k}</div>
                <div className="mt-1 text-xs text-muted-foreground">{x.v}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="rounded-2xl border border-border bg-gradient-to-br from-card/70 to-card/30 p-6 shadow-soft">
            <div className="mb-5 overflow-hidden rounded-xl border border-border bg-background/40">
              <img
                src="/images/dashboard-preview.svg"
                alt="Dashboard preview"
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-muted-foreground">Live Compliance Posture</div>
                <div className="mt-1 text-lg font-semibold">Enterprise Snapshot</div>
              </div>
              <Badge className="bg-primary/10 border-primary/30 text-foreground">Running</Badge>
            </div>

            <div className="mt-6 grid gap-4">
              {[
                { label: "PCI scope assets", value: "148", hint: "tokenization + segmentation verified" },
                { label: "PII exposure candidates", value: "23", hint: "email + file shares + logs" },
                { label: "Evidence packages", value: "12", hint: "SOC 2, PCI DSS, GLBA mapped" }
              ].map((r) => (
                <div key={r.label} className="rounded-xl border border-border bg-background/40 p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-muted-foreground">{r.label}</div>
                    <div className="text-base font-semibold">{r.value}</div>
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">{r.hint}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-border bg-background/40 p-4">
              <div className="text-xs text-muted-foreground">Agent activity</div>
              <div className="mt-2 h-2 w-full rounded-full bg-muted overflow-hidden">
                <div className="h-full w-2/3 bg-gradient-to-r from-primary to-accent animate-shimmer bg-[length:1200px_100%]" />
              </div>
              <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                <span>Interpretation & mapping</span>
                <span>High confidence</span>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[28px] bg-gradient-to-br from-primary/15 to-accent/10 blur-2xl" />
        </motion.div>
      </div>
    </Section>
  );
}


