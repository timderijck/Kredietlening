import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="text-left">
            <h3 className="text-2xl font-bold mb-4">Kredietlening</h3>
            <p className="text-primary-foreground/80 text-sm">
              Snel en betrouwbaar geld lenen sinds 2005. Uw financiële partner in onverwachte situaties.
            </p>
          </div>

          {/* Products */}
          <div className="text-center">
            <h4 className="font-semibold mb-4">Producten</h4>
            <ul className="space-y-2 text-sm">
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
          <div className="text-right">
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm justify-end">
              <li className="flex items-center gap-2 text-primary-foreground/80 justify-end">
                <Phone size={16} />
                <span>088 - 123 4567</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80 justify-end">
                <Mail size={16} />
                <span>info@kredietlening.nl</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="text-center text-sm text-primary-foreground/70">
            <p>© {currentYear} Kredietlening. Alle rechten voorbehouden.</p>
            <p className="mt-2">
              Let op: Geld lenen kost geld. Leen daarom nooit meer dan nodig en niet voor langere tijd dan noodzakelijk.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
