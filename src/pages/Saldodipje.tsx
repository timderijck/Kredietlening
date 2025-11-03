import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { FAQ } from "@/components/FAQ";
import { SeoHead } from "@/components/SeoHead";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";


const saldodipjeSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialProduct",
  "name": "Saldodipje Lening",
  "description": "Snel en eenvoudig een minilening aanvragen bij Saldodipje. Leen tot €1800 met een korte looptijd.",
  "brand": {
    "@type": "Brand",
    "name": "Saldodipje"
  }
};

const saldodipjeFAQ = [
  {
    question: "Wat is een Saldodipje lening?",
    answer: "Een Saldodipje lening is een minilening, een kleine lening met een korte looptijd. U kunt bedragen lenen van €100 tot €1800 met een looptijd van 30 of 62 dagen."
  },
  {
    question: "Hoe snel staat het geld op mijn rekening?",
    answer: "Na goedkeuring van uw aanvraag staat het geld vaak al binnen 24 uur op uw rekening. Saldodipje staat bekend om hun snelle verwerking."
  },
  {
    question: "Is een BKR-toetsing nodig?",
    answer: "Nee, voor een minilening bij Saldodipje wordt geen BKR-toetsing gedaan. Dit maakt het een toegankelijke optie voor veel mensen."
  },
  {
    question: "Wat zijn de voorwaarden?",
    answer: "U moet minimaal 18 jaar oud zijn, in Nederland wonen, en beschikken over een Nederlandse bankrekening en een geldig identiteitsbewijs."
  }
];

const ctaButtons = [
  {
    text: "Minilening aanvragen",
    link: "/minilening-zonder-bkr-aanvragen",
    variant: "cta" as const,
  },
];

const Saldodipje = () => {
  return (
    <div className="min-h-screen">
      <SeoHead 
        title="Saldodipje Lening Review | Ervaringen & Informatie"
        description="Lees onze review over Saldodipje leningen. Leen snel en eenvoudig geld met een minilening van Saldodipje. Geen BKR-toetsing en binnen 24 uur op je rekening."
        schema={saldodipjeSchema}
      />
      <Navigation />
      <BreadcrumbNav pageTitle="Saldodipje" />
      <Hero 
        title="Saldodipje: Snel een klein bedrag lenen"
        subtitle="Met een minilening van Saldodipje beschikt u snel over extra financiële ruimte. Ideaal voor onverwachte uitgaven."
        ctaButtons={ctaButtons}
        backgroundImage="/assets/saldodipje.png"
        backgroundClassName="bg-cover bg-center filter-none"
      />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="mb-4">Over Saldodipje</h2>
                <p className="text-lg text-muted-foreground">
                Saldodipje is een van de bekendste aanbieders van minileningen in Nederland. Ze zijn onderdeel van de Ferratum Group en bieden snelle en flexibele leningen aan voor consumenten die op zoek zijn naar een kortetermijnoplossing. De aanvraag is volledig online en u weet vaak binnen enkele minuten al of uw lening is goedgekeurd.
                </p>
            </div>
          </div>
        </div>
      </section>
      <FAQ items={saldodipjeFAQ} />
      <Footer />
    </div>
  );
};

export default Saldodipje;
