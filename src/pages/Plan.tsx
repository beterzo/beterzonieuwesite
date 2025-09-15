import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/plan/ContactForm";
import { Mail, Phone } from "lucide-react";
import workshopHero from "@/assets/workshop-hero.jpg";

const logos = [
  { src: "/logos/doxis.png", alt: "Doxis" },
  { src: "/logos/lek-sloopwerken.png", alt: "Lek Sloopwerken" },
  { src: "/logos/vinster.png", alt: "Vinster" },
  { src: "/logos/educared.png", alt: "Educared" },
  { src: "/logos/de-groene-wereld.png", alt: "De Groene Wereld" },
  { src: "/logos/bureau-reuring.png", alt: "Bureau Reuring" }
];

export default function Plan() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-8 pb-6">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Content */}
            <div className="space-y-6">
              <h1 className="text-foreground">
                Neem contact op
              </h1>
              
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed max-w-xl">
                <p>
                  Wil je weten wat Beterzo voor jouw organisatie kan betekenen? Neem 
                  contact met ons op of plan direct een vrijblijvend kennismakingsgesprek.
                </p>
              </div>

              {/* Contact Form */}
              <div className="pt-4">
                <div className="mb-6">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    Stuur ons een bericht
                  </h2>
                </div>
                
                <ContactForm />
              </div>

              {/* Contact Info */}
              <div className="pt-4 space-y-4">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <a 
                    href="mailto:hi@beterzo.tech"
                    className="flex items-center gap-2 text-primary font-medium hover:text-primary-hover transition-colors duration-200"
                  >
                    <Mail className="w-4 h-4" />
                    hi@beterzo.tech
                  </a>
                  <a 
                    href="tel:+31613306844"
                    className="flex items-center gap-2 text-primary font-medium hover:text-primary-hover transition-colors duration-200"
                  >
                    <Phone className="w-4 h-4" />
                    +31 6 1330 6844
                  </a>
                </div>
                <div>
                  <a 
                    href="/faq"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
                  >
                    Veelgestelde vragen →
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right Column - Image Card */}
            <div className="lg:flex justify-end items-start">
              <div className="relative w-full lg:w-[65%] xl:w-[60%] min-w-[360px] max-w-[480px] lg:ml-8">
                <div className="aspect-[4/5] relative overflow-hidden rounded-[14px] shadow-[0_8px_24px_rgba(0,0,0,0.1)]">
                  <img 
                    src={workshopHero}
                    alt="Workshop over AI-automatisering en procesoptimalisatie"
                    className="w-full h-full object-cover object-[60%_40%]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Section */}
      <section className="pt-8 pb-12">
        <div className="container mx-auto px-6">
          <div className="space-y-6">
            <div className="text-sm text-muted-foreground font-medium">
              Vertrouwd door
            </div>
            <div className="flex flex-wrap items-center gap-8 lg:gap-12 opacity-60">
              {logos.map((logo, index) => (
                <img 
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 lg:h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}