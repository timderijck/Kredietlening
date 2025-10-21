import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

export const AboutSantander = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-4">Over Santander</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Santander is een wereldwijde financiële gigant met meer dan 125 miljoen klanten. 
            Ze zijn ook bekend als sponsor van de Formule 1.
          </p>
          <Card className="inline-block p-6 border-2 shadow-lg">
            <CardContent className="p-0 flex items-center gap-4">
              <Users className="h-10 w-10 text-primary" />
              <div>
                <p className="text-4xl font-bold text-primary">125+</p>
                <p className="text-muted-foreground">Miljoen klanten wereldwijd</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
