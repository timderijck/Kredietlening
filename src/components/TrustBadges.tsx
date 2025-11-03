import { Shield, Clock, Users, Star } from "lucide-react";

export const TrustBadges = () => {
  const badges = [
    {
      icon: Users,
      stat: "10.000+",
      label: "Tevreden klanten sinds 2005",
    },
    {
      icon: Star,
      stat: "4.8/5",
      label: "Gemiddelde beoordeling",
    },
    {
      icon: Clock,
      stat: "24 uur",
      label: "Geld op je rekening",
    },
    {
      icon: Shield,
      stat: "100%",
      label: "Veilig & Betrouwbaar",
    },
  ];

  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                className="flex flex-col items-center text-center animate-scale-in"
              >
                <div className="mb-3 p-3 rounded-full bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {badge.stat}
                </div>
                <div className="text-sm text-muted-foreground">
                  {badge.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
