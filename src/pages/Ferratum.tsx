import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { FAQ } from "@/components/FAQ";
import { SeoHead } from "@/components/SeoHead";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";


const ferratumSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialProduct",
  "name": "Ferratum Lening",
  "description": "Informatie over leningen van Ferratum. Let op: Ferratum is niet langer actief in het Verenigd Koninkrijk.",
  "brand": {
    "@type": "Brand",
    "name": "Ferratum"
  }
};

const ferratumFAQ = [
  {
    question: "Wat was een Ferratum lening?",
    answer: "Ferratum was een aanbieder van minileningen, ook wel flitskrediet genoemd. Men kon kleine bedragen lenen met een korte looptijd, vaak voor onverwachte uitgaven."
  },
  {
    question: "Is Ferratum nog actief?",
    answer: "Ferratum heeft zijn activiteiten in een aantal landen, waaronder het Verenigd Koninkrijk, gestaakt. In Nederland was Ferratum een bekende aanbieder, maar het is belangrijk om de actuele status te controleren."
  },
  {
    question: "Wat voor soort leningen bood Ferratum aan?",
    answer: "Ferratum was gespecialiseerd in minileningen en plusleningen. Dit waren leningen van €100 tot €1800 met looptijden van 30, 45 of 62 dagen."
  }
];

const ctaButtons = [
  {
    text: "Minilening aanvragen",
    link: "/minilening-zonder-bkr-aanvragen",
    variant: "cta" as const,
  },
];

const Ferratum = () => {
  return (
    <div className="min-h-screen">
      <SeoHead 
        title="Ferratum Lening Review | Ervaringen & Informatie"
        description="Lees onze review over Ferratum leningen. Ontdek alles over de leningen van Ferratum, inclusief ervaringen en informatie over deze voormalige speler op de markt van minileningen."
        schema={ferratumSchema}
      />
      <Navigation />
      <BreadcrumbNav pageTitle="Ferratum" />
      <Hero 
        title="Ferratum: Informatie over minileningen"
        subtitle="Ferratum was een bekende aanbieder van snelle en flexibele minileningen in Nederland."
        ctaButtons={ctaButtons}
        backgroundImage="/assets/Ferratum-logo-UK-.jpg"
        backgroundClassName="bg-cover bg-center filter-none"
      />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="mb-4">Over Ferratum</h2>
                <p className="text-lg text-muted-foreground">
                Ferratum, opgericht in 2005 in Finland, was een grote internationale speler op het gebied van mobiele consumentenleningen. Ze boden in veel landen, waaronder Nederland, minileningen aan. De focus lag op een snel en volledig online aanvraagproces. Hoewel Ferratum in sommige markten niet meer actief is, was het een pionier in de fintech-sector.
                </p>
            </div>
          </div>
        </div>
      </section>
      <FAQ items={ferratumFAQ} />
      <Footer />
    </div>
  );
};

export default Ferratum;
