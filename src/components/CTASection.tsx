import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import { Link } from "react-router-dom";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export const CTASection = ({
  title = "Klaar om te beginnen?",
  description = "Vraag nu eenvoudig je lening aan en ontvang binnen 24 uur het geld op je rekening.",
  buttonText = "Direct Aanvragen",
  buttonLink = "/aanvragen",
}: CTASectionProps) => {
  return (
    <section className="py-16 md:py-20 gradient-hero">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto text-primary-foreground">
          <h2 className="mb-4 text-primary-foreground">{title}</h2>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
            {description}
          </p>
          <Button variant="cta" size="lg" className="group" asChild>
            <Link to={buttonLink}>
              {buttonText}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
