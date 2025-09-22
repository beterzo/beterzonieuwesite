import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import faqTeamMeeting from "@/assets/faq-team-meeting.jpg";
interface FAQItem {
  id: number;
  question: string;
  answer: string;
  hasLink?: boolean;
  linkText?: string;
  linkUrl?: string;
}
const faqData: FAQItem[] = [{
  id: 1,
  question: "Voor wie is dit?",
  answer: "Voor iedereen die tijd verliest aan herhalend werk. Of je nu in onderwijs, mkb, consultancy of een corporate team zit: als het repeteert, kunnen we het slimmer maken."
}, {
  id: 2,
  question: "Wat levert het op?",
  answer: "Onderzoek van McKinsey laat zien dat je met slimme AI en automatisering tot ~70% van taken kunt automatiseren. In de praktijk vertalen we dat naar minder handwerk, snellere doorlooptijd en meer focus op werk dat telt."
}, {
  id: 3,
  question: "Hoe snel staan we live?",
  answer: "Case-afhankelijk, maar we mikken meestal op een eerste versie binnen 4–6 weken. We werken in korte sprints en leveren zichtbaar resultaat per stap."
}, {
  id: 4,
  question: "Hoe werken jullie precies?",
  answer: "We volgen vijf stappen: Begin (intake & kansenkaart) → Bod (maatwerkvoorstel) → Bouw (sprints) → Bezorgen (go-live) → Boost (training + 30 dagen support).",
  hasLink: true,
  linkText: "Bekijk onze werkwijze",
  linkUrl: "/how-we-work"
}, {
  id: 5,
  question: "Werkt dit met onze tools?",
  answer: "Ja. We koppelen via API's met o.a. Google Workspace, Microsoft 365 en AFAS, plus tools zoals Exact, Slack, HubSpot, Twilio, Shopify, Zendesk, Notion en Airtable."
}, {
  id: 6,
  question: "Hoe zit het met prijs?",
  answer: "Afhankelijk van de use case. Soms leveren we een oplossing die op jullie systemen draait (eenmalig traject). Soms beheren we \"het brein\" voor een vast bedrag per maand. We kiezen wat past bij jullie proces en risico."
}, {
  id: 7,
  question: "Is er een pilot of proof?",
  answer: "We starten altijd met een analysefase. Daarmee bewijzen we wat haalbaar is, wat het oplevert en wat het kost – vóórdat je iets betaalt voor de automatisering zelf."
}, {
  id: 8,
  question: "Krijgen we training en onboarding?",
  answer: "Ja, dat zit inbegrepen. We trainen het team en zorgen dat iedereen direct aan de slag kan."
}, {
  id: 9,
  question: "Wat leveren jullie na livegang?",
  answer: "Optioneel een SLA met vaste uren per maand voor verbeteringen, doorontwikkeling en bugfixing. Responstijden en bereikbaarheid spreken we samen af."
}, {
  id: 10,
  question: "Hoe borgen jullie data & veiligheid?",
  answer: "Alles loopt via API's. We hosten zoveel mogelijk binnen Europa. We gebruiken klantdata niet om taalmodellen te trainen. DPA/AVG-afspraken zijn mogelijk; toegang verloopt via least-privilege en logs."
}, {
  id: 11,
  question: "Wie is eigenaar van de oplossing?",
  answer: "Standaard blijft het IP van workflows/prompts bij Beterzo; jullie krijgen ruime gebruiksrechten. Overdracht of licentie op maat kan in overleg."
}, {
  id: 12,
  question: "Wat als we later willen stoppen?",
  answer: "We regelen een nette exit: documentatie, exports waar mogelijk en overdracht van accounts/integraties. Bij licentiemodellen stopt toegang na einde contract; bij oplossingen op jullie eigen stack blijft het gewoon draaien."
}, {
  id: 13,
  question: "In welke taal werken jullie?",
  answer: "Nederlands en Engels. Remote of on-site in NL/BE; daarbuiten in overleg."
}];
export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const toggleItem = (id: number) => {
    if (isMobile) {
      // Mobile: only one item open at a time
      setOpenItems(openItems.includes(id) ? [] : [id]);
    } else {
      // Desktop: multiple items can be open
      setOpenItems(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
    }
  };
  const isOpen = (id: number) => openItems.includes(id);
  return <div className="min-h-screen bg-background">
      {/* Combined Header and FAQ Section */}
      <section className="pt-20 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            {/* Left Column - Content and FAQ */}
            <div className="lg:col-span-8 space-y-6">
              {/* Header */}
              <div className="space-y-4">
                <h1 className="text-foreground">
                  Veelgestelde vragen
                </h1>
                <div className="flex items-center gap-3">
                  <p className="text-muted-foreground body-m">
                    Niet gevonden wat je zoekt?
                  </p>
                  <Button variant="link" className="p-0 h-auto text-primary font-semibold hover:underline" asChild>
                    <a href="mailto:hi@beterzo.tech" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Stuur ons een bericht
                    </a>
                  </Button>
                </div>
              </div>

              {/* FAQ Accordion */}
              <div className="space-y-4">
                {faqData.map(item => <div key={item.id} className="premium-card border-none">
                    <button className={cn("w-full text-left px-6 py-5 flex items-center justify-between transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-[14px]", "hover:bg-surface-mist")} onClick={() => toggleItem(item.id)} aria-expanded={isOpen(item.id)} aria-controls={`faq-content-${item.id}`}>
                      <h3 className="text-xl font-bold text-foreground pr-4">
                        {item.question}
                      </h3>
                      <ChevronDown className={cn("h-5 w-5 text-muted-foreground transition-transform duration-200 flex-shrink-0", "icon-stroke", isOpen(item.id) && "rotate-180")} />
                    </button>
                    
                    {isOpen(item.id) && <div id={`faq-content-${item.id}`} className="px-6 pb-6 animate-fade-slide">
                        <div className="border-t border-border pt-4">
                          <p className="text-muted-foreground body-m leading-relaxed mb-4">
                            {item.answer}
                          </p>
                          
                          {item.hasLink && <Button variant="outline" className="btn-secondary text-sm" onClick={() => window.location.href = item.linkUrl || '#'}>
                              {item.linkText}
                            </Button>}
                        </div>
                      </div>}
                  </div>)}
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="lg:col-span-4">
              <div className="relative group sticky top-8">
                <div className="relative overflow-hidden rounded-[14px] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-float)] transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-[4/5] relative bg-surface-mist">
                    <img src={faqTeamMeeting} alt="Team samenwerking tijdens vergadering" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl space-y-8">
            <div className="space-y-4">
              <h2 className="text-foreground">Staat jouw vraag er niet tussen?</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Plan een kennismaking en ontdek hoe we jouw processen kunnen verbeteren.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary" asChild>
                <a href="/plan">Plan kennismaking</a>
              </Button>
              
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA for Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 z-20">
        <div className="container mx-auto px-2">
          <Button className="btn-primary w-full" asChild>
            <a href="/plan">Plan kennismaking</a>
          </Button>
        </div>
      </div>
    </div>;
}