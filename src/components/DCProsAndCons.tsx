import { Card, CardContent } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const pros = [
  "Flexibel krediet",
  "Laag basis bedrag per maand",
  "Afgelost bedrag opnieuw opneembaar",
  "Rente alleen over opgenomen bedrag",
  "Geen leendoel nodig",
  "Geen garantsteller nodig",
  "Persoonlijk contact",
  "De Santander Card",
  "Boetevrij aflossen",
];

const cons = [
  "Variabele rente",
  "Verleiding tot onnodig lenen",
];

export const DCProsAndCons = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Voor- en nadelen van een doorlopend krediet</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-green-500 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">De voordelen van een doorlopend krediet</h3>
              <ul className="space-y-2">
                {pros.map((pro) => (
                  <li key={pro} className="flex items-center gap-2">
                    <Check className="h-6 w-6 text-green-500" />
                    <span className="font-bold text-green-700">{pro}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="border-red-500 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">De nadelen van een doorlopend krediet</h3>
              <ul className="space-y-2">
                {cons.map((con) => (
                  <li key={con} className="flex items-center gap-2">
                    <X className="h-6 w-6 text-red-500" />
                    <span className="font-bold text-red-700">{con}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
