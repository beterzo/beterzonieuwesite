import { Button } from "@/components/ui/button";
import { Palette, FileText, Cog, MessageSquare, Mail, ScrollText } from "lucide-react";

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
    hasButton: true,
    link: "/diensten/agent-atelier"
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
    hasButton: true,
    link: "/diensten/maatwerk-automatisering"
  },
  {
    icon: Mail,
    title: "Slimme mailfiltering",
    description: "Voor een Nederlandse onderwijsorganisatie hebben we een AI-systeem ontwikkeld dat dagelijks honderden e-mails automatisch sorteert en prioriteert. Het systeem leert van handmatige correcties en wordt steeds nauwkeuriger.",
    detailedResults: "Door de implementatie daalde de tijd voor mailverwerking van 3 uur naar 30 minuten per dag. Belangrijke e-mails worden nu binnen 5 minuten geïdentificeerd en doorgestuurd naar de juiste persoon. Het systeem heeft een nauwkeurigheid van 94% bereikt.",
    hasButton: false
  },
  {
    icon: MessageSquare,
    title: "AI-klantenservice",
    description: "Voor een adviesbureau hebben we een meertalige AI-chatbot geïmplementeerd die 24/7 klantenvragen beantwoordt in het Nederlands, Engels en Duits. De bot escaleert complexe vragen automatisch naar menselijke medewerkers.",
    detailedResults: "Het resultaat: 90% van alle vragen wordt nu automatisch afgehandeld, de gemiddelde responstijd daalde van 4 uur naar 30 seconden, en klanttevredenheid steeg met 23%. De organisatie bespaart wekelijks 35 uur aan handmatige klantenservice.",
    hasButton: false
  },
  {
    icon: FileText,
    title: "Toetsgenerator",
    description: "Voor een onderwijsinstelling ontwikkelden we een AI-tool die automatisch toetsvragen genereert op basis van studiemateriaal. Docenten kunnen het gewenste niveau en vraagtype specificeren, waarna de AI meerkeuzevragen, open vragen en casussen genereert.",
    detailedResults: "Docenten besparen nu 23% tijd bij het maken van toetsen. De kwaliteit van vragen is consistent hoog en de tool genereert automatisch verschillende moeilijkheidsniveaus. Per toets worden gemiddeld 2,5 uur minder besteed aan vraagcreatie.",
    hasButton: false
  },
  {
    icon: ScrollText,
    title: "Contracten automatiseren",
    description: "Voor een juridisch adviesbureau automatiseerden we het complete contractproces. Van intake-formulier tot getekend contract verloopt nu via een geïntegreerd systeem dat sjablonen gebruikt, clausules aanpast en herinneringen verstuurt.",
    detailedResults: "Het contractproces is 70% sneller geworden - van gemiddeld 5 dagen naar 1,5 dag. Fouten door handmatig typen zijn geëlimineerd en clients ontvangen automatisch statusupdates. De organisatie kan nu 40% meer contracten verwerken met hetzelfde team.",
    hasButton: false
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
          <div className="flex lg:grid lg:grid-cols-2 gap-6 lg:gap-8 min-w-max lg:min-w-0">
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
                
                <div className="space-y-4">
                  {solution.results ? (
                    <div className="space-y-3">
                      {solution.results.map((result, idx) => (
                        <div key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          {result}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {solution.detailedResults}
                    </p>
                  )}
                </div>
                
                {solution.hasButton && (
                  <Button 
                    variant="outline" 
                    className="w-full btn-secondary"
                    asChild
                  >
                    <a href={solution.link}>
                      {solution.title === "Toetsgenerator" ? "Bekijk voorbeeld" : "Meer info"}
                    </a>
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}