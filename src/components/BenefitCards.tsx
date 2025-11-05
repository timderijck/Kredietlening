import { CheckCircle, Clock, FileText, Shield, Zap, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Benefit {
  icon: any;
  title: string;
  description: string;
}

interface BenefitCardsProps {
  benefits?: Benefit[];
}

const defaultBenefits: Benefit[] = [
  {
    icon: FileText,
    title: "Geen loonstrook nodig",
    description: "Aanvragen zonder loonstrook of jaarrekening. Eenvoudig en snel proces.",
  },
  {
    icon: Clock,
    title: "Uitbetaling binnen 24 uur",
    description: "Na goedkeuring krijg je het geld binnen één werkdag op je rekening.",
  },
  {
    icon: Shield,
    title: "Ook met BKR registratie",
    description: "Wij beoordelen elke aanvraag individueel. Ook met BKR is aanvragen mogelijk.",
  },
];

export const BenefitCards = ({ benefits = defaultBenefits }: BenefitCardsProps) => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Waarom Finlening?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Snel, simpel en betrouwbaar. Ontdek de voordelen van lenen bij Finlening.
            </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="border-2 hover:border-primary/50 hover:shadow-medium transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4 inline-block p-4 rounded-lg gradient-success">
                    <Icon className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <h3 className="mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
