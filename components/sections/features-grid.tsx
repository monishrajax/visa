"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Radar,
  Eye,
  FileCheck,
  Brain,
  Lock,
  Building2,
  CheckCircle2,
} from "lucide-react";
import { HoverCard } from "@/components/ui/hover-card";
import { WebGLHover } from "@/components/ui/webgl-hover";
import { ScrollZoomHeadline } from "@/components/ui/scroll-zoom-headline";
import Image from "next/image";

const features = [
  {
    icon: Radar,
    title: "Automated Compliance Detection",
    description:
      "AI agents continuously scan your infrastructure for compliance gaps, misconfigurations, and policy violations in real-time.",
    hoverContent: (
      <div className="space-y-3">
        <h4 className="font-semibold text-foreground text-base">How it works</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span>Continuous scanning across cloud, on-prem, and hybrid environments</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span>Automated gap analysis against PCI DSS, GDPR, SOC 2, and 20+ frameworks</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span>Intelligent prioritization of critical violations and risks</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    icon: Eye,
    title: "Real-Time Monitoring",
    description:
      "24/7 visibility into data flows, access patterns, and system changes with instant alerts for anomalies and risks.",
    hoverContent: (
      <div className="space-y-3">
        <h4 className="font-semibold text-foreground text-base">Key capabilities</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span>Real-time data flow tracking and PII/PCI data discovery</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span>Anomaly detection using ML-based behavioral analysis</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span>Instant alerts via Slack, email, PagerDuty, or custom webhooks</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    icon: FileCheck,
    title: "Audit-Ready Evidence",
    description:
      "Automatically generate evidence packages, audit trails, and compliance reports on demand — no manual gathering.",
    hoverContent: (
      <div className="space-y-3">
        <h4 className="font-semibold text-foreground text-base">Evidence automation</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span>Pre-packaged evidence collections for auditor reviews</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span>Immutable audit trails with tamper-proof timestamps</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span>One-click export to PDF, JSON, or custom formats</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    icon: Brain,
    title: "Policy Intelligence",
    description:
      "Natural language policy interpretation that maps regulations to your controls and identifies coverage gaps.",
    hoverContent: (
      <div className="space-y-3">
        <h4 className="font-semibold text-foreground text-base">AI-powered insights</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span>Natural language processing for regulatory text analysis</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span>Automatic mapping of regulations to your technical controls</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span>Coverage gap analysis with remediation recommendations</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    icon: Lock,
    title: "Secure Data Handling",
    description:
      "Zero-trust architecture with encrypted data processing, role-based access, and complete audit trails.",
    hoverContent: (
      <div className="space-y-3">
        <h4 className="font-semibold text-foreground text-base">Security features</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span>AES-256 encryption at rest and TLS 1.3 in transit</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span>Role-based access control with fine-grained permissions</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span>SSO integration with SAML, OIDC, and Active Directory</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    icon: Building2,
    title: "Enterprise Scalability",
    description:
      "Built for complex organizations — multi-cloud, multi-region, and multi-framework compliance from day one.",
    hoverContent: (
      <div className="space-y-3">
        <h4 className="font-semibold text-foreground text-base">Scale & performance</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span>Multi-cloud support: AWS, Azure, GCP, and on-premises</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span>Handle millions of assets and events without performance degradation</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span>99.9% uptime SLA with global data residency options</span>
          </li>
        </ul>
      </div>
    ),
  },
];

export function FeaturesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="product"
      className="relative py-24 lg:py-32 bg-background overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Platform Capabilities
          </span>
          <ScrollZoomHeadline minScale={0.96} maxScale={1.12} scrollRange={450}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Everything you need for{" "}
              <span className="text-primary">continuous compliance</span>
            </h2>
          </ScrollZoomHeadline>
          <p className="mt-6 text-lg text-muted-foreground">
            Powered by agentic AI, our platform automates the entire compliance
            lifecycle — from detection to remediation to audit.
          </p>
        </motion.div>

        {/* Layout: Features Grid with Image */}
        <div className="relative">
          {/* Visa Documents Image - Desktop Position (Right side) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="absolute -right-4 -top-8 lg:-right-12 lg:-top-12 xl:-right-20 xl:-top-16 hidden lg:block w-[320px] xl:w-[420px] z-0 pointer-events-none"
          >
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl transform rotate-6" />
              
              {/* Image container with elegant styling */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl bg-card/50 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 z-10 pointer-events-none" />
                <Image
                  src="/images/visa-documents.jpg"
                  alt="Official Visa documents with security patterns and stamps"
                  width={450}
                  height={550}
                  className="w-full h-auto object-cover opacity-90"
                  style={{
                    objectPosition: "center",
                  }}
                  priority={false}
                />
                
                {/* Overlay gradient for better integration */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
              </div>
              
              {/* Decorative corner accent */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            </div>
          </motion.div>

          {/* Visa Documents Image - Mobile/Tablet Position (Below header, before grid) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:hidden mb-12 max-w-md mx-auto"
          >
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-primary/15 rounded-2xl blur-2xl" />
              
              {/* Image container */}
              <div className="relative rounded-xl overflow-hidden border border-primary/30 shadow-xl bg-card/50 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 z-10 pointer-events-none" />
                <Image
                  src="/images/visa-documents.jpg"
                  alt="Official Visa documents with security patterns and stamps"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover opacity-90"
                  style={{
                    objectPosition: "center",
                  }}
                  priority={false}
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <WebGLHover intensity={8} className="h-full">
                <HoverCard
                  trigger={
                    <div className="group relative cursor-pointer">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                    <div className="relative h-full p-6 lg:p-8 rounded-2xl glass-card yellow-glow-hover">
                      {/* Icon */}
                      <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center mb-6 group-hover:border-primary/40 transition-colors">
                        <feature.icon className="h-7 w-7 text-primary" />
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>

                      {/* Hover indicator */}
                      <div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-sm font-medium">Hover for details</span>
                        <svg
                          className="h-4 w-4 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </div>
                    </div>
                  }
                  content={feature.hoverContent}
                  side={index % 3 === 2 ? "left" : "top"}
                  align="start"
                  delayDuration={300}
                />
              </WebGLHover>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}

