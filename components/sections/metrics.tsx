"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Radar, TimerReset } from "lucide-react";

import { DriftBarChart, MttdTrendChart } from "@/components/charts/metrics";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Kpi } from "@/components/ui/kpi";
import { Section, SectionHeading } from "@/components/ui/section";
import { Separator } from "@/components/ui/separator";

const mttd = [
  { day: "Mon", mttd: 12.8 },
  { day: "Tue", mttd: 10.2 },
  { day: "Wed", mttd: 9.1 },
  { day: "Thu", mttd: 8.4 },
  { day: "Fri", mttd: 7.4 }
];

const drift = [
  { control: "Enc", drift: 0.12 },
  { control: "IAM", drift: 0.22 },
  { control: "Seg", drift: 0.16 },
  { control: "Logs", drift: 0.27 },
  { control: "DLP", drift: 0.09 }
];

export function MetricsSection() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Metrics & KPIs"
        title="Operational compliance metrics that executives and auditors understand"
        description="Not vanity charts — metrics tied to risk, control effectiveness, and evidence quality."
      />

      <div className="grid gap-4 lg:grid-cols-4">
        <Kpi label="Mean Time to Detect (MTTD)" value="7.4 min" hint="Lower is better; based on confirmed signals" delta={{ value: "-21% WoW", tone: "good" }} />
        <Kpi label="Compliance Drift Score" value="0.18" hint="0 (best) → 1 (worst)" delta={{ value: "Stable", tone: "neutral" }} />
        <Kpi label="Exposure Radius" value="2.6" hint="Weighted blast radius" delta={{ value: "↑ Medium", tone: "warn" }} />
        <Kpi label="Agent Confidence Level" value="0.91" hint="Interpretation and mapping confidence" delta={{ value: "+0.03", tone: "good" }} />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="lg:col-span-1"
        >
          <Card className="h-full">
            <CardHeader>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <CardTitle>MTTD trend</CardTitle>
                  <CardDescription>Faster detection reduces exposure window.</CardDescription>
                </div>
                <Badge variant="subtle" className="gap-2">
                  <TimerReset className="h-3.5 w-3.5" />
                  Last 5 days
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <MttdTrendChart data={mttd} />
              <Separator className="my-4" />
              <div className="grid gap-2">
                <div className="rounded-lg border border-border bg-background/40 px-3 py-2 text-xs text-muted-foreground">
                  Improvement driver: high-confidence PCI/PII detection + automated triage.
                </div>
                <div className="rounded-lg border border-border bg-background/40 px-3 py-2 text-xs text-muted-foreground">
                  KPI tie-in: incident window reduced without increasing false positives.
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="lg:col-span-1"
        >
          <Card className="h-full">
            <CardHeader>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <CardTitle>Compliance drift score (by control)</CardTitle>
                  <CardDescription>Where posture is drifting away from requirements.</CardDescription>
                </div>
                <Badge variant="subtle" className="gap-2">
                  <Radar className="h-3.5 w-3.5" />
                  Near real-time
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <DriftBarChart data={drift} />
              <Separator className="my-4" />
              <div className="text-xs text-muted-foreground leading-relaxed">
                Drift is computed from telemetry: encryption posture, IAM deviations, segmentation anomalies,
                and evidence freshness.
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="lg:col-span-1"
        >
          <Card className="h-full">
            <CardHeader>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <CardTitle>Agent confidence + explainability</CardTitle>
                  <CardDescription>Confidence is not opaque — it’s grounded in evidence.</CardDescription>
                </div>
                <Badge className="gap-2">
                  <BrainCircuit className="h-3.5 w-3.5 text-primary" />
                  Explainable
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="grid gap-3">
              {[
                ["Confidence", "0.91 average (interpretation + mapping)"],
                ["Grounding", "Citations to clauses + signals + data lineage"],
                ["Fallback", "Escalate to human reviewer when low-confidence"],
                ["Audit output", "Export reasoning traces with evidence bundle"]
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl border border-border bg-background/40 p-4">
                  <div className="text-sm font-medium">{k}</div>
                  <div className="mt-1 text-xs text-muted-foreground leading-relaxed">{v}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}


