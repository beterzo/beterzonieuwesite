import { Button } from "@/components/ui/button";
import { Palette, FileText, Cog, MessageSquare } from "lucide-react";

const solutions = [
  {
    icon: Palette,
    title: "Agent atelier",
    description: "Van idee naar werkende AI-agent in 4 dagen",
    results: [
      "Automatische contentgeneratie",
      "75% minder handmatig werk",
      "24/7 beschikbaarheid"
    ],
  },
  {
    icon: Cog,
    title: "Maatwerk automatisering",
    description: "Intake, documenten, roosters, workflows",
    results: [
      "Op maat ontwikkeld",
      "Naadloze integratie",
      "Directe ROI zichtbaar"
    ],
  },
  {
    icon: FileText,
    title: "Toetsgenerator",
    description: "23% tijdwinst bij vragen maken",
    results: [
      "Automatische vraagstelling",
      "Aangepaste moeilijkheid",
      "Snelle correctie"
    ],
  },
  {
    icon: MessageSquare,
    title: "AI-klantenservice",
    description: "24/7, meertalig, escalaties",
    results: [
      "Instant antwoorden",
      "Natuurlijke gesprekken",
      "90% automatische afhandeling"
    ],
  },
];

export function PremiumSolutions() {
  return (
    <section className="section-spacing bg-surface-mist">
      <div className="container mx-auto px-6">
        <div className="space-y-4 mb-16">
          <h2 className="text-foreground">
            Onze <span className="text-primary">oplossingen</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Van standaard tot volledig maatwerk
          </p>
        </div>
        
        {/* Horizontal scrollable on mobile, grid on desktop */}
        <div className="overflow-x-auto lg:overflow-visible">
          <div className="flex lg:grid lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 min-w-max lg:min-w-0">
            {solutions.map((solution, index) => (
              <div 
                key={index} 
                className="premium-card p-8 space-y-6 min-w-[300px] lg:min-w-0"
              >
                <div className="space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-[10px]">
                    <solution.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {solution.results.map((result, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {result}
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full btn-secondary">
                  Meer info
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}