import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ExternalLink, ChevronDown, Check, Shield, Zap, Users, Building2, Mail, FileText, MessageSquare, Settings } from "lucide-react";
import { useState } from "react";
import { LogoStrip } from "@/components/LogoStrip";
const Services = () => {
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };
  const integrationLogos = [{
    src: "exact-color.png",
    alt: "Exact",
    key: "exact"
  }, {
    src: "google-workspace-logo.png",
    alt: "Google Workspace",
    key: "google-workspace"
  }, {
    src: "slack-color.png",
    alt: "Slack",
    key: "slack"
  }, {
    src: "microsoft-365-color.png",
    alt: "Microsoft 365",
    key: "microsoft-365"
  }];
  const faqItems = [{
    id: "which-service",
    question: "Welke dienst past bij ons?",
    answer: "Heb je één duidelijk proces en wil je snel live? Kies Agent atelier. Wil je meerdere processen structureel automatiseren? Kies Maatwerk."
  }, {
    id: "system-integration",
    question: "Kunnen jullie met ons systeem koppelen?",
    answer: "Grote kans van wel. We werken via API's met o.a. Google Workspace, Microsoft 365, AFAS, Exact, Slack, HubSpot, Twilio en meer."
  }, {
    id: "how-fast-start",
    question: "Hoe snel kunnen we starten?",
    answer: "Intake snel in te plannen. Voor Agent atelier plannen we direct vier dagen; maatwerk start in sprints."
  }];
  return <div className="min-h-screen bg-background">
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
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
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

      {/* Main Services */}
      <section className="py-8 lg:py-12 bg-surface-alt">
        <div className="container mx-auto px-6">
          <div className="premium-grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Agent Atelier */}
            <Card className="card-elegant h-full">
              <CardHeader>
                <div className="mb-4">
                  
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

      {/* Maatwerk Examples */}
      <section className="section-spacing bg-background">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <h2 className="text-foreground mb-4">
              Voorbeelden van maatwerk
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Een greep uit de oplossingen die we hebben gebouwd voor verschillende bedrijven.
            </p>
          </div>
          
          <div className="premium-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card className="card-elegant">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-[14px] mb-4">
                  <Mail className="h-6 w-6 text-primary" strokeWidth={2} />
                </div>
                <CardTitle className="text-lg">Slimme mailfiltering</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Inboxregels die leren, prioriteren en automatisch doorzetten naar de juiste collega.
                </p>
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
                <p className="text-muted-foreground">
                  Sjabloon uploaden, data inlezen, automatisch invullen en versturen voor ondertekening.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elegant">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-[14px] mb-4">
                  <MessageSquare className="h-6 w-6 text-primary" strokeWidth={2} />
                </div>
                <CardTitle className="text-lg">Klantcommunicatie</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Automatische follow-ups, gepersonaliseerde berichten en slimme doorverwijzingen.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center">
            <Button asChild variant="outline">
              <a href="/cases">Naar alle voorbeelden</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Integration Tools Section */}
      <section className="py-4 bg-background">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="w-full h-px bg-border mb-4"></div>
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-6">
            <div className="max-w-3xl">
              <h2 className="text-foreground mb-6">
                Wij werken met jullie tools
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Hieronder een aantal voorbeelden van systemen waar we mee koppelen. Via API's ondersteunen we nog veel meer.
              </p>
            </div>
          </div>

          <ul role="list" className="flex flex-wrap gap-5 md:gap-7 items-center justify-start
                       md:flex-wrap
                       overflow-x-auto scrollbar-hide snap-x snap-mandatory
                       md:overflow-visible mb-6">
            {integrationLogos.map(logo => <li key={logo.key} className="flex-shrink-0 snap-start">
                <button className="flex items-center justify-center h-20 px-6 border border-border rounded-xl bg-transparent hover:border-slate-400 hover:translate-y-[-1px] transition-all duration-200 focus:outline focus:outline-2 focus:outline-primary focus:outline-offset-1" aria-label={`${logo.alt} integratie`}>
                  <img 
                    src={`/logos/${logo.src}`} 
                    alt={logo.alt}
                    className="h-16 object-contain transition-all duration-200"
                  />
                </button>
              </li>)}
          </ul>
          
          <div className="mb-6">
            <p className="text-base text-muted-foreground">
              Staat jullie systeem er niet bij? Vraag{" "}
              <Button asChild variant="link" className="p-0 h-auto font-semibold text-primary hover:text-primary-hover underline">
                <a href="/plan">hier</a>
              </Button>
              {" "}of we ook met jouw systeem kunnen koppelen!
            </p>
          </div>
          
          <div className="w-full h-px bg-border"></div>
        </div>
      </section>

      {/* Comparison Table */}
      

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
      

      {/* Data & Security */}
      <section className="section-spacing bg-surface-alt">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              Data & veiligheid
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" strokeWidth={2} />
                <span className="text-lg text-muted-foreground">Alles via API's</span>
              </li>
              <li className="flex items-start gap-3">
                <Building2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" strokeWidth={2} />
                <span className="text-lg text-muted-foreground">Hosting zoveel mogelijk binnen de EU</span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" strokeWidth={2} />
                <span className="text-lg text-muted-foreground">Klantdata wordt nooit gebruikt om taalmodellen te trainen</span>
              </li>
              <li className="flex items-start gap-3">
                <FileText className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" strokeWidth={2} />
                <span className="text-lg text-muted-foreground">DPA/AVG-afspraken mogelijk</span>
              </li>
            </ul>
            
            <p className="text-lg text-muted-foreground">
              Onderzoek van McKinsey laat zien dat met AI en automatisering tot circa 70% van taken te automatiseren is. 
              Resultaten verschillen per team en proces.
            </p>
          </div>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="section-spacing bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="space-y-4">
              {faqItems.map(item => <Card key={item.id} className="card-elegant">
                  <Collapsible open={openFaq === item.id} onOpenChange={() => toggleFaq(item.id)}>
                    <CollapsibleTrigger asChild>
                      <button className="w-full">
                        <CardHeader className="flex flex-row items-center justify-between py-6 hover:bg-surface-mist transition-colors">
                          <h3 className="text-lg font-semibold text-foreground text-left">
                            {item.question}
                          </h3>
                          <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${openFaq === item.id ? 'transform rotate-180' : ''}`} strokeWidth={2} />
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
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      
    </div>;
};
export default Services;