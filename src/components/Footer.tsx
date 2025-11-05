import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="md:text-left text-center">
              <h3 className="text-2xl font-bold mb-4">Finlening</h3>
              <p className="text-primary-foreground/80 text-sm">
                Snel en betrouwbaar geld lenen sinds 2005. Uw financiële partner in onverwachte situaties.
              </p>
            </div>

            {/* Products */}
            <div className="md:text-center text-center">
              <h4 className="font-semibold mb-4">Producten</h4>
              <ul className="flex flex-wrap justify-center gap-x-4 text-sm md:flex-col md:space-y-2">
                <li>
                  <Link to="/minilening" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Minilening
                  </Link>
                </li>
                <li>
                  <Link to="/persoonlijke-lening" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Persoonlijke Lening
                  </Link>
                </li>
                <li>
                  <Link to="/doorlopend-krediet" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Doorlopend Krediet
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="md:text-right text-center">
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="flex flex-wrap justify-center gap-x-4 text-sm md:flex-col md:space-y-3 md:justify-end">
                <li className="flex items-center gap-2 text-primary-foreground/80 justify-center md:justify-end">
                  <Phone size={16} />
                  <span>088 - 123 4567</span>
                </li>
                <li className="flex items-center gap-2 text-primary-foreground/80 justify-center md:justify-end">
                  <Mail size={16} />
                  <span>info@finlening.nl</span>
                </li>
              </ul>
            </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="text-center text-sm text-primary-foreground/70">
            <p>© {currentYear} Finlening. Alle rechten voorbehouden.</p>
            <p className="mt-2">
              Let op: Geld lenen kost geld. Leen daarom nooit meer dan nodig en niet voor langere tijd dan noodzakelijk.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
