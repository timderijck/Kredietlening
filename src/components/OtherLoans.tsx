import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Euro, Home, Percent, RefreshCw, Wallet } from "lucide-react";

const allLoans = [
  {
    path: "/minilening-zonder-bkr-aanvragen",
    title: "Minilening",
    description: "Voor kleine, snelle uitgaven.",
    backgroundImage: "/assets/lenen-scaled.webp",
    features: [
      { icon: Zap, text: "Binnen 24 uur op je rekening" },
      { icon: Euro, text: "Bedragen van €100 tot €1.500" },
    ],
  },
  {
    path: "/persoonlijke-lening-voor-grote-uitgaven",
    title: "Persoonlijke Lening",
    description: "Voor grotere, geplande investeringen.",
    backgroundImage: "/assets/verbouwingen.jpg",
    features: [
      { icon: Home, text: "Voor grote projecten & verbouwingen" },
      { icon: Percent, text: "Vaste lage rente" },
    ],
  },
  {
    path: "/flexibel-doorlopend-krediet",
    title: "Doorlopend Krediet",
    description: "Een flexibele geldreserve.",
    backgroundImage: "/assets/doorlopend-krediet2.png",
    features: [
      { icon: RefreshCw, text: "Flexibel opnemen & aflossen" },
      { icon: Wallet, text: "Altijd geld achter de hand" },
    ],
  },
];

interface OtherLoansProps {
  currentPath: string;
}

export const OtherLoans = ({ currentPath }: OtherLoansProps) => {
  const otherLoans = allLoans.filter((loan) => loan.path !== currentPath);

  return (
    <section className="py-16 md:py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-foreground">Toch niet wat je zoekt?</h2>
          <p className="text-lg text-muted-foreground">
              Bekijk onze andere leenmogelijkheden.
            </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {otherLoans.map((loan) => (
            <Card key={loan.path} className="flex flex-col relative overflow-hidden group">
              {/* Background Image & Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${loan.backgroundImage})` }}
              ></div>
              <div className="absolute inset-0 bg-black/40" />

              {/* Content */}

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                <CardHeader>
                  <CardTitle className="text-white">{loan.title}</CardTitle>
                  <CardDescription className="text-white">{loan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {loan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <feature.icon className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 text-white" />
                        <span className="text-sm text-white">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="secondary">
                    <Link to={loan.path}>Meer informatie</Link>
                  </Button>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
