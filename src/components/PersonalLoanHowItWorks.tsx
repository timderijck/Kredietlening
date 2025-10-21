import { Check } from "lucide-react";

const howItWorksSteps = [
  "Kies het gewenste bedrag en looptijd",
  "Vul je persoonlijke gegevens in",
  "Overige gegevens invullen",
  "Je aanvraag is compleet",
  "Na akkoord ontvang je binnen 2 werkdagen het geld op je rekening!",
];

export const PersonalLoanHowItWorks = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Zo sluit je een persoonlijke lening af</h2>
        </div>
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
          {howItWorksSteps.map((step, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <Check className="h-5 w-5" />
              </div>
              <p className="text-lg">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
