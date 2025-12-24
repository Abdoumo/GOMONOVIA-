import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HealthWarning() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sage-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-sage-900 mb-6">
            Avertissements Santé
          </h1>
          <p className="text-xl text-sage-600 max-w-2xl">
            Informations importantes concernant l'utilisation de nos produits.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Main Warning */}
            <div className="bg-yellow-50 border-4 border-yellow-300 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-yellow-900 mb-4">
                ⚠️ Avertissement Important
              </h2>
              <p className="text-lg text-yellow-900 leading-relaxed font-semibold">
                Ce produit n'est pas destiné à diagnostiquer, traiter, guérir ou prévenir une maladie.
              </p>
            </div>

            {/* Disclaimer */}
            <div>
              <h3 className="text-2xl font-bold text-sage-900 mb-4">
                Avis de Non-Responsabilité Médical
              </h3>
              <p className="text-sage-700 leading-relaxed mb-4">
                Les informations fournies sur ce site sont à titre informatif et ne remplacent pas un avis médical professionnel.
              </p>
              <p className="text-sage-700 leading-relaxed">
                Consultez un professionnel de santé avant d'utiliser nos produits, particulièrement si vous :
              </p>
              <ul className="space-y-2 text-sage-700 ml-4 mt-4">
                <li className="flex items-start gap-3">
                  <span className="text-sage-600">•</span>
                  <span>Êtes enceinte ou allaitez</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage-600">•</span>
                  <span>Avez des conditions médicales préexistantes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage-600">•</span>
                  <span>Prenez des médicaments prescrits</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage-600">•</span>
                  <span>Avez des allergies alimentaires</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage-600">•</span>
                  <span>Avez moins de 12 ans</span>
                </li>
              </ul>
            </div>

            {/* Side Effects */}
            <div>
              <h3 className="text-2xl font-bold text-sage-900 mb-4">
                Effets Secondaires Potentiels
              </h3>
              <p className="text-sage-700 leading-relaxed mb-4">
                Bien que nos produits soient fabriqués à partir d'ingrédients naturels, certains utilisateurs peuvent expérimenter :
              </p>
              <ul className="space-y-2 text-sage-700 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-sage-600">•</span>
                  <span>Légères réactions gastro-intestinales</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage-600">•</span>
                  <span>Réactions allergiques (rares)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage-600">•</span>
                  <span>Interactions médicamenteuses potentielles</span>
                </li>
              </ul>
              <p className="text-sage-700 leading-relaxed mt-4">
                Si vous expérimentez des effets indésirables, cessez l'utilisation et consultez un professionnel de santé.
              </p>
            </div>

            {/* Age Restriction */}
            <div className="bg-sage-50 border-2 border-sage-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-sage-900 mb-4">
                Restriction d'Âge
              </h3>
              <p className="text-sage-700 leading-relaxed">
                Ce produit est destiné aux personnes de 12 ans et plus. Les enfants de moins de 12 ans ne doivent pas utiliser ce produit sans supervision médicale appropriée.
              </p>
            </div>

            {/* Storage and Safety */}
            <div>
              <h3 className="text-2xl font-bold text-sage-900 mb-4">
                Stockage et Sécurité
              </h3>
              <p className="text-sage-700 leading-relaxed mb-4">
                Pour préserver l'intégrité de nos produits :
              </p>
              <ul className="space-y-2 text-sage-700 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-sage-600">•</span>
                  <span>Conservez dans un endroit frais et sec</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage-600">•</span>
                  <span>Tenez hors de la portée des enfants</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage-600">•</span>
                  <span>Respectez la date d'expiration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage-600">•</span>
                  <span>Ne pas dépasser la dose recommandée</span>
                </li>
              </ul>
            </div>

            {/* Consultation Recommendation */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                ℹ️ Consultation Recommandée
              </h3>
              <p className="text-blue-900 leading-relaxed">
                Nous recommandons vivement de consulter un professionnel de santé qualifié avant de commencer l'utilisation de nos produits, surtout si vous avez des questions ou des préoccupations spécifiques.
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
