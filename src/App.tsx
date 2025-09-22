import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import OverOns from "./pages/OverOns";
import HowWeWork from "./pages/HowWeWork";
import Services from "./pages/Services";
import Plan from "./pages/Plan";
import Privacy from "./pages/Privacy";
import FAQ from "./pages/FAQ";
import AgentAtelier from "./pages/AgentAtelier";
import MaatwerkAutomatisering from "./pages/MaatwerkAutomatisering";
import ToetsGenerator from "./pages/ToetsGenerator";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/over-ons" element={<OverOns />} />
              <Route path="/how-we-work" element={<HowWeWork />} />
              <Route path="/hoe-wij-werken" element={<HowWeWork />} />
              <Route path="/diensten" element={<Services />} />
              <Route path="/plan" element={<Plan />} />
              <Route path="/plan-gesprek" element={<Plan />} />
              <Route path="/plan-kennismaking" element={<Plan />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/veelgestelde-vragen" element={<FAQ />} />
              <Route path="/diensten/agent-atelier" element={<AgentAtelier />} />
              <Route path="/diensten/maatwerk-automatisering" element={<MaatwerkAutomatisering />} />
              <Route path="/diensten/toetsgenerator" element={<ToetsGenerator />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
