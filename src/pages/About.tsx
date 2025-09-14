import { Button } from "@/components/ui/button";
import { Clock, CheckCircle, Target } from "lucide-react";
import kaiPortrait from "@/assets/kai_portrait.jpg";
import jeanlucPortrait from "@/assets/jeanluc_portrait.jpg";
import ilonaPortrait from "@/assets/ilona_portrait.jpg";

const helpPoints = [
  {
    icon: Clock,
    text: "Tijdwinst in repetitieve taken"
  },
  {
    icon: CheckCircle,
    text: "Minder fouten en meer overzicht"
  },
  {
    icon: Target,
    text: "Schaalbaar zonder je proces te breken"
  }
];

const clientLogos = ["Doxis", "Lek Sloopwerken", "Vinster", "Educared", "De Groene Wereld", "Bureau Reuring"];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl">
            <h1 className="text-[56px] leading-[1.12] font-extrabold text-foreground mb-6 tracking-[-0.2px]">
              Ons <span className="text-primary">team</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-[1.55] font-medium max-w-3xl">
              We bouwen AI-oplossingen die herhaling wegnemen, zodat teams tijd hebben voor werk dat telt.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section - 3 Column Layout */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-7xl mx-auto">
            
            {/* Column 1: Kai Portrait (4 cols) */}
            <div className="lg:col-span-4">
              <div className="h-[520px] relative overflow-hidden rounded-[14px] shadow-[0_8px_24px_rgba(0,0,0,0.1)]">
                <img 
                  src={kaiPortrait}
                  alt="Portret van een teamlid van Beterzo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Column 2: Main Text + Inline CTA (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-6">
                <h3 className="text-[30px] leading-[1.22] font-bold text-foreground tracking-[-0.2px]">
                  Wij zijn Beterzo
                </h3>
                
                <div className="space-y-6 text-muted-foreground leading-[1.55] font-medium max-w-[72ch]">
                  <p>
                    We bouwen AI-oplossingen die herhaling wegnemen. Teams krijgen tijd terug, processen lopen soepeler en binnen 30 dagen zie je resultaat.
                  </p>
                  
                  <p>
                    We combineren pragmatische automatisering met moderne taalmodellen. Dat doen we samen met klanten in korte sprints: helder, meetbaar en zonder gedoe.
                  </p>
                </div>

                {/* Help Points List */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-foreground">Waar we bij helpen</h4>
                  <ul className="space-y-3">
                    {helpPoints.map((point, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <point.icon className="h-5 w-5 text-primary flex-shrink-0" strokeWidth={2} />
                        <span className="text-muted-foreground font-medium">{point.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Inline CTA Block */}
              <div className="bg-surface-mist rounded-[14px] p-6 space-y-4">
                <Button className="btn-primary w-full">
                  Plan kennismaking
                </Button>
                <p className="text-sm font-medium text-muted-foreground text-center">
                  Vertrouwd door {clientLogos.join(", ")}
                </p>
              </div>
            </div>
            
            {/* Column 3: Duo Portraits + Testimonial (3 cols) */}
            <div className="lg:col-span-3 space-y-6">
              {/* Jean-Luc & Ilona Portraits */}
              <div className="space-y-6">
                <div className="h-[248px] relative overflow-hidden rounded-[14px] shadow-[0_8px_24px_rgba(0,0,0,0.1)]">
                  <img 
                    src={jeanlucPortrait}
                    alt="Portret van Jean-Luc"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-[248px] relative overflow-hidden rounded-[14px] shadow-[0_8px_24px_rgba(0,0,0,0.1)]">
                  <img 
                    src={ilonaPortrait}
                    alt="Portret van Ilona"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Mini Testimonial */}
              <div className="bg-white rounded-[14px] p-6 shadow-[0_8px_24px_rgba(0,0,0,0.1)] border border-gray-100">
                <blockquote className="text-sm font-medium text-foreground mb-3">
                  "Binnen vier dagen stond onze eerste agent live."
                </blockquote>
                <cite className="text-xs text-muted-foreground font-medium not-italic">
                  — Michiel, Doxis
                </cite>
              </div>
            </div>
          </div>

          {/* Jean-Luc & Ilona Text Section */}
          <div className="mt-16 max-w-5xl">
            <div className="space-y-6">
              <h3 className="text-[30px] leading-[1.22] font-bold text-foreground tracking-[-0.2px]">
                Wij zijn Jean-Luc & Ilona
              </h3>
              
              <p className="text-muted-foreground leading-[1.55] font-medium max-w-[72ch]">
                Bij Bureau Reuring leren we sinds 2023 teams werken met generatieve AI. Automatisering is het logische vervolg – daarom bouwen we samen met Beterzo oplossingen die vandaag al verschil maken.
              </p>
            </div>
          </div>

          {/* Value Chips */}
          <div className="mt-12 flex flex-wrap gap-2 lg:gap-2">
            {["Simpel & concreet", "Resultaat binnen 30 dagen", "Persoonlijke begeleiding"].map((value, index) => (
              <div 
                key={index}
                className="inline-block bg-white border border-[#E6EAF2] px-4 py-2.5 rounded-full text-sm font-semibold text-foreground"
              >
                {value}
              </div>
            ))}
          </div>

          {/* Secondary CTA Row */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button variant="outline" className="btn-secondary">
              Bekijk cases
            </Button>
            <Button variant="ghost" className="text-primary hover:text-primary/80 p-0 h-auto font-medium underline underline-offset-4">
              Hoe wij werken
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}