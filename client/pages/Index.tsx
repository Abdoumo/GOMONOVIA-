import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-sage-50 via-white to-sage-100">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-sage-100 rounded-full opacity-30 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-sage-200 rounded-full opacity-20 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <h1 className="text-5xl md:text-6xl font-bold text-sage-900 mb-4">
                  GOMONOVIA
                </h1>
                <p className="text-2xl md:text-3xl text-sage-700 font-light">
                   Sweet satiety
                </p>
              </div>

              <p className="text-lg text-sage-600 mb-8 leading-relaxed">
                GOMONOVIA, gourmande, naturelle et efficace pour accompagner votre silhouette.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/product"
                  className="px-8 py-4 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors font-semibold text-lg text-center"
                >
                  Commander maintenant
                </Link>
                <Link
                  to="/about"
                  className="px-8 py-4 border-2 border-sage-600 text-sage-600 rounded-lg hover:bg-sage-50 transition-colors font-semibold text-lg text-center"
                >
                  En savoir plus
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <img src="/gummies.jpeg" alt="sdlfk" />
            {/*   <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-sage-200 to-sage-100 rounded-3xl transform rotate-6" />
                <div className="absolute inset-4 bg-white rounded-2xl shadow-2xl flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-sage-900">GOMONOVIA</p>
                    <p className="text-sage-600 text-sm mt-2">Gummies</p>
                    <p className="text-sage-600 text-sm">100% Naturel</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-sage-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-4xl font-bold text-sage-900 mb-6">Problématique</h2>
            <p className="text-lg text-sage-700 leading-relaxed mb-6">
              La gestion du poids constitue un enjeu majeur de santé publique. De nombreuses solutions existantes reposent sur des composés synthétiques, des approches contraignantes ou des formes peu pratiques, limitant leur adoption à long terme.
            </p>
            <p className="text-lg text-sage-700 leading-relaxed font-semibold">
              Il existe un besoin réel de solutions naturelles, crédibles et scientifiquement fondées.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-sage-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Bénéfices Clés</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🌿</div>
              <h3 className="text-2xl font-bold mb-4">Formulation Naturelle</h3>
              <p className="text-sage-200">
                D'origine végétale, pour une solution saine et respectueuse de votre santé.
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-4">✨</div>
              <h3 className="text-2xl font-bold mb-4">Forme Pratique</h3>
              <p className="text-sage-200">
                Acceptable pour le consommateur avec une utilisation simple et agréable au quotidien.
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-4">🔬</div>
              <h3 className="text-2xl font-bold mb-4">Approche Scientifique</h3>
              <p className="text-sage-200">
                Développée avec rigueur scientifique pour des résultats fiables et durables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-sage-900 mb-4 text-center">
            Produit GOMONOVIA
          </h2>
          <p className="text-center text-sage-600 mb-16 max-w-2xl mx-auto text-lg">
            GOMONOVIA – Gummies Naturels à Effet Satiétogène
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/produit.jpeg" alt="" />
            </div>

            <div>
              <p className="text-lg text-sage-700 mb-8 leading-relaxed">
                Ces gummies délicieux sont conçus pour réduire les envies de grignotage, soutenir votre métabolisme et vous aider à mieux gérer vos portions, sans frustration. Une solution simple et pratique à intégrer dans votre quotidien.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-sage-900 mb-3">Pourquoi choisir GOMONOVIA ?</h4>
                  <ul className="space-y-2 text-sage-700">
                    <li className="flex items-start gap-3">
                      <span className="text-sage-600 font-bold">•</span>
                      <span> Réduit l’appétit et les envies de grignotage</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sage-600 font-bold">•</span>
                      <span>Soutient le métabolisme et la gestion des graisses</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sage-600 font-bold">•</span>
                      <span> gummies gourmand, facile à consommer</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sage-600 font-bold">•</span>
                      <span> Formule sans sucre ajouté</span>
                    </li><li className="flex items-start gap-3">
                      <span className="text-sage-600 font-bold">•</span>
                      <span>Convient dès 12 ans</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-sage-900 mb-3">Caractéristiques</h4>
                  <ul className="space-y-2 text-sage-700">
                    <li className="flex items-center gap-2">
                      <span className="text-sage-600">✓</span>
                      <span>Arôme naturel citron</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-sage-600">✓</span>
                      <span>Sans sucre</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-sage-600">✓</span>
                      <span>À partir de 12 ans</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-sage-600">✓</span>
                      <span>Formule naturelle brevetée</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-sage-200">
                <p className="text-sm text-sage-600 italic mb-6">
                  <strong>Utilisation recommandée :</strong> 2 gummies par jour
                </p>
                <div className="flex gap-4">
                  <Link
                    to="/product"
                    className="flex-1 px-6 py-3 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors font-semibold text-center"
                  >
                    En Savoir Plus
                  </Link>
                  <button className="flex-1 px-6 py-3 bg-sage-100 text-sage-900 rounded-lg hover:bg-sage-200 transition-colors font-semibold">
                    Ajouter au Panier
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* CTA Section */}
      <section className="py-20 bg-sage-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Prêt à Découvrir GOMONOVIA ?
          </h2>
          <p className="text-xl text-sage-100 mb-12 max-w-2xl mx-auto">
            Rejoignez-nous dans notre mission pour une nutrition plus saine, naturelle et scientifiquement fondée.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/product"
              className="px-8 py-4 bg-white text-sage-600 rounded-lg hover:bg-sage-50 transition-colors font-semibold text-lg"
            >
              Commander Maintenant
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-sage-700 transition-colors font-semibold text-lg"
            >
              Nous Contacter
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
