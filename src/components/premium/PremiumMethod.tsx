import { Ear, Wrench, Target } from "lucide-react";

const steps = [
  {
    icon: Ear,
    title: "Intake",
    description: "Ik luister, map processen en kies quick wins",
    detail: "Samen identificeren we de grootste tijdvreters in jouw workflow.",
  },
  {
    icon: Wrench,
    title: "Build", 
    description: "In 4 dagen staat je AI-oplossing live",
    detail: "Rapid prototyping en iteratie tot de oplossing perfect aansluit.",
  },
  {
    icon: Target,
    title: "Resultaat",
    description: "Meetbare tijdswinst, support en iteraties",
    detail: "Direct merkbare impact met doorlopende optimalisatie.",
  },
];

export function PremiumMethod() {
  return (
    <section className="section-spacing">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-foreground">
            Zo <span className="text-primary">werk ik</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Van verkennend gesprek tot werkende oplossing
          </p>
        </div>
        
        <div className="premium-grid grid-cols-1 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-[14px]">
                <step.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-foreground font-semibold">
                  {step.title}
                </h3>
                <p className="text-lg text-muted-foreground font-medium">
                  {step.description}
                </p>
                <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}