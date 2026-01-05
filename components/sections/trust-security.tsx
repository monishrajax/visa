"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Lock, Eye, Key, Server, CheckCircle2 } from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "Zero-Trust Architecture",
    description: "Every request is verified, every access is logged.",
  },
  {
    icon: Key,
    title: "End-to-End Encryption",
    description: "AES-256 encryption at rest and in transit.",
  },
  {
    icon: Eye,
    title: "Complete Audit Trails",
    description: "Immutable logs of all system activities.",
  },
  {
    icon: Server,
    title: "Data Residency Control",
    description: "Choose where your data lives and is processed.",
  },
];

const certifications = [
  { name: "SOC 2 Type II", status: "Certified" },
  { name: "ISO 27001", status: "Certified" },
  { name: "PCI DSS", status: "Level 1" },
  { name: "GDPR", status: "Compliant" },
  { name: "HIPAA", status: "Ready" },
  { name: "FedRAMP", status: "In Progress" },
];

export function TrustSecurity() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="compliance"
      className="relative py-24 lg:py-32 bg-background overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background" />
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary/5 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Security & Trust
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Enterprise security you can{" "}
              <span className="text-primary">trust</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Built with security-first principles, our platform meets the
              strictest regulatory requirements while protecting your most
              sensitive data.
            </p>

            {/* Security Features */}
            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card/50 border border-border"
                >
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Security Shield Illustration */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 rounded-3xl blur-2xl" />
              <div className="relative p-8 rounded-2xl glass-card">
                {/* Central Shield */}
                <div className="flex justify-center mb-8">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="relative"
                  >
                    <div className="h-32 w-32 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 border-2 border-primary/30 flex items-center justify-center">
                      <Shield className="h-16 w-16 text-primary" />
                    </div>
                    {/* Orbiting elements */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute -inset-8"
                    >
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-primary/50" />
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-accent/50" />
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-primary/30" />
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-accent/30" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-3 gap-3">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={cert.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                      className="p-3 rounded-lg bg-muted/50 border border-border text-center"
                    >
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <CheckCircle2 className="h-3 w-3 text-primary" />
                        <span className="text-[10px] font-medium text-primary uppercase">
                          {cert.status}
                        </span>
                      </div>
                      <p className="text-xs font-medium text-foreground">
                        {cert.name}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom Text */}
                <div className="mt-6 pt-6 border-t border-border text-center">
                  <p className="text-sm text-muted-foreground">
                    Trusted by{" "}
                    <span className="text-primary font-semibold">500+</span>{" "}
                    financial institutions worldwide
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

