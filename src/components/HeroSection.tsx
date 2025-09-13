import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-white/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center fade-in">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
          Geef ruimte aan <br />
          <span className="text-primary">vakmanschap</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Onze AI-oplossingen nemen herhaling weg. Zodat jij weer kunt doen waar je goed in bent.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="btn-brand text-lg px-8 py-6 rounded-xl font-semibold"
          >
            Plan gratis gesprek
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="btn-secondary text-lg px-8 py-6 rounded-xl font-semibold"
          >
            Bekijk voorbeelden
          </Button>
        </div>
      </div>
    </section>
  );
}