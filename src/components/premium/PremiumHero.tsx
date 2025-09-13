import { Button } from "@/components/ui/button";
import workshopHero from "@/assets/workshop-hero.jpg";

export function PremiumHero() {
  return (
    <section className="section-spacing">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <h1 className="text-foreground">
              Geef ruimte aan{" "}
              <span className="text-primary">vakmanschap</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Je koos dit vak niet voor herhaling. Ik haal de routines weg met AI, 
              zodat jij tijd hebt voor werk dat telt.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary">
                Plan gratis gesprek
              </Button>
              <Button variant="outline" className="btn-secondary">
                Bekijk voorbeelden  
              </Button>
            </div>
          </div>
          
          {/* Right Column - Image Card */}
          <div className="lg:flex justify-end items-center">
            <div className="relative w-full lg:w-[42%] xl:w-[40%] min-w-[360px] max-w-[520px] lg:ml-14">
              {/* Desktop Pills - Floating over left edge */}
              <div className="hidden lg:block absolute -left-4 top-6 z-10 space-y-3">
                <div className="bg-background/95 backdrop-blur-sm border border-border text-foreground px-3 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-muted/50 transition-colors">
                  AI-workshop
                </div>
                <div className="bg-background/95 backdrop-blur-sm border border-border text-foreground px-3 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-muted/50 transition-colors">
                  In 4 dagen live
                </div>
              </div>
              
              {/* Image Container */}
              <div className="relative group overflow-hidden rounded-[14px] lg:rounded-[14px] shadow-[0_8px_24px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-[3/4] lg:aspect-[3/4] relative">
                  <img 
                    src={workshopHero}
                    alt="Kai geeft een AI-workshop aan een team in een vergaderruimte"
                    className="w-full h-full object-cover object-[center_right]"
                  />
                  {/* Subtle bottom gradient overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/12 to-transparent pointer-events-none"></div>
                </div>
              </div>
              
              {/* Mobile Pills - Below image */}
              <div className="lg:hidden mt-4 flex gap-3 justify-center">
                <div className="bg-background border border-border text-foreground px-3 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-muted/50 transition-colors">
                  AI-workshop
                </div>
                <div className="bg-background border border-border text-foreground px-3 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-muted/50 transition-colors">
                  In 4 dagen live
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}