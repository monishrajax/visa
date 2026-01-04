"use client";

import { motion } from "framer-motion";
import { AlertOctagon, ClipboardList, FileClock, Percent, Radar } from "lucide-react";

import { AgentActivityChart } from "@/components/charts/agent-activity";
import { CoverageDonut } from "@/components/charts/coverage-donut";
import { RiskHeatmap } from "@/components/charts/risk-heatmap";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Kpi } from "@/components/ui/kpi";
import { Section, SectionHeading } from "@/components/ui/section";
import { Separator } from "@/components/ui/separator";

const heatmap = [
  { system: "Email (O365)", severity: "critical", signal: "PAN detected in outbound thread" },
  { system: "S3 Archive", severity: "high", signal: "Unencrypted export snapshot" },
  { system: "K8s Logs", severity: "medium", signal: "PII tokens in debug logs" },
  { system: "Snowflake", severity: "medium", signal: "Over-broad analyst role" },
  { system: "CRM", severity: "low", signal: "Masked view misconfigured" },
  { system: "Vault", severity: "low", signal: "Rotation SLA nearing threshold" }
] as const;

const changes = [
  { date: "Jan 02", title: "PCI DSS 4.0 guidance update", impact: "Requires additional log retention evidence" },
  { date: "Dec 28", title: "Internal policy delta: Email retention", impact: "Scope expanded to contractor mailboxes" },
  { date: "Dec 22", title: "GLBA safeguards clarification", impact: "Add MFA verification evidence for privileged roles" }
];

const tasks = [
  { owner: "Security Eng", task: "Quarantine email thread + DLP label", sla: "2h", status: "In progress" },
  { owner: "Cloud Ops", task: "Encrypt S3 archive bucket + block public ACLs", sla: "6h", status: "Open" },
  { owner: "Platform", task: "Disable debug logging for PII pipeline", sla: "24h", status: "Open" },
  { owner: "IAM", task: "Reduce analyst role grants (Snowflake)", sla: "48h", status: "Queued" }
];

const activity = [
  { t: "09:00", events: 8 },
  { t: "10:00", events: 14 },
  { t: "11:00", events: 10 },
  { t: "12:00", events: 18 },
  { t: "13:00", events: 16 },
  { t: "14:00", events: 22 },
  { t: "15:00", events: 17 }
];

export function DashboardSection() {
  return (
    <Section id="dashboard">
      <SectionHeading
        eyebrow="Compliance dashboard"
        title="Mock demo UI: posture, changes, tasks, and agent activity"
        description="Dummy but realistic signals that show how agents detect PCI/PII exposure, quantify impact, and keep evidence continuously audit-ready."
      />

      <div className="grid gap-4 lg:grid-cols-4">
        <Kpi label="Compliance Coverage %" value="92%" hint="Controls mapped to assets and telemetry" delta={{ value: "+3% WoW", tone: "good" }} />
        <Kpi label="Mean Time to Detect (MTTD)" value="7.4 min" hint="From signal to confirmed incident" delta={{ value: "-21%", tone: "good" }} />
        <Kpi label="Compliance Drift Score" value="0.18" hint="0 (best) → 1 (worst), lower is better" delta={{ value: "Stable", tone: "neutral" }} />
        <Kpi label="Exposure Radius" value="2.6" hint="Weighted blast radius across systems/users" delta={{ value: "↑ Medium", tone: "warn" }} />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="lg:col-span-2"
        >
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <CardTitle>PCI/PII Risk Heatmap</CardTitle>
                  <CardDescription>High-signal risk surfaced from email, logs, storage, and IAM.</CardDescription>
                </div>
                <Badge className="gap-2">
                  <Radar className="h-3.5 w-3.5 text-primary" />
                  Live
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <RiskHeatmap cells={[...heatmap]} />
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-border bg-background/40 p-4">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <AlertOctagon className="h-4 w-4 text-rose-400" />
                    Critical signals
                  </div>
                  <div className="mt-2 text-lg font-semibold">1</div>
                </div>
                <div className="rounded-xl border border-border bg-background/40 p-4">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <FileClock className="h-4 w-4 text-amber-400" />
                    Evidence freshness
                  </div>
                  <div className="mt-2 text-lg font-semibold">~6 min</div>
                </div>
                <div className="rounded-xl border border-border bg-background/40 p-4">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Percent className="h-4 w-4 text-primary" />
                    Auto-mapped controls
                  </div>
                  <div className="mt-2 text-lg font-semibold">214</div>
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
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Compliance Coverage</CardTitle>
              <CardDescription>Mapped controls with validated telemetry evidence.</CardDescription>
            </CardHeader>
            <CardContent>
              <CoverageDonut covered={214} total={232} label="Mapped + validated" />
              <Separator className="my-4" />
              <div className="grid gap-3">
                {[
                  { k: "PCI DSS controls", v: "104 / 112" },
                  { k: "PII safeguards", v: "76 / 80" },
                  { k: "Audit artifacts", v: "34 / 40" }
                ].map((x) => (
                  <div key={x.k} className="flex items-center justify-between rounded-lg border border-border bg-background/40 px-3 py-2">
                    <div className="text-xs text-muted-foreground">{x.k}</div>
                    <div className="text-xs font-medium">{x.v}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-1">
          <CardHeader>
            <div className="flex items-center justify-between gap-3">
              <div>
                <CardTitle>Active Regulatory Changes</CardTitle>
                <CardDescription>New deltas routed to control owners with traceability.</CardDescription>
              </div>
              <Badge className="gap-2" variant="subtle">
                <FileClock className="h-3.5 w-3.5" />
                Last sync: 5m
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="grid gap-3">
            {changes.map((c) => (
              <div key={c.title} className="rounded-xl border border-border bg-background/40 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-medium">{c.title}</div>
                  <div className="text-xs text-muted-foreground">{c.date}</div>
                </div>
                <div className="mt-1 text-xs text-muted-foreground leading-relaxed">{c.impact}</div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="lg:col-span-1">
          <CardHeader>
            <div className="flex items-center justify-between gap-3">
              <div>
                <CardTitle>Open Remediation Tasks</CardTitle>
                <CardDescription>Agent-created tasks with SLA and owner routing.</CardDescription>
              </div>
              <Badge className="gap-2">
                <ClipboardList className="h-3.5 w-3.5 text-primary" />
                {tasks.length} open
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="grid gap-2">
            {tasks.map((t) => (
              <div key={t.task} className="rounded-xl border border-border bg-background/40 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-medium">{t.task}</div>
                  <Badge variant="subtle">{t.status}</Badge>
                </div>
                <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                  <span>Owner: {t.owner}</span>
                  <span>SLA: {t.sla}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Agent Activity Timeline</CardTitle>
            <CardDescription>Events per hour across discovery → remediation → evidence.</CardDescription>
          </CardHeader>
          <CardContent>
            <AgentActivityChart data={activity} />
            <Separator className="my-4" />
            <div className="grid gap-2">
              {[
                ["Interpretation Agent", "Mapped 12 controls to Snowflake roles"],
                ["Detection Agent", "Confirmed PAN in email attachment"],
                ["Evidence Agent", "Generated audit bundle v1.4 for PCI Req. 3"]
              ].map(([k, v]) => (
                <div key={k} className="rounded-lg border border-border bg-background/40 px-3 py-2">
                  <div className="text-xs font-medium">{k}</div>
                  <div className="mt-0.5 text-xs text-muted-foreground">{v}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}


