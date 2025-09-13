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
              Je koos dit vak niet voor herhaling. Wij halen de routines weg met AI, 
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
            <div className="relative w-full lg:w-[40%] min-w-[360px] max-w-[520px] lg:ml-14">
              {/* Image Container */}
              <div className="relative group overflow-hidden rounded-[14px] lg:rounded-[14px] shadow-[0_8px_24px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-[3/4] lg:aspect-[3/4] relative">
                  <img 
                    src={workshopHero}
                    alt="Teamtraining over AI-automatisering tijdens een workshop"
                    className="w-full h-full object-cover object-[60%_40%]"
                  />
                  {/* Subtle bottom gradient overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/12 to-transparent pointer-events-none"></div>
                  
                  {/* Callout chip - Desktop */}
                  <div className="hidden lg:block absolute top-4 right-4">
                    <a 
                      href="/training"
                      className="inline-block bg-white text-[#0F172A] border border-[#E6EAF2] px-[14px] py-[10px] rounded-full text-sm font-semibold shadow-[0_6px_16px_rgba(0,0,0,0.1)] hover:bg-[#F6F8FB] hover:-translate-y-0.5 transition-all duration-200"
                      aria-label="Naar trainingspagina automatisering"
                    >
                      Ook zo'n training?
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Mobile Callout - Below image */}
              <div className="lg:hidden mt-4 flex justify-center">
                <a 
                  href="/training"
                  className="inline-block bg-white text-[#0F172A] border border-[#E6EAF2] px-[14px] py-[10px] rounded-full text-sm font-semibold shadow-[0_6px_16px_rgba(0,0,0,0.1)] hover:bg-[#F6F8FB] transition-all duration-200"
                  aria-label="Naar trainingspagina automatisering"
                >
                  Ook zo'n training?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}