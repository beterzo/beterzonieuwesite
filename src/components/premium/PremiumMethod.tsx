import { Button } from "@/components/ui/button";
import { FileText, Target, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Intake",
    chip: "Begin + Bod",
    description: "We luisteren, mappen processen en kiezen quick wins.",
    detail: "Samen identificeren we de grootste tijdvreters in jullie workflow.",
  },
  {
    icon: Target,
    title: "Build", 
    chip: "Bouw",
    description: "In 4–6 weken staat de eerste versie live.",
    detail: "Rapid prototyping en iteratie tot de oplossing perfect aansluit.",
  },
  {
    icon: TrendingUp,
    title: "Resultaat",
    chip: "Bezorgen + Boost", 
    description: "Meetbare tijdswinst, training en 30 dagen support.",
    detail: "Doorlopende optimalisatie waar nodig.",
  },
];

export function PremiumMethod() {
  return (
    <section className="py-12 lg:py-14">
      <div className="container mx-auto px-6">
        <div className="space-y-4 mb-12">
          <h2 className="text-foreground">Zo werken wij</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Van verkennend gesprek tot werkende oplossing
          </p>
        </div>
        
        {/* Desktop & Tablet Grid */}
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-background border border-border rounded-[14px] p-6 space-y-4 hover:bg-surface-mist hover:-translate-y-0.5 transition-all duration-200 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
              role="listitem"
            >
              <div className="flex items-start justify-between">
                <div className="inline-flex items-center justify-center w-6 h-6 bg-primary/10 rounded-full flex-shrink-0">
                  <step.icon className="h-3 w-3 text-primary" strokeWidth={2} />
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <div className="inline-block px-3 py-1 bg-surface-mist text-foreground text-xs font-semibold rounded-full border border-border">
                    {step.chip}
                  </div>
                </div>
                
                <p className="text-base text-muted-foreground font-medium leading-relaxed">
                  {step.description}
                </p>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div 
          className="sm:hidden flex gap-4 overflow-x-auto pb-4 mb-12 scroll-snap-type-x scrollbar-hide"
          role="list"
          aria-label="Werkwijze stappen"
        >
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-background border border-border rounded-[14px] p-6 space-y-4 min-w-[80vw] flex-shrink-0 scroll-snap-align-start hover:bg-surface-mist transition-colors duration-200"
              role="listitem"
            >
              <div className="flex items-start justify-between">
                <div className="inline-flex items-center justify-center w-6 h-6 bg-primary/10 rounded-full flex-shrink-0">
                  <step.icon className="h-3 w-3 text-primary" strokeWidth={2} />
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <div className="inline-block px-3 py-1 bg-surface-mist text-foreground text-xs font-semibold rounded-full border border-border">
                    {step.chip}
                  </div>
                </div>
                
                <p className="text-base text-muted-foreground font-medium leading-relaxed">
                  {step.description}
                </p>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild className="btn-primary">
            <a href="/hoe-wij-werken">Bekijk onze werkwijze</a>
          </Button>
          <Button asChild variant="outline" className="btn-secondary">
            <a href="/plan-kennismaking">Plan gratis gesprek</a>
          </Button>
        </div>
      </div>
    </section>
  );
}