import { PremiumHero } from "@/components/premium/PremiumHero";
import { PremiumKPIs } from "@/components/premium/PremiumKPIs";
import { PremiumClients } from "@/components/premium/PremiumClients";
import { PremiumMethod } from "@/components/premium/PremiumMethod";
import { PremiumSolutions } from "@/components/premium/PremiumSolutions";
import { PremiumProof } from "@/components/premium/PremiumProof";
import { PremiumCTA } from "@/components/premium/PremiumCTA";
import { PremiumFooter } from "@/components/premium/PremiumFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PremiumHero />
      <PremiumKPIs />
      <PremiumClients />
      <PremiumMethod />
      <PremiumSolutions />
      <PremiumProof />
      <PremiumCTA />
      <PremiumFooter />
    </div>
  );
};

export default Index;
