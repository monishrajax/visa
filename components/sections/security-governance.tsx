"use client";

import { motion } from "framer-motion";
import { Fingerprint, Lock, Shield, ShieldCheck, Users } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section, SectionHeading } from "@/components/ui/section";

const items = [
  {
    Icon: Shield,
    title: "Explainability by default",
    desc: "Every control mapping, alert, and remediation recommendation is traceable to citations and signals."
  },
  {
    Icon: Fingerprint,
    title: "Audit trails and provenance",
    desc: "Immutable event logs for agent actions, approvals, evidence generation, and evidence exports."
  },
  {
    Icon: Users,
    title: "Human-in-the-loop controls",
    desc: "Configurable approval gates for destructive or high-risk remediations and policy exceptions."
  },
  {
    Icon: Lock,
    title: "Data minimization",
    desc: "Scoped inspection, tokenized sampling, and redaction-first processing to reduce sensitive data exposure."
  },
  {
    Icon: ShieldCheck,
    title: "Encryption & access control",
    desc: "Strong encryption at rest/in transit, least-privilege access, and segregated evidence storage."
  }
];

export function SecurityGovernanceSection() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Security & governance"
        title="Built for regulated environments"
        description="Designed to satisfy regulators and auditors: clear accountability, traceability, and strict data handling practices."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((i, idx) => (
          <motion.div
            key={i.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: idx * 0.04 }}
          >
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-muted">
                    <i.Icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>{i.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{i.desc}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}


