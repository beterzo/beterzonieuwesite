import { ContactForm } from "@/components/plan/ContactForm";
import { Mail, Phone } from "lucide-react";

export default function Plan() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12 space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
              Neem contact op
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Wil je weten wat Beterzo voor jouw organisatie kan betekenen? Neem 
              contact met ons op of plan direct een vrijblijvend kennismakingsgesprek.
            </p>
          </div>

          {/* Contact Form Block */}
          <div className="bg-card rounded-[14px] border border-border p-8 shadow-[0_8px_24px_rgba(0,0,0,0.1)] text-left">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Stuur ons een bericht
            </h2>
            
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="mt-8 space-y-4 text-center">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
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
          </div>
        </div>
      </div>
    </div>
  );
}