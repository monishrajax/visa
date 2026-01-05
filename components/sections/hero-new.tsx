"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, Zap } from "lucide-react";
import { ScrollZoomHeadline } from "@/components/ui/scroll-zoom-headline";
import { HeroVisaCard } from "@/components/ui/floating-credit-card";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-visa-dark via-visa-blue to-background" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay" />
      
      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-visa-blue/50 rounded-full blur-[100px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text */}
          <div className="max-w-2xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
            >
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Enterprise-Grade Compliance Platform
              </span>
            </motion.div>

            {/* Headline */}
            <ScrollZoomHeadline minScale={0.98} maxScale={1.15} scrollRange={500}>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] tracking-tight"
              >
                Automated{" "}
                <span className="relative inline-block">
                  <span className="text-primary">PCI & PII</span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      d="M2 8 C 50 2, 150 2, 198 8"
                      stroke="hsl(var(--primary))"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <br />
                Compliance for
                <br />
                Financial Services
              </motion.h1>
            </ScrollZoomHeadline>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl"
            >
              Continuous regulatory monitoring, real-time risk detection, and
              audit-ready evidence generation — powered by agentic AI, built for
              enterprise scale.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="https://visaiitm.vercel.app"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold bg-primary text-primary-foreground rounded-xl hover:bg-accent transition-all shadow-glow hover:shadow-glow-lg"
              >
                Start Free Trial
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="https://visaiitm.vercel.app"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-primary border-2 border-primary/30 rounded-xl hover:border-primary hover:bg-primary/5 transition-all"
              >
                View Demo
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 flex flex-wrap items-center gap-6 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span>SOC 2 Type II Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span>PCI DSS Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span>GDPR Ready</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Dashboard Preview Card */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 rounded-3xl blur-2xl" />
              <div className="relative glass-card rounded-2xl p-6 shadow-2xl">
                {/* Mini Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Compliance Score</p>
                      <p className="text-xs text-muted-foreground">Real-time monitoring</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-primary" />
                    <span className="text-xs font-medium text-primary">Live</span>
                  </div>
                </div>

                {/* Score Display */}
                <div className="flex items-end gap-4 mb-6">
                  <span className="text-6xl font-bold text-foreground">98.7</span>
                  <span className="text-xl text-muted-foreground mb-2">%</span>
                  <span className="text-sm text-green-400 mb-2 flex items-center gap-1">
                    <ArrowRight className="h-3 w-3 rotate-[-45deg]" />
                    +2.3%
                  </span>
                </div>

                {/* Mini Stats Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "Controls", value: "847", status: "active" },
                    { label: "Alerts", value: "12", status: "warning" },
                    { label: "Tasks", value: "3", status: "pending" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="p-3 rounded-lg bg-muted/50 border border-border/50"
                    >
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Activity Bars */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground w-16">PCI DSS</span>
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "94%" }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                    <span className="text-xs font-medium text-foreground w-10">94%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground w-16">GDPR</span>
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "98%" }}
                        transition={{ duration: 1, delay: 0.9 }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                    <span className="text-xs font-medium text-foreground w-10">98%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground w-16">SOC 2</span>
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1, delay: 1 }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                    <span className="text-xs font-medium text-foreground w-10">100%</span>
                  </div>
                </div>

                {/* Rotating Visa Card - Below Compliance Score */}
                <HeroVisaCard />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

