import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Clock, TrendingUp, Users } from "lucide-react";
import { StepperNavigation } from "@/components/stepper/StepperNavigation";
import { StepContent } from "@/components/stepper/StepContent";
import howWeWorkHero from "@/assets/how-we-work-hero.jpg";
import workshopHero from "@/assets/workshop-hero.jpg";
import stepProposal from "@/assets/step-proposal.jpg";
import stepBuild from "@/assets/step-build.jpg";
import stepDelivery from "@/assets/step-delivery.jpg";
import stepTraining from "@/assets/step-training.jpg";

const stepperSteps = [
  {
    id: 1,
    chip: "begin",
    title: "beterzo begin"
  },
  {
    id: 2,
    chip: "bod",
    title: "beterzo bod"
  },
  {
    id: 3,
    chip: "bouw",
    title: "beterzo bouw"
  },
  {
    id: 4,
    chip: "bezorgen",
    title: "beterzo bezorgen"
  },
  {
    id: 5,
    chip: "boost",
    title: "beterzo boost"
  }
];

const stepContent = [
  {
    id: 1,
    chip: "begin",
    title: "beterzo begin",
    subtitle: "Begin — intake & kansenkaart",
    description: "We starten met een korte intake en processcan. We brengen herhaling, knelpunten en snelste winst in kaart en bepalen meetbare doelen.",
    infoCards: [
      { icon: "FileText" as const, label: "Deliverables", value: "kansenkaart, KPI's, technische quick-scan" },
      { icon: "Clock" as const, label: "Doorlooptijd", value: "60–90 min intake" },
      { icon: "Users" as const, label: "Betrokkenen", value: "proces-owner, 1–2 key users" },
      { icon: "Target" as const, label: "Output", value: "concreet plan met 2–3 quick wins" }
    ],
    mediaUrl: workshopHero,
    mediaAlt: "Workshop over AI-automatisering en procesverbetering"
  },
  {
    id: 2,
    chip: "bod",
    title: "beterzo bod",
    subtitle: "Bod — maatwerkvoorstel",
    description: "We leveren een scherp voorstel met scope, planning en budget. Je ziet precies wat we automatiseren en wat het oplevert.",
    infoCards: [
      { icon: "FileText" as const, label: "Deliverables", value: "scope, planning, integraties, risico's" },
      { icon: "Clock" as const, label: "Doorlooptijd", value: "2–3 werkdagen" },
      { icon: "Users" as const, label: "Betrokkenen", value: "lead + stakeholder" },
      { icon: "Target" as const, label: "Output", value: "akkoordklare offerte" }
    ],
    mediaUrl: stepProposal,
    mediaAlt: "Professionele presentatie van automatiseringsvoorstel"
  },
  {
    id: 3,
    chip: "bouw",
    title: "beterzo bouw",
    subtitle: "Bouw — van idee naar live",
    description: "We bouwen in korte sprints. We koppelen jullie tools, zetten AI-agents op en testen op echte cases. Minder handwerk, meer flow.",
    infoCards: [
      { icon: "FileText" as const, label: "Deliverables", value: "gekoppelde flows (Make), AI-prompts/agents, testcases" },
      { icon: "Clock" as const, label: "Doorlooptijd", value: "vaak 4 dagen tot eerste versie" },
      { icon: "Users" as const, label: "Betrokkenen", value: "product owner, tech contact" },
      { icon: "Target" as const, label: "Output", value: "werkende eerste versie (V1)" }
    ],
    mediaUrl: stepBuild,
    mediaAlt: "Ontwikkelomgeving met automatiseringsflows en AI-agents"
  },
  {
    id: 4,
    chip: "bezorgen",
    title: "beterzo bezorgen",
    subtitle: "Bezorgen — go-live & overdracht",
    description: "We leveren op, documenteren en monitoren. Je oplossing draait stabiel en iedereen weet wat te doen.",
    infoCards: [
      { icon: "FileText" as const, label: "Deliverables", value: "documentatie, monitoring, rechten/rollen" },
      { icon: "Clock" as const, label: "Doorlooptijd", value: "1–2 dagen voor afronding" },
      { icon: "Users" as const, label: "Betrokkenen", value: "key users" },
      { icon: "Target" as const, label: "Output", value: "live omgeving + handleiding" }
    ],
    mediaUrl: stepDelivery,
    mediaAlt: "Succesvolle go-live van automatiseringsoplossing"
  },
  {
    id: 5,
    chip: "boost",
    title: "beterzo boost",
    subtitle: "Boost — training & 30 dagen support",
    description: "We trainen het team, draaien samen de eerste weken mee en plannen verbeteringen. Zo blijft het echt werken.",
    infoCards: [
      { icon: "FileText" as const, label: "Deliverables", value: "training, Q&A, backlog" },
      { icon: "Clock" as const, label: "Doorlooptijd", value: "30 dagen support" },
      { icon: "Users" as const, label: "Betrokkenen", value: "teamleden, beheer" },
      { icon: "Target" as const, label: "Output", value: "geborgd gebruik + roadmap" }
    ],
    mediaUrl: stepTraining,
    mediaAlt: "Team training over AI-automatisering en proces management"
  }
];

const kpis = [
  {
    icon: Clock,
    value: "7 uur",
    label: "per week bespaard"
  },
  {
    icon: TrendingUp,
    value: "92%",
    label: "ziet verbetering binnen 30 dagen"
  },
  {
    icon: Users,
    value: "500+",
    label: "AI-agents live"
  }
];

export default function HowWeWork() {
  const [currentStep, setCurrentStep] = useState(1);

  // Handle URL hash for direct linking
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const stepMatch = hash.match(/#stap-(\d+)/);
      if (stepMatch) {
        const stepNumber = parseInt(stepMatch[1], 10);
        if (stepNumber >= 1 && stepNumber <= 5) {
          setCurrentStep(stepNumber);
        }
      }
    }
  }, []);

  // Update URL hash when step changes
  useEffect(() => {
    window.history.replaceState(null, '', `#stap-${currentStep}`);
  }, [currentStep]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && currentStep > 1) {
        setCurrentStep(currentStep - 1);
      } else if (e.key === 'ArrowRight' && currentStep < 5) {
        setCurrentStep(currentStep + 1);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentStep]);

  const handleStepChange = (step: number) => {
    setCurrentStep(step);
  };

  const currentStepContent = stepContent.find(step => step.id === currentStep);

  return (
    <div className="min-h-screen bg-background">
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
                <div className="relative group overflow-hidden rounded-[14px] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-float)] transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-[4/5] relative">
                    <img 
                      src={howWeWorkHero} 
                      alt="Workshop automatisering" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Stepper Section */}
      <section className="section-spacing bg-background">
        <StepperNavigation
          currentStep={currentStep}
          totalSteps={5}
          onStepChange={handleStepChange}
          steps={stepperSteps}
        />
        
        <div className="py-16">
          {currentStepContent && (
            <StepContent
              step={currentStepContent}
              isActive={true}
            />
          )}
        </div>
      </section>

      {/* KPI Strip */}
      <section className="section-spacing-sm bg-surface-mist">
        <div className="container mx-auto px-6">
          <div className="premium-grid grid-cols-1 md:grid-cols-3">
            {kpis.map((kpi, index) => (
              <div key={index} className="premium-card p-8 space-y-4 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-[10px] mx-auto">
                  <kpi.icon className="h-6 w-6 text-primary icon-stroke" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground mb-1 kpi-number">
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