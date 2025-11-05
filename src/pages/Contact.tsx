import React from 'react';
import { Hero } from "@/components/Hero";
import { TrustBadges } from "@/components/TrustBadges";
import { SeoHead } from "@/components/SeoHead";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <SeoHead 
        title="Contact | Finlening.nl - Neem Contact Op"
        description="Heeft u vragen over leningen of onze vergelijkingsdienst? Neem contact op met Finlening.nl via telefoon, e-mail of ons contactformulier."
      />
      <Navigation />
      <BreadcrumbNav pageTitle="Contact" />
      <Hero 
        title="Neem contact op"
        subtitle="We staan altijd klaar om je te helpen of je vragen te beantwoorden."
        backgroundImage="/assets/contact.jpg"
        backgroundClassName="bg-cover bg-center filter-none"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-8 text-center">Neem contact op</h1>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Contactgegevens</h2>
                    <div className="bg-card p-6 rounded-lg shadow-md mb-6">
                        <p className="mb-1">📧 E-mail: info@finlening.nl</p>
                        <p className="mb-1">📍 Adres: Voorbeeldstraat 123, 1234 AB Voorbeeldstad</p>
                        <p className="mb-1">📞 Telefoon: 088 - 123 4567</p>
                    </div>
                    <p>Wij streven ernaar om binnen 24 uur te reageren op je bericht.</p>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Stuur ons een bericht</h2>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-foreground">Naam</label>
                            <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-foreground">E-mailadres</label>
                            <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-foreground">Onderwerp</label>
                            <input type="text" id="subject" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-foreground">Bericht</label>
                            <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"></textarea>
                        </div>
                        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">Verstuur</button>
                    </form>
                </div>
            </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
