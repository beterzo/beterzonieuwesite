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
    "Klantenservice bot",
    "AI-consultancy",
  ],
};

export function Footer() {
  return (
    <footer className="py-16 bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Company Info */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-primary mb-4">
              Beterzo
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              AI-automatisering die ruimte geeft aan vakmanschap. 
              We maken technologie begrijpelijk en snel inzetbaar.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>E-mail: hi@beterzo.tech</div>
              <div>KvK: 12345678</div>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navigatie</h3>
            <ul className="space-y-3">
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
          <div>
            <h3 className="font-semibold text-foreground mb-4">Diensten</h3>
            <ul className="space-y-3">
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
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Beterzo. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}