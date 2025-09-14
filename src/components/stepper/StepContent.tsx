import { Button } from "@/components/ui/button";
import { Clock, FileText, Users, Target } from "lucide-react";

interface InfoCard {
  icon: keyof typeof iconMap;
  label: string;
  value: string;
}

interface StepContentProps {
  step: {
    id: number;
    chip: string;
    title: string;
    subtitle: string;
    description: string;
    infoCards: InfoCard[];
    mediaUrl?: string;
    mediaAlt: string;
  };
  isActive: boolean;
}

const iconMap = {
  Clock,
  FileText,
  Users,
  Target,
};

export function StepContent({ step, isActive }: StepContentProps) {
  if (!isActive) return null;

  return (
    <div 
      role="tabpanel"
      id={`step-content-${step.id}`}
      aria-labelledby={`step-tab-${step.id}`}
      className="animate-in fade-in-0 slide-in-from-right-2 duration-200"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column - Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h2 className="text-foreground">{step.subtitle}</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-4">
              {step.infoCards.map((card, index) => {
                const IconComponent = iconMap[card.icon] || Target;
                return (
                  <div key={index} className="premium-card p-4 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="inline-flex items-center justify-center w-8 h-8 bg-primary/10 rounded-lg">
                        <IconComponent className="h-4 w-4 text-primary icon-stroke" />
                      </div>
                      <span className="text-sm font-semibold text-foreground">
                        {card.label}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed pl-11">
                      {card.value}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="btn-primary">
                Plan kennismaking
              </Button>
              <Button variant="outline" className="btn-secondary">
                Bekijk voorbeelden
              </Button>
            </div>
          </div>

          {/* Right Column - Media */}
          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="relative overflow-hidden rounded-[14px] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-float)] transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-[4/5] lg:aspect-[16/10] relative bg-surface-mist">
                  {step.mediaUrl ? (
                    <img 
                      src={step.mediaUrl} 
                      alt={step.mediaAlt}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                      <div className="text-center space-y-2">
                        <FileText className="h-12 w-12 mx-auto text-primary/40" />
                        <p className="text-sm">{step.mediaAlt}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}