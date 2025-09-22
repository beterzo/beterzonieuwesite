import { HorizontalStepper } from "@/components/stepper/HorizontalStepper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import howWeWorkHero from "@/assets/how-we-work-hero.jpg";

const processSteps = [
  {
    id: 1,
    chip: "Begin",
    title: "Begin",
    subtitle: "Intake & kansenkaart",
    description: "We brengen processen en tijdvreters in kaart, kiezen quick wins en bepalen de scope.",
    infoCards: [
      {
        icon: "Clock" as const,
        label: "Duur",
        value: "60–90 min sessies"
      },
      {
        icon: "Target" as const,
        label: "Resultaat",
        value: "Concreet plan met 2–3 quick wins"
      }
    ],
    mediaUrl: "/src/assets/step-proposal.jpg",
    mediaAlt: "Procesanalyse en kansenkaart opstellen"
  },
  {
    id: 2,
    chip: "Bod",
    title: "Bod", 
    subtitle: "Voorstel & architectuur",
    description: "We leveren een scherp voorstel met scope, planning en budget. Je ziet precies wat we automatiseren en wat het oplevert.",
    infoCards: [
      {
        icon: "FileText" as const,
        label: "Scope",
        value: "Heldere scope, timing en acceptatiecriteria"
      },
      {
        icon: "Users" as const,
        label: "Planning",
        value: "Scope, integraties, risico's"
      }
    ],
    mediaUrl: "/src/assets/step-proposal.jpg",
    mediaAlt: "Voorstel en architectuurplanning"
  },
  {
    id: 3,
    chip: "Bouw",
    title: "Bouw",
    subtitle: "Sprints & iteraties",
    description: "We bouwen in korte sprints en leveren elke keer een werkend stuk. Feedback verwerken we direct in de volgende ronde.",
    infoCards: [
      {
        icon: "Target" as const,
        label: "Resultaat",
        value: "Elke sprint een werkend resultaat"
      },
      {
        icon: "Clock" as const,
        label: "Impact",
        value: "Minder handwerk, meer flow"
      }
    ],
    mediaUrl: "/src/assets/step-build.jpg",
    mediaAlt: "Bouwen in sprints en iteraties"
  },
  {
    id: 4,
    chip: "Bezorgen",
    title: "Bezorgen", 
    subtitle: "Go-live & overdracht",
    description: "We leveren netjes op: documentatie, rechten/rollen en monitoring. Het team kan direct aan de slag.",
    infoCards: [
      {
        icon: "Users" as const,
        label: "Training",
        value: "Training inbegrepen"
      },
      {
        icon: "FileText" as const,
        label: "Overdracht",
        value: "Beheersbaar en traceerbaar"
      }
    ],
    mediaUrl: "/src/assets/step-delivery.jpg",
    mediaAlt: "Go-live en overdracht proces"
  },
  {
    id: 5,
    chip: "Boost",
    title: "Boost",
    subtitle: "Training & doorontwikkeling",
    description: "We trainen het team, draaien samen de eerste weken mee en plannen verbeteringen. Zo blijft het echt werken.",
    infoCards: [
      {
        icon: "Clock" as const,
        label: "Support",
        value: "30 dagen support + optionele SLA"
      },
      {
        icon: "Target" as const,
        label: "Resultaat",
        value: "Team werkt zelfstandig verder"
      }
    ],
    mediaUrl: "/src/assets/step-training.jpg",
    mediaAlt: "Training en doorontwikkeling team"
  }
];

const whyChoosePoints = [
  "Hands-on werken op locatie of remote", 
  "Iteratief proces met snelle feedback-loops",
  "Geen lange trajecten zonder zichtbaar resultaat", 
  "Training en overdracht inbegrepen"
];

export default function HoeWijWerken() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-14 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-foreground">
                  Hoe wij werken
                </h1>
                <p className="text-xl font-semibold text-muted-foreground">
                  Van idee naar impact in 5 stappen
                </p>
                <p className="body-l text-muted-foreground">
                  Wij werken transparant, iteratief en met korte feedback-loops. 
                  Zo zien jullie elke sprint vooruitgang en kunnen we bijsturen waar nodig.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  Waarom deze aanpak werkt
                </h3>
                <ul className="space-y-3">
                  {whyChoosePoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                      <span className="text-base text-muted-foreground font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="btn-primary">
                  <a href="/plan-gesprek">Plan kennismaking</a>
                </Button>
                <Button asChild variant="outline" className="btn-secondary">
                  <a href="/diensten">Bekijk diensten</a>
                </Button>
              </div>
            </div>
            
            {/* Right Column - Image */}
            <div className="hidden lg:block">
              <div className="aspect-[4/5] relative overflow-hidden rounded-[14px] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-float)] transition-all duration-300 hover:-translate-y-1">
                <img 
                  src={howWeWorkHero} 
                  alt="Workshop automatisering" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-14 bg-surface-alt">
        <div className="container mx-auto px-6">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-foreground">
                Onze werkwijze in 5 stappen
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Elke stap heeft een duidelijk doel en levert concreet resultaat op.
              </p>
            </div>
            
            <HorizontalStepper steps={processSteps} />
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-14">
        <div className="container mx-auto px-6">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-foreground">
                Wat levert het op?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="card-elegant text-center">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-primary">40-70%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-medium">
                    Minder tijd kwijt aan repetitieve taken volgens McKinsey onderzoek
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-elegant text-center">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-primary">4-6 weken</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-medium">
                    Gemiddelde tijd tot eerste werkende versie
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-elegant text-center">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-primary">100%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-medium">
                    Transparantie in proces en voortgang
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-14 bg-surface-alt">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-foreground">
                Klaar om te starten?
              </h2>
              <p className="text-xl text-muted-foreground">
                Plan een kennismaking en ontdek hoe wij jouw processen kunnen verbeteren.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-primary">
                <a href="/plan-gesprek">Plan kennismaking</a>
              </Button>
              <Button asChild variant="outline" className="btn-secondary">
                <a href="/veelgestelde-vragen">Bekijk FAQ</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}