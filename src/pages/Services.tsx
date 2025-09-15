import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ExternalLink, ChevronDown, Check, Shield, Zap, Users, Building2, Mail, FileText, MessageSquare, Settings } from "lucide-react";
import { useState } from "react";

const Services = () => {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const softwareLogos = [
    { name: "Google Workspace", color: "#4285F4" },
    { name: "Microsoft 365", color: "#0078D4" },
    { name: "AFAS", color: "#E60012" },
    { name: "Exact", color: "#00B0F0" },
    { name: "Slack", color: "#4A154B" },
    { name: "HubSpot", color: "#FF7A59" },
    { name: "Twilio", color: "#F22F46" }
  ];

  const integrationLogos = [
    ...softwareLogos,
    { name: "en meer…", color: "#475569" }
  ];

  const faqItems = [
    {
      id: "which-service",
      question: "Welke dienst past bij ons?",
      answer: "Heb je één duidelijk proces en wil je snel live? Kies Agent atelier. Wil je meerdere processen structureel automatiseren? Kies Maatwerk."
    },
    {
      id: "system-integration",
      question: "Kunnen jullie met ons systeem koppelen?",
      answer: "Grote kans van wel. We werken via API's met o.a. Google Workspace, Microsoft 365, AFAS, Exact, Slack, HubSpot, Twilio en meer."
    },
    {
      id: "how-fast-start",
      question: "Hoe snel kunnen we starten?",
      answer: "Intake snel in te plannen. Voor Agent atelier plannen we direct vier dagen; maatwerk start in sprints."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="section-spacing bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-foreground mb-6">
              Wij bouwen wat echt helpt
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Oplossingen die specifiek ruimte maken in jullie werk. Volledig op maat, zonder ruis.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button asChild size="lg">
                <a href="/plan">Plan gratis gesprek</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/cases">Bekijk cases</a>
              </Button>
            </div>

            {/* Software logos */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-border">
              {softwareLogos.map((logo, index) => (
                <div 
                  key={index}
                  className="h-6 flex items-center text-sm font-medium"
                  style={{ color: logo.color }}
                >
                  {logo.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-spacing bg-surface-alt">
        <div className="container mx-auto px-6">
          <div className="premium-grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Agent Atelier */}
            <Card className="card-elegant h-full">
              <CardHeader>
                <div className="mb-4">
                  <div className="inline-flex items-center bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                    Maandag idee • donderdag live • vrijdag vrij
                  </div>
                  <CardTitle className="text-foreground">Agent atelier</CardTitle>
                </div>
                <p className="text-muted-foreground">
                  In 4 dagen staat er op locatie een AI-agent live die een deel van jullie proces automatisch uitvoert. 
                  Inclusief training en inside look in hoe we werken.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-muted-foreground">Procesanalyse</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-muted-foreground">Training</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-muted-foreground">Inside look prompten/LLM</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-muted-foreground">30 dagen support</span>
                  </li>
                </ul>
                
                <div className="space-y-3 pt-4">
                  <Button asChild className="w-full">
                    <a href="/diensten/agent-atelier">Bekijk Agent atelier</a>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <a href="/hoe-wij-werken">Hoe wij werken</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Maatwerk Automatisering */}
            <Card className="card-elegant h-full">
              <CardHeader>
                <CardTitle className="text-foreground mb-4">Maatwerk automatisering</CardTitle>
                <p className="text-muted-foreground">
                  Ieder bedrijf heeft herhalende stappen. Wij nemen die tijdsinvestering structureel uit handen 
                  met een oplossing die we op afstand bouwen — precies passend op jullie workflow.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-muted-foreground">Intake & architectuur</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-muted-foreground">Integraties via API's</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-muted-foreground">Iteratieve sprints</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <span className="text-muted-foreground">Documentatie & overdracht</span>
                  </li>
                </ul>
                
                <div className="space-y-3 pt-4">
                  <Button asChild className="w-full">
                    <a href="/diensten/maatwerk-automatisering">Bekijk maatwerk</a>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <a href="/plan">Plan gratis gesprek</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-spacing bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl">
            <Card className="card-elegant">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Labels Column */}
                  <div className="space-y-6 lg:space-y-8">
                    <div className="font-medium text-foreground">Doel</div>
                    <div className="font-medium text-foreground">Doorlooptijd</div>
                    <div className="font-medium text-foreground">Werkwijze</div>
                    <div className="font-medium text-foreground">Locatie</div>
                    <div className="font-medium text-foreground">Deliverables</div>
                    <div className="font-medium text-foreground">Training</div>
                    <div className="font-medium text-foreground">Support</div>
                    <div className="font-medium text-foreground">Integraties</div>
                    <div className="font-medium text-foreground">Data & security</div>
                  </div>

                  {/* Agent Atelier Column */}
                  <div className="space-y-6 lg:space-y-8">
                    <div className="text-sm text-muted-foreground">Snel een agent live op één duidelijk proces</div>
                    <div className="text-sm text-muted-foreground">4 dagen op locatie</div>
                    <div className="text-sm text-muted-foreground">Analyse → bouw → training → live</div>
                    <div className="text-sm text-muted-foreground">Bij jullie op kantoor</div>
                    <div className="text-sm text-muted-foreground">Live AI-agent + documentatie</div>
                    <div className="text-sm text-muted-foreground">Inbegrepen op dag 4</div>
                    <div className="text-sm text-muted-foreground">30 dagen inbegrepen</div>
                    <div className="text-sm text-muted-foreground">Koppelen met jullie tools</div>
                    <div className="text-sm text-muted-foreground">API-first, EU waar kan, geen modeltraining op klantdata</div>
                  </div>

                  {/* Maatwerk Column */}
                  <div className="space-y-6 lg:space-y-8">
                    <div className="text-sm text-muted-foreground">Structureel automatiseren over meerdere processen</div>
                    <div className="text-sm text-muted-foreground">In sprints; planning in overleg</div>
                    <div className="text-sm text-muted-foreground">Intake & architectuur → bouw op afstand → iteraties</div>
                    <div className="text-sm text-muted-foreground">Remote (met checkpoints)</div>
                    <div className="text-sm text-muted-foreground">Gekoppelde flows/agents + documentatie</div>
                    <div className="text-sm text-muted-foreground">Inbegrepen bij oplevering</div>
                    <div className="text-sm text-muted-foreground">Optioneel SLA per maand</div>
                    <div className="text-sm text-muted-foreground">Koppelen met jullie tools (uitbreidbaar)</div>
                    <div className="text-sm text-muted-foreground">API-first, EU waar kan, geen modeltraining op klantdata</div>
                  </div>
                </div>
                
                <div className="pt-8 border-t border-border mt-8">
                  <Button asChild variant="link" className="p-0 h-auto font-normal">
                    <a href="/plan" className="text-muted-foreground hover:text-primary">
                      Twijfel wat past? Plan een verkennend gesprek
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Example Cases */}
      <section className="section-spacing bg-surface-alt">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-foreground mb-4">
              Voorbeelden uit maatwerk
            </h2>
          </div>
          
          <div className="premium-grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="card-elegant">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-[14px] mb-4">
                  <Mail className="h-6 w-6 text-primary" strokeWidth={2} />
                </div>
                <CardTitle className="text-lg">Slimme mailfiltering</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Inboxregels die leren, prioriteren en automatisch doorzetten naar de juiste collega of flow.
                </p>
                <Button asChild variant="outline" size="sm">
                  <a href="/cases/slimme-mailfiltering">
                    Bekijk voorbeeld <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-elegant">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-[14px] mb-4">
                  <FileText className="h-6 w-6 text-primary" strokeWidth={2} />
                </div>
                <CardTitle className="text-lg">Contracten automatiseren</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Sjabloon uploaden, data inlezen, automatisch invullen en versturen voor ondertekening.
                </p>
                <Button asChild variant="outline" size="sm">
                  <a href="/cases/contracten-automatiseren">
                    Bekijk voorbeeld <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="section-spacing bg-background">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Werkt met jullie tools
            </h3>
          </div>
          
          <div className="flex flex-wrap items-center gap-6 mb-8">
            {integrationLogos.map((logo, index) => (
              <div 
                key={index}
                className="h-6 flex items-center text-sm font-medium"
                style={{ color: logo.color }}
              >
                {logo.name}
              </div>
            ))}
          </div>
          
          <Button asChild variant="link" className="p-0 h-auto font-normal text-muted-foreground">
            <a href="/contact">
              Ontbreekt jullie systeem? Stel je vraag
            </a>
          </Button>
        </div>
      </section>

      {/* Data & Security */}
      <section className="section-spacing bg-surface-alt">
        <div className="container mx-auto px-6">
          <div className="premium-grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Data & veiligheid
              </h3>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span className="text-muted-foreground">Alles via API's</span>
                </li>
                <li className="flex items-start gap-3">
                  <Building2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span className="text-muted-foreground">Hosting zoveel mogelijk binnen de EU</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span className="text-muted-foreground">Klantdata wordt nooit gebruikt om taalmodellen te trainen</span>
                </li>
                <li className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span className="text-muted-foreground">DPA/AVG-afspraken mogelijk</span>
                </li>
              </ul>
            </div>
            
            <div className="lg:pl-8">
              <p className="text-sm text-muted-foreground">
                Onderzoek van McKinsey laat zien dat met AI en automatisering tot circa 70% van taken te automatiseren is. 
                Resultaten verschillen per team en proces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="section-spacing bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="space-y-4">
              {faqItems.map((item) => (
                <Card key={item.id} className="card-elegant">
                  <Collapsible open={openFaq === item.id} onOpenChange={() => toggleFaq(item.id)}>
                    <CollapsibleTrigger asChild>
                      <button className="w-full">
                        <CardHeader className="flex flex-row items-center justify-between py-6 hover:bg-surface-mist transition-colors">
                          <h3 className="text-lg font-semibold text-foreground text-left">
                            {item.question}
                          </h3>
                          <ChevronDown 
                            className={`h-5 w-5 text-muted-foreground transition-transform ${
                              openFaq === item.id ? 'transform rotate-180' : ''
                            }`} 
                            strokeWidth={2}
                          />
                        </CardHeader>
                      </button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <CardContent className="pt-0 pb-6">
                        <p className="text-muted-foreground">
                          {item.answer}
                        </p>
                      </CardContent>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-spacing bg-surface-alt">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-foreground mb-8">
              Samen ruimte maken voor werk dat telt?
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <a href="/plan">Plan gratis gesprek</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/cases">Bekijk cases</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;