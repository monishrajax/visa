"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = {
  product: {
    title: "Product",
    links: [
      { label: "Features", href: "#product" },
      { label: "Integrations", href: "#integrations" },
      { label: "Pricing", href: "#pricing" },
      { label: "Changelog", href: "#changelog" },
      { label: "Roadmap", href: "#roadmap" },
    ],
  },
  solutions: {
    title: "Solutions",
    links: [
      { label: "For Banks", href: "#banks" },
      { label: "For FinTech", href: "#fintech" },
      { label: "For Payment Processors", href: "#payments" },
      { label: "For Compliance Teams", href: "#compliance-teams" },
      { label: "Enterprise", href: "#enterprise" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#docs" },
      { label: "API Reference", href: "#api" },
      { label: "Blog", href: "#blog" },
      { label: "Case Studies", href: "#cases" },
      { label: "Webinars", href: "#webinars" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Careers", href: "#careers" },
      { label: "Contact", href: "#contact" },
      { label: "Partners", href: "#partners" },
      { label: "Press", href: "#press" },
    ],
  },
};

const legalLinks = [
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Terms of Service", href: "#terms" },
  { label: "Security", href: "#security" },
  { label: "Compliance", href: "#compliance-info" },
  { label: "Cookie Policy", href: "#cookies" },
];

export function Footer() {
  return (
    <footer className="relative bg-footer border-t border-border">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:pr-8">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-accent shadow-glow flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">V</span>
              </div>
              <div>
                <span className="text-lg font-bold text-foreground">VisaGuard</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Enterprise-grade compliance automation for financial services. Trusted
              by 500+ institutions worldwide.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {["twitter", "linkedin", "github"].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="h-9 w-9 rounded-lg bg-muted/50 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                  aria-label={social}
                >
                  {social === "twitter" && (
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  )}
                  {social === "linkedin" && (
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  )}
                  {social === "github" && (
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} VisaGuard. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Compliance Disclaimer */}
          <div className="mt-6 pt-6 border-t border-border/50">
            <p className="text-xs text-muted-foreground/70 text-center max-w-4xl mx-auto">
              VisaGuard is a compliance automation platform designed to assist
              organizations in managing their regulatory obligations. Our platform
              does not replace legal or compliance advice. Organizations should
              consult with qualified professionals for specific compliance
              requirements. SOC 2, PCI DSS, and other certifications are maintained
              through independent third-party auditors.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

