import { PremiumHero } from "@/components/premium/PremiumHero";
import { PremiumKPIs } from "@/components/premium/PremiumKPIs";
import { PremiumClients } from "@/components/premium/PremiumClients";
import { PremiumMethod } from "@/components/premium/PremiumMethod";
import { PremiumSolutions } from "@/components/premium/PremiumSolutions";
import { PremiumCTA } from "@/components/premium/PremiumCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PremiumHero />
      <PremiumKPIs />
      <PremiumClients />
      <PremiumMethod />
      <PremiumSolutions />
      <PremiumCTA />
    </div>
  );
};

export default Index;
