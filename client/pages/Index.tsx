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
                  Une approche scientifique de la satiété fondée sur des ingrédients naturels
                </p>
              </div>

              <p className="text-lg text-sage-600 mb-8 leading-relaxed">
                Découvrez une solution naturelle et scientifiquement fondée pour accompagner vos objectifs de santé et de bien-être.
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
                Les gummies GOMONOVIA sont formulés à partir d'ingrédients naturels soigneusement sélectionnés, destinés à soutenir les signaux physiologiques de satiété, sous une forme plus agréable et facile à consommer.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-sage-900 mb-3">Ingrédients Clés</h4>
                  <ul className="space-y-2 text-sage-700">
                    <li className="flex items-start gap-3">
                      <span className="text-sage-600 font-bold">•</span>
                      <span>Extrait végétal naturel</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sage-600 font-bold">•</span>
                      <span>Fibres alimentaires</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sage-600 font-bold">•</span>
                      <span>Arômes naturels</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-sage-600 font-bold">•</span>
                      <span>Gélatine</span>
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

      {/* About Section */}
      <section className="py-20 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-sage-900 mb-16 text-center">
            À Propos de GOMONOVIA
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-sage-900 mb-6">Qui Sommes-nous ?</h3>
              <p className="text-sage-700 mb-6 leading-relaxed">
                GOMONOVIA est un projet innovant dédié au développement de solutions naturelles alliant santé, science et plaisir. Nous concevons des produits à base d'ingrédients d'origine naturelle, capables d'offrir un goût sucré sans ajout de sucre, en réponse aux enjeux actuels de nutrition et de bien-être.
              </p>
              <p className="text-sage-700 leading-relaxed">
                Notre démarche repose sur une approche scientifique rigoureuse, intégrant la biochimie, chimie et la nutrition, afin de garantir des produits efficaces, sûrs et agréables à consommer, tout en respectant l'équilibre métabolique.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-sage-900 mb-6">Notre Conviction</h3>
              <p className="text-sage-700 mb-6 leading-relaxed">
                À travers GOMONOVIA, nous portons la conviction que la nature, soutenue par la recherche et la science, constitue un levier stratégique pour accompagner durablement l'évolution vers des modes de vie plus sains.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-sage-900 mb-2">Notre Mission</h4>
                  <p className="text-sage-700">
                    Développer des solutions naturelles, accessibles et scientifiquement fondées pour accompagner des habitudes alimentaires plus saines.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-sage-900 mb-2">Notre Vision</h4>
                  <p className="text-sage-700">
                    Contribuer à un avenir où les produits naturels validés scientifiquement occupent une place centrale dans la santé métabolique.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-sage-900 mb-16 text-center">
            Science &amp; Recherche
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-sage-900 mb-6">Fondements Scientifiques</h3>
              <p className="text-sage-700 mb-6 leading-relaxed">
                La régulation de la satiété repose sur des interactions complexes entre le système digestif, les signaux hormonaux et le système nerveux central. La littérature scientifique souligne le rôle des fibres alimentaires et de certains composés d'origine végétale dans ces processus.
              </p>
              <p className="text-sage-700 leading-relaxed">
                GOMONOVIA adopte une démarche structurée incluant l'optimisation des formulations, l'évaluation de la sécurité et la préparation à de futures études cliniques.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-sage-900 mb-6">Feuille de Route de Validation</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-sage-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-sage-900">Tests en laboratoire</h4>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-sage-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-sage-900">Études précliniques</h4>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-sage-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-sage-900">Évaluations de sécurité</h4>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-sage-600 text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-sage-900">Essais cliniques futurs</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/science"
              className="inline-block px-8 py-4 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors font-semibold"
            >
              Lire notre approche scientifique
            </Link>
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
