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

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary/30 to-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Zullen we ruimte maken voor <br />
            <span className="text-primary">wat er toe doet?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start vandaag nog met het automatiseren van jouw repetitieve taken
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center slide-up">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
                <benefit.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            className="btn-brand text-xl px-12 py-8 rounded-2xl font-semibold shadow-lg hover:shadow-xl"
          >
            Plan gratis gesprek
          </Button>
        </div>
      </div>
    </section>
  );
}