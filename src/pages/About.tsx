import { Button } from "@/components/ui/button";
import kaiPortrait from "@/assets/kai_portrait.jpg";
import jeanlucPortrait from "@/assets/jeanluc_portrait.jpg";
import ilonaPortrait from "@/assets/ilona_portrait.jpg";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Intro Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-foreground mb-6">
              Ons <span className="text-primary">team</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We bouwen AI-oplossingen die herhaling wegnemen, zodat teams tijd hebben voor werk dat telt.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-spacing-sm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8">
            {/* Left Half - Kai Section */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
                {/* Kai Portrait */}
                <div className="w-full max-w-xs mx-auto sm:mx-0">
                  <div className="aspect-[4/5] relative overflow-hidden rounded-[14px] shadow-[0_8px_24px_rgba(0,0,0,0.1)]">
                    <img 
                      src={kaiPortrait}
                      alt="Portret van een teamlid van Beterzo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Kai Text */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-foreground">
                    Wij zijn Beterzo
                  </h3>
                  
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Met Beterzo laten we zien dat technologie niet alleen ondersteunt, maar juist de sleutel is tot innovatie. Alles kan nét een tikkie beterzo – en precies dat bouwen we.
                    </p>
                    
                    <p>
                      Geïnspireerd door visionairs als Simon Sinek en Steve Jobs combineren we creativiteit met de nieuwste AI-technologie.
                    </p>
                    
                    <p>
                      Samen met Bureau Reuring werken we voor uiteenlopende klanten. We maken processen slimmer, sneller en efficiënter.
                    </p>
                    
                    <p>
                      Altijd een stukje beterzo: waarom genoegen nemen met goed als het beterzo kan?
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Half - Jean-Luc & Ilona Section */}
            <div className="lg:col-span-5">
              {/* Portrait Photos */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="aspect-square relative overflow-hidden rounded-[14px] shadow-[0_8px_24px_rgba(0,0,0,0.1)]">
                  <img 
                    src={jeanlucPortrait}
                    alt="Portret van Jean-Luc"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square relative overflow-hidden rounded-[14px] shadow-[0_8px_24px_rgba(0,0,0,0.1)]">
                  <img 
                    src={ilonaPortrait}
                    alt="Portret van Ilona"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Jean-Luc & Ilona Text */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">
                  Wij zijn Jean-Luc & Ilona
                </h3>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Met Bureau Reuring leren we sinds 2023 zoveel mogelijk mensen werken met generatieve AI.
                  </p>
                  
                  <p>
                    Automatisering is het logische volgende hoofdstuk. Daarom hebben we samen Beterzo opgezet.
                  </p>
                  
                  <p>
                    We ondersteunen waar we kunnen en bouwen samen aan een slimmere, snellere en efficiëntere wereld – net een tikkie beterzo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-spacing-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            {["Simpel & concreet", "Resultaat binnen 30 dagen", "Persoonlijke begeleiding"].map((value, index) => (
              <div 
                key={index}
                className="inline-block bg-white border border-[#E6EAF2] px-4 py-2.5 rounded-full text-sm font-semibold text-foreground"
              >
                {value}
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
              <h2 className="text-foreground">Kennismaken?</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Plan een kort gesprek en ontdek waar we direct tijd kunnen winnen.
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