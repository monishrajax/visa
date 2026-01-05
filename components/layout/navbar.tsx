"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { UserButton, useUser } from "@clerk/nextjs";
import { motion, AnimatePresence } from "framer-motion";
import { ImageReveal } from "@/components/ui/image-reveal";
import { WebGLHover } from "@/components/ui/webgl-hover";
import { cn } from "@/lib/cn";

const navLinks = [
  { label: "Product", href: "#product" },
  { label: "Solutions", href: "#solutions" },
  { label: "Compliance", href: "#compliance" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#docs" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isSignedIn } = useUser();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-visa-dark/95 backdrop-blur-md border-b border-border/50 shadow-lg"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 lg:h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <WebGLHover intensity={10}>
                <ImageReveal>
                  <div className="relative">
                    <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-primary to-accent shadow-glow flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-lg">V</span>
                    </div>
                  </div>
                </ImageReveal>
              </WebGLHover>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-foreground tracking-tight">
                  VisaGuard
                </span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-widest">
                  Compliance Platform
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <WebGLHover key={link.href} intensity={5} className="cursor-pointer">
                  <Link
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group block"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </Link>
                </WebGLHover>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              {isSignedIn ? (
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "h-9 w-9 border-2 border-primary/30",
                    },
                  }}
                />
              ) : (
                <div className="hidden sm:flex items-center gap-3">
                  <Link
                    href="/sign-in"
                    className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/sign-up"
                    className="px-5 py-2.5 text-sm font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-colors shadow-glow"
                  >
                    Get Started
                  </Link>
                </div>
              )}

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg border border-border hover:bg-card transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <X className="h-5 w-5 text-foreground" />
                ) : (
                  <Menu className="h-5 w-5 text-foreground" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-card border-l border-border shadow-2xl"
            >
              <div className="flex flex-col h-full pt-20 pb-8 px-6">
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="mt-auto pt-6 border-t border-border">
                  {!isSignedIn && (
                    <div className="flex flex-col gap-3">
                      <Link
                        href="/sign-in"
                        onClick={() => setMobileOpen(false)}
                        className="w-full px-4 py-3 text-center text-sm font-medium text-foreground border border-border rounded-lg hover:bg-muted transition-colors"
                      >
                        Sign In
                      </Link>
                      <Link
                        href="/sign-up"
                        onClick={() => setMobileOpen(false)}
                        className="w-full px-4 py-3 text-center text-sm font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-colors"
                      >
                        Get Started Free
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

