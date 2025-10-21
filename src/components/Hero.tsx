import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
  moreInfoLink?: string;
  hideMoreInfoButton?: boolean;
}

export const Hero = ({ title, subtitle, ctaText = "Direct Aanvragen", ctaLink = "/aanvragen", backgroundImage, moreInfoLink, hideMoreInfoButton }: HeroProps) => {
  return (
    <section 
      className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${backgroundImage || '/assets/hero-bg.jpg'})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/80" />
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground animate-fade-in">
          <h1 className="mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="cta" size="lg" className="group" asChild>
              <Link to={ctaLink}>
                {ctaText}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            {!hideMoreInfoButton && (
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to={moreInfoLink || "#"}>
                  Meer informatie
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
