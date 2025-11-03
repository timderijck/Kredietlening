import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { TrustBadges } from "@/components/TrustBadges";
import { BenefitCards } from "@/components/BenefitCards";
import { HowItWorks } from "@/components/HowItWorks";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { SeoHead } from "@/components/SeoHead";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";

const indexSchema = [
  {
    "@context": "https://schema.org",
    "url": "https://kredietlening.nl",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://kredietlening.nl/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Kredietlening",
    "url": "https://kredietlening.nl",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+31-88-123-4567", // Telefoonnummer uit de footer
      "contactType": "customer service",
      "email": "info@kredietlening.nl" // E-mailadres uit de footer
    }
  }
];

const ctaButtons = [
  {
    text: "Direct Aanvragen",
    link: "/minilening-zonder-bkr-aanvragen",
    variant: "cta" as const,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <SeoHead 
        title="Snel geld nodig? Ontvang binnen 24 uur tot €1.500 zonder BKR toetsing"
        description="Ontvang vandaag nog €100–€1.500 zonder BKR toetsing. Snelle online aanvraag, direct goedgekeurd binnen 24 uur."
        schema={indexSchema}
      />
      <Navigation />
      <BreadcrumbNav />
      
      <Hero
        title="Geld nodig? Ontvang het binnen 24 uur"
        subtitle="€100 – €1.500 zonder BKR toetsing. Snel, simpel en betrouwbaar."
        ctaButtons={ctaButtons}
        backgroundImage="/assets/adviseur.jpg"
      />

      <TrustBadges />

      <BenefitCards />

      <HowItWorks />

      <FAQ />

      <CTASection buttonLink="/minilening-zonder-bkr-aanvragen" />

      <Footer />
    </div>
  );
};

export default Index;
