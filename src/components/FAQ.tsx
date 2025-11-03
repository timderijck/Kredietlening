import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items?: FAQItem[];
}

const defaultFAQItems: FAQItem[] = [
  {
    question: "Kan ik meerdere leningen tegelijk hebben?",
    answer: "Het is mogelijk om meerdere leningen te hebben, maar dit hangt af van je financiële situatie en de totale leenbedragen. Wij beoordelen elke aanvraag individueel om te zorgen dat je de leningen kunt terugbetalen.",
  },
  {
    question: "Hoe snel krijg ik het geld?",
    answer: "Na goedkeuring van je aanvraag wordt het geld binnen 24 uur op je rekening gestort. In veel gevallen gebeurt dit zelfs sneller.",
  },
  {
    question: "Kan ik lenen met een BKR registratie?",
    answer: "Ja, een BKR registratie is geen automatische afwijzing. Wij kijken naar je totale financiële situatie en beoordelen elke aanvraag individueel.",
  },
  {
    question: "Wat zijn de voorwaarden?",
    answer: "Je moet minimaal 21 jaar oud zijn, een Nederlands bankrekeningnummer hebben, en over een geldig legitimatiebewijs beschikken. Daarnaast moet je aantoonbaar inkomen hebben.",
  },
  {
    question: "Hoe betaal ik de lening terug?",
    answer: "De terugbetaling gebeurt automatisch via een doorlopende machtiging. Je kunt zelf bepalen of je maandelijks, per twee weken, of wekelijks wilt aflossen.",
  },
  {
    question: "Kan ik vervroegd aflossen?",
    answer: "Ja, vervroegd aflossen is altijd mogelijk zonder extra kosten. Je betaalt alleen rente over de periode dat je het geld daadwerkelijk geleend hebt.",
  },
  {
    question: "Is mijn aanvraag veilig?",
    answer: "Absoluut. Al je gegevens worden beveiligd verstuurd en opgeslagen volgens de hoogste veiligheidsnormen. We gaan zorgvuldig om met je privacy.",
  },
  {
    question: "Wat als ik niet kan aflossen?",
    answer: "Neem direct contact met ons op als je problemen voorziet met de aflossing. We denken graag met je mee over een oplossing, zoals een tijdelijke betalingspauze of aanpassing van het aflossingsschema.",
  },
];

export const FAQ = ({ items = defaultFAQItems }: FAQProps) => {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Veelgestelde vragen</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Vind antwoord op de meest gestelde vragen over onze leningen
            </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background border rounded-lg px-6 shadow-soft"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-semibold">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
