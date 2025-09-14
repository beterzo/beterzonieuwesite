import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar, ExternalLink } from "lucide-react";

export function CalendarEmbed() {
  const [showModal, setShowModal] = useState(false);

  // In a real implementation, you would replace this with your actual Cal.com or Calendly URL
  const calendarUrl = "https://cal.com/your-calendar-link"; // Replace with actual URL

  return (
    <div className="space-y-4">
      {/* Embed Container */}
      <div className="premium-card overflow-hidden min-h-[680px] lg:min-h-[720px]">
        {/* Placeholder for calendar embed */}
        <div className="w-full h-full flex items-center justify-center bg-surface-mist rounded-[14px] border-2 border-dashed border-border">
          <div className="text-center space-y-6 p-8">
            <Calendar className="w-16 h-16 text-muted-foreground mx-auto" strokeWidth={1.5} />
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">
                Calendar integratie
              </h3>
              <p className="text-muted-foreground max-w-md">
                Hier komt de Cal.com of Calendly embed. Vervang deze placeholder met de daadwerkelijke iframe.
              </p>
            </div>
            
            {/* Fallback Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Dialog open={showModal} onOpenChange={setShowModal}>
                <DialogTrigger asChild>
                  <Button className="btn-primary">
                    <Calendar className="w-4 h-4 mr-2" />
                    Open planner
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] p-0">
                  <DialogHeader className="p-6 pb-0">
                    <DialogTitle>Plan je gratis gesprek</DialogTitle>
                  </DialogHeader>
                  <div className="p-6 pt-0">
                    <div className="w-full min-h-[600px] bg-surface-mist rounded-[14px] border border-border flex items-center justify-center">
                      <div className="text-center space-y-4 p-8">
                        <Calendar className="w-12 h-12 text-muted-foreground mx-auto" />
                        <div className="space-y-2">
                          <h4 className="font-semibold text-foreground">
                            Calendar wordt geladen...
                          </h4>
                          <p className="text-muted-foreground text-sm">
                            Hier zou de Cal.com/Calendly iframe worden weergegeven
                          </p>
                        </div>
                        <Button asChild variant="outline">
                          <a 
                            href={calendarUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Open in nieuw venster
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              
              <Button asChild variant="outline">
                <a 
                  href={calendarUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Direct naar agenda
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Implementation note */}
      <div className="text-xs text-muted-foreground bg-surface-mist rounded-lg p-4">
        <strong>Implementatie:</strong> Vervang de placeholder door:
        <code className="block mt-2 text-xs bg-white p-2 rounded border">
          &lt;iframe src="{calendarUrl}" width="100%" height="680px" frameBorder="0"&gt;&lt;/iframe&gt;
        </code>
      </div>
    </div>
  );
}