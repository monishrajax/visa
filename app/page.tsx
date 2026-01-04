import { HeroSection } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { SolutionOverviewSection } from "@/components/sections/solution-overview";
import { FeaturesSection } from "@/components/sections/features";
import { ArchitectureSection } from "@/components/sections/architecture";
import { DashboardSection } from "@/components/sections/dashboard";
import { ScenarioWalkthroughSection } from "@/components/sections/scenario-walkthrough";
import { WhyDifferentSection } from "@/components/sections/why-different";
import { SecurityGovernanceSection } from "@/components/sections/security-governance";
import { MetricsSection } from "@/components/sections/metrics";
import { FinalCtaSection } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <div className="relative">
      <HeroSection />
      <ProblemSection />
      <SolutionOverviewSection />
      <FeaturesSection />
      <ArchitectureSection />
      <DashboardSection />
      <ScenarioWalkthroughSection />
      <WhyDifferentSection />
      <SecurityGovernanceSection />
      <MetricsSection />
      <FinalCtaSection />
    </div>
  );
}


