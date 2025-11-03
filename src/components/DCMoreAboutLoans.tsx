import { Card, CardContent } from "@/components/ui/card";


export const DCMoreAboutLoans = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="mb-4">Meer over doorlopend krediet</h2>
        </div>
        <div className="grid md:grid-cols-1 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Wat is een doorlopend krediet precies?</h3>
              <p className="text-muted-foreground mb-4">
                Vooraf spreek je een kredietlimiet af waarover je een vast percentage per maand betaalt aan rente én aan aflossing. 
                De rente is gedurende de looptijd variabel. De meest gangbare rentepercentages zijn een, anderhalf of twee procent, 
                maar het exacte percentage is uiteraard allereerst afhankelijk van de actuele marktrente. Variabel betekent dus 
                dat de rente door de desbetreffende bank waar je de lening hebt lopen, kan worden gewijzigd.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Registratie bij het BKR</h3>
              <p className="text-muted-foreground mb-4">
                Het afgesproken maximaal te lenen bedrag wordt genoteerd bij het BKR. Ook al los je tussendoor wat af en is het 
                openstaande saldo ondertussen lager dan het geleende bedrag, dan wordt de registratie bij het BKR niet aangepast. 
                Ook toekomstige opnames uit het vrije gedeelte van het doorlopend krediet zullen niet als lenen terug te zien zijn. 
                Dit is wel even een punt waar je natuurlijk rekening mee moet houden, vooral indien je al vrij veel hebt afgelost en 
                je ook nog ergens anders een tweede lening wilt afsluiten.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Voordelen en nadelen van een doorlopend krediet</h3>
              <p className="text-muted-foreground mb-4">
                Een doorlopend krediet is een flexibele lening met een relatief lage rente. Je kunt op elk moment aflossen of opnemen 
                binnen je kredietlimiet, en betaalt alleen rente over het openstaande saldo. Boetevrij aflossen is ook mogelijk. 
                Echter, doordat afgeloste bedragen opnieuw opneembaar zijn en het maandelijkse aflossingsbedrag laag is, kan het 
                lastig zijn om de werkelijke looptijd te bepalen en kan het verleidelijk zijn om onnodig geld te lenen. 
                Ook kan het limiet soms ongemerkt verhoogd worden, wat kan leiden tot meer schulden. 
                Desondanks kan een doorlopend krediet een goede oplossing zijn voor wie zijn financiën goed kan beheren.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
