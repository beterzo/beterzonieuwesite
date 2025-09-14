import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { CheckCircle, ArrowLeft, Calendar } from "lucide-react";

const MAX_FILE_SIZE = 10000000; // 10MB
const ACCEPTED_FILE_TYPES = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/png", "image/jpeg", "image/jpg"];

const formSchema = z.object({
  name: z.string().min(2, "Naam moet minstens 2 karakters bevatten"),
  email: z.string().email("Voer een geldig emailadres in"),
  organization: z.string().optional(),
  phone: z.string().optional(),
  subject: z.string().min(1, "Selecteer een onderwerp"),
  message: z.string().min(10, "Bericht moet minstens 10 karakters bevatten"),
  file: z.any().optional(),
  privacy: z.boolean().refine(val => val === true, "Je moet akkoord gaan met het privacybeleid"),
  honeypot: z.string().max(0, "Bot gedetecteerd") // Anti-spam honeypot
});

type FormData = z.infer<typeof formSchema>;

interface ContactFormProps {
  onSwitchToSchedule: () => void;
}

export function ContactForm({ onSwitchToSchedule }: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      phone: "",
      subject: "",
      message: "",
      privacy: false,
      honeypot: ""
    }
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Add small delay for anti-spam
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    try {
      // Here you would normally send the data to your API endpoint
      // For now, we'll just simulate a successful submission
      
      // Example API call:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     ...data,
      //     source: window.location.href,
      //     timestamp: new Date().toISOString()
      //   })
      // });
      
      console.log("Form data:", data);
      
      // Simulate success
      setIsSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
      // Handle error - you could show a toast notification here
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="premium-card p-8 text-center space-y-6">
        <CheckCircle className="w-16 h-16 text-primary mx-auto" />
        
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-foreground">
            Bedankt! We reageren meestal binnen 1 werkdag.
          </h3>
          <p className="text-muted-foreground">
            Je bericht is succesvol verzonden. We nemen zo snel mogelijk contact met je op.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild variant="outline" className="btn-secondary">
            <a href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Terug naar home
            </a>
          </Button>
          <Button onClick={onSwitchToSchedule} className="btn-primary">
            <Calendar className="w-4 h-4 mr-2" />
            Plan direct
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="premium-card p-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Hidden honeypot field for anti-spam */}
          <FormField
            control={form.control}
            name="honeypot"
            render={({ field }) => (
              <input
                {...field}
                type="text"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />
            )}
          />
          
          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Naam *</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Jouw volledige naam" 
                      {...field}
                      className="h-12 rounded-[14px] border-border focus:border-primary"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">E-mail *</FormLabel>
                  <FormControl>
                    <Input 
                      type="email"
                      placeholder="jouw@email.com" 
                      {...field}
                      className="h-12 rounded-[14px] border-border focus:border-primary"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="organization"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Organisatie</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Bedrijfsnaam" 
                      {...field}
                      className="h-12 rounded-[14px] border-border focus:border-primary"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Telefoon</FormLabel>
                  <FormControl>
                    <Input 
                      type="tel"
                      placeholder="06-12345678" 
                      {...field}
                      className="h-12 rounded-[14px] border-border focus:border-primary"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Onderwerp *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="h-12 rounded-[14px] border-border focus:border-primary">
                      <SelectValue placeholder="Kies een onderwerp" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="automatisering">Procesautomatisering</SelectItem>
                    <SelectItem value="ai-implementatie">AI-implementatie</SelectItem>
                    <SelectItem value="optimalisatie">Workflow optimalisatie</SelectItem>
                    <SelectItem value="training">Training & begeleiding</SelectItem>
                    <SelectItem value="maatwerk">Maatwerk oplossing</SelectItem>
                    <SelectItem value="algemeen">Algemene vraag</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Bericht *</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Vertel ons over je situatie, doelen en eventuele uitdagingen..."
                    className="min-h-[120px] rounded-[14px] border-border focus:border-primary resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="file"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Bijlage</FormLabel>
                <FormControl>
                  <Input 
                    type="file"
                    accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                    className="h-12 rounded-[14px] border-border focus:border-primary file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-surface-mist file:text-foreground file:font-medium"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        if (file.size > MAX_FILE_SIZE) {
                          form.setError("file", { message: "Bestand is te groot (max 10MB)" });
                          return;
                        }
                        if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
                          form.setError("file", { message: "Bestandstype niet ondersteund" });
                          return;
                        }
                        field.onChange(file);
                        form.clearErrors("file");
                      }
                    }}
                  />
                </FormControl>
                <p className="text-xs text-muted-foreground">
                  PDF, DOC, PNG, JPG (max 10MB)
                </p>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="privacy"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="mt-1"
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-sm font-medium">
                    Ik ga akkoord met het{" "}
                    <a href="/privacy" className="text-primary hover:text-primary-hover underline">
                      privacybeleid
                    </a>
                    {" "}*
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              type="submit" 
              className="btn-primary flex-1 sm:flex-initial"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Versturen..." : "Versturen"}
            </Button>
            <Button 
              type="button"
              variant="outline" 
              className="btn-secondary flex-1 sm:flex-initial"
              onClick={onSwitchToSchedule}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Plan direct in de agenda
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}