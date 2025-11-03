import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { FAQ } from "@/components/FAQ";
import { SeoHead } from "@/components/SeoHead";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";


const santanderSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialProduct",
  "name": "Santander Lening",
  "description": "Informatie over persoonlijke leningen van Santander Consumer Finance.",
  "brand": {
    "@type": "Brand",
    "name": "Santander"
  }
};

const santanderFAQ = [
  {
    question: "Wat voor leningen biedt Santander aan?",
    answer: "Santander Consumer Finance is gespecialiseerd in persoonlijke leningen en doorlopend krediet. Ze bieden leningen aan voor grotere uitgaven, zoals een auto, verbouwing of de aankoop van een caravan."
  },
  {
    question: "Is Santander een betrouwbare partij?",
    answer: "Ja, Santander is een van de grootste en bekendste banken van Europa en is wereldwijd actief. Ze staan onder toezicht van de relevante financiële autoriteiten."
  },
  {
    question: "Wat zijn de voordelen van een lening bij Santander?",
    answer: "Santander biedt duidelijke voorwaarden, een vaste rente en een vaste looptijd bij persoonlijke leningen. Hierdoor weet u precies waar u aan toe bent."
  }
];

const ctaButtons = [
  {
    text: "Persoonlijke Lening",
    link: "/persoonlijke-lening-voor-grote-uitgaven",
    variant: "cta" as const,
  },
  {
    text: "Doorlopend Krediet",
    link: "/flexibel-doorlopend-krediet",
    variant: "outline" as const,
    className: "text-white",
  },
];

const Santander = () => {
  return (
    <div className="min-h-screen">
      <SeoHead 
        title="Santander Lening Review | Ervaringen & Informatie"
        description="Lees onze review over Santander leningen. Ontdek de mogelijkheden van een persoonlijke lening bij Santander, inclusief ervaringen en voorwaarden."
        schema={santanderSchema}
      />
      <Navigation />
      <BreadcrumbNav pageTitle="Santander" />
      <Hero 
        title="Santander: Vertrouwd geld lenen"
        subtitle="Voor grotere uitgaven kunt u terecht bij Santander voor een persoonlijke lening of een doorlopend krediet."
        ctaButtons={ctaButtons}
        backgroundImage="/assets/santander.webp"
        backgroundClassName="bg-contain bg-no-repeat bg-center filter-none"
      />
            <section className="py-16 md:py-24">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-12">
                    <h2 className="mb-4">Over Santander</h2>
                      <p className="text-lg text-muted-foreground">
                      Santander Consumer Finance is een onderdeel van de Spaanse bank Banco Santander. In Nederland zijn ze een belangrijke speler op het gebied van consumentenfinancieringen. Ze bieden verschillende leenvormen aan, waaronder de persoonlijke lening en het doorlopend krediet. Een lening bij Santander is vaak gericht op de langere termijn en grotere bedragen, in tegenstelling tot de minileningen van andere aanbieders.
                      </p>
                  </div>
                </div>
              </div>
            </section>      <FAQ items={santanderFAQ} />
      <Footer />
    </div>
  );
};

export default Santander;
