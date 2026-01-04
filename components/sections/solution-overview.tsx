"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section, SectionHeading } from "@/components/ui/section";

const flow = [
  { title: "Regulatory discovery", desc: "Continuously ingest PCI DSS, GLBA, SOC 2, internal policies, and advisories." },
  { title: "Interpretation + mapping", desc: "Agent interprets text into control objectives and maps to assets, data flows, and owners." },
  { title: "Monitoring + detection", desc: "Telemetry-driven detection of PCI/PII data movement, control drift, and risky changes." },
  { title: "Remediation + evidence", desc: "Auto-create tasks, validate fixes, and package evidence with explainable traceability." }
];

export function SolutionOverviewSection() {
  return (
    <Section id="solution">
      <SectionHeading
        eyebrow="Solution"
        title="An agentic AI system for continuous monitoring and autonomous remediation"
        description="Instead of static checklists, the platform runs specialized agents that interpret changing requirements, watch production signals, and keep evidence continuously up to date."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card/60 p-6 shadow-soft">
          <div className="mb-5 overflow-hidden rounded-xl border border-border bg-background/40">
            <img
              src="/images/agent-loop.svg"
              alt="Agent loop overview"
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="text-sm font-semibold">Simple flow (audit-ready)</div>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            Regulatory text → control objectives → asset/data mapping → monitoring → drift detection →
            remediation tasks → evidence packages.
          </p>

          <div className="mt-6 grid gap-3">
            {flow.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-start gap-3 rounded-xl border border-border bg-background/40 p-4"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                <div>
                  <div className="text-sm font-medium">{s.title}</div>
                  <div className="mt-1 text-xs text-muted-foreground leading-relaxed">{s.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Agentic primitives</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3">
              {[
                ["Autonomy", "Agents propose actions, run checks, and escalate via human-in-the-loop gates."],
                ["Explainability", "Every mapping and remediation is backed by citations + reasoning trace."],
                ["Evidence-as-code", "Evidence is generated, versioned, and reproducible from telemetry."]
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
              <CardTitle>What “continuous” means</CardTitle>
              <CardDescription>
                Not periodic scans — continuous interpretation, monitoring, and evidence refresh.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4 overflow-hidden rounded-xl border border-border bg-background/40">
                <img
                  src="/images/evidence-pack.svg"
                  alt="Evidence package illustration"
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="grid gap-3">
                {[
                  "Regulatory deltas trigger re-mapping and targeted checks",
                  "Control drift triggers auto-remediation playbooks",
                  "Evidence packages are always up to date for auditors"
                ].map((t) => (
                  <div key={t} className="flex items-center justify-between gap-3 rounded-xl border border-border bg-background/40 px-4 py-3">
                    <div className="text-sm">{t}</div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}


