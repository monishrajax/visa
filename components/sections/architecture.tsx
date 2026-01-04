"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Bot,
  FileText,
  Gavel,
  ShieldAlert,
  Wrench
} from "lucide-react";
import type { ComponentType } from "react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section, SectionHeading } from "@/components/ui/section";

type Node = {
  id: string;
  label: string;
  sub: string;
  x: number;
  y: number;
  Icon: ComponentType<{ className?: string }>;
};

const nodes: Node[] = [
  {
    id: "discovery",
    label: "Regulatory Discovery Agent",
    sub: "Tracks PCI DSS/GLBA/SOC2 deltas",
    x: 120,
    y: 90,
    Icon: Gavel
  },
  {
    id: "mapping",
    label: "Interpretation & Mapping Agent",
    sub: "Controls ↔ assets/data flows/owners",
    x: 330,
    y: 70,
    Icon: FileText
  },
  {
    id: "monitoring",
    label: "Monitoring & Detection Agents",
    sub: "Telemetry + drift + anomalies",
    x: 520,
    y: 130,
    Icon: ShieldAlert
  },
  {
    id: "remediation",
    label: "Remediation Agent",
    sub: "Playbooks + tickets + validation",
    x: 520,
    y: 270,
    Icon: Wrench
  },
  {
    id: "evidence",
    label: "Evidence Packaging Agent",
    sub: "Evidence-as-code + citations",
    x: 330,
    y: 330,
    Icon: BadgeCheck
  },
  {
    id: "assistant",
    label: "Compliance Assistant Agent",
    sub: "Ask, explain, and export",
    x: 120,
    y: 260,
    Icon: Bot
  }
];

const edges = [
  ["discovery", "mapping"],
  ["mapping", "monitoring"],
  ["monitoring", "remediation"],
  ["remediation", "evidence"],
  ["evidence", "assistant"],
  ["assistant", "mapping"]
] as const;

function getNode(id: string) {
  const n = nodes.find((x) => x.id === id);
  if (!n) throw new Error(`Missing node: ${id}`);
  return n;
}

export function ArchitectureSection() {
  return (
    <Section id="architecture">
      <SectionHeading
        eyebrow="Agentic architecture"
        title="Specialized agents orchestrated as a continuous compliance system"
        description="Each agent is narrowly scoped and auditable. Together, they form a closed-loop: interpret → monitor → remediate → package evidence."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle>System diagram</CardTitle>
            <CardDescription>Animated connections show continuous loops between agent responsibilities.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-2xl border border-border bg-background/40 p-4">
              <svg viewBox="0 0 640 390" className="h-auto w-full">
                <defs>
                  <linearGradient id="edgeGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.9" />
                  </linearGradient>
                  <filter id="softGlow">
                    <feGaussianBlur stdDeviation="2.4" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {edges.map(([a, b], i) => {
                  const A = getNode(a);
                  const B = getNode(b);
                  const x1 = A.x + 80;
                  const y1 = A.y + 18;
                  const x2 = B.x;
                  const y2 = B.y + 18;
                  const midX = (x1 + x2) / 2;
                  const d = `M ${x1} ${y1} C ${midX} ${y1}, ${midX} ${y2}, ${x2} ${y2}`;
                  return (
                    <g key={`${a}-${b}`}>
                      <path d={d} stroke="hsl(var(--border))" strokeWidth="2" fill="none" />
                      <motion.path
                        d={d}
                        stroke="url(#edgeGrad)"
                        strokeWidth="2.5"
                        fill="none"
                        strokeLinecap="round"
                        filter="url(#softGlow)"
                        strokeDasharray="8 10"
                        initial={{ strokeDashoffset: 40 }}
                        animate={{ strokeDashoffset: 0 }}
                        transition={{
                          duration: 2.4,
                          repeat: Infinity,
                          ease: "linear",
                          delay: i * 0.1
                        }}
                      />
                    </g>
                  );
                })}

                {nodes.map((n) => (
                  <g key={n.id}>
                    <rect
                      x={n.x}
                      y={n.y}
                      rx="14"
                      ry="14"
                      width="210"
                      height="50"
                      fill="hsl(var(--card))"
                      opacity="0.92"
                      stroke="hsl(var(--border))"
                    />
                    <rect
                      x={n.x + 8}
                      y={n.y + 8}
                      rx="10"
                      ry="10"
                      width="34"
                      height="34"
                      fill="hsl(var(--muted))"
                      stroke="hsl(var(--border))"
                    />
                    <foreignObject x={n.x + 16} y={n.y + 16} width="18" height="18">
                      <div className="text-primary">
                        <n.Icon className="h-4 w-4" />
                      </div>
                    </foreignObject>
                    <text
                      x={n.x + 50}
                      y={n.y + 23}
                      fontSize="12"
                      fontWeight="600"
                      fill="hsl(var(--foreground))"
                    >
                      {n.label}
                    </text>
                    <text
                      x={n.x + 50}
                      y={n.y + 40}
                      fontSize="11"
                      fill="hsl(var(--muted-foreground))"
                    >
                      {n.sub}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4">
          {[
            {
              title: "Regulatory Discovery Agent",
              desc: "Ingests standards and advisories; flags deltas; triggers re-mapping and targeted checks."
            },
            {
              title: "Interpretation & Mapping Agent",
              desc: "Turns regulatory language into control objectives and maps them to systems, data flows, and owners."
            },
            {
              title: "Monitoring & Detection Agents",
              desc: "Continuously evaluates telemetry for PCI/PII signals, drift, and anomalous access patterns."
            },
            {
              title: "Remediation Agent",
              desc: "Creates tasks with scoped owners, validates fixes, and enforces human-in-the-loop approvals when required."
            },
            {
              title: "Evidence Packaging Agent",
              desc: "Produces auditor-friendly evidence bundles with citations, timestamps, and reproducible checks."
            },
            {
              title: "Compliance Assistant Agent",
              desc: "Answers questions, explains mappings, and exports evidence — with traceable reasoning."
            }
          ].map((x, idx) => (
            <motion.div
              key={x.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: idx * 0.04 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{x.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{x.desc}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}


