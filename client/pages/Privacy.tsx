import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sage-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-sage-900 mb-6">
            Politique de Confidentialité
          </h1>
          <p className="text-xl text-sage-600 max-w-2xl">
            Votre confidentialité est importante pour nous.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-sage-900 mb-6">
                Protection de Vos Données Personnelles
              </h2>
              <p className="text-sage-700 leading-relaxed mb-4">
                GOMONOVIA s'engage à protéger les données personnelles des utilisateurs conformément à la réglementation en vigueur. Vos informations sont traitées avec le plus grand respect et sécurité.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-sage-900 mb-4">
                Collecte des Données
              </h3>
              <p className="text-sage-700 leading-relaxed mb-4">
                Nous collectons uniquement les données nécessaires pour :
              </p>
              <ul className="space-y-2 text-sage-700 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-sage-600">•</span>
                  <span>Traiter vos commandes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage-600">•</span>
                  <span>Répondre à vos demandes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage-600">•</span>
                  <span>Améliorer nos services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage-600">•</span>
                  <span>Communiquer des informations importantes</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-sage-900 mb-4">
                Utilisation des Données
              </h3>
              <p className="text-sage-700 leading-relaxed">
                Les données personnelles ne seront jamais partagées avec des tiers sans votre consentement explicite, sauf si la loi l'exige.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-sage-900 mb-4">
                Sécurité
              </h3>
              <p className="text-sage-700 leading-relaxed">
                Nous utilisons des mesures de sécurité appropriées pour protéger vos informations contre l'accès non autorisé, l'altération et la divulgation.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-sage-900 mb-4">
                Vos Droits
              </h3>
              <p className="text-sage-700 leading-relaxed mb-4">
                Vous avez le droit de :
              </p>
              <ul className="space-y-2 text-sage-700 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-sage-600">•</span>
                  <span>Accéder à vos données</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage-600">•</span>
                  <span>Corriger vos informations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage-600">•</span>
                  <span>Demander la suppression</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage-600">•</span>
                  <span>Vous opposer au traitement</span>
                </li>
              </ul>
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
