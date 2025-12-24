import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Mentions() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sage-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-sage-900 mb-6">
            Mentions Légales
          </h1>
          <p className="text-xl text-sage-600 max-w-2xl">
            Informations légales concernant GOMONOVIA et ce site.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-sage-900 mb-6">
                Éditeur du Site
              </h2>
              <div className="bg-sage-50 rounded-2xl p-8 space-y-4">
                <div>
                  <h3 className="font-bold text-sage-900 mb-2">GOMONOVIA</h3>
                  <p className="text-sage-700">
                    Entreprise innovante dans le domaine de la nutrition naturelle et scientifique
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sage-900 mb-1">E-mail :</h4>
                  <p className="text-sage-700">contact@gomonovia.com</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-sage-900 mb-4">
                Hébergement
              </h3>
              <p className="text-sage-700 leading-relaxed">
                Ce site est hébergé sur des serveurs sécurisés et conformes aux standards internationaux de protection des données.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-sage-900 mb-4">
                Propriété Intellectuelle
              </h3>
              <p className="text-sage-700 leading-relaxed mb-4">
                Tous les éléments de ce site (texte, images, logos, code, etc.) sont protégés par les droits d'auteur et autres lois sur la propriété intellectuelle.
              </p>
              <p className="text-sage-700 leading-relaxed">
                Toute reproduction, distribution ou utilisation sans autorisation écrite préalable est strictement interdite.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-sage-900 mb-4">
                Marques Déposées
              </h3>
              <p className="text-sage-700 leading-relaxed">
                GOMONOVIA®, ses logos et autres marques distinctives sont des marques déposées. Leur utilisation sans autorisation est prohibée.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-sage-900 mb-4">
                Responsabilité
              </h3>
              <p className="text-sage-700 leading-relaxed mb-4">
                GOMONOVIA s'efforce de mettre à jour les informations sur ce site. Cependant, GOMONOVIA ne garantit pas l'exactitude, l'exhaustivité ou l'actualité de tous les contenus.
              </p>
              <p className="text-sage-700 leading-relaxed">
                GOMONOVIA ne peut être tenu responsable des erreurs, omissions ou modifications du contenu.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-sage-900 mb-4">
                Cookies et Technologies de Suivi
              </h3>
              <p className="text-sage-700 leading-relaxed mb-4">
                Ce site peut utiliser des cookies pour améliorer votre expérience utilisateur.
              </p>
              <p className="text-sage-700 leading-relaxed">
                Vous pouvez contrôler les paramètres des cookies dans vos préférences de navigateur.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-sage-900 mb-4">
                Liens Externes
              </h3>
              <p className="text-sage-700 leading-relaxed">
                Ce site peut contenir des liens vers des sites externes. GOMONOVIA n'est pas responsable du contenu de ces sites externes et ne les approuve pas nécessairement.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-sage-900 mb-4">
                Conformité Légale
              </h3>
              <p className="text-sage-700 leading-relaxed mb-4">
                Ce site respecte les réglementations applicables en matière de :
              </p>
              <ul className="space-y-2 text-sage-700 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-sage-600">•</span>
                  <span>Protection des données personnelles (RGPD)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage-600">•</span>
                  <span>Droits d'auteur et propriété intellectuelle</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage-600">•</span>
                  <span>Publicité et commerce électronique</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-sage-600">•</span>
                  <span>Normes de sécurité informatique</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-sage-900 mb-4">
                Modification des Mentions Légales
              </h3>
              <p className="text-sage-700 leading-relaxed">
                GOMONOVIA se réserve le droit de modifier ces mentions légales à tout moment sans notification préalable. Nous vous recommandons de consulter régulièrement cette page.
              </p>
            </div>

            <div className="border-t-2 border-sage-200 pt-8">
              <p className="text-sage-600 text-sm">
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
              </p>
              <p className="text-sage-600 text-sm mt-2">
                © {new Date().getFullYear()} GOMONOVIA. Tous droits réservés.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
