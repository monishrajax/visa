"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollZoomHeadline } from "@/components/ui/scroll-zoom-headline";

const testimonials = [
  {
    quote:
      "VisaGuard transformed our compliance operations. What used to take our team weeks now happens automatically. We passed our PCI audit with zero findings for the first time in company history.",
    author: "Sarah Chen",
    role: "Chief Compliance Officer",
    company: "Atlas Financial Group",
    metric: "Zero audit findings",
  },
  {
    quote:
      "The automated evidence collection alone saved us 2,000+ hours annually. Our auditors were impressed with the quality and organization of the compliance documentation.",
    author: "Michael Rodriguez",
    role: "VP of Risk & Compliance",
    company: "PayStream Technologies",
    metric: "2,000+ hours saved",
  },
  {
    quote:
      "As a CISO, I need real-time visibility into our security posture. VisaGuard gives me confidence that we're not just compliant on paper — we're actually secure.",
    author: "Jennifer Park",
    role: "Chief Information Security Officer",
    company: "Meridian Bank",
    metric: "Real-time visibility",
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      ref={ref}
      className="relative py-24 lg:py-32 bg-card overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Customer Stories
          </span>
          <ScrollZoomHeadline minScale={0.96} maxScale={1.12} scrollRange={450}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Trusted by compliance{" "}
              <span className="text-primary">leaders</span>
            </h2>
          </ScrollZoomHeadline>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Quote Icon */}
          <div className="absolute -top-4 left-8 lg:left-0">
            <Quote className="h-16 w-16 text-primary/20" />
          </div>

          {/* Testimonial Content */}
          <div className="relative pt-8 px-4 lg:px-12">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-foreground leading-relaxed mb-8">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">
                      {testimonials[current].author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonials[current].author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[current].role}
                    </p>
                    <p className="text-sm text-primary">
                      {testimonials[current].company}
                    </p>
                  </div>
                </div>

                {/* Metric Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-semibold text-primary">
                    {testimonials[current].metric}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prev}
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-muted-foreground" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === current
                      ? "w-8 bg-primary"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

