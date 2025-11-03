import { Card, CardContent } from "@/components/ui/card";


export const MoreAboutLoans = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="mb-4">Meer over lenen</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Lenen via de bank</h3>
              <p className="text-muted-foreground mb-4">
                Banken zijn de grootste aanbieders van consumentenkrediet en bieden diverse mogelijkheden voor een persoonlijke lening. 
                Je leent eenmalig een gewenst bedrag dat in één keer wordt uitbetaald. De maximale kredietlimiet wordt bepaald op basis van je netto inkomen en 
                levensonderhoudskosten. Banken voeren meestal een BKR-toetsing uit om lopende kredieten of betalingsachterstanden te controleren.
              </p>
              <p className="text-muted-foreground mb-4">
                Terugbetaling geschiedt maandelijks in termijnen, bestaande uit aflossing en rente. Looptijd en termijnbedrag staan doorgaans vast, 
                en de rente blijft ongewijzigd gedurende de looptijd. Dit biedt zekerheid en voorkomt verrassingen. Vaak is er ook een dekking tegen 
                overlijdensrisico ingebouwd, waarbij de schuld wordt kwijtgescholden bij overlijden van de kredietnemer.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Lenen via postorderbedrijven of creditcardorganisaties</h3>
              <p className="text-muted-foreground mb-4">
                Naast banken zijn er andere manieren om aankopen te doen zonder direct contant geld, zoals via postorderbedrijven (bijv. Wehkamp, Neckermann, Otto) 
                waar je op afbetaling kunt kopen. Hier betaal je de rekening later in termijnen terug, vergelijkbaar met een banklening, maar vaak tegen een hogere rente.
              </p>
              <p className="text-muted-foreground">
                Creditcards bieden ook de mogelijkheid om aankopen te doen zonder directe betaling, zowel online als in winkels. Creditcards hebben meestal een limiet 
                (bijv. €2.500). Het volledige bedrag of een deel ervan wordt binnen enkele weken automatisch afgelost. De rente op creditcards is vaak aanzienlijk hoger 
                dan die van een reguliere banklening. Voor grote aankopen zoals een auto of caravan is een persoonlijke lening via de bank daarom voordeliger. 
                Bij gebruik van een creditcard word je ook geregistreerd bij het BKR, aangezien je op afbetaling koopt.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
