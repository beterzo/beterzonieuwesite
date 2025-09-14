import { Button } from "@/components/ui/button";
import { Clock, Zap, Heart } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Gratis intake",
    description: "Geen verplichtingen, wel duidelijkheid",
  },
  {
    icon: Zap,
    title: "Snelle start",
    description: "Van gesprek naar oplossing in 4 dagen",
  },
  {
    icon: Heart,
    title: "Persoonlijke begeleiding",
    description: "Dedicated support tijdens het hele proces",
  },
];

export function PremiumCTA() {
  return (
    <section className="section-spacing bg-surface-mist">
      <div className="container mx-auto px-6">
        <div className="space-y-6 mb-16">
          <h2 className="text-foreground">
            Zullen we ruimte maken voor{" "}
            <span className="text-primary">wat er toe doet?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Start vandaag nog met het automatiseren van jouw repetitieve taken
          </p>
        </div>
        
        <div className="premium-grid grid-cols-1 lg:grid-cols-3 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="space-y-4">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-[14px]">
                <benefit.icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div>
          <Button className="btn-primary text-lg px-12 py-6">
            Plan gratis gesprek
          </Button>
        </div>
      </div>
    </section>
  );
}