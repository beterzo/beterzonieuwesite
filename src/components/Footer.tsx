import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import beterzFooterLogo from "@/assets/beterzo-logo-footer.png";

const footerLinks = {
  navigation: [
    { name: "Home", href: "/" },
    { name: "Over ons", href: "/over-ons" },
    { name: "Hoe wij werken", href: "/hoe-wij-werken" },
    { name: "Cases", href: "/cases" },
    { name: "FAQ", href: "/veelgestelde-vragen" },
    { name: "Contact", href: "/contact" }
  ]
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1220] text-white">
      <div className="container mx-auto px-6 py-14">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Brand Column */}
            <div className="space-y-4">
              <div className="flex items-center">
                <img 
                  src={beterzFooterLogo} 
                  alt="Beterzo" 
                  className="h-24 w-auto"
                />
              </div>
              <p className="text-[#E2E8F0] leading-[1.55] font-medium max-w-[72ch]">
                We bouwen AI-automatisering die herhaling weghaalt. Teams krijgen tijd terug voor werk dat telt.
              </p>
              <p className="text-sm text-[#E2E8F0] font-medium">
                KvK: 95477926
              </p>
            </div>

            {/* Navigation Column */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white">
                Navigatie
              </h4>
              <ul className="space-y-3">
                {footerLinks.navigation.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-[#E2E8F0] font-medium hover:text-white hover:underline transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white">
                Contact
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#E2E8F0]" strokeWidth={2} />
                  <a
                    href="mailto:hi@beterzo.tech"
                    className="text-[#E2E8F0] font-medium hover:text-white hover:underline transition-colors"
                  >
                    hi@beterzo.tech
                  </a>
                </div>
                <Button 
                  className="w-full md:w-auto bg-primary hover:bg-primary-hover text-white h-12 px-6 text-base font-semibold rounded-[14px]"
                  asChild
                >
                  <a href="/plan">
                    Plan gratis gesprek
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Sub Footer */}
          <div className="mt-12 pt-8 border-t border-[#1E293B]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <p className="text-sm text-[#E2E8F0] font-medium">
                © {currentYear} Beterzo. Alle rechten voorbehouden.
              </p>
              <div className="flex items-center gap-6 text-sm font-medium">
                <a
                  href="/privacy"
                  className="text-[#E2E8F0] hover:text-white hover:underline transition-colors"
                >
                  Privacybeleid
                </a>
                <span className="text-[#E2E8F0]">•</span>
                <a
                  href="/terms"
                  className="text-[#E2E8F0] hover:text-white hover:underline transition-colors"
                >
                  Algemene Voorwaarden
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}