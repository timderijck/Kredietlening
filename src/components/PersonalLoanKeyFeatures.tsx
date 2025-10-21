import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Euro, Lightbulb } from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    title: "Aanvragen in 3 stappen",
    description: "Een persoonlijke lening aanvragen is eenvoudig en gebeurt in slechts 3 stappen. Binnen 2 werkdagen kan het geld al op je rekening staan.",
  },
  {
    icon: Euro,
    title: "In 1 keer uitbetaald",
    description: "Een persoonlijke lening wordt in één keer uitbetaald. Jij bepaalt vervolgens wat je met het geld gaat doen.",
  },
  {
    icon: Lightbulb,
    title: "Maak je dromen waar",
    description: "Maak die droomreis, koop die droomauto of ga eindelijk die keuken eens verbouwen. Met een persoonlijke lening maak je dromen waar!",
  },
];

export const PersonalLoanKeyFeatures = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Belangrijkste kenmerken van een persoonlijke lening</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="inline-block p-4 rounded-full bg-primary/20 mb-4">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
