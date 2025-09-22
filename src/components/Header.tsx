import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";
import beterzLogo from "@/assets/beterzo-logo.png";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Diensten", href: "/diensten" },
  { name: "Hoe wij werken", href: "/hoe-wij-werken" },
  { name: "Over ons", href: "/over-ons" },
  { name: "FAQ", href: "/faq" }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
  }, [location.pathname]);

  // Handle ESC key to close menus
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
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
                  className="h-20 w-auto"
                />
              </a>
            </div>

            {/* Desktop Navigation - Right Aligned */}
            <div className="hidden lg:flex items-center space-x-8">
              <nav className="flex items-center space-x-8">
                {navigationItems.map((item) => (
                  <div key={item.name} className="relative">
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
                  </div>
                ))}
              </nav>

              {/* Desktop CTA */}
              <div className="ml-6">
                <Button asChild className="btn-primary h-12 px-6">
                  <a href="/plan-kennismaking">Plan gratis gesprek</a>
                </Button>
              </div>
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

        {/* Dropdown Overlay - Remove this section since no dropdown exists */}
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
                  <a
                    href={item.href}
                    className={cn(
                      "block px-4 py-3 font-semibold rounded-lg transition-colors duration-200 hover:bg-surface-mist hover:text-primary",
                      isActiveRoute(item.href) ? "text-primary bg-surface-mist" : "text-foreground"
                    )}
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </nav>

            {/* Mobile CTA */}
            <div className="p-6 mt-auto border-t border-border">
              <Button asChild className="btn-primary w-full h-12">
                <a href="/plan-kennismaking">Plan gratis gesprek</a>
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
}