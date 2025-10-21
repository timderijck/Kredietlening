import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { TrustBadges } from "@/components/TrustBadges";
import { BenefitCards } from "@/components/BenefitCards";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { RefreshCw, CreditCard, Zap, PiggyBank } from "lucide-react";
import { DCRecommendedProvider } from "@/components/DCRecommendedProvider";
import { DCKeyFeatures } from "@/components/DCKeyFeatures";
import { DCLowMonthlyPayment } from "@/components/DCLowMonthlyPayment";
import { DCProsAndCons } from "@/components/DCProsAndCons";
import { DCUsage } from "@/components/DCUsage";
import { DCHowItWorks } from "@/components/DCHowItWorks";
import { DCMoreAboutLoans } from "@/components/DCMoreAboutLoans";
import { SeoHead } from "@/components/SeoHead";
import { OtherLoans } from "@/components/OtherLoans";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";

const doorlopendKredietSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialProduct",
  "name": "Doorlopend krediet",
  "description": "Ervaar de vrijheid van een doorlopend krediet. Betaal een laag maandbedrag en alleen rente over het opgenomen bedrag. Beschikbaar van €1.500 tot €10.000.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "EUR",
    "priceSpecification": {
      "@type": "QuantitativeValue",
      "minValue": 1500,
      "maxValue": 10000
    }
  },
  "provider": {
    "@type": "Organization",
    "name": "Kredietlening"
  }
};

const doorlopendKredietBenefits = [
  {
    icon: RefreshCw,
    title: "Altijd beschikbaar",
    description: "Gebruik je krediet wanneer je het nodig hebt. Het geld staat altijd voor je klaar.",
  },
  {
    icon: CreditCard,
    title: "Flexibel opnemen",
    description: "Neem meerdere keren op tot je kredietlimiet, zonder telkens opnieuw aan te vragen.",
  },
  {
    icon: Zap,
    title: "Direct beschikbaar",
    description: "Na goedkeuring kun je direct gebruik maken van je krediet, 24/7.",
  },
];

const doorlopendKredietFAQ = [
  {
    question: "Wat is een doorlopend krediet en hoe werkt het?",
    answer: "Een doorlopend krediet biedt maximale vrijheid. U kiest een maximaal te lenen bedrag en kunt vervolgens naar behoefte geld opnemen en aflossen. Het mooie is dat afgeloste bedragen weer beschikbaar komen voor opname, en extra aflossen is altijd boetevrij. Dit maakt het een zeer flexibele leenvorm voor diverse financiële behoeften.",
  },
  {
    question: "Betaal ik rente over een doorlopend krediet als ik het niet gebruik?",
    answer: "Nee, u betaalt alleen rente over het bedrag dat u daadwerkelijk heeft opgenomen. Maakt u geen gebruik van het krediet, dan betaalt u enkel een laag basisbedrag per maand. De hoogte hiervan is afhankelijk van uw maximale kredietlimiet. Bijvoorbeeld, voor een krediet van €1.500 bedraagt het maandbedrag slechts €23.",
  },
  {
    question: "Waar kan ik de Santander Card gebruiken voor mijn doorlopend krediet?",
    answer: "De Santander Card, die u kosteloos ontvangt bij uw doorlopend krediet, is te gebruiken in alle SEPA-landen. Dit omvat een groot deel van Europa, waaronder Nederland, België, Duitsland, Frankrijk, Spanje en vele andere. U kunt de kaart zowel bij betaalautomaten in winkels en horeca als bij pinautomaten gebruiken om contant geld op te nemen.",
  },
  {
    question: "Wat is de maximale looptijd van een doorlopend krediet?",
    answer: "De looptijd van een doorlopend krediet kan oplopen tot wel 8 jaar. De exacte looptijd wordt vooraf duidelijk gecommuniceerd bij het afsluiten van het krediet, zodat u precies weet waar u aan toe bent.",
  },
  {
    question: "Is het mogelijk om een doorlopend krediet eerder boetevrij af te lossen?",
    answer: "Absoluut. Een groot voordeel van een doorlopend krediet is de mogelijkheid om tussentijds boetevrij af te lossen. Het bedrag dat u aflost, wordt direct weer toegevoegd aan uw beschikbare kredietruimte, waardoor u het later opnieuw kunt opnemen indien nodig, tot aan uw kredietplafond.",
  },
];

const DoorlopendKrediet = () => {
  return (
    <div className="min-h-screen">
      <SeoHead 
        title="Doorlopend krediet aanvragen | Flexibel geld lenen tot €10.000"
        description="Ervaar de vrijheid van een doorlopend krediet bij Kredietlening. Leen tot €10.000, betaal alleen rente over opgenomen bedrag. Flexibel opnemen en boetevrij aflossen."
        schema={doorlopendKredietSchema}
      />
      <Navigation />
      <BreadcrumbNav pageTitle="Doorlopend Krediet" />
      
      <Hero
        title="Doorlopend krediet: Flexibiliteit in geldzaken"
        subtitle="Ervaar de vrijheid van een doorlopend krediet. Betaal een laag maandbedrag en alleen rente over het opgenomen bedrag. Beschikbaar van €1.500 tot €10.000."
        backgroundImage="/assets/doorlopend-krediet2.png"
        moreInfoLink="/minilening-zonder-bkr-aanvragen#providers"
      />

      <TrustBadges />

      <DCRecommendedProvider />

      <DCKeyFeatures />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Over het doorlopend krediet</h2>
              <p className="text-lg text-muted-foreground">
              Wanneer je vaker denkt geld nodig te hebben kan een doorlopend krediet uitkomst bieden. Maandelijks betaal je een klein bedrag voor de beschikbare service. Je ontangt de Santander Card thuis waarmee je zowel kunt betalen in winkels als contant geld op kunt nemen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <DCLowMonthlyPayment />

      <DCProsAndCons />

      <DCUsage />

      <DCHowItWorks />

      <DCMoreAboutLoans />

      <OtherLoans currentPath="/flexibel-doorlopend-krediet" />

      <FAQ items={doorlopendKredietFAQ} />

      <Footer />
    </div>
  );
};

export default DoorlopendKrediet;