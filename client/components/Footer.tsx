import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sage-900 text-sage-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold mb-4">
              <img src="/logo.png" className="w-10" alt="" />
              {/* <span className="text-3xl">🍬</span> */}
              <span>GOMONOVIA</span>
            </div>
            <p className="text-sage-200 text-sm">
              Une approche scientifique de la satiété fondée sur des ingrédients naturels.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sage-200">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/product" className="hover:text-white transition-colors">
                  Produit
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold mb-4">Légal</h3>
            <ul className="space-y-2 text-sage-200">
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors">
                  Politique de Confidentialité
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition-colors">
                  Conditions d'Utilisation
                </Link>
              </li>
              <li>
                <Link to="/health-warning" className="hover:text-white transition-colors">
                  Avertissements Santé
                </Link>
              </li>
              <li>
                <Link to="/mentions" className="hover:text-white transition-colors">
                  Mentions Légales
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <div className="space-y-2 text-sage-200">
              <p className="flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:contact@gomonovia.com" className="hover:text-white transition-colors">
                  contact@gomonovia.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-sage-800 pt-8">
          <p className="text-center text-sage-300 text-sm">
            © {currentYear} GOMONOVIA. Tous droits réservés. | Solutions naturelles pour la satiété
          </p>
        </div>
      </div>
    </footer>
  );
}
