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
      <section className="py-8 lg:py-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-foreground mb-6">
              Wij bouwen wat echt helpt
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Oplossingen die specifiek ruimte maken in jullie werk. Volledig op maat, zonder ruis.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button asChild size="lg">
                <a href="/plan-kennismaking">Plan gratis gesprek</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                
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
                    <a href="/plan-kennismaking">Plan gratis gesprek</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Maatwerk Examples */}
      <section className="py-8 lg:py-12 bg-background">
        <div className="container mx-auto px-6">
            <div className="mb-6">
              <h2 className="text-foreground mb-3">
                Voorbeelden van maatwerk
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Een greep uit de oplossingen die we hebben gebouwd voor verschillende bedrijven.
              </p>
            </div>
            
            <div className="premium-grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card className="card-elegant">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-[14px] mb-4">
                  <Mail className="h-6 w-6 text-primary" strokeWidth={2} />
                </div>
                <CardTitle className="text-lg">Slimme e-mailfiltering voor een bedrijf in documentbeheer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Voor een organisatie die zich richt op documentbeheer hebben we een automatisering gebouwd die dagelijks tientallen inkomende e-mails automatisch analyseert en filtert. Veel van deze e-mails zijn aanvragen voor tijdelijke inhuur, maar slechts een deel is relevant.
                </p>
                <p className="text-muted-foreground text-sm">
                  Vóór de automatisering moesten medewerkers elke mail handmatig bekijken en sorteren — tijdrovend en foutgevoelig. We hebben een AI-gestuurd systeem opgezet dat automatisch de juiste aanvragen herkent en direct doorstuurt naar de juiste mailbox. Dit werkt volledig geïntegreerd met hun Microsoft-omgeving. Zo besparen medewerkers tijd, wordt de kans op fouten kleiner en komt alleen nog relevante informatie binnen.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elegant">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-[14px] mb-4">
                  <MessageSquare className="h-6 w-6 text-primary" strokeWidth={2} />
                </div>
                <CardTitle className="text-lg">Slimmer klantcontact voor een bedrijf in de logistieke en sloopsector</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Voor een logistiek bedrijf in de sloopsector hebben we het klantcontactproces geautomatiseerd. Klanten belden vaak met dezelfde vragen: "Waar is de chauffeur nu?" of "Hoe laat zijn jullie er?" — wat zorgde voor veel onderbrekingen en tijdverlies.
                </p>
                <p className="text-muted-foreground text-sm">
                  We hebben een systeem ontwikkeld dat deze vragen automatisch beantwoordt met realtime ritinformatie, afgestemd op hun planningssoftware. Klanten krijgen direct antwoord zonder tussenkomst van een medewerker, en chauffeurs worden minder gestoord. De operatie blijft doorgaan, maar dan met veel meer rust en duidelijkheid — voor zowel de klant als het team op kantoor.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elegant">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-[14px] mb-4">
                  <FileText className="h-6 w-6 text-primary" strokeWidth={2} />
                </div>
                <CardTitle className="text-lg">Toetsvragen-generator voor een onderwijsadviseur</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Voor een onderwijsadviseur die leercontent ontwikkelt, hebben we een slimme toetsvragen-generator gebouwd. Het systeem maakt op basis van lesmateriaal en leerdoelen automatisch toetsvragen in verschillende formats, volledig afgestemd op het niveau en type onderwijs.
                </p>
                <p className="text-muted-foreground text-sm">
                  Gebruikers kunnen documenten uploaden (zoals Word of PDF), aangeven welke vraagtypes ze willen, en het systeem doet de rest. Binnen een paar minuten worden kant-en-klare toetsvragen gegenereerd die direct gebruikt kunnen worden in een toets of digitale leeromgeving. Deze tool bespaart enorm veel tijd en zorgt ervoor dat vragen altijd inhoudelijk kloppen en aansluiten bij de leerdoelen.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elegant">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-[14px] mb-4">
                  <Settings className="h-6 w-6 text-primary" strokeWidth={2} />
                </div>
                <CardTitle className="text-lg">Automatische contractgeneratie voor een onderwijsorganisatie</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Voor een grote onderwijsorganisatie hebben we het volledige proces rondom contracten geautomatiseerd. Waar eerst elk contract handmatig werd aangemaakt, gemaild, ondertekend en gearchiveerd, gaat nu alles vanzelf.
                </p>
                <p className="text-muted-foreground text-sm">
                  Op basis van ingevoerde gegevens wordt automatisch het juiste contract gegenereerd, verstuurd naar de juiste ontvanger voor digitale ondertekening, en zodra het ondertekend is, komt het netjes in de inbox van de verantwoordelijke. Geen handmatig werk meer, geen losse versies of fouten in de verwerking — alleen een strakke, betrouwbare flow van begin tot eind.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center">
            <Button asChild variant="outline">
              
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
                  <img src={`/logos/${logo.src}`} alt={logo.alt} className="h-16 object-contain transition-all duration-200" />
                </button>
              </li>)}
          </ul>
          
          <div className="mb-6">
            <p className="text-base text-muted-foreground">
              Staat jullie systeem er niet bij? Vraag{" "}
              <Button asChild variant="link" className="p-0 h-auto font-semibold text-primary hover:text-primary-hover underline">
                <a href="/plan-gesprek">hier</a>
              </Button>
              {" "}of we ook met jouw systeem kunnen koppelen!
            </p>
          </div>
          
          <div className="w-full h-px bg-border"></div>
        </div>
      </section>

      {/* Comparison Table */}
      

      {/* Example Cases */}
      

      {/* Integrations */}
      

      {/* Data & Security */}
      <section className="py-8 lg:py-12 bg-surface-alt">
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
      <section className="py-8 lg:py-12 bg-background">
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