import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { TrustBadges } from "@/components/TrustBadges";
import { Providers } from "@/components/Providers";
import { KeyFeatures } from "@/components/KeyFeatures";
import { ProsAndCons } from "@/components/ProsAndCons";
import { Usage } from "@/components/Usage";
import { FAQ } from "@/components/FAQ";
import { Card, CardContent } from "@/components/ui/card";
import { TrustAndReview } from "@/components/TrustAndReview";
import { MinileningCosts } from "@/components/MinileningCosts";
import { SeoHead } from "@/components/SeoHead";
import { OtherLoans } from "@/components/OtherLoans";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";

const minileningSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialProduct",
  "name": "Minilening zonder BKR toetsing",
  "description": "Snel geld lenen tot €1.500 zonder BKR toetsing. Direct goedgekeurd en binnen 24 uur op je rekening.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "EUR",
    "priceSpecification": {
      "@type": "QuantitativeValue",
      "minValue": 100,
      "maxValue": 1500
    }
  },
  "provider": {
    "@type": "Organization",
    "name": "Kredietlening"
  }
};

const minileningFAQ = [
  {
    question: "Wie komt in aanmerking voor een minilening zonder BKR toetsing?",
    answer: "Een minilening is beschikbaar voor personen van minimaal 21 jaar, ingeschreven in Nederland, met een geldig identiteitsbewijs (ID-kaart, rijbewijs of paspoort). Een garantsteller, die zowel een bekende als een externe partij kan zijn, is vereist voor de aanvraag van deze snelle lening.",
  },
  {
    question: "Kan ik een minilening aanvragen met een negatieve BKR registratie?",
    answer: "Ja, een negatieve BKR registratie vormt geen belemmering voor het aanvragen van een minilening. Deze lening is specifiek ontworpen voor snelle financiële oplossingen, ook als u elders geregistreerd staat.",
  },
  {
    question: "Hoe snel wordt het geld van een minilening uitbetaald?",
    answer: "Na goedkeuring van uw aanvraag wordt het geleende bedrag binnen 24 uur op uw rekening gestort. Dit maakt de minilening een ideale spoedlening voor directe financiële behoeften.",
  },
  {
    question: "Wat zijn de flexibele looptijden van een minilening?",
    answer: "De looptijd van een minilening varieert tussen 15 en 62 dagen, afhankelijk van het geleende bedrag. U kiest zelf de termijn die het beste bij uw terugbetaalcapaciteit past.",
  },
  {
    question: "Hoe kan ik een minilening eenvoudig en snel terugbetalen?",
    answer: "Het terugbetalen van uw minilening is eenvoudig en veilig geregeld via iDeal. Dit zorgt voor een snelle en probleemloze afhandeling van uw lening.",
  },
  {
    question: "Wat zijn de totale kosten van een minilening?",
    answer: "De totale kosten van een minilening zijn afhankelijk van het specifieke leenbedrag en de gekozen looptijd. Voor een gedetailleerd overzicht van alle kosten, inclusief rente en eventuele toeslagen, verwijzen wij u naar de kostenoverzichtstabel op deze pagina.",
  },
];

const Minilening = () => {
  return (
    <div className="min-h-screen">
      <SeoHead 
        title="Minilening aanvragen | Snel €100 - €1.500 lenen zonder BKR"
        description="Snel geld nodig? Vraag een minilening aan bij Kredietlening. Leen €100-€1.500 zonder BKR toetsing. Binnen 24 uur geld op je rekening. Ook met negatieve BKR registratie."
        schema={minileningSchema}
      />
      <Navigation />
      <BreadcrumbNav pageTitle="Minilening" />
      <Hero 
        title="Minilening: Snel en eenvoudig tot €1.500 lenen"
        subtitle="De minilening is dé lening voor bedragen vanaf 100 tot 1.500 euro. Het volledige geleende bedrag krijg je in 1 keer op je rekening gestort. Jij bepaalt vervolgens waar je de ontvangen lening voor gaat gebruiken. Een nieuwe Macbook, een vakantie, een wasmachine of misschien wel een nieuwe fiets, de keuze is aan jou!"
        backgroundImage="/assets/lenen-scaled.webp"
        hideMoreInfoButton={true}
      />
      <TrustBadges />
      <Providers />
      <KeyFeatures />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Over de minilening</h2>
              <p className="text-lg text-muted-foreground">
              Met spoed een klein bedrag lenen? Dan kan een minilening de oplossing. De minilening wordt ook wel flitskrediet of microkrediet genoemd. In Nederland zijn er diverse aanbieders van een minilening. De meest bekende aanbieders zijn Ferratum en Saldodipje. De werkwijze en voorwaarden van deze aanbieders zijn identiek. Zo werken beide aanbieders met een looptijd van 30, 45 of 62 dagen. Deze looptijd is afhankelijk van het geleende bedrag. Het terugbetalen van het geleende bedrag gaat eenvoudig en snel via iDeal.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Geen BKR toetsing</h2>
              <p className="text-lg text-muted-foreground">
              De minileningen van Ferratum en Saldodipje zijn een van de weinige leningen waar geld lenen zonder BKR toetsing mogelijk is. Met andere woorden: ook met een negatieve BKR registratie is het mogelijk om een minilening te verkrijgen. Dit is mogelijk doordat deze aanbieders geen BKR check uitvoeren.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ProsAndCons />
      <Usage />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <p className="text-lg text-muted-foreground italic">"Vanwege mijn scheiding had ik op dat moment niet het geld om met mijn nieuwe partner op vakantie te gaan. Dankzij een minilening via Ferratum kon ik toch genieten van een heerlijke vakantie. Top!!!"</p>
                <p className="text-right font-semibold mt-4">- Anna de Jonghe</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <TrustAndReview />
      <MinileningCosts />
      <OtherLoans currentPath="/minilening-zonder-bkr-aanvragen" />
      <FAQ items={minileningFAQ} />
      <Footer />
    </div>
  );
};

export default Minilening;