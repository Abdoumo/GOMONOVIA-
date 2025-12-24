import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sage-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-sage-900 mb-6">
            À Propos de GOMONOVIA
          </h1>
          <p className="text-xl text-sage-600 max-w-2xl">
            Découvrez notre mission, notre vision et notre approche scientifique pour transformer la santé naturellement.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-3xl font-bold text-sage-900 mb-6">Qui Sommes-nous ?</h2>
              <p className="text-sage-700 mb-6 leading-relaxed">
                GOMONOVIA est un projet innovant dédié au développement de solutions naturelles alliant santé, science et plaisir. Nous concevons des produits à base d'ingrédients d'origine naturelle, capables d'offrir un goût sucré sans ajout de sucre, en réponse aux enjeux actuels de nutrition et de bien-être.
              </p>
              <p className="text-sage-700 leading-relaxed">
                Notre démarche repose sur une approche scientifique rigoureuse, intégrant la biochimie, chimie et la nutrition, afin de garantir des produits efficaces, sûrs et agréables à consommer, tout en respectant l'équilibre métabolique.
              </p>
            </div>

            <div className="bg-sage-50 rounded-2xl p-12">
              <div className="text-center">
                <div className="text-8xl mb-6">🧪</div>
                <h3 className="text-2xl font-bold text-sage-900 mb-4">Innovation Scientifique</h3>
                <p className="text-sage-700">
                  Nos produits sont développés avec rigueur scientifique et respect de l'environnement.
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="border-2 border-sage-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-sage-900 mb-4">Notre Mission</h3>
              <p className="text-sage-700">
                Développer des solutions naturelles, accessibles et scientifiquement fondées pour accompagner des habitudes alimentaires plus saines.
              </p>
            </div>

            <div className="border-2 border-sage-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-sage-900 mb-4">Notre Vision</h3>
              <p className="text-sage-700">
                Contribuer à un avenir où les produits naturels validés scientifiquement occupent une place centrale dans la santé métabolique.
              </p>
            </div>

            <div className="border-2 border-sage-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-sage-900 mb-4">Nos Valeurs</h3>
              <p className="text-sage-700">
                Naturel, scientifiquement rigoureux, accessible et durable pour le bien-être de chacun.
              </p>
            </div>
          </div>

          {/* Approach */}
          <div className="bg-sage-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-sage-900 mb-8">Notre Approche Scientifique</h2>
            <p className="text-sage-700 mb-8 leading-relaxed">
              Le développement de GOMONOVIA repose sur l'optimisation des formulations, l'analyse biochimique des ingrédients et la préparation à des évaluations futures en laboratoire et en milieu clinique.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-sage-900 mb-4">Principes</h3>
                <ul className="space-y-3 text-sage-700">
                  <li className="flex items-start gap-3">
                    <span className="text-sage-600 font-bold">✓</span>
                    <span>Rigueur scientifique</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sage-600 font-bold">✓</span>
                    <span>Ingrédients naturels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sage-600 font-bold">✓</span>
                    <span>Sécurité et efficacité</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sage-600 font-bold">✓</span>
                    <span>Innovation durable</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-sage-900 mb-4">Engagement</h3>
                <p className="text-sage-700">
                  Nous transformons la recherche scientifique en solutions naturelles concrètes, au service d'une nutrition moderne et responsable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sage-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Découvrez nos Produits</h2>
          <p className="text-sage-200 mb-8 max-w-2xl mx-auto">
            Passez à l'action et rejoignez la révolution de la santé naturelle.
          </p>
          <Link
            to="/product"
            className="inline-block px-8 py-4 bg-white text-sage-900 rounded-lg hover:bg-sage-100 transition-colors font-semibold"
          >
            Voir les Produits
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
