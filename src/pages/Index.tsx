import { PremiumHero } from "@/components/premium/PremiumHero";
import { ResultsSection } from "@/components/ResultsSection";
import { PremiumClients } from "@/components/premium/PremiumClients";
import { PremiumMethod } from "@/components/premium/PremiumMethod";
import { PremiumSolutions } from "@/components/premium/PremiumSolutions";
import { PremiumCTA } from "@/components/premium/PremiumCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PremiumHero />
      <ResultsSection />
      <PremiumClients />
      <PremiumMethod />
      <PremiumSolutions />
      <PremiumCTA />
    </div>
  );
};

export default Index;
