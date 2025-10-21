import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { TrustBadges } from "@/components/TrustBadges";
import { BenefitCards } from "@/components/BenefitCards";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { RecommendedProvider } from "@/components/RecommendedProvider";
import { PersonalLoanKeyFeatures } from "@/components/PersonalLoanKeyFeatures";
import { DebtConsolidation } from "@/components/DebtConsolidation";
import { PersonalLoanHowItWorks } from "@/components/PersonalLoanHowItWorks";
import { AboutSantander } from "@/components/AboutSantander";
import { PersonalLoanCosts } from "@/components/PersonalLoanCosts";
import { MoreAboutLoans } from "@/components/MoreAboutLoans";
import { SeoHead } from "@/components/SeoHead";
import { Euro, Calendar, Percent, Shield } from "lucide-react";
import { OtherLoans } from "@/components/OtherLoans";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";

const persoonlijkeLeningSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialProduct",
  "name": "Persoonlijke lening",
  "description": "Leen eenvoudig en snel tussen de €1.500 en €50.000 met een persoonlijke lening. Lagere rente en flexibel inzetbaar voor grote aankopen of verbouwingen.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "EUR",
    "priceSpecification": {
      "@type": "QuantitativeValue",
      "minValue": 1500,
      "maxValue": 50000
    }
  },
  "provider": {
    "@type": "Organization",
    "name": "Kredietlening"
  }
};

const persoonlijkeLeningSBenefits = [
  {
    icon: Euro,
    title: "Tot €50.000 lenen",
    description: "Leen een groter bedrag voor belangrijke aankopen of investeringen.",
  },
  {
    icon: Calendar,
    title: "Looptijd tot 10 jaar",
    description: "Kies een looptijd die past bij jouw financiële situatie, tot maximaal 120 maanden.",
  },
  {
    icon: Percent,
    title: "Vaste rente",
    description: "Profiteer van een vaste rente gedurende de hele looptijd, dus geen verrassingen.",
  },
];

const persoonlijkeLeningSFAQ = [
  {
    question: "Wat houdt een persoonlijke lening precies in?",
    answer: "Een persoonlijke lening is een financieringsvorm waarbij het volledige leenbedrag in één keer wordt uitgekeerd. Kenmerkend is de vooraf vastgestelde duidelijkheid over het leenbedrag, het maandelijkse aflossingsbedrag en de totale rentekosten, wat zorgt voor financiële zekerheid gedurende de gehele looptijd.",
  },
  {
    question: "Voor welke doeleinden kan ik een persoonlijke lening gebruiken?",
    answer: "Een persoonlijke lening is uitermate geschikt voor de financiering van grotere uitgaven en investeringen. Denk hierbij aan de aankoop van een auto, boot, caravan, of het realiseren van een verbouwing aan uw woning. De besteding van het geleende bedrag is flexibel en aan uw eigen behoeften aan te passen.",
  },
  {
    question: "Binnen welke termijn ontvang ik het geld van mijn persoonlijke lening?",
    answer: "Na definitieve goedkeuring van uw aanvraag wordt het geleende bedrag doorgaans binnen 2 werkdagen op uw bankrekening gestort. Dit garandeert een snelle beschikking over de benodigde financiële middelen voor uw projecten of aankopen.",
  },
  {
    question: "Wat is de maximale looptijd van een persoonlijke lening?",
    answer: "De looptijd van een persoonlijke lening is afhankelijk van het geleende bedrag. Voor leningen tot €5.000 bedraagt de looptijd 72 maanden (6 jaar). Leent u meer dan €5.000, dan kan de looptijd oplopen tot 120 maanden (10 jaar), wat zorgt voor lagere maandlasten.",
  },
  {
    question: "Hoe verloopt de maandelijkse aflossing van een persoonlijke lening?",
    answer: "De aflossing van uw persoonlijke lening geschiedt middels een vast maandbedrag, dat elke maand automatisch via incasso van uw rekening wordt afgeschreven. Deze automatische incasso vindt standaard plaats op de 1e van de maand, wat zorgt voor een gestructureerde en zorgeloze terugbetaling.",
  },
  {
    question: "Welke kosten zijn verbonden aan een persoonlijke lening?",
    answer: "De kosten van een persoonlijke lening omvatten het leenbedrag, de rente en de looptijd. Voordat u de lening definitief afsluit, ontvangt u een transparant overzicht van alle bijbehorende kosten, zodat u precies weet waar u aan toe bent.",
  },
];

const PersoonlijkeLening = () => {
  return (
    <div className="min-h-screen">
      <SeoHead 
        title="Persoonlijke lening aanvragen | Leen tot €50.000 voor jouw droom"
        description="Realiseer je plannen met een persoonlijke lening van Kredietlening. Leen tot €50.000 met vaste rente en looptijd. Eenvoudig aanvragen en snel geld op je rekening."
        schema={persoonlijkeLeningSchema}
      />
      <Navigation />
      <BreadcrumbNav pageTitle="Persoonlijke Lening" />
      
      <Hero
        title="Persoonlijke lening: Realiseer je dromen"
        subtitle="Leen eenvoudig en snel tussen de €1.500 en €50.000. Lagere rente dan een minilening en flexibel inzetbaar voor grote aankopen of verbouwingen."
        backgroundImage="/assets/verbouwingen.jpg"
        moreInfoLink="/minilening-zonder-bkr-aanvragen#providers"
      />

      <TrustBadges />

      <RecommendedProvider />

      <PersonalLoanKeyFeatures />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Over de persoonlijke lening</h2>
              <p className="text-lg text-muted-foreground">
              Een persoonlijke lening biedt de oplossing voor het financieren van persoonlijke doelen, zoals een droomreis, een nieuwe auto, boot, camper, caravan of een verbouwing. Je leent een vast bedrag tussen de €1.500 en €50.000, dat je volledig naar eigen inzicht kunt besteden.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Lange looptijd, lage maandlasten</h2>
              <p className="text-lg text-muted-foreground">
              De looptijd van een persoonlijke lening kan oplopen tot 10 jaar, wat zorgt voor een beheersbaar vast maandbedrag. Bijvoorbeeld, voor een lening van €7.500 voor een nieuwe keuken betaal je maandelijks slechts €95. Bovendien kan de rente voor leningen ten behoeve van een verbouwing of onderhoud fiscaal aftrekbaar zijn!
              </p>
            </div>
          </div>
        </div>
      </section>

      <DebtConsolidation />

      <PersonalLoanHowItWorks />

      <AboutSantander />

      <PersonalLoanCosts />

      <MoreAboutLoans />

      <OtherLoans currentPath="/persoonlijke-lening-voor-grote-uitgaven" />

      <FAQ items={persoonlijkeLeningSFAQ} />

      <Footer />
    </div>
  );
};

export default PersoonlijkeLening;