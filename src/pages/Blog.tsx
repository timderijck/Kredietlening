import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from "@/components/Hero";
import { TrustBadges } from "@/components/TrustBadges";
import { SeoHead } from "@/components/SeoHead";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";

const Blog = () => {
  return (
    <div className="min-h-screen">
      <SeoHead 
        title="Blog | Kredietlening.nl - Informatie en Tips over Lenen"
        description="Lees onze blog voor actuele informatie, handige tips en diepgaande artikelen over persoonlijke leningen, minileningen, doorlopend krediet en financiële planning."
      />
      <Navigation />
      <BreadcrumbNav pageTitle="Blog" />
            <Hero
                      title="Blog – Inspiratie & Tips"
                      subtitle="Welkom op het blog van Kredietlening! Hier delen we inzichten, inspiratie en praktische tips over financiën."              backgroundImage="/assets/blog.jpeg"
        backgroundClassName="bg-cover bg-top filter-none"
            />

            <section className="py-16 md:py-24">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto">
                  <h2 className="text-2xl font-semibold mb-4">Recente Artikelen</h2>
                  <ul>
                    <li className="mb-6 p-6 border rounded-lg shadow-md bg-card transition-shadow hover:shadow-lg">
                      <p className="text-sm text-muted-foreground mb-2">3 november 2025</p>
                      <Link to="/blog/5-slimme-manieren-om-geld-te-besparen-online" className="text-primary hover:underline text-xl font-medium leading-tight">
                        5 slimme manieren om geld te besparen online
                      </Link>
                      <p className="text-muted-foreground text-base mt-2">Online winkelen kan makkelijk uit de hand lopen. Daarom geven we je vijf tips om slimmer te shoppen. Denk aan cashbacksites, prijsvergelijkers, kortingscodes en meer. Zo houd je geld over voor wat écht belangrijk is.</p>
                    </li>
                    <li className="mb-6 p-6 border rounded-lg shadow-md bg-card transition-shadow hover:shadow-lg">
                      <p className="text-sm text-muted-foreground mb-2">25 oktober 2025</p>
                      <Link to="/blog/waarom-online-privacy-belangrijker-is-dan-ooit" className="text-primary hover:underline text-xl font-medium leading-tight">
                        Waarom online privacy belangrijker is dan ooit
                      </Link>
                      <p className="text-muted-foreground text-base mt-2">In een wereld vol datalekken en trackingcookies is het beschermen van je persoonlijke gegevens cruciaal. Leer hoe je je online gedrag beter kunt beveiligen en welke tools je daarbij helpen.</p>
                    </li>
                    <li className="mb-6 p-6 border rounded-lg shadow-md bg-card transition-shadow hover:shadow-lg">
                      <p className="text-sm text-muted-foreground mb-2">18 oktober 2025</p>
                      <Link to="/blog/de-toekomst-van-affiliate-marketing" className="text-primary hover:underline text-xl font-medium leading-tight">
                        De toekomst van affiliate marketing
                      </Link>
                      <p className="text-muted-foreground text-base mt-2">Affiliate marketing verandert snel. In dit artikel kijken we naar trends zoals AI, niche-content en transparante aanbevelingen. Zo blijf je voorop lopen in de online wereld.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>      <Footer />
    </div>
  );
};

export default Blog;
