import type { Metadata } from "next";
import "./globals.css";

import { ThemeScript } from "@/components/theme/theme-script";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Agentic AI Continuous PCI/PII Compliance Platform",
  description:
    "Autonomous agentic AI for continuous PCI & PII compliance: real-time regulatory interpretation, risk detection, and audit-ready evidence — without manual overhead."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-background text-foreground">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}


