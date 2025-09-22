import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Clock, TrendingUp, Users } from "lucide-react";
import { HorizontalStepper } from "@/components/stepper/HorizontalStepper";
import howWeWorkHero from "@/assets/how-we-work-hero.jpg";
import workshopHero from "@/assets/workshop-hero.jpg";
import stepProposal from "@/assets/step-proposal.jpg";
import stepBuild from "@/assets/step-build.jpg";
import stepDelivery from "@/assets/step-delivery.jpg";
import stepTraining from "@/assets/step-training.jpg";
const stepperData = [{
  id: 1,
  chip: "begin",
  title: "Beterzo begin",
  subtitle: "Begin — intake & kansenkaart",
  description: "We starten met een korte intake en processcan. We brengen herhaling, knelpunten en snelste winst in kaart en bepalen meetbare doelen.",
  infoCards: [{
    icon: "FileText" as const,
    label: "Deliverables",
    value: "kansenkaart, KPI's, technische quick-scan"
  }, {
    icon: "Clock" as const,
    label: "Doorlooptijd",
    value: "60–90 min intake"
  }, {
    icon: "Users" as const,
    label: "Betrokkenen",
    value: "proces-owner, 1–2 key users"
  }, {
    icon: "Target" as const,
    label: "Output",
    value: "concreet plan met 2–3 quick wins"
  }],
  mediaUrl: workshopHero,
  mediaAlt: "Workshop over AI-automatisering en procesverbetering"
}, {
  id: 2,
  chip: "bod",
  title: "Beterzo bod",
  subtitle: "Bod — maatwerkvoorstel",
  description: "We leveren een scherp voorstel met scope, planning en budget. Je ziet precies wat we automatiseren en wat het oplevert.",
  infoCards: [{
    icon: "FileText" as const,
    label: "Deliverables",
    value: "scope, planning, integraties, risico's"
  }, {
    icon: "Clock" as const,
    label: "Doorlooptijd",
    value: "2–3 werkdagen"
  }, {
    icon: "Users" as const,
    label: "Betrokkenen",
    value: "lead + stakeholder"
  }, {
    icon: "Target" as const,
    label: "Output",
    value: "akkoordklare offerte"
  }],
  mediaUrl: stepProposal,
  mediaAlt: "Professionele presentatie van automatiseringsvoorstel"
}, {
  id: 3,
  chip: "bouw",
  title: "Beterzo bouw",
  subtitle: "Bouw — van idee naar live",
  description: "We bouwen in korte sprints. We koppelen jullie tools, zetten AI-agents op en testen op echte cases. Minder handwerk, meer flow.",
  infoCards: [{
    icon: "FileText" as const,
    label: "Deliverables",
    value: "gekoppelde flows (Make), AI-prompts/agents, testcases"
  }, {
    icon: "Clock" as const,
    label: "Doorlooptijd",
    value: "vaak 4 dagen tot eerste versie"
  }, {
    icon: "Users" as const,
    label: "Betrokkenen",
    value: "product owner, tech contact"
  }, {
    icon: "Target" as const,
    label: "Output",
    value: "werkende eerste versie (V1)"
  }],
  mediaUrl: stepBuild,
  mediaAlt: "Ontwikkelomgeving met automatiseringsflows en AI-agents"
}, {
  id: 4,
  chip: "bezorgen",
  title: "Beterzo bezorgen",
  subtitle: "Bezorgen — go-live & overdracht",
  description: "We leveren op, documenteren en monitoren. Je oplossing draait stabiel en iedereen weet wat te doen.",
  infoCards: [{
    icon: "FileText" as const,
    label: "Deliverables",
    value: "documentatie, monitoring, rechten/rollen"
  }, {
    icon: "Clock" as const,
    label: "Doorlooptijd",
    value: "1–2 dagen voor afronding"
  }, {
    icon: "Users" as const,
    label: "Betrokkenen",
    value: "key users"
  }, {
    icon: "Target" as const,
    label: "Output",
    value: "live omgeving + handleiding"
  }],
  mediaUrl: stepDelivery,
  mediaAlt: "Succesvolle go-live van automatiseringsoplossing"
}, {
  id: 5,
  chip: "boost",
  title: "Beterzo boost",
  subtitle: "Boost — training & 30 dagen support",
  description: "We trainen het team, draaien samen de eerste weken mee en plannen verbeteringen. Zo blijft het echt werken.",
  infoCards: [{
    icon: "FileText" as const,
    label: "Deliverables",
    value: "training, Q&A, backlog"
  }, {
    icon: "Clock" as const,
    label: "Doorlooptijd",
    value: "30 dagen support"
  }, {
    icon: "Users" as const,
    label: "Betrokkenen",
    value: "teamleden, beheer"
  }, {
    icon: "Target" as const,
    label: "Output",
    value: "geborgd gebruik + roadmap"
  }],
  mediaUrl: stepTraining,
  mediaAlt: "Team training over AI-automatisering en proces management"
}];
const kpis = [{
  icon: Clock,
  value: "7 uur",
  label: "per week bespaard"
}, {
  icon: TrendingUp,
  value: "92%",
  label: "ziet verbetering binnen 30 dagen"
}, {
  icon: Users,
  value: "500+",
  label: "AI-agents live"
}];
export default function HowWeWork() {
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-12 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6">
              <div className="space-y-3">
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
                    <img src={howWeWorkHero} alt="Workshop automatisering" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Stepper Section */}
      <HorizontalStepper steps={stepperData} />

      {/* KPI Strip */}
      

      {/* CTA Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl space-y-6">
            <div className="space-y-3">
              <h2 className="text-foreground">Klaar om te beginnen?</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Plan een kort gesprek en ontdek je snelste winst.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="btn-primary">
                <a href="/plan-kennismaking">Plan gratis gesprek</a>
              </Button>
              <Button variant="outline" className="btn-secondary">
                Bekijk voorbeelden
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>;
}