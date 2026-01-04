"use client";

import { motion } from "framer-motion";
import { FileWarning, PackageCheck, Radius, ShieldCheck, Wrench } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section, SectionHeading } from "@/components/ui/section";

const steps = [
  {
    title: "PCI data leak detected in email",
    desc: "Detection agent flags a thread with PAN in an attachment and confirms via scoped content inspection.",
    Icon: FileWarning,
    meta: ["Signal: DLP + content hash", "Scope: Exchange mailbox + attachments"]
  },
  {
    title: "Agent calculates exposure radius",
    desc: "Mapping agent expands blast radius across recipients, shares, downloads, and correlated log events.",
    Icon: Radius,
    meta: ["Users: 7 recipients", "Systems: O365, CRM, S3 archive"]
  },
  {
    title: "Auto-remediation tasks created",
    desc: "Remediation agent creates owner-routed tasks with SLAs, and requires approval for destructive actions.",
    Icon: Wrench,
    meta: ["Tickets: 4 created", "Approvals: 1 human gate required"]
  },
  {
    title: "Evidence package generated",
    desc: "Evidence agent packages citations, timelines, and telemetry checks into audit-friendly artifacts.",
    Icon: PackageCheck,
    meta: ["Bundle: PCI Req. 3 + incident trail", "Export: PDF + JSON evidence"]
  },
  {
    title: "Posture verified and closed",
    desc: "Monitoring validates fixes; assistant can explain decisions and produce a regulator-ready narrative.",
    Icon: ShieldCheck,
    meta: ["Validation: encryption + DLP enforced", "Audit: reproducible checks linked"]
  }
];

export function ScenarioWalkthroughSection() {
  return (
    <Section id="scenario">
      <SectionHeading
        eyebrow="Live scenario walkthrough"
        title="From detection to evidence — in one continuous, explainable loop"
        description="A realistic incident narrative that demonstrates agentic capabilities: detection, scoping, remediation orchestration, and audit-ready evidence packaging."
      />

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Timeline</CardTitle>
            <CardDescription>Step-by-step view for auditors and incident responders.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3">
            {steps.map((s, idx) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: idx * 0.04 }}
                className="relative rounded-xl border border-border bg-background/40 p-4"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-muted">
                    <s.Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center justify-between gap-3">
                      <div className="text-sm font-semibold">{s.title}</div>
                      <Badge variant="subtle">Step {idx + 1}</Badge>
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground leading-relaxed">{s.desc}</div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {s.meta.map((m) => (
                        <Badge key={m} variant="subtle">
                          {m}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </CardContent>
        </Card>

        <div className="grid gap-4 lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>What the auditor sees</CardTitle>
              <CardDescription>Clear traceability from requirement → signal → decision → evidence.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3">
              {[
                ["Citations", "Mapped to PCI DSS Req. 3 & 10 with exact clauses referenced."],
                ["Timestamps", "Event log with ingestion time, validation time, and remediation completion."],
                ["Reproducibility", "Evidence checks are rerunnable and versioned for the audit period."],
                ["Approvals", "Human-in-the-loop capture for actions requiring explicit authorization."]
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl border border-border bg-background/40 p-4">
                  <div className="text-sm font-medium">{k}</div>
                  <div className="mt-1 text-xs text-muted-foreground leading-relaxed">{v}</div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What the CISO sees</CardTitle>
              <CardDescription>Operational posture with business impact framing.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3">
              {[
                ["Exposure radius", "Blast radius is quantified across systems, identities, and time."],
                ["Control drift", "Drift is flagged before incidents become audit findings."],
                ["Escalation policy", "Risk thresholds route to on-call and compliance for approval."],
                ["KPIs", "MTTD, drift score, and confidence are tracked over time."]
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl border border-border bg-background/40 p-4">
                  <div className="text-sm font-medium">{k}</div>
                  <div className="mt-1 text-xs text-muted-foreground leading-relaxed">{v}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}


