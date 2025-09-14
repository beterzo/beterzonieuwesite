import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarEmbed } from "@/components/plan/CalendarEmbed";
import { ContactForm } from "@/components/plan/ContactForm";
import { Check, Clock, Zap, Heart, Mail } from "lucide-react";
import workshopHero from "@/assets/workshop-hero.jpg";

const benefits = [
  {
    icon: Clock,
    title: "Gratis intake van 30 min",
    description: "Uitgebreide bespreking van jullie proces en knelpunten"
  },
  {
    icon: Zap,
    title: "Eerste kansenkaart met quick wins",
    description: "Directe inzichten en snelle verbeteringen"
  },
  {
    icon: Heart,
    title: "Vaak binnen 4–6 weken live",
    description: "Van gesprek naar werkende oplossing"
  }
];

const tools = [
  "Google Workspace", "Microsoft 365", "AFAS", "Exact", 
  "Slack", "HubSpot", "Teams", "Zapier"
];

const logos = [
  { src: "/logos/doxis.png", alt: "Doxis" },
  { src: "/logos/lek-sloopwerken.png", alt: "Lek Sloopwerken" },
  { src: "/logos/vinster.png", alt: "Vinster" },
  { src: "/logos/educared.png", alt: "Educared" },
  { src: "/logos/de-groene-wereld.png", alt: "De Groene Wereld" },
  { src: "/logos/bureau-reuring.png", alt: "Bureau Reuring" }
];

export default function Plan() {
  const [activeTab, setActiveTab] = useState("plan-direct");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <h1 className="text-foreground">
                Zullen we ruimte maken voor wat er écht toe doet?
              </h1>
              
              <div className="space-y-6 text-xl text-muted-foreground leading-relaxed max-w-xl">
                <p>
                  Plan een gratis gesprek van 30 minuten. We verkennen jullie proces, bepalen 2–3 quick wins en schetsen de eerste stappen.
                </p>
              </div>
            </div>
            
            {/* Right Column - Image Card */}
            <div className="lg:flex justify-end items-center">
              <div className="relative w-full lg:w-[65%] xl:w-[60%] min-w-[360px] max-w-[480px] lg:ml-8">
                <div className="aspect-[4/5] relative overflow-hidden rounded-[14px] shadow-[0_8px_24px_rgba(0,0,0,0.1)]">
                  <img 
                    src={workshopHero}
                    alt="Workshop over AI-automatisering en procesoptimalisatie"
                    className="w-full h-full object-cover object-[60%_40%]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="section-spacing-sm">
        <div className="container mx-auto px-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-surface-mist p-1 rounded-full h-12">
              <TabsTrigger 
                value="plan-direct" 
                className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-semibold transition-all duration-200"
              >
                Plan direct
              </TabsTrigger>
              <TabsTrigger 
                value="stuur-bericht" 
                className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-semibold transition-all duration-200"
              >
                Stuur bericht
              </TabsTrigger>
            </TabsList>

            {/* Tab 1 - Plan direct */}
            <TabsContent value="plan-direct" className="mt-12">
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
                {/* Left Column - Planning Card */}
                <div className="lg:col-span-7">
                  <div className="space-y-6">
                    <h2 className="text-2xl font-semibold text-foreground">
                      Kies een moment
                    </h2>
                    <CalendarEmbed />
                  </div>
                </div>
                
                {/* Right Column - Value Card */}
                <div className="lg:col-span-5">
                  <div className="premium-card p-8 space-y-8">
                    <h3 className="text-xl font-semibold text-foreground">
                      Wat je kunt verwachten
                    </h3>
                    
                    <ul className="space-y-6">
                      {benefits.map((benefit, index) => (
                        <li key={index} className="flex gap-4">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                            <benefit.icon className="w-4 h-4 text-primary" strokeWidth={2} />
                          </div>
                          <div className="space-y-1">
                            <div className="font-semibold text-foreground">
                              {benefit.title}
                            </div>
                            <div className="text-muted-foreground text-sm">
                              {benefit.description}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="space-y-4 pt-4 border-t border-border">
                      <div className="text-sm font-semibold text-foreground">
                        Werkt met jullie tools:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {tools.map((tool) => (
                          <span 
                            key={tool}
                            className="px-3 py-1 bg-surface-mist text-foreground text-xs font-medium rounded-full border border-border"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="text-xs text-muted-foreground pt-4 border-t border-border">
                      Volgens onderzoek van McKinsey kan tot ~70% van taken worden geautomatiseerd. 
                      Resultaten verschillen per team en proces.
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Tab 2 - Stuur bericht */}
            <TabsContent value="stuur-bericht" className="mt-12">
              <div className="max-w-2xl mx-auto">
                <ContactForm onSwitchToSchedule={() => setActiveTab("plan-direct")} />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-spacing-sm">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                Liever direct contact?
              </h3>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a 
                  href="mailto:hi@beterzo.tech"
                  className="flex items-center gap-2 text-primary font-medium hover:text-primary-hover transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" />
                  hi@beterzo.tech
                </a>
                <span className="text-muted-foreground text-sm">
                  meestal binnen 1 werkdag
                </span>
              </div>
              <div>
                <a 
                  href="/faq"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  Veelgestelde vragen →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Section */}
      <section className="section-spacing-sm">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-8">
            <div className="text-sm text-muted-foreground font-medium">
              Vertrouwd door
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 opacity-60">
              {logos.map((logo, index) => (
                <img 
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 lg:h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}