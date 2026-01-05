import { HeroSection } from "@/components/sections/hero-new";
import { ProblemSection } from "@/components/sections/problem-section";
import { FeaturesGrid } from "@/components/sections/features-grid";
import { HowItWorks } from "@/components/sections/how-it-works";
import { TrustSecurity } from "@/components/sections/trust-security";
import { UseCases } from "@/components/sections/use-cases";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaSection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <div className="relative">
      <HeroSection />
      <ProblemSection />
      <FeaturesGrid />
      <HowItWorks />
      <TrustSecurity />
      <UseCases />
      <Testimonials />
      <CtaSection />
    </div>
  );
}
