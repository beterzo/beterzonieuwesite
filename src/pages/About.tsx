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
              Wij zijn <span className="text-primary">Beterzo</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-[1.55] font-medium max-w-3xl">
              We bouwen AI-oplossingen die herhaling wegnemen, zodat teams tijd hebben voor werk dat telt.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section - 3 Column Layout */}
      <section className="pb-14">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 max-w-7xl mx-auto items-start">
            
            {/* Column 1: Kai Portrait (4 cols) */}
            <div className="lg:col-span-4">
              <div className="aspect-[4/5] h-[520px] relative overflow-hidden rounded-[14px] shadow-[0_8px_24px_rgba(0,0,0,0.1)]">
                <img 
                  src={kaiPortrait}
                  alt="Portret Kai"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            
            {/* Column 2: Main Text (5 cols) */}
            <div className="lg:col-span-5">
              <div className="space-y-6">
                <h3 className="text-[30px] leading-[1.22] font-bold text-foreground tracking-[-0.2px]">
                  Ik ben Kai
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
            </div>
            
            {/* Column 3: Duo Portraits + Text (3 cols) */}
            <div className="lg:col-span-3">
              {/* Mini-grid for portraits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="aspect-[3/4] w-full relative overflow-hidden rounded-[14px] shadow-[0_8px_24px_rgba(0,0,0,0.1)]">
                  <img 
                    src={jeanlucPortrait}
                    alt="Portret Jean-Luc"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="aspect-[3/4] w-full relative overflow-hidden rounded-[14px] shadow-[0_8px_24px_rgba(0,0,0,0.1)]">
                  <img 
                    src={ilonaPortrait}
                    alt="Portret Ilona"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              {/* Text below portraits */}
              <div className="space-y-4">
                <h3 className="text-[24px] leading-[1.22] font-bold text-foreground tracking-[-0.2px]">
                  Wij zijn Jean-Luc & Ilona
                </h3>
                
                <div className="space-y-4 text-muted-foreground leading-[1.55] font-medium max-w-[72ch]">
                  <p>
                    Bij Bureau Reuring leren we sinds 2023 teams werken met generatieve AI.
                  </p>
                  
                  <p>
                    Automatisering is het logische vervolg – daarom bouwen we samen met Beterzo oplossingen die vandaag al verschil maken.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Row Below Section */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="h-12 px-6 text-base font-semibold">
                Plan kennismaking
              </Button>
              <Button variant="outline" className="h-12 px-6 text-base font-semibold border-2 border-foreground hover:bg-surface-mist">
                Bekijk cases
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}