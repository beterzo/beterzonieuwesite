import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { CheckCircle, ArrowLeft } from "lucide-react";

const MAX_FILE_SIZE = 10000000; // 10MB
const ACCEPTED_FILE_TYPES = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/png", "image/jpeg", "image/jpg"];

const formSchema = z.object({
  name: z.string().min(2, "Naam moet minstens 2 karakters bevatten"),
  email: z.string().email("Voer een geldig emailadres in"),
  organization: z.string().optional(),
  message: z.string().min(10, "Bericht moet minstens 10 karakters bevatten"),
  honeypot: z.string().max(0, "Bot gedetecteerd") // Anti-spam honeypot
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      message: "",
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
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
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
                  <FormLabel className="font-semibold">Naam</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Je naam" 
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
                  <FormLabel className="font-semibold">Email</FormLabel>
                  <FormControl>
                    <Input 
                      type="email"
                      placeholder="je@email.nl" 
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
            name="organization"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Organisatie</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Je organisatie" 
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
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Bericht</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Je vraag of opmerking"
                    className="min-h-[120px] rounded-[14px] border-border focus:border-primary resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="pt-4">
            <Button 
              type="submit" 
              className="btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Versturen..." : "Versturen"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}