import { Link } from "react-router-dom";
import { Trash2, Plus, Minus } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/hooks/useCart";

export default function Cart() {
  const { cart, updateQuantity, removeFromCart } = useCart();

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-md">
            <div className="text-6xl mb-6">🛒</div>
            <h1 className="text-4xl font-bold text-sage-900 mb-4">
              Panier Vide
            </h1>
            <p className="text-sage-600 mb-12">
              Votre panier est vide. Découvrez nos produits et ajoutez-les à votre panier.
            </p>
            <Link
              to="/product"
              className="inline-block px-8 py-4 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors font-semibold"
            >
              Continuer les Achats
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <div className="flex-1">
        <section className="bg-gradient-to-br from-sage-50 to-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-sage-900 mb-2">
              Panier
            </h1>
            <p className="text-sage-600">
              {cart.items.length} article{cart.items.length > 1 ? "s" : ""} dans votre panier
            </p>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="md:col-span-2">
                <div className="space-y-6">
                  {cart.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-6 p-6 bg-sage-50 rounded-lg border-2 border-sage-200"
                    >
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-sage-900 mb-2">
                          {item.name}
                        </h3>
                        <p className="text-2xl font-bold text-sage-600 mb-4">
                          {item.price} DA
                        </p>

                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-3 bg-white rounded-lg border-2 border-sage-200 p-2">
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  Math.max(1, item.quantity - 1)
                                )
                              }
                              className="p-1 hover:bg-sage-100 rounded transition-colors"
                            >
                              <Minus size={18} className="text-sage-600" />
                            </button>
                            <span className="w-8 text-center font-bold text-sage-900">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="p-1 hover:bg-sage-100 rounded transition-colors"
                            >
                              <Plus size={18} className="text-sage-600" />
                            </button>
                          </div>

                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-3 hover:bg-red-100 rounded-lg transition-colors text-red-600"
                          >
                            <Trash2 size={20} />
                          </button>
                        </div>
                      </div>

                      <div className="text-right">
                        <p className="text-sm text-sage-600 mb-2">Sous-total</p>
                        <p className="text-2xl font-bold text-sage-900">
                          {(item.price * item.quantity).toLocaleString()} DA
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t-2 border-sage-200">
                  <Link
                    to="/product"
                    className="inline-block px-6 py-3 text-sage-600 hover:bg-sage-100 rounded-lg transition-colors font-semibold"
                  >
                    ← Continuer les Achats
                  </Link>
                </div>
              </div>

              {/* Summary */}
              <div>
                <div className="bg-sage-50 rounded-2xl p-8 border-2 border-sage-200 sticky top-24">
                  <h2 className="text-2xl font-bold text-sage-900 mb-6">
                    Résumé
                  </h2>

                  <div className="space-y-4 mb-6 pb-6 border-b-2 border-sage-200">
                    <div className="flex justify-between text-sage-700">
                      <span>Sous-total</span>
                      <span className="font-semibold">{cart.total.toLocaleString()} DA</span>
                    </div>
                    <div className="flex justify-between text-sage-700">
                      <span>Livraison</span>
                      <span className="font-semibold">Gratuite</span>
                    </div>
                    <div className="flex justify-between text-sage-700">
                      <span>Taxes</span>
                      <span className="font-semibold">Incluses</span>
                    </div>
                  </div>

                  <div className="flex justify-between text-2xl font-bold text-sage-900 mb-6">
                    <span>Total</span>
                    <span>{cart.total.toLocaleString()} DA</span>
                  </div>

                  <Link
                    to="/checkout"
                    className="block w-full px-6 py-4 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors font-semibold text-center mb-3"
                  >
                    Passer la Commande
                  </Link>

                  <Link
                    to="/product"
                    className="block w-full px-6 py-4 border-2 border-sage-600 text-sage-600 rounded-lg hover:bg-sage-50 transition-colors font-semibold text-center"
                  >
                    Continuer les Achats
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
