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

export default function OverOns() {
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
              <div className="aspect-[4/5] h-[460px] relative overflow-hidden rounded-[14px] shadow-[0_8px_24px_rgba(0,0,0,0.1)]">
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
                    Met Beterzo laat ik zien dat technologie niet alleen ondersteunend is, maar juist dé sleutel tot innovatie. Alles kan nét een tikje Beterzo – en dat is precies wat wij doen.
                  </p>
                  
                  <p>
                    Geïnspireerd door visionairs zoals Simon Sinek en Steve Jobs combineer ik creativiteit met de nieuwste technologieën.
                  </p>

                  <p>
                    Als onderdeel en met ondersteuning van Bureau Reuring werken we inmiddels voor mooie klanten. Ik maak daar processen slimmer, sneller en efficiënter.
                  </p>

                  <p>
                    Alles een stukje Beterzo, want waarom genoegen nemen met goed als het Beterzo kan?
                  </p>

                  <p>
                    Tot snel!
                  </p>
                </div>
              </div>
            </div>
            
            {/* Column 3: Duo Portraits + Text (3 cols) */}
            <div className="lg:col-span-3">
              {/* Mini-grid for portraits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="aspect-[5/7] w-full relative overflow-hidden rounded-[14px] shadow-[0_8px_24px_rgba(0,0,0,0.1)]">
                  <img 
                    src={jeanlucPortrait}
                    alt="Portret Jean-Luc"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="aspect-[5/7] w-full relative overflow-hidden rounded-[14px] shadow-[0_8px_24px_rgba(0,0,0,0.1)]">
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
              <Button asChild className="h-12 px-6 text-base font-semibold">
                <a href="/plan-gesprek">Plan kennismaking</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}