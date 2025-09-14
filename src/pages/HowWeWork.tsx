import { Button } from "@/components/ui/button";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Clock, TrendingUp, Users, ArrowRight, ChevronRight } from "lucide-react";
import workshopHero from "@/assets/workshop-hero.jpg";

const flowSteps = [
  {
    chip: "begin",
    title: "beterzo begin",
    description: "Het startpunt. In een intake ontdekken we samen waar jullie direct tijd winnen en wat echt beter kan."
  },
  {
    chip: "bod", 
    title: "beterzo bod",
    description: "Een maatwerkvoorstel dat precies laat zien hoe wij het nét een stukje beter aanpakken, inclusief scope en planning."
  },
  {
    chip: "bouw",
    title: "beterzo bouw", 
    description: "We bouwen jullie automatisering. Minder handwerk, meer flow. Getest op jullie processen en tools."
  },
  {
    chip: "bezorgen",
    title: "beterzo bezorgen",
    description: "De oplevering. De oplossing draait netjes en stabiel, met duidelijke documentatie en afspraken."
  },
  {
    chip: "boost",
    title: "beterzo boost",
    description: "Training en onboarding voor het team. Iedereen weet wat te doen en we monitoren de eerste weken."
  }
];

const kpis = [
  {
    icon: Clock,
    value: "7 uur",
    label: "per week bespaard",
  },
  {
    icon: TrendingUp,
    value: "92%",
    label: "ziet verbetering binnen 30 dagen",
  },
  {
    icon: Users,
    value: "500+",
    label: "AI-agents live",
  },
];

const faqs = [
  {
    question: "Hoe snel kunnen jullie starten?",
    answer: "Intake binnen een week, eerste versie vaak binnen 4 dagen live."
  },
  {
    question: "Werkt dit met onze tools?", 
    answer: "Ja. We koppelen met je bestaande tools en maken waar nodig maatwerk."
  },
  {
    question: "Wat als we willen uitbreiden?",
    answer: "We bouwen modulair. Opschalen zonder je proces te breken."
  }
];

export default function HowWeWork() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-foreground">
                  Hoe wij werken
                </h1>
                <h2 className="text-2xl text-muted-foreground font-medium">
                  ...en wat jij daarvan merkt
                </h2>
              </div>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                We halen herhaling weg met slimme automatisering, leveren snel en trainen je team zodat iedereen direct kan starten.
              </p>
            </div>
            
            {/* Right Column - Image Card */}
            <div className="lg:flex justify-end items-center">
              <div className="relative w-full lg:w-[40%] min-w-[360px] max-w-[520px] lg:ml-14">
                <div className="relative group overflow-hidden rounded-[14px] shadow-[0_8px_24px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-[4/5] relative">
                    <img 
                      src={workshopHero}
                      alt="Teamtraining over AI-automatisering"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flow Band Section */}
      <section className="py-20" style={{ backgroundColor: '#027BFF' }}>
        <div className="container mx-auto px-6">
          {/* Desktop Flow */}
          <div className="hidden lg:flex items-center justify-between gap-4 max-w-6xl mx-auto">
            {flowSteps.map((step, index) => (
              <div key={index} className="flex items-center">
                {/* Flow Card */}
                <div className="bg-white rounded-[14px] p-4 shadow-sm w-[200px]">
                  <div className="space-y-3">
                    <div className="inline-block">
                      <span className="text-foreground font-semibold text-sm">beterzo </span>
                      <span className="text-[#027BFF] font-semibold text-sm">{step.chip}</span>
                    </div>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Arrow */}
                {index < flowSteps.length - 1 && (
                  <div className="mx-2 flex items-center">
                    <div className="w-8 h-0.5 bg-white/60 border-t border-dashed border-white/60"></div>
                    <ArrowRight className="h-3 w-3 text-white/60 ml-1" strokeWidth={2} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Flow */}
          <div className="lg:hidden space-y-6">
            {flowSteps.map((step, index) => (
              <div key={index}>
                <div className="bg-white rounded-[14px] p-6 shadow-sm">
                  <div className="space-y-4">
                    <div className="inline-block">
                      <span className="text-foreground font-semibold">beterzo </span>
                      <span className="text-[#027BFF] font-semibold">{step.chip}</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {index < flowSteps.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ChevronRight className="h-6 w-6 text-white/60 rotate-90" strokeWidth={2} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-spacing-sm bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {kpis.map((kpi, index) => (
              <div key={index} className="premium-card p-8 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-[10px]">
                  <kpi.icon className="h-6 w-6 text-primary" strokeWidth={2} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground mb-1">
                    {kpi.value}
                  </div>
                  <div className="text-sm text-muted-foreground leading-relaxed">
                    {kpi.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-spacing-sm">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="premium-card border-none">
                  <AccordionTrigger className="text-left font-semibold text-foreground px-6 py-4 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl space-y-8">
            <div className="space-y-4">
              <h2 className="text-foreground">Klaar om te beginnen?</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Plan een kort gesprek en ontdek je snelste winst.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary">
                Plan gratis gesprek
              </Button>
              <Button variant="outline" className="btn-secondary">
                Bekijk voorbeelden
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}