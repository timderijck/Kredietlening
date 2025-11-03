import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  ctaButtons?: {
    text: string;
    link: string;
    variant?: "cta" | "outline";
    className?: string;
  backgroundClassName?: string;
  }[];
}

export const Hero = ({ title, subtitle, backgroundImage, ctaButtons, backgroundClassName }: HeroProps) => {
  return (
    <section
      className="relative min-h-[700px] md:min-h-[800px] flex items-center justify-center"
    >
      {/* Background Image with Blur */}
      <div
        className={cn("absolute inset-0 bg-cover bg-center bg-fixed filter blur-md", backgroundClassName)}
        style={{ backgroundImage: `url(${backgroundImage || '/assets/hero-bg.jpg'})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground animate-fade-in">
          <h1 className="mb-6 leading-tight text-primary"> 
              {title}
            </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          {ctaButtons && ctaButtons.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {ctaButtons.map((button, index) => (
                <Button key={index} variant={button.variant || 'cta'} size="lg" className={cn("group", button.className)} asChild>
                  <Link to={button.link}>
                    {button.text}
                    {button.variant !== 'outline' && <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />}
                  </Link>
                </Button>
              ))
              }
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
