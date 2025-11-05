import React from 'react';
import { Hero } from "@/components/Hero";
import { TrustBadges } from "@/components/TrustBadges";
import { SeoHead } from "@/components/SeoHead";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";

const OverOns = () => {
  return (
    <div className="min-h-screen">
      <SeoHead 
        title="Over Ons | Finlening.nl - Uw Onafhankelijke Vergelijkingsplatform"
        description="Leer meer over Finlening.nl, uw betrouwbare partner voor het vergelijken van leningen. Wij zijn onafhankelijk en helpen u de beste lening te vinden."
      />
      <Navigation />
      <BreadcrumbNav pageTitle="Over Ons" />
      <Hero 
        title="Over ons – Finlening"
        subtitle="Bij Finlening geloven we in transparantie, kwaliteit en betrouwbaarheid."
        backgroundImage="/assets/hero-bg.jpg"
      />

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-8 text-center">Over ons – Finlening</h1>
            <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Onze Missie</h2>
                    <p className="mb-4">Wat begon als een klein initiatief, groeide uit tot een platform waar bezoekers eerlijke informatie, betrouwbare producten en handige tips vinden.</p>
                    <p className="mb-4">Onze missie is eenvoudig: het online leven makkelijker maken door middel van duidelijke uitleg, slimme aanbevelingen en zorgvuldig geselecteerde samenwerkingen.</p>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Onze Waarden</h2>
                    <p className="mb-4">Wij werken samen met betrouwbare partners en testen waar mogelijk producten zelf. Zo weet jij zeker dat onze adviezen gebaseerd zijn op kwaliteit, ervaring en klanttevredenheid.</p>
                    <p className="mb-4">Heb je vragen of suggesties? We horen graag van je!</p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Betrouwbaarheid</li>
                        <li>Transparantie</li>
                        <li>Deskundigheid</li>
                        <li>Toegankelijkheid</li>
                    </ul>
                </div>
            </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default OverOns;
