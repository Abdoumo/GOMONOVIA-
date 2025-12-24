import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/hooks/useCart";

export default function Product() {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: "gomonovia-gummies",
      name: "GOMONOVIA – Gummies Naturels",
      price: 2000,
      quantity: quantity,
    });
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sage-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-sage-900 mb-6">
            GOMONOVIA Gummies
          </h1>
          <p className="text-xl text-sage-600 max-w-2xl">
            Gummies Naturels à Effet Satiétogène - 100% Naturel, Sans Sucre
          </p>
        </div>
      </section>

      {/* Product Display */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Product Image */}
            <img src="/produit.jpeg" alt="GOMONOVIA Gummies" className="" />
           

            {/* Product Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-sage-900 mb-4">
                  GOMONOVIA – Gummies Naturels à Effet Satiétogène
                </h2>
                <p className="text-sage-700 text-lg leading-relaxed">
                  Ces gummies délicieux sont conçus pour réduire les envies de grignotage, soutenir votre métabolisme et vous aider à mieux gérer vos portions, sans frustration. Une solution simple et pratique à intégrer dans votre quotidien.
                </p>
              </div>

              {/* Key Ingredients */}
              <div>
                <h3 className="text-2xl font-bold text-sage-900 mb-4">Pourquoi choisir GOMONOVIA ?</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-4 p-4 bg-sage-50 rounded-lg">
                    <span className="text-2xl">🌿</span>
                    <div>
                      <h4 className="font-bold text-sage-900"> Réduit l’appétit et les envies de grignotage</h4>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-sage-50 rounded-lg">
                    <span className="text-2xl">🌾</span>
                    <div>
                      <h4 className="font-bold text-sage-900">Soutient le métabolisme et la gestion des graisses</h4>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-sage-50 rounded-lg">
                    <span className="text-2xl">🍋</span>
                    <div>
                      <h4 className="font-bold text-sage-900">gummies gourmand, facile à consommer</h4>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-sage-50 rounded-lg">
                    <span className="text-2xl">✨</span>
                    <div>
                      <h4 className="font-bold text-sage-900">Formule sans sucre ajouté</h4>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-sage-50 rounded-lg">
                    <span className="text-2xl">✨</span>
                    <div>
                      <h4 className="font-bold text-sage-900"> Convient dès 12 ans</h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* Characteristics */}
              <div>
                <h3 className="text-2xl font-bold text-sage-900 mb-4">Ingrédients</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 p-3 border-2 border-sage-200 rounded-lg">
                    <span className="text-sage-600 text-xl">🍋</span>
                    <span className="text-sage-700">Gélatine</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 border-2 border-sage-200 rounded-lg">
                    <span className="text-sage-600 text-xl">🚫</span>
                    <span className="text-sage-700">Eau</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 border-2 border-sage-200 rounded-lg">
                    <span className="text-sage-600 text-xl">👶</span>
                    <span className="text-sage-700">Fibres alimentaires</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 border-2 border-sage-200 rounded-lg">
                    <span className="text-sage-600 text-xl">⭐</span>
                    <span className="text-sage-700">Extrait de stévia</span>
                  </div>                  <div className="flex items-center gap-3 p-3 border-2 border-sage-200 rounded-lg">
                    <span className="text-sage-600 text-xl">👶</span>
                    <span className="text-sage-700">Acide citrique (E330)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 border-2 border-sage-200 rounded-lg">
                    <span className="text-sage-600 text-xl">⭐</span>
                    <span className="text-sage-700">Arôme naturel citron</span>
                  </div>
                </div>
              </div>

              {/* Usage */}
              <div className="bg-sage-50 rounded-lg p-6">
                <h3 className="font-bold text-sage-900 mb-2">Utilisation Recommandée</h3>
                <p className="text-2xl font-bold text-sage-600 mb-2">2 gummies par jour</p>
                <p className="text-sage-700">
                  À consommer quotidiennement pour des résultats optimaux.
                </p>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4">
                <span className="text-sage-700 font-semibold">Quantité :</span>
                <div className="flex items-center gap-3 bg-sage-50 rounded-lg border-2 border-sage-200 p-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 hover:bg-white rounded transition-colors text-sage-600 font-bold"
                  >
                    −
                  </button>
                  <span className="w-8 text-center font-bold text-sage-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 hover:bg-white rounded transition-colors text-sage-600 font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Price and CTA */}
              <div className="border-t-2 border-sage-200 pt-8">
                <div className="mb-6">
                  <p className="text-sage-600 text-sm mb-2">Prix Unitaire</p>
                  <p className="text-4xl font-bold text-sage-900">2000 DA</p>
                  <p className="text-sage-600 text-sm mt-2">
                    Total: {(2000 * quantity).toLocaleString()} DA
                  </p>
                </div>
                <button
                  onClick={handleAddToCart}
                  className={`w-full px-8 py-4 rounded-lg transition-colors font-semibold text-lg mb-3 ${
                    isAdded
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "bg-sage-600 text-white hover:bg-sage-700"
                  }`}
                >
                  {isAdded ? "✓ Ajouté au Panier" : "Ajouter au Panier"}
                </button>
                <button
                  onClick={() => navigate("/cart")}
                  className="w-full px-8 py-4 border-2 border-sage-600 text-sage-600 rounded-lg hover:bg-sage-50 transition-colors font-semibold"
                >
                  Voir le Panier
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mode of Action */}
      <section className="py-20 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-sage-900 mb-12 text-center">Mode d'Action</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="bg-white rounded-2xl p-12 shadow-sm">
                <div className="text-6xl mb-6 text-center">🔬</div>
                <h3 className="text-2xl font-bold text-sage-900 text-center mb-4">
                  Formule Scientifique
                </h3>
                <p className="text-sage-700 text-center">
                  Basée sur la recherche en nutrition et satiété
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-sage-900">Comment Ça Fonctionne</h3>
              <p className="text-sage-700 leading-relaxed">
                Les gummies coupe-faim GOMONOVIA, au goût citron, sont formulés sans sucre pour accompagner la gestion du poids au quotidien. Ils associent plaisir de consommation et fonctionnalité, afin de favoriser une approche durable de la perte de poids.
              </p>
              <p className="text-sage-700 leading-relaxed">
                Leur formule naturelle, à base d'extrait de stévia et de fibres, contribue à la modulation de l'appétit, au contrôle du poids et à la régulation du métabolisme.
              </p>

              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl text-sage-600">✓</span>
                  <span className="text-sage-700 font-semibold">Formulation naturelle</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl text-sage-600">✓</span>
                  <span className="text-sage-700 font-semibold">Utilisation simple</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl text-sage-600">✓</span>
                  <span className="text-sage-700 font-semibold">Bonne acceptabilité sensorielle</span>
                </div>
              </div>
            </div>
          </div>

          {/* Warning */}
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6">
            <p className="text-sm text-yellow-900">
              <strong>⚠️ Avertissement :</strong> Ce produit n'est pas destiné à diagnostiquer, traiter, guérir ou prévenir une maladie.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
