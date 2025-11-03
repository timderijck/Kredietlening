import { Card, CardContent } from "@/components/ui/card";


export const DCLowMonthlyPayment = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
                        <h2 className="mb-4">Laag maandbedrag</h2>            <Card className="p-6 mt-8">
                <CardContent className="p-0">
                  <p className="text-lg text-muted-foreground">
                    Een doorlopend krediet is al beschikbaar vanaf een klein bedrag per maand. Je betaalt alleen rente over het daadwerkelijk opgenomen bedrag. 
                    Bij Santander is een doorlopend krediet al mogelijk vanaf €23 per maand voor een krediet van €1.500. Dit krediet is te gebruiken in winkels, 
                    horeca, pinautomaten en tankstations, zowel nationaal als internationaal.
                  </p>
                </CardContent>
              </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
