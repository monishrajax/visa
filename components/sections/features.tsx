"use client";

import { motion } from "framer-motion";
import {
  Activity,
  FileCode2,
  GlobeLock,
  Radar,
  ScanSearch,
  Sparkles
} from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section, SectionHeading } from "@/components/ui/section";

const features = [
  {
    icon: GlobeLock,
    title: "Autonomous Regulatory Discovery",
    desc: "Continuously ingest standards and advisories, detect deltas, and route impact to relevant controls."
  },
  {
    icon: Radar,
    title: "PCI/PII Real-Time Monitoring",
    desc: "Track sensitive data movement across email, logs, storage, and SaaS — with high-signal alerts."
  },
  {
    icon: ScanSearch,
    title: "Control Drift Detection",
    desc: "Detect drift in tokenization, encryption, access control, and segmentation before audits or incidents."
  },
  {
    icon: Activity,
    title: "Exposure Radius Scoring",
    desc: "Quantify blast radius based on assets, identities, data lineage, and exfiltration pathways."
  },
  {
    icon: FileCode2,
    title: "Evidence-as-Code",
    desc: "Generate traceable evidence packages from telemetry with reproducible checks and citations."
  },
  {
    icon: Sparkles,
    title: "Natural Language Compliance Assistant",
    desc: "Ask questions in plain English; get control mappings, gaps, and evidence links with reasoning."
  }
];

export function FeaturesSection() {
  return (
    <Section id="features">
      <SectionHeading
        eyebrow="Core features"
        title="Enterprise-grade capabilities built for regulators and auditors"
        description="Each feature is designed for explainability, coverage, and operational readiness — not just dashboards."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, idx) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: idx * 0.04 }}
          >
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-muted">
                    <f.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 border border-border" />
                </div>
                <CardTitle className="mt-4">{f.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{f.desc}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}


