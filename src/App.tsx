import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Minilening from "./pages/Minilening";
import PersoonlijkeLening from "./pages/PersoonlijkeLening";
import DoorlopendKrediet from "./pages/DoorlopendKrediet";
import NotFound from "./pages/NotFound";
import ScrollToAnchor from "./components/ScrollToAnchor";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToAnchor />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/minilening-zonder-bkr-aanvragen" element={<Minilening />} />
          <Route path="/persoonlijke-lening-voor-grote-uitgaven" element={<PersoonlijkeLening />} />
          <Route path="/flexibel-doorlopend-krediet" element={<DoorlopendKrediet />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
