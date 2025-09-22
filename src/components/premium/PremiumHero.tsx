import { Button } from "@/components/ui/button";
import workshopHero from "@/assets/workshop-hero.jpg";

export function PremiumHero() {
  return (
    <section className="section-spacing">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-1 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
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
        </div>
      </div>
    </section>
  );
}