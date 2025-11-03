import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";


export const DCRecommendedProvider = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="mb-4">Onze aanbeveling</h2>
        </div>
        <Card className="max-w-2xl mx-auto border-2 shadow-lg">
          <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-2xl font-semibold mb-2">Santander</h3>
              <img src="/assets/santander.webp" alt="Santander Logo" loading="lazy" className="h-8 mb-4 mx-auto block md:inline md:mx-0" />
              <p className="text-muted-foreground mb-2">Altijd geld achter de hand & eenvoudig aflossen.<br />Met de Santander Card!</p>
              <div className="flex items-center justify-center md:justify-start text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-5 w-5 fill-current`} />
                ))}
                <span className="ml-2 text-foreground">5/5</span>
              </div>
            </div>
            <Link to="/aanvragen">
              <Button variant="cta" size="lg">Aanvragen</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
