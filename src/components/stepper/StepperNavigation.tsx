import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepperNavigationProps {
  currentStep: number;
  totalSteps: number;
  onStepChange: (step: number) => void;
  steps: Array<{
    id: number;
    chip: string;
    title: string;
  }>;
}

export function StepperNavigation({ 
  currentStep, 
  totalSteps, 
  onStepChange, 
  steps 
}: StepperNavigationProps) {
  const handlePrevious = () => {
    if (currentStep > 1) {
      onStepChange(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      onStepChange(currentStep + 1);
    }
  };

  return (
    <div className="sticky top-0 bg-background/95 backdrop-blur-sm z-10 border-b border-border py-6">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between gap-8">
          {/* Step Navigation Chips */}
          <div className="flex-1">
            <div 
              className="flex items-center justify-start gap-4 overflow-x-auto pb-2 lg:pb-0 lg:justify-center snap-x snap-mandatory lg:snap-none"
              role="tablist"
              aria-label="Process steps"
            >
              {steps.map((step) => (
                <button
                  key={step.id}
                  role="tab"
                  aria-selected={currentStep === step.id}
                  aria-controls={`step-content-${step.id}`}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-[14px] text-sm font-semibold transition-all duration-200 whitespace-nowrap snap-center flex-shrink-0",
                    currentStep === step.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-background border-2 border-border text-foreground hover:bg-surface-mist"
                  )}
                  onClick={() => onStepChange(step.id)}
                >
                  <span className="text-xs font-bold">{step.id}</span>
                  <span className="capitalize">{step.chip}</span>
                </button>
              ))}
            </div>
            
            {/* Progress Bar */}
            <div className="mt-4 flex gap-1">
              {Array.from({ length: totalSteps }, (_, index) => (
                <div
                  key={index}
                  className={cn(
                    "h-1 flex-1 rounded-full transition-colors duration-200",
                    index < currentStep
                      ? "bg-primary"
                      : "bg-border"
                  )}
                />
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="h-10 w-10"
              aria-label="Previous step"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              disabled={currentStep === totalSteps}
              className="h-10 w-10"
              aria-label="Next step"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}