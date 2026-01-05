import type { Metadata } from "next";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingCreditCard } from "@/components/ui/floating-credit-card";
import { CustomCursor } from "@/components/ui/custom-cursor";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "VisaGuard | Automated PCI & PII Compliance Platform",
  description:
    "Enterprise-grade compliance automation for financial services. Continuous monitoring, real-time risk detection, and audit-ready evidence generation powered by agentic AI.",
  keywords: [
    "PCI compliance",
    "PII protection",
    "compliance automation",
    "financial services",
    "regulatory compliance",
    "audit automation",
    "fintech compliance",
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark" suppressHydrationWarning>
        <head>
          <meta name="theme-color" content="#0B1C2D" />
        </head>
        <body className={`${inter.variable} font-sans`}>
          <CustomCursor />
          <div className="min-h-screen bg-background text-foreground relative">
            <FloatingCreditCard />
            <Navbar />
            <main className="relative z-20">{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
