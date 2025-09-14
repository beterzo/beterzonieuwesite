import { Button } from "@/components/ui/button";

const footerLinks = {
  main: [
    { name: "Home", href: "/" },
    { name: "Diensten", href: "/diensten" },
    { name: "Over ons", href: "/over-ons" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy", href: "/privacy" },
  ],
  services: [
    "Agent atelier",
    "Toetsgenerator", 
    "Maatwerk automatisering",
    "AI-klantenservice",
    "Procesoptimalisatie",
  ],
};

export function PremiumFooter() {
  return (
    <footer className="section-spacing border-t border-border">
      <div className="container mx-auto px-6">
        <div className="premium-grid grid-cols-1 lg:grid-cols-4 lg:gap-16 mb-16">
          {/* Brand & CTA */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="text-2xl font-bold text-primary mb-4">
                Beterzo
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-md mb-8">
                AI-automatisering die ruimte geeft aan vakmanschap. 
                Wij maken technologie begrijpelijk en snel inzetbaar.
              </p>
              <Button className="btn-primary">
                Plan gesprek
              </Button>
            </div>
            
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>E-mail: hi@beterzo.tech</div>
              <div>KvK: 12345678</div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="space-y-6">
            <h3 className="font-semibold text-foreground">Navigatie</h3>
            <ul className="space-y-4">
              {footerLinks.main.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div className="space-y-6">
            <h3 className="font-semibold text-foreground">Diensten</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((service) => (
                <li key={service}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-border">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Beterzo. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}