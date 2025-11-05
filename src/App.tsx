import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Minilening from "./pages/Minilening";
import PersoonlijkeLening from "./pages/PersoonlijkeLening";
import DoorlopendKrediet from "./pages/DoorlopendKrediet";
import Saldodipje from "./pages/Saldodipje";
import Ferratum from "./pages/Ferratum";
import Santander from "./pages/Santander";
import NotFound from "./pages/NotFound";
import ScrollToAnchor from "./components/ScrollToAnchor";
import OverOns from "./pages/OverOns";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import VerschilPersoonlijkeLeningDoorlopendKrediet from "./pages/blog/VerschilPersoonlijkeLeningDoorlopendKrediet";

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
          <Route path="/saldodipje" element={<Saldodipje />} />
          <Route path="/ferratum" element={<Ferratum />} />
          <Route path="/santander" element={<Santander />} />
          <Route path="/over-ons" element={<OverOns />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/blog/verschil-persoonlijke-lening-doorlopend-krediet" element={<VerschilPersoonlijkeLeningDoorlopendKrediet />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
