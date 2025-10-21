import { Card, CardContent } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const pros = [
  "Snel geld lenen met een minilening",
  "Geen papierwerk",
  "Korte looptijd",
  "Geen BKR toetsing",
  "Geen leendoel nodig",
];

const cons = [
  "Hogere rente dan andere leningvormen",
  "Garantsteller vereist",
];

export const ProsAndCons = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Voor- en nadelen van een minilening</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
<Card className="border-green-500 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">De voordelen van een minilening</h3>
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
              <h3 className="text-xl font-semibold mb-4">De nadelen van een minilening</h3>
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
