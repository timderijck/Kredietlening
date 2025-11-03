import React from 'react';
import { Hero } from "@/components/Hero";
import { TrustBadges } from "@/components/TrustBadges";
import { SeoHead } from "@/components/SeoHead";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <SeoHead 
        title="Privacy & Cookiebeleid - Kredietlening.nl"
        description="Lees het privacy- en cookiebeleid van Kredietlening.nl en onze affiliate disclaimer. Wij hechten veel waarde aan uw privacy."
      />
      <Navigation />
      <BreadcrumbNav pageTitle="Privacy & Cookies" />
      <Hero 
        title="Privacy- en cookiebeleid"
        subtitle="Wij hechten veel waarde aan de bescherming van jouw persoonsgegevens."
        backgroundImage="/assets/privacy.png"
        backgroundClassName="bg-cover bg-center filter-none"
      />

                        <section className="py-16 md:py-24 bg-gray-50">

                          <div className="container mx-auto px-4">

                            <div className="max-w-prose mx-auto">

                              <h1 className="text-3xl font-bold mb-4">Privacy- en cookiebeleid</h1>

                              <p className="mb-4">Wij hechten veel waarde aan de bescherming van jouw persoonsgegevens. Kredietlening verwerkt jouw gegevens uitsluitend om onze diensten te verbeteren en contact te onderhouden.</p>

                              <p className="mb-4">Je gegevens worden nooit verkocht aan derden.</p>

                  

                              <h2 className="text-2xl font-semibold mt-8 mb-2">Cookies</h2>

                              <p className="mb-4">Wij gebruiken cookies om jouw ervaring te verbeteren, statistieken bij te houden en inhoud te personaliseren.</p>

                              <p className="mb-4">Door onze website te gebruiken, stem je in met het gebruik van cookies.</p>

                              <p className="mb-4">Je kunt cookies uitschakelen via je browserinstellingen.</p>

                  

                              <h2 className="text-2xl font-semibold mt-8 mb-2">Affiliate Disclaimer</h2>

                              <p className="mb-4">Sommige links op onze website zijn zogenaamde ‘affiliate links’. Dit betekent dat we een kleine commissie kunnen ontvangen wanneer jij via zo’n link een aankoop doet – zonder extra kosten voor jou.</p>

                              <p className="mb-4">Dit helpt ons de website te onderhouden en gratis content te blijven aanbieden.</p>

                              <p className="mb-4">We bevelen alleen producten of diensten aan waar we zelf achter staan.</p>

                            </div>

                          </div>

                        </section>                    <Footer />
                  </div>
  );
};

export default Privacy;
