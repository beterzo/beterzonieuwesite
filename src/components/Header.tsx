import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";
import beterzLogo from "@/assets/beterzo-logo.png";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Diensten", href: "/diensten", hasDropdown: true },
  { name: "Hoe wij werken", href: "/hoe-wij-werken" },
  { name: "Over ons", href: "/over-ons" },
  { name: "FAQ", href: "/faq" }
];

const servicesItems = [
  {
    name: "Agent atelier",
    href: "/agent-atelier",
    description: "Van idee naar werkende AI-agent in 4 dagen."
  },
  {
    name: "Automatisering",
    href: "/automatisering", 
    description: "Koppel je processen, minder handwerk, meer flow."
  },
  {
    name: "Toetsgenerator",
    href: "/toetsgenerator",
    description: "Consistente vragen uit modules en leerdoelen."
  },
  {
    name: "Lesstof uitwerken",
    href: "/lesstof-uitwerken",
    description: "Leerdoelen, samenvattingen, begrippenlijsten."
  },
  {
    name: "AI klantenservice",
    href: "/ai-klantenservice",
    description: "24/7 antwoorden, escalaties, meertalig."
  },
  {
    name: "Custom solutions",
    href: "/custom",
    description: "Maatwerk voor jouw stack."
  }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location.pathname]);

  // Handle ESC key to close menus
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsServicesOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const isActiveRoute = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  const handleServicesToggle = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const handleMobileServicesToggle = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  return (
    <>
      <header 
        className={cn(
          "sticky top-0 z-50 bg-background transition-all duration-200",
          isScrolled && "shadow-[0_8px_24px_rgba(0,0,0,0.1)] border-b border-border"
        )}
      >
        <div className="container mx-auto px-5">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a 
                href="/" 
                className="flex items-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
              >
                <img 
                  src={beterzLogo} 
                  alt="Beterzo" 
                  className="h-16 w-auto"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-7">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div className="relative">
                      <button
                        onClick={handleServicesToggle}
                        className={cn(
                          "flex items-center space-x-1 px-3 py-2 text-foreground font-semibold transition-colors duration-200 rounded-lg",
                          "hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                          isServicesOpen && "text-primary"
                        )}
                        aria-expanded={isServicesOpen}
                        aria-haspopup="true"
                      >
                        <span>{item.name}</span>
                        <ChevronDown 
                          className={cn(
                            "h-4 w-4 transition-transform duration-200",
                            isServicesOpen && "rotate-180"
                          )}
                        />
                      </button>

                      {/* Services Dropdown */}
                      {isServicesOpen && (
                        <div className="absolute top-full left-0 mt-2 w-[720px] bg-background rounded-[14px] shadow-[0_8px_24px_rgba(0,0,0,0.1)] border border-border p-6 z-50">
                          <div className="grid grid-cols-2 gap-4">
                            {servicesItems.map((service) => (
                              <a
                                key={service.name}
                                href={service.href}
                                className="flex flex-col p-4 rounded-lg transition-colors duration-200 hover:bg-surface-mist hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                              >
                                <div className="font-semibold text-foreground mb-1">
                                  {service.name}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  {service.description}
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className={cn(
                        "relative px-3 py-2 text-foreground font-semibold transition-colors duration-200 rounded-lg",
                        "hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                        isActiveRoute(item.href) && "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full"
                      )}
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex">
              <Button className="btn-primary h-12 px-6">
                Plan gesprek
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-lg border border-border flex items-center justify-center transition-colors duration-200 hover:bg-surface-mist focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 text-foreground" />
              ) : (
                <Menu className="h-5 w-5 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Dropdown Overlay */}
        {isServicesOpen && (
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsServicesOpen(false)}
          />
        )}
      </header>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/24 z-50 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Drawer */}
          <div className="fixed top-0 right-0 h-full w-[86%] max-w-sm bg-background shadow-xl z-50 lg:hidden overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="text-xl font-bold text-foreground">
                Navigatie
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-200 hover:bg-surface-mist"
              >
                <X className="h-5 w-5 text-foreground" />
              </button>
            </div>

            <nav className="p-6 space-y-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={handleMobileServicesToggle}
                        className="flex items-center justify-between w-full px-4 py-3 text-left font-semibold text-foreground rounded-lg transition-colors duration-200 hover:bg-surface-mist"
                      >
                        <span>{item.name}</span>
                        <ChevronDown 
                          className={cn(
                            "h-4 w-4 transition-transform duration-200",
                            isMobileServicesOpen && "rotate-180"
                          )}
                        />
                      </button>
                      
                      {isMobileServicesOpen && (
                        <div className="ml-4 mt-2 space-y-1">
                          {servicesItems.map((service) => (
                            <a
                              key={service.name}
                              href={service.href}
                              className="block px-4 py-3 text-muted-foreground rounded-lg transition-colors duration-200 hover:bg-surface-mist hover:text-primary"
                            >
                              <div className="font-medium mb-1">{service.name}</div>
                              <div className="text-sm">{service.description}</div>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className={cn(
                        "block px-4 py-3 font-semibold rounded-lg transition-colors duration-200 hover:bg-surface-mist hover:text-primary",
                        isActiveRoute(item.href) ? "text-primary bg-surface-mist" : "text-foreground"
                      )}
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile CTA */}
            <div className="p-6 mt-auto border-t border-border">
              <Button className="btn-primary w-full h-12">
                Plan gesprek
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
}