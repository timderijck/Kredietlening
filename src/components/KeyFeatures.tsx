import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Binnen 24u op je rekening",
    description: "Na akkoord ontvang je het geld binnen 24 uur op je rekening. In sommig gevallen is dit zelfs binnen 1 uur al mogelijk.",
  },
  {
    icon: Shield,
    title: "Geen BKR toetsing",
    description: "Voor een minilening is een BKR toetsing niet nodig. Dus ook wanneer je een negatieve BKR registratie hebt is een minilening mogelijk.",
  },
  {
    icon: CheckCircle,
    title: "Binnen 5 minuten geregeld",
    description: "Een minilening aanvragen is binnen 5 minuten geregeld. Een loonstrook is zelfs niet eens nodig tijdens de aanvraag.",
  },
];

export const KeyFeatures = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Belangrijkste kenmerken</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="inline-block p-4 rounded-full bg-secondary/20 mb-4">
                <feature.icon className="h-8 w-8 text-secondary" />
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
