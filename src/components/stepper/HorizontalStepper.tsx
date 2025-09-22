import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Clock, FileText, Users, Target } from "lucide-react";
import { cn } from "@/lib/utils";
interface StepData {
  id: number;
  chip: string;
  title: string;
  subtitle: string;
  description: string;
  infoCards: Array<{
    icon: "Clock" | "FileText" | "Users" | "Target";
    label: string;
    value: string;
  }>;
  mediaUrl: string;
  mediaAlt: string;
}
interface HorizontalStepperProps {
  steps: StepData[];
}
const iconMap = {
  Clock,
  FileText,
  Users,
  Target
};
export function HorizontalStepper({
  steps
}: HorizontalStepperProps) {
  const [activeStep, setActiveStep] = useState(1);
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Initialize IntersectionObserver
  useEffect(() => {
    if (!carouselRef.current) return;
    observerRef.current = new IntersectionObserver(entries => {
      if (isUserScrolling) return;
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
          const stepId = parseInt(entry.target.getAttribute('data-step') || '1');
          setActiveStep(stepId);
          window.history.replaceState(null, '', `#stap-${stepId}`);
        }
      });
    }, {
      root: carouselRef.current,
      threshold: [0.6],
      rootMargin: '0px'
    });
    slidesRef.current.forEach(slide => {
      if (slide && observerRef.current) {
        observerRef.current.observe(slide);
      }
    });
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [isUserScrolling]);

  // Handle URL hash on mount
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const stepMatch = hash.match(/#stap-(\d+)/);
      if (stepMatch) {
        const stepNumber = parseInt(stepMatch[1], 10);
        if (stepNumber >= 1 && stepNumber <= steps.length) {
          setActiveStep(stepNumber);
          scrollToStep(stepNumber, false);
        }
      }
    }
  }, [steps.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          if (activeStep > 1) scrollToStep(activeStep - 1);
          break;
        case 'ArrowRight':
          e.preventDefault();
          if (activeStep < steps.length) scrollToStep(activeStep + 1);
          break;
        case 'Home':
          e.preventDefault();
          scrollToStep(1);
          break;
        case 'End':
          e.preventDefault();
          scrollToStep(steps.length);
          break;
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [activeStep, steps.length]);
  const scrollToStep = (stepId: number, smooth: boolean = true) => {
    const targetSlide = slidesRef.current[stepId - 1];
    if (targetSlide && carouselRef.current) {
      setIsUserScrolling(true);
      setActiveStep(stepId);
      window.history.replaceState(null, '', `#stap-${stepId}`);
      targetSlide.scrollIntoView({
        behavior: smooth ? 'smooth' : 'auto',
        block: 'nearest',
        inline: 'start'
      });

      // Reset scrolling flag after animation
      setTimeout(() => setIsUserScrolling(false), 300);
    }
  };
  const handlePrevious = () => {
    if (activeStep > 1) scrollToStep(activeStep - 1);
  };
  const handleNext = () => {
    if (activeStep < steps.length) scrollToStep(activeStep + 1);
  };

  // Add drag support
  const handlePointerDown = (e: React.PointerEvent) => {
    if (!carouselRef.current) return;
    const startX = e.clientX;
    const scrollLeft = carouselRef.current.scrollLeft;
    let isDragging = false;
    const handlePointerMove = (e: PointerEvent) => {
      if (!carouselRef.current) return;
      const deltaX = startX - e.clientX;
      if (Math.abs(deltaX) > 5) isDragging = true;
      if (isDragging) {
        setIsUserScrolling(true);
        carouselRef.current.scrollLeft = scrollLeft + deltaX;
      }
    };
    const handlePointerUp = () => {
      if (isDragging) {
        setTimeout(() => setIsUserScrolling(false), 100);
      }
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerup', handlePointerUp);
    };
    document.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerup', handlePointerUp);
  };
  return <section className="bg-background">
      {/* Sticky Navigation */}
      <div className="sticky top-0 bg-background/95 backdrop-blur-sm z-10 border-b border-border py-3">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between gap-8">
            {/* Step Navigation Chips */}
            <div className="flex-1">
              <div className="flex items-center justify-start gap-3 overflow-x-auto pb-2 lg:pb-0 lg:justify-center snap-x snap-mandatory lg:snap-none" role="tablist" aria-label="Process steps">
                {steps.map(step => <button key={step.id} role="tab" aria-selected={activeStep === step.id} aria-controls={`step-panel-${step.id}`} className={cn("flex items-center gap-2 px-4 py-2 rounded-[14px] text-sm font-semibold transition-all duration-200 whitespace-nowrap snap-center flex-shrink-0", "hover:bg-surface-mist hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2", activeStep === step.id ? "bg-primary text-primary-foreground" : "bg-background border border-border text-foreground")} onClick={() => scrollToStep(step.id)}>
                    <span className="text-xs font-bold">{step.id}</span>
                    <span className="capitalize font-semibold">{step.chip}</span>
                  </button>)}
              </div>
              
              {/* Progress Bar */}
              <div className="mt-2 flex gap-1">
                {Array.from({
                length: steps.length
              }, (_, index) => <div key={index} className={cn("h-1 flex-1 rounded-full transition-colors duration-200", index < activeStep ? "bg-primary" : "bg-border")} />)}
              </div>
            </div>

            {/* Navigation Arrows - Hidden on Mobile */}
            <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
              <Button variant="outline" size="icon" onClick={handlePrevious} disabled={activeStep === 1} className={cn("h-9 w-9 rounded-full", "hover:-translate-y-0.5 disabled:hover:translate-y-0")} aria-label="Previous step">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={handleNext} disabled={activeStep === steps.length} className={cn("h-9 w-9 rounded-full", "hover:-translate-y-0.5 disabled:hover:translate-y-0")} aria-label="Next step">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Carousel */}
      <div ref={carouselRef} className={cn("overflow-x-auto scrollbar-hide", "scroll-snap-type-x scroll-snap-mandatory", "scroll-smooth touch-pan-x", "pr-3 lg:pr-0" // Peek hint on mobile
    )} style={{
      scrollSnapType: 'x mandatory',
      scrollBehavior: 'smooth'
    }} onPointerDown={handlePointerDown}>
        <div className="flex">
          {steps.map((step, index) => {
          const IconComponent = iconMap[step.infoCards[0]?.icon] || Target;
          return <div key={step.id} ref={el => slidesRef.current[index] = el} data-step={step.id} role="tabpanel" id={`step-panel-${step.id}`} aria-labelledby={`step-tab-${step.id}`} className="min-w-full scroll-snap-align-start scroll-snap-stop-always" style={{
            scrollSnapAlign: 'start',
            scrollSnapStop: 'always'
          }}>
                <div className="container mx-auto px-6 py-8">
                  <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-start">
                    {/* Left Column - Content */}
                    <div className="lg:col-span-7 space-y-6">
                      <div className="space-y-3">
                        <h2 className="text-foreground max-w-[72ch]">{step.subtitle}</h2>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-[70ch]">
                          {step.description}
                        </p>
                      </div>

                      {/* Info Grid */}
                      <div className="grid grid-cols-2 gap-3">
                        {step.infoCards.map((card, cardIndex) => {
                      const CardIcon = iconMap[card.icon] || Target;
                      return <div key={cardIndex} className="bg-card rounded-[14px] border border-border p-3 space-y-2">
                              <div className="flex items-center gap-2">
                                <div className="inline-flex items-center justify-center w-7 h-7 bg-primary/10 rounded-lg">
                                  <CardIcon className="h-3.5 w-3.5 text-primary" strokeWidth={2} />
                                </div>
                                <span className="text-sm font-semibold text-foreground">
                                  {card.label}
                                </span>
                              </div>
                              <p className="text-sm text-muted-foreground leading-relaxed font-medium pl-9">
                                {card.value}
                              </p>
                            </div>;
                    })}
                      </div>

                      {/* CTA Row */}
                      <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <Button className="btn-primary hover:-translate-y-0.5">
                          Plan kennismaking
                        </Button>
                        
                      </div>
                    </div>

                    {/* Right Column - Media */}
                    <div className="lg:col-span-5">
                      <div className="relative group">
                        <div className="relative overflow-hidden rounded-[14px] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-float)] transition-all duration-200 hover:-translate-y-1">
                          <div className="aspect-[16/10] relative bg-surface-mist">
                            <img src={step.mediaUrl} alt={step.mediaAlt} className="w-full h-full object-cover" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>;
        })}
        </div>
      </div>
    </section>;
}