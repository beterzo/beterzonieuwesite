import { Button } from "@/components/ui/button";

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
          
          {/* Right Column - Floating Tiles */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="grid grid-cols-2 gap-6 max-w-sm">
              <div className="floating-tile space-y-3">
                <div className="w-full h-16 bg-primary/10 rounded-[8px]"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-muted rounded"></div>
                  <div className="h-3 bg-muted rounded w-3/4"></div>
                </div>
              </div>
              
              <div className="floating-tile space-y-3 mt-8">
                <div className="w-full h-16 bg-surface-mist rounded-[8px] border border-border"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-muted rounded"></div>
                  <div className="h-3 bg-muted rounded w-2/3"></div>
                </div>
              </div>
              
              <div className="floating-tile space-y-3 -mt-4">
                <div className="w-full h-16 bg-muted/30 rounded-[8px]"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-muted rounded"></div>
                  <div className="h-3 bg-muted rounded w-4/5"></div>
                </div>
              </div>
              
              <div className="floating-tile space-y-3 mt-4">
                <div className="w-full h-16 bg-primary/5 rounded-[8px]"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-muted rounded"></div>
                  <div className="h-3 bg-muted rounded w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}