import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ChevronDown, ChevronLeft, ChevronRight, Settings, Layers, Map, Shield, Search, Cog, FileCheck, Users, CheckCircle, Mail, FileText } from "lucide-react";
import { useState, useRef } from "react";
const MaatwerkAutomatisering = () => {
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const stepperRef = useRef<HTMLDivElement>(null);
  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };
  const scrollStepper = (direction: 'left' | 'right') => {
    if (stepperRef.current) {
      const scrollAmount = stepperRef.current.clientWidth * 0.8;
      stepperRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  const whyMaatwerkItems = [{
    icon: Settings,
    title: "Meerdere processen tegelijk",
    description: "Als je structureel herhaalwerk in verschillende teams wilt wegnemen."
  }, {
    icon: Layers,
    title: "Diepe integraties",
    description: "Koppelingen via API's met jullie systemen en datamodellen."
  }, {
    icon: Map,
    title: "Gefaseerde roadmap",
    description: "Van snelle winst naar doorontwikkeling met prioriteiten."
  }, {
    icon: Shield,
    title: "Compliance & governance",
    description: "Documentatie, rechten/rollen en duidelijke overdracht."
  }];
  const workSteps = [{
    number: 1,
    title: "Intake & kansenkaart",
    description: "We analyseren processen, tijdvreters en risico's en bepalen meetbare doelen.",
    info: "60–90 min sessies met procesowner en key users"
  }, {
    number: 2,
    title: "Architectuur & scope",
    description: "We vertalen jullie eisen naar integraties, datastromen en security-afspraken.",
    info: "heldere scope, planning en acceptatiecriteria"
  }, {
    number: 3,
    title: "Bouwen in sprints",
    description: "We leveren elke sprint een werkende uitbreiding. Minder handwerk, meer flow.",
    info: "testen op echte cases; feedback-loops met het team"
  }, {
    number: 4,
    title: "Go-live & overdracht",
    description: "We leveren netjes op: documentatie, rechten/rollen en monitoring.",
    info: "training inbegrepen"
  }, {
    number: 5,
    title: "Doorontwikkeling (optioneel)",
    description: "Met een SLA of vervolg-sprints verbeteren we door.",
    info: "vaste uren per maand of losse iteraties"
  }];
  const includedItems = [{
    icon: Search,
    title: "Intake & architectuur",
    description: "Processen, datastromen en doelen helder."
  }, {
    icon: Cog,
    title: "Integraties via API's",
    description: "Koppelingen met jullie tools en data."
  }, {
    icon: FileCheck,
    title: "Documentatie & overdracht",
    description: "Beheersbaar en traceerbaar."
  }, {
    icon: Users,
    title: "Training bij oplevering",
    description: "Team kan direct aan de slag."
  }];
  const integrationLogos = [{
    src: "exact-color.png",
    alt: "Exact"
  }, {
    src: "google-workspace-logo.png",
    alt: "Google Workspace"
  }, {
    src: "slack-color.png",
    alt: "Slack"
  }, {
    src: "microsoft-365-color.png",
    alt: "Microsoft 365"
  }];
  const faqItems = [{
    id: "which-service",
    question: "Welke dienst past bij ons?",
    answer: "Eén duidelijk proces en snel live? Agent atelier. Meer processen en structurele winst? Maatwerk."
  }, {
    id: "how-fast-results",
    question: "Hoe snel zien we resultaat?",
    answer: "We werken in sprints; een eerste versie staat vaak binnen 4–6 weken."
  }, {
    id: "system-integration",
    question: "Kunnen jullie met onze tools koppelen?",
    answer: "Grote kans van wel. We werken via API's met o.a. Microsoft 365, Google Workspace, AFAS, Exact, Slack, HubSpot, Twilio en meer."
  }, {
    id: "future-expansion",
    question: "Wat als we later willen uitbreiden?",
    answer: "Plan extra sprints of kies een SLA voor doorontwikkeling."
  }];
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-14 lg:py-20">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="max-w-4xl">
            <h1 className="text-foreground mb-6">
              Maatwerk automatisering
            </h1>
            <p className="text-xl text-muted-foreground mb-4 max-w-3xl font-medium">
              Ieder bedrijf heeft herhalende stappen. Wij nemen die tijdsinvestering structureel uit handen met een oplossing die naadloos in jullie stack draait.
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Wij bouwen op afstand in sprints en leveren alleen wat écht helpt.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button asChild size="lg">
                <a href="/plan">Plan gratis gesprek</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/cases">Bekijk cases</a>
              </Button>
            </div>
            
            <Button asChild variant="link" className="p-0 h-auto font-semibold text-primary hover:text-primary-hover underline">
              <a href="/diensten">Twijfel tussen diensten? Vergelijk met Agent atelier</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Waarom maatwerk */}
      <section className="py-14 bg-surface-alt">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="mb-12">
            <h2 className="text-foreground mb-4">
              Waarom maatwerk automatisering?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyMaatwerkItems.map((item, index) => <Card key={index} className="card-elegant h-full">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-[14px] mb-4">
                    <item.icon className="h-6 w-6 text-primary" strokeWidth={2} />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Zo werken we */}
      <section className="py-14">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="mb-12">
            <h2 className="text-foreground mb-4">
              Zo werken we
            </h2>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-4 mb-8">
              <Button variant="outline" size="icon" onClick={() => scrollStepper('left')} className="h-10 w-10">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={() => scrollStepper('right')} className="h-10 w-10">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Stepper */}
          <div ref={stepperRef} className="flex gap-6 overflow-x-auto pb-4 scroll-snap-type-x scrollbar-hide mb-8" style={{
          scrollBehavior: 'smooth'
        }}>
            {workSteps.map((step, index) => <Card key={index} className="card-elegant min-w-[320px] lg:min-w-[280px] flex-shrink-0 scroll-snap-align-start">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full font-bold text-sm">
                      {step.number}
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {step.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="bg-surface-alt text-muted-foreground border-border">
                    {step.info}
                  </Badge>
                </CardContent>
              </Card>)}
          </div>
          
          <p className="text-sm text-muted-foreground italic max-w-2xl">
            Eerste versie vaak binnen 4–6 weken, afhankelijk van scope.
          </p>
        </div>
      </section>

      {/* Dit zit standaard in maatwerk */}
      <section className="py-14 bg-surface-alt">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="mb-12">
            <h2 className="text-foreground mb-4">
              Dit zit standaard in maatwerk
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {includedItems.map((item, index) => <Card key={index} className="card-elegant h-full">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-[14px] mb-4">
                    <item.icon className="h-6 w-6 text-primary" strokeWidth={2} />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Voorbeelden uit maatwerk */}
      <section className="py-14">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="mb-12">
            <h2 className="text-foreground mb-4">
              Voorbeelden uit maatwerk
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="card-elegant">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-[14px] mb-4">
                  <Mail className="h-6 w-6 text-primary" strokeWidth={2} />
                </div>
                <CardTitle className="text-xl">Slimme mailfiltering</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Inbox leert prioriteren en routeert automatisch naar de juiste collega of flow.
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
                <CardTitle className="text-xl">Contracten automatiseren</CardTitle>
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

      {/* Integraties */}
      <section className="py-14 bg-surface-alt">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="mb-8">
            <h2 className="text-foreground mb-4">
              Wij werken met jullie tools
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Dit is slechts een greep uit de systemen waar we mee koppelen. We ondersteunen nog veel meer via API's.
            </p>
          </div>
          
          <div className="flex gap-5 md:gap-7 items-center justify-start
                       overflow-x-auto scrollbar-hide snap-x snap-mandatory
                       md:flex-wrap md:overflow-visible mb-6">
            {integrationLogos.map((logo, index) => <div key={index} className="flex-shrink-0 snap-start">
                <div className="flex items-center justify-center h-20 px-6 border border-border rounded-[14px] bg-background">
                  <img src={`/logos/${logo.src}`} alt={logo.alt} className="h-16 w-auto object-contain" />
                </div>
              </div>)}
          </div>
          
          <div className="text-right">
            <Button asChild variant="link" className="p-0 h-auto font-semibold text-primary hover:text-primary-hover underline">
              <a href="/contact?topic=integratie">Ontbreekt jullie systeem? Stel je vraag</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Data & veiligheid */}
      <section className="py-14">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="mb-8">
            <h2 className="text-foreground mb-8">
              Data & veiligheid
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ul className="space-y-4">
              {["API-first", "Hosting zoveel mogelijk binnen de EU", "Klantdata wordt nooit gebruikt om taalmodellen te trainen", "DPA/AVG-afspraken mogelijk"].map((item, index) => <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span className="text-muted-foreground">{item}</span>
                </li>)}
            </ul>
            
            <div className="text-sm text-muted-foreground">
              <p>
                Onderzoek van McKinsey laat zien dat met AI en automatisering tot circa 70% van taken te automatiseren is. 
                Resultaten verschillen per team en proces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Samenwerking & prijsmodellen */}
      <section className="py-14 bg-surface-alt">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="mb-8">
            <h2 className="text-foreground mb-8">
              Samenwerking & prijsmodellen
            </h2>
          </div>
          
          <div className="max-w-3xl">
            <p className="text-muted-foreground">
              We leveren wat past: eenmalig traject op jullie omgeving, of doorontwikkeling met een maandelijkse SLA waarin we 'het brein' beheren en verbeteren. We bepalen dit samen op basis van scope en risico.
            </p>
          </div>
        </div>
      </section>

      {/* Wat we van jullie nodig hebben */}
      <section className="py-14">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="mb-8">
            <h2 className="text-foreground mb-8">
              Wat we van jullie nodig hebben
            </h2>
          </div>
          
          <ul className="space-y-4 max-w-3xl">
            {["Een procesowner en beslisser", "Toegang tot relevante tools en voorbeelddata (sandbox waar mogelijk)", "Heldere use-case en droomscenario; wij toetsen vooraf wat haalbaar is en leggen een concreet plan voor"].map((item, index) => <li key={index} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </li>)}
          </ul>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="py-14 bg-surface-alt">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="mb-12">
            <h2 className="text-foreground mb-8">
              Veelgestelde vragen
            </h2>
          </div>
          
          <div className="max-w-4xl space-y-4">
            {faqItems.map(item => <Card key={item.id} className="card-elegant">
                <div className="w-full cursor-pointer" onClick={() => toggleFaq(item.id)}>
                  <CardHeader className="flex flex-row items-center justify-between py-6 hover:bg-surface-mist transition-colors">
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.question}
                    </h3>
                    <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${openFaq === item.id ? 'transform rotate-180' : ''}`} strokeWidth={2} />
                  </CardHeader>
                </div>
                {openFaq === item.id && <CardContent className="pt-0 pb-6">
                    <p className="text-muted-foreground">
                      {item.answer}
                    </p>
                  </CardContent>}
              </Card>)}
          </div>
        </div>
      </section>

      {/* Slot CTA */}
      
    </div>;
};
export default MaatwerkAutomatisering;