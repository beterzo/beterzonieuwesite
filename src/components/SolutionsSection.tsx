import { Button } from "@/components/ui/button";
import { Palette, FileText, Cog, MessageSquare } from "lucide-react";

const solutions = [
  {
    icon: Palette,
    title: "Agent atelier",
    description: "Creatieve AI-assistenten voor designprocessen",
    features: [
      "Automatische contentgeneratie",
      "Visuele ondersteuning", 
      "Workflow optimalisatie"
    ],
  },
  {
    icon: FileText,
    title: "Toetsgenerator",
    description: "AI-gedreven toetsen voor onderwijsinstellingen",
    features: [
      "Automatische vraagstelling",
      "Aangepaste moeilijkheidsgraden",
      "Snelle correctie"
    ],
  },
  {
    icon: Cog,
    title: "Maatwerk automatisering",
    description: "Specifieke AI-oplossingen voor jouw bedrijf",
    features: [
      "Op maat ontwikkeld",
      "Naadloze integratie",
      "Persoonlijke begeleiding"
    ],
  },
  {
    icon: MessageSquare,
    title: "Klantenservice bot",
    description: "24/7 geautomatiseerde klantenservice",
    features: [
      "Instant antwoorden",
      "Natuurlijke gesprekken",
      "Escalatie naar mensen"
    ],
  },
];

export function SolutionsSection() {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Onze oplossingen
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Van standaardoplossingen tot volledig maatwerk
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="bg-card p-8 rounded-2xl border border-card-border shadow-sm card-hover slide-up"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-6">
                <solution.icon className="h-7 w-7 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {solution.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {solution.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                variant="outline" 
                className="w-full btn-secondary rounded-xl"
              >
                Meer info
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}