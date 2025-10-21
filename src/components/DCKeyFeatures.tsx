import { Card, CardContent } from "@/components/ui/card";
import { CreditCard, Euro, CheckCircle } from "lucide-react";

const features = [
  {
    icon: CreditCard,
    title: "De Santander Card",
    description: "Met de Santander Card pin en betaal je bij elke winkel, horecagelegenheid en tankstation in zowel binnen als buitenland. De Santander Card ontang je kosteloos.",
  },
  {
    icon: Euro,
    title: "Alleen betalen bij gebruik",
    description: "Je betaalt alleen rente wanneer je daadwerkelijk gebruik maakt van het krediet. Gebruik je het krediet niet? Dan betaal je enkel het lage maandbedrag.",
  },
  {
    icon: CheckCircle,
    title: "Boetevrij aflossen",
    description: "In tegenstelling tot vele andere leningsvormen is het bij een doorlopend krediet mogelijk om boetevrij af te lossen. Geen krediet? Dan betaal je geen rente meer.",
  },
];

export const DCKeyFeatures = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Belangrijkste kenmerken van een doorlopend krediet</h2>
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
