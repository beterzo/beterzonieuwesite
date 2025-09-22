import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FileText, Target, TrendingUp, Clock, Search, GraduationCap, Eye, Shield, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import agentAtelierTraining from "@/assets/agent-atelier-training.jpg";
const timelineSteps = [{
  day: "Dag 1",
  title: "Analyse & mapping",
  description: "We brengen processen en herhaalwerk in kaart, kiezen quick wins en bepalen de scope.",
  chips: ["kansenkaart", "scope", "integratiecheck"],
  icon: Search
}, {
  day: "Dag 2",
  title: "Bouw sprint I",
  description: "We zetten de basis van de agent en koppelingen op. Testen op echte cases.",
  chips: ["agent-basis", "koppelingen", "testrun"],
  icon: Target
}, {
  day: "Dag 3",
  title: "Bouw sprint II",
  description: "We verfijnen prompts en logica, breiden flows uit en valideren met key users.",
  chips: ["iteraties", "extra flows", "validatie"],
  icon: TrendingUp
}, {
  day: "Dag 4",
  title: "Training & go-live",
  description: "We trainen jullie team en leveren de agent op, inclusief documentatie.",
  chips: ["training", "documentatie", "livegang"],
  icon: Clock
}];
const includedItems = [{
  icon: Search,
  title: "Procesanalyse vooraf",
  description: "We mappen jullie processen en tijdvreters."
}, {
  icon: GraduationCap,
  title: "Training over AI & agents",
  description: "Hands-on sessie voor team en key users."
}, {
  icon: Eye,
  title: "Inside look in prompten & taalmodellen",
  description: "We laten precies zien hoe we bouwen en bijsturen."
}, {
  icon: Shield,
  title: "30 dagen support",
  description: "Optimalisaties, fixes en vragen in de eerste maand."
}];
const integrationLogos = [{
  src: "slack-color.png",
  alt: "Slack",
  key: "slack"
}, {
  src: "microsoft-365-color.png",
  alt: "Microsoft 365",
  key: "microsoft-365"
}, {
  src: "exact-color.png",
  alt: "Exact",
  key: "exact"
}];
const faqItems = [{
  question: "Hoe snel staan we live?",
  answer: "Na 4 dagen staat er een agent live."
}, {
  question: "Waar werken jullie?",
  answer: "Op locatie bij jullie, met een team dat we meenemen."
}, {
  question: "Kunnen we uitbreiden?",
  answer: "Ja, met extra sprints of een maandelijkse SLA."
}, {
  question: "Wat als we nog geen scherpe proceskeuze hebben?",
  answer: "In de intake scherpen we dat samen aan."
}];
export default function AgentAtelier() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const scrollTimeline = (direction: 'left' | 'right') => {
    if (timelineRef.current) {
      const scrollAmount = timelineRef.current.clientWidth * 0.8;
      timelineRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-14 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="secondary" className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary border-primary/20 font-semibold">
                  Flagship
                </Badge>
                
                <div className="space-y-4">
                  <h1 className="text-foreground">Agent atelier</h1>
                  <p className="text-xl font-semibold text-muted-foreground">
                    Maandag idee • donderdag live • vrijdag vrij
                  </p>
                </div>
                
                <p className="body-l text-muted-foreground max-w-2xl">
                  In 4 dagen staat er op locatie een AI-agent live die een deel van jullie proces automatisch uitvoert. 
                  Inclusief training en inside look in hoe we werken.
                </p>
                
                <ul className="space-y-3">
                  {["Procesanalyse vooraf", "Training over AI en agents", "Inside look in prompten en taalmodellen", "30 dagen support na livegang"].map((item, index) => <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                      <span className="text-base text-muted-foreground font-medium">{item}</span>
                    </li>)}
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="btn-primary">
                  <a href="/plan">Plan gratis gesprek</a>
                </Button>
                <Button asChild variant="outline" className="btn-secondary">
                  <a href="/hoe-wij-werken">Hoe wij werken</a>
                </Button>
              </div>
            </div>
            
            {/* Right Column - Training Image */}
            <div className="hidden lg:block">
              <img 
                src={agentAtelierTraining} 
                alt="Agent Atelier training sessie in moderne conferentieruimte met team"
                className="aspect-[4/5] w-full object-cover rounded-[14px] border border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 lg:py-14">
        <div className="container mx-auto px-6">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-foreground">Van idee naar impact in 4 dagen</h2>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-4 mb-6">
              <Button variant="outline" size="icon" onClick={() => scrollTimeline('left')} className="h-10 w-10">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={() => scrollTimeline('right')} className="h-10 w-10">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            
            {/* Timeline Carousel */}
            <div ref={timelineRef} className="flex gap-4 overflow-x-auto pb-4 scroll-snap-type-x scrollbar-hide" style={{
            scrollBehavior: 'smooth'
          }}>
              {timelineSteps.map((step, index) => <div key={index} className="bg-background border border-border rounded-[14px] p-6 space-y-4 min-w-[80%] lg:min-w-[25%] flex-shrink-0 scroll-snap-align-start hover:bg-surface-mist transition-colors duration-200">
                  <div className="flex items-start justify-between">
                    <div className="inline-flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full flex-shrink-0">
                      <step.icon className="h-4 w-4 text-primary" strokeWidth={2} />
                    </div>
                    <span className="text-sm font-semibold text-muted-foreground">{step.day}</span>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                    
                    <p className="text-base text-muted-foreground font-medium leading-relaxed">
                      {step.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {step.chips.map((chip, chipIndex) => <div key={chipIndex} className="inline-block px-3 py-1 bg-surface-mist text-foreground text-xs font-semibold rounded-full border border-border">
                          {chip}
                        </div>)}
                    </div>
                  </div>
                </div>)}
            </div>
            
            
          </div>
        </div>
      </section>

      {/* Dit zit altijd inbegrepen */}
      <section className="py-12 lg:py-14 bg-surface-mist">
        <div className="container mx-auto px-6">
          <div className="space-y-8">
            <h2 className="text-foreground">Dit zit altijd inbegrepen</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {includedItems.map((item, index) => <div key={index} className="bg-background border border-border rounded-[14px] p-6 space-y-4">
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full flex-shrink-0">
                    <item.icon className="h-4 w-4 text-primary" strokeWidth={2} />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-base text-muted-foreground font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Integraties */}
      <section className="py-12 lg:py-14">
        <div className="container mx-auto px-6">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-foreground">Wij werken met jullie tools</h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Hieronder een aantal voorbeelden van systemen waar we mee koppelen. Via API's ondersteunen we nog veel meer.
              </p>
            </div>
            
            <ul role="list" className="flex flex-wrap gap-5 md:gap-7 items-center justify-start
                       md:flex-wrap
                       overflow-x-auto scrollbar-hide snap-x snap-mandatory
                       md:overflow-visible">
              {integrationLogos.map(logo => <li key={logo.key} className="flex-shrink-0 snap-start">
                  <button className="flex items-center justify-center h-20 px-6 border border-border rounded-xl bg-transparent hover:border-slate-400 hover:translate-y-[-1px] transition-all duration-200 focus:outline focus:outline-2 focus:outline-primary focus:outline-offset-1" aria-label={`${logo.alt} integratie`}>
                    <img src={`/logos/${logo.src}`} alt={logo.alt} className="h-12 md:h-14 w-auto object-contain" />
                  </button>
                </li>)}
            </ul>
            
            <div className="pt-4">
              <p className="text-base text-muted-foreground">
                Staat jullie systeem er niet bij? Vraag{" "}
                <Button asChild variant="link" className="p-0 h-auto font-semibold text-primary hover:text-primary-hover underline">
                  <a href="/plan">hier</a>
                </Button>
                {" "}of we ook met jouw systeem kunnen koppelen!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wat we van jullie nodig hebben */}
      <section className="py-12 lg:py-14 bg-surface-mist">
        <div className="container mx-auto px-6">
          <div className="space-y-8">
            <h2 className="text-foreground">Wat we van jullie nodig hebben om te starten</h2>
            
            <ul className="space-y-4 max-w-2xl">
              {["Een duidelijk proces in gedachten en een droomscenario", "Toegang tot relevante tools/data (sandbox waar mogelijk)", "Een procesowner en een beslisser die kan meebeslissen"].map((item, index) => <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                  <span className="text-base text-muted-foreground font-medium">{item}</span>
                </li>)}
            </ul>
            
            <p className="text-base text-muted-foreground font-medium max-w-2xl">
              We maken eerst een concreet plan en toetsen wat haalbaar is. Pas als het klopt, gaan we bouwen. 
              Liever vooraf helder dan te laat.
            </p>
          </div>
        </div>
      </section>

      {/* Data & Veiligheid */}
      <section className="py-12 lg:py-14">
        <div className="container mx-auto px-6">
          <div className="space-y-8">
            <h2 className="text-foreground">Data & veiligheid</h2>
            
            <ul className="space-y-4 max-w-2xl">
              {["API-first", "Hosting zoveel mogelijk binnen de EU", "Klantdata wordt nooit gebruikt om taalmodellen te trainen", "DPA/AVG-afspraken mogelijk"].map((item, index) => <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                  <span className="text-base text-muted-foreground font-medium">{item}</span>
                </li>)}
            </ul>
            
            <p className="text-sm text-muted-foreground italic max-w-2xl">
              Volgens onderzoek van McKinsey kan met AI en automatisering tot circa 70% van taken worden geautomatiseerd. 
              Resultaten verschillen per team en proces.
            </p>
          </div>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="py-12 lg:py-14 bg-surface-mist">
        <div className="container mx-auto px-6">
          <div className="space-y-8">
            <h2 className="text-foreground">Veelgestelde vragen</h2>
            
            <Accordion type="single" collapsible className="w-full max-w-3xl">
              {faqItems.map((item, index) => <AccordionItem key={index} value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground font-medium">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Slot CTA */}
      <section className="py-12 lg:py-14">
        <div className="container mx-auto px-6">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-foreground">Klaar voor jullie AI-agent?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Plan een demo en ontdek hoe jullie agent binnen 4 dagen live kan.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="btn-primary">
                <a href="/plan">Plan gratis gesprek</a>
              </Button>
              <Button asChild variant="outline" className="btn-secondary">
                <a href="/cases">Bekijk cases</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>;
}