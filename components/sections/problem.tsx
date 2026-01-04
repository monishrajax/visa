"use client";

import { motion } from "framer-motion";
import { AlertTriangle, FileSearch, TimerReset } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section, SectionHeading } from "@/components/ui/section";

const items = [
  {
    icon: TimerReset,
    title: "Reactive, slow, and expensive",
    desc: "Manual sampling and periodic audits create blind spots; issues surface late and cost more to fix."
  },
  {
    icon: AlertTriangle,
    title: "PCI/PII leaks hide in plain sight",
    desc: "Email, logs, file shares, SaaS exports, and backups expand exposure beyond “known” systems."
  },
  {
    icon: FileSearch,
    title: "Regulations outpace teams",
    desc: "Requirements evolve faster than control owners can interpret, map, and produce evidence consistently."
  }
];

export function ProblemSection() {
  return (
    <Section id="problem">
      <SectionHeading
        eyebrow="Problem"
        title="Compliance programs are built for audits — not for continuous risk"
        description="Financial services teams need real-time posture, not quarterly snapshots. The gap between “policy” and “production” is where incidents and audit findings happen."
      />

      <div className="grid gap-4 md:grid-cols-3">
        {items.map((it, idx) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: idx * 0.05 }}
          >
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-muted">
                    <it.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>{it.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{it.desc}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}


