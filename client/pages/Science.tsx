import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Science() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sage-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-sage-900 mb-6">
            Science &amp; Recherche
          </h1>
          <p className="text-xl text-sage-600 max-w-2xl">
            Découvrez les fondements scientifiques derrière GOMONOVIA et notre approche de validation rigoureuse.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Scientific Foundations */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-sage-900 mb-8">Fondements Scientifiques</h2>

            <div className="bg-sage-50 rounded-2xl p-12 mb-8">
              <p className="text-sage-700 text-lg leading-relaxed mb-6">
                La régulation de la satiété repose sur des interactions complexes entre le système digestif, les signaux hormonaux et le système nerveux central. La littérature scientifique souligne le rôle des fibres alimentaires et de certains composés d'origine végétale dans ces processus.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white rounded-lg p-6 border-l-4 border-sage-600">
                  <h3 className="font-bold text-sage-900 mb-3">Système Digestif</h3>
                  <p className="text-sage-700 text-sm">
                    Interactions complexes impliquant l'absorption et la digestion
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 border-l-4 border-sage-600">
                  <h3 className="font-bold text-sage-900 mb-3">Signaux Hormonaux</h3>
                  <p className="text-sage-700 text-sm">
                    Régulation via hormones de satiété et appétence
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 border-l-4 border-sage-600">
                  <h3 className="font-bold text-sage-900 mb-3">Système Nerveux</h3>
                  <p className="text-sage-700 text-sm">
                    Communication centrale avec les signaux périphériques
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-sage-900 mb-6">Rôle des Ingrédients Naturels</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-sage-600 pl-6 py-4">
                <h4 className="font-bold text-sage-900 mb-2">Fibres Alimentaires</h4>
                <p className="text-sage-700">
                  Les fibres jouent un rôle crucial dans la promotion de la satiété en ralentissant la digestion et en augmentant le volume du bol alimentaire.
                </p>
              </div>
              <div className="border-l-4 border-sage-600 pl-6 py-4">
                <h4 className="font-bold text-sage-900 mb-2">Extraits Végétaux</h4>
                <p className="text-sage-700">
                  Certains composés végétaux ont démontré des propriétés de modulation de l'appétit et de support métabolique dans la littérature scientifique.
                </p>
              </div>
              <div className="border-l-4 border-sage-600 pl-6 py-4">
                <h4 className="font-bold text-sage-900 mb-2">Approche Multimodale</h4>
                <p className="text-sage-700">
                  GOMONOVIA combine plusieurs ingrédients pour un effet synergique maximisant les bénéfices naturels.
                </p>
              </div>
            </div>
          </div>

       

  
        </div>
      </section>

      <Footer />
    </div>
  );
}
