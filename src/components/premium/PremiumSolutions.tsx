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
    title: "Slimme e-mailfiltering voor een bedrijf in documentbeheer",
    description: "Voor een organisatie die zich richt op documentbeheer hebben we een automatisering gebouwd die dagelijks tientallen inkomende e-mails automatisch analyseert en filtert. Veel van deze e-mails zijn aanvragen voor tijdelijke inhuur, maar slechts een deel is relevant.",
    detailedResults: "Vóór de automatisering moesten medewerkers elke mail handmatig bekijken en sorteren — tijdrovend en foutgevoelig. We hebben een AI-gestuurd systeem opgezet dat automatisch de juiste aanvragen herkent en direct doorstuurt naar de juiste mailbox. Dit werkt volledig geïntegreerd met hun Microsoft-omgeving. Zo besparen medewerkers tijd, wordt de kans op fouten kleiner en komt alleen nog relevante informatie binnen.",
    hasButton: false
  },
  {
    icon: MessageSquare,
    title: "Slimmer klantcontact voor een bedrijf in de logistieke en sloopsector",
    description: "Voor een logistiek bedrijf in de sloopsector hebben we het klantcontactproces geautomatiseerd. Klanten belden vaak met dezelfde vragen: \"Waar is de chauffeur nu?\" of \"Hoe laat zijn jullie er?\" — wat zorgde voor veel onderbrekingen en tijdverlies.",
    detailedResults: "We hebben een systeem ontwikkeld dat deze vragen automatisch beantwoordt met realtime ritinformatie, afgestemd op hun planningssoftware. Klanten krijgen direct antwoord zonder tussenkomst van een medewerker, en chauffeurs worden minder gestoord. De operatie blijft doorgaan, maar dan met veel meer rust en duidelijkheid — voor zowel de klant als het team op kantoor.",
    hasButton: false
  },
  {
    icon: FileText,
    title: "Toetsvragen-generator voor een onderwijsadviseur",
    description: "Voor een onderwijsadviseur die leercontent ontwikkelt, hebben we een slimme toetsvragen-generator gebouwd. Het systeem maakt op basis van lesmateriaal en leerdoelen automatisch toetsvragen in verschillende formats, volledig afgestemd op het niveau en type onderwijs.",
    detailedResults: "Gebruikers kunnen documenten uploaden (zoals Word of PDF), aangeven welke vraagtypes ze willen, en het systeem doet de rest. Binnen een paar minuten worden kant-en-klare toetsvragen gegenereerd die direct gebruikt kunnen worden in een toets of digitale leeromgeving. Deze tool bespaart enorm veel tijd en zorgt ervoor dat vragen altijd inhoudelijk kloppen en aansluiten bij de leerdoelen.",
    hasButton: false
  },
  {
    icon: ScrollText,
    title: "Automatische contractgeneratie voor een onderwijsorganisatie",
    description: "Voor een grote onderwijsorganisatie hebben we het volledige proces rondom contracten geautomatiseerd. Waar eerst elk contract handmatig werd aangemaakt, gemaild, ondertekend en gearchiveerd, gaat nu alles vanzelf.",
    detailedResults: "Op basis van ingevoerde gegevens wordt automatisch het juiste contract gegenereerd, verstuurd naar de juiste ontvanger voor digitale ondertekening, en zodra het ondertekend is, komt het netjes in de inbox van de verantwoordelijke. Geen handmatig werk meer, geen losse versies of fouten in de verwerking — alleen een strakke, betrouwbare flow van begin tot eind.",
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
                      Meer info
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