import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const providers = [
  {
    name: "Saldodipje",
    logo: "/assets/saldodipje.png",
    rating: 4,
    deliveryTime: 24,
  },
  {
    name: "Ferratum",
    logo: "/assets/Ferratum-logo-UK-.jpg",
    rating: 4,
    deliveryTime: 24,
  },
];

export const Providers = () => {
  return (
    <section id="providers" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Minilening aanbieders</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {providers.map((provider) => (
            <Card key={provider.name} className="flex flex-col">
              <CardContent className="p-6 flex flex-col items-center text-center h-full justify-start">
                <img src={provider.logo} alt={provider.name} loading="lazy" className={`mb-4 py-8 ${provider.name === 'Saldodipje' ? 'h-40' : 'h-32'}`} />
                <div className="flex flex-col items-center flex-grow justify-end">
                  <div className="flex items-center text-yellow-500 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-5 w-5 ${i < provider.rating ? 'fill-current' : ''}`} />
                    ))}
                    <span className="ml-2 text-foreground">{provider.rating}/5</span>
                  </div>
                  <p className="text-muted-foreground mb-4">Binnen {provider.deliveryTime} uur op je rekening</p>
                  <Button asChild><Link to="/minilening-zonder-bkr-aanvragen">Aanvragen</Link></Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
