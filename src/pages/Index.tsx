import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { ClientLogos } from "@/components/ClientLogos";
import { MethodSection } from "@/components/MethodSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { TrackRecordSection } from "@/components/TrackRecordSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <StatsSection />
      <ClientLogos />
      <MethodSection />
      <SolutionsSection />
      <TrackRecordSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
