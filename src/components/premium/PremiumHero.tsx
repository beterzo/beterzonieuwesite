import { Button } from "@/components/ui/button";
import heroPresentationImage from "@/assets/hero-presentation.jpg";

export function PremiumHero() {
  return (
    <section className="section-spacing">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="lg:col-span-2 space-y-8">
            <h1 className="text-foreground">
              Welkom bij Beterzo
            </h1>
            
            <div className="space-y-6 text-xl text-muted-foreground leading-relaxed max-w-xl">
              <p>
                Bedrijven verliezen kostbare tijd aan repetitieve taken die echte groei in de weg staan. Beterzo zet slimme AI en automatisering in die perfect aansluit bij jouw "why".
              </p>
              <p>
                Door processen te automatiseren krijg jij de vrijheid om te focussen op wat écht belangrijk is: jouw expertise. Als onderdeel van Bureau Reuring werkt Beterzo elke dag om jouw bedrijf te transformeren naar een efficiëntere versie van zichzelf!
              </p>
              <p>
                We kijken er naar uit om samen te werken aan jouw oplossing!
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="btn-primary">
                <a href="/plan">Plan gratis gesprek</a>
              </Button>
              <Button variant="outline" className="btn-secondary">
                Bekijk voorbeelden  
              </Button>
            </div>
          </div>
          
          {/* Right Column - Image Card */}
          <div className="lg:col-span-3 lg:flex justify-end items-center">
            <div className="relative w-full min-w-[360px] max-w-[720px]">
              {/* Image Container */}
              <div className="relative group overflow-hidden rounded-[14px] lg:rounded-[14px] shadow-[0_8px_24px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-[3/4] lg:aspect-[3/4] relative">
                  <img 
                    src={heroPresentationImage}
                    alt="Presentatie over automatisering tijdens een workshop"
                    className="w-full h-full object-cover object-[30%_50%]"
                  />
                  {/* Subtle bottom gradient overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/12 to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}