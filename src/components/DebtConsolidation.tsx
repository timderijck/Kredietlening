import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const DebtConsolidation = () => {
  return (
    <section className="py-16 md:py-24 gradient-cta">
      <div className="container mx-auto px-4 text-center text-accent-foreground">
          <h2 className="mb-4">Heb je al één of meerdere leningen?</h2>
          <p className="text-lg md:text-xl mb-8">
            Wanneer je regelmatig rood staat en elders (meerdere) leningen hebt lopen, is het moeilijk om overzicht te houden. 
            Sluit je leningen over naar Santander met de gratis aflosservice en betaal maandelijks één vast bedrag.
          </p>
        <Link to="/aanvragen">
          <Button variant="default" size="lg">Sluit over naar Santander!</Button>
        </Link>
      </div>
    </section>
  );
};
