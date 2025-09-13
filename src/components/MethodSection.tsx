import { Ear, Wrench, Target } from "lucide-react";

const steps = [
  {
    icon: Ear,
    title: "Intake",
    description: "We luisteren en analyseren",
    detail: "Eerst begrijpen we jouw processen en uitdagingen. We identificeren kansen voor automatisering.",
  },
  {
    icon: Wrench,
    title: "Build", 
    description: "We bouwen in 4 dagen een AI-oplossing",
    detail: "Onze experts ontwikkelen een op maat gemaakte AI-oplossing die perfect aansluit bij jouw workflow.",
  },
  {
    icon: Target,
    title: "Resultaat",
    description: "Meetbare impact binnen 30 dagen",
    detail: "Je ziet direct resultaat: meer tijd, minder stress en focus op wat er écht toe doet.",
  },
];

export function MethodSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Zo werken wij
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Van idee tot implementatie in een gestructureerd proces
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center slide-up">
              <div className="relative">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-6">
                  <step.icon className="h-10 w-10 text-primary" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-border"></div>
                )}
              </div>
              
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-lg text-primary font-medium mb-4">
                {step.description}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {step.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}