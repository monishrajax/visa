"use client";

import { motion } from "framer-motion";
import { Bot, CheckCircle2, XCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section, SectionHeading } from "@/components/ui/section";

const rows = [
  {
    label: "Model of compliance",
    traditional: "Static rules and periodic sampling",
    agentic: "Adaptive agents + continuous telemetry"
  },
  {
    label: "Handling regulation changes",
    traditional: "Manual interpretation and spreadsheet mapping",
    agentic: "Autonomous discovery + impact analysis"
  },
  {
    label: "Evidence generation",
    traditional: "Human-assembled screenshots and narratives",
    agentic: "Evidence-as-code from verifiable signals"
  },
  {
    label: "Incident response",
    traditional: "Reactive, after-the-fact investigations",
    agentic: "Predictive drift detection + guided remediation"
  },
  {
    label: "Audit readiness",
    traditional: "High stress spikes near audit windows",
    agentic: "Always-on audit packages with traceability"
  }
];

export function WhyDifferentSection() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Why this is different"
        title="Traditional compliance vs Agentic AI compliance"
        description="Designed to impress regulators, auditors, and enterprise stakeholders: continuous, explainable, and operational."
      />

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Traditional compliance</CardTitle>
            <CardDescription>Reactive workflows optimized for audits, not real-time risk.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3">
            {rows.map((r) => (
              <div key={r.label} className="rounded-xl border border-border bg-background/40 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-medium">{r.label}</div>
                  <Badge variant="subtle" className="gap-1.5">
                    <XCircle className="h-3.5 w-3.5 text-rose-400" />
                    Manual
                  </Badge>
                </div>
                <div className="mt-1 text-xs text-muted-foreground leading-relaxed">{r.traditional}</div>
              </div>
            ))}
          </CardContent>
        </Card>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
        >
          <Card className="h-full border-primary/30">
            <CardHeader>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <CardTitle>Agentic AI compliance</CardTitle>
                  <CardDescription>Adaptive agents that keep controls and evidence continuously aligned.</CardDescription>
                </div>
                <Badge className="gap-2">
                  <Bot className="h-3.5 w-3.5 text-primary" />
                  Autonomous
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="grid gap-3">
              {rows.map((r) => (
                <div key={r.label} className="rounded-xl border border-border bg-background/40 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-sm font-medium">{r.label}</div>
                    <Badge variant="subtle" className="gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                      Continuous
                    </Badge>
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground leading-relaxed">{r.agentic}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}


