import { FileText, CheckCircle, CreditCard, Banknote } from "lucide-react";

interface Step {
  icon: any;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: FileText,
    title: "Aanvragen",
    description: "Vul het online formulier in binnen 5 minuten. Geen papierwerk nodig.",
  },
  {
    icon: CheckCircle,
    title: "Beoordeling",
    description: "We beoordelen je aanvraag en geven snel uitsluitsel over de goedkeuring.",
  },
  {
    icon: Banknote,
    title: "Uitbetaling",
    description: "Na goedkeuring wordt het geld binnen 24 uur op je rekening gestort.",
  },
  {
    icon: CreditCard,
    title: "Terugbetalen",
    description: "Flexibele aflossing volgens jouw gekozen schema via automatische incasso.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Zo werkt het</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            In vier eenvoudige stappen naar je geld
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-primary/30" />
                )}

                {/* Step Number */}
                <div className="relative inline-block mb-4">
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <div className="w-20 h-20 rounded-full gradient-hero flex items-center justify-center mx-auto">
                    <Icon className="h-10 w-10 text-primary-foreground" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
