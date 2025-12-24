import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sage-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-sage-900 mb-6">
            Conditions d'Utilisation
          </h1>
          <p className="text-xl text-sage-600 max-w-2xl">
            Veuillez lire attentivement les conditions d'utilisation de notre site.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-sage-900 mb-6">
                Acceptation des Conditions
              </h2>
              <p className="text-sage-700 leading-relaxed">
                L'utilisation de ce site implique l'acceptation des conditions générales d'utilisation. Nous nous réservons le droit de modifier ces conditions à tout moment.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-sage-900 mb-4">
                Utilisation du Site
              </h3>
              <p className="text-sage-700 leading-relaxed mb-4">
                Vous acceptez d'utiliser ce site uniquement à des fins légales et en conformité avec toutes les lois applicables.
              </p>
              <p className="text-sage-700 leading-relaxed">
                Vous acceptez également de ne pas :
              </p>
              <ul className="space-y-2 text-sage-700 ml-4 mt-4">
                <li className="flex items-start gap-3">
                  <span className="text-sage-600">•</span>
                  <span>Harceler ou causer du tort à d'autres utilisateurs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage-600">•</span>
                  <span>Transmettre du contenu illégal ou offensant</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage-600">•</span>
                  <span>Télécharger des virus ou malwares</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage-600">•</span>
                  <span>Contourner les mesures de sécurité</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-sage-900 mb-4">
                Propriété Intellectuelle
              </h3>
              <p className="text-sage-700 leading-relaxed">
                Tout le contenu du site, y compris le texte, les images, les logos et le code, est protégé par les droits d'auteur et autres lois sur la propriété intellectuelle.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-sage-900 mb-4">
                Produits et Commandes
              </h3>
              <p className="text-sage-700 leading-relaxed mb-4">
                Nos produits sont présentés à titre informatif. Les prix sont sujets à modification sans préavis.
              </p>
              <p className="text-sage-700 leading-relaxed">
                Nous nous réservons le droit d'accepter ou de refuser toute commande.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-sage-900 mb-4">
                Limitation de Responsabilité
              </h3>
              <p className="text-sage-700 leading-relaxed">
                GOMONOVIA ne sera pas responsable des dommages directs, indirects ou accidentels résultant de l'utilisation ou de l'incapacité à utiliser ce site.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-sage-900 mb-4">
                Modifications des Conditions
              </h3>
              <p className="text-sage-700 leading-relaxed">
                Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications seront effectives immédiatement après publication sur le site.
              </p>
            </div>

            <div className="border-t-2 border-sage-200 pt-8">
              <p className="text-sage-600 text-sm">
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
