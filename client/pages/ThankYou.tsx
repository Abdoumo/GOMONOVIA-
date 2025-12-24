import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface OrderInfo {
  customerName: string;
  email: string;
  items: Array<{ name: string; quantity: number; price: number }>;
  total: number;
  orderDate: string;
}

export default function ThankYou() {
  const [orderInfo, setOrderInfo] = useState<OrderInfo | null>(null);

  useEffect(() => {
    const savedOrder = sessionStorage.getItem("lastOrder");
    if (savedOrder) {
      try {
        setOrderInfo(JSON.parse(savedOrder));
      } catch (error) {
        console.error("Error loading order:", error);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <div className="flex-1">
        <section className="py-20 bg-gradient-to-br from-green-50 to-sage-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="text-8xl mb-6 animate-bounce">✅</div>

              <h1 className="text-5xl md:text-6xl font-bold text-sage-900 mb-6">
                Merci pour votre Commande!
              </h1>

              <p className="text-2xl text-sage-700 mb-4">
                Votre commande a été confirmée avec succès
              </p>

              {orderInfo && (
                <p className="text-sage-600 text-lg">
                  Un email de confirmation a été envoyé à{" "}
                  <span className="font-semibold">{orderInfo.email}</span>
                </p>
              )}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {orderInfo && (
              <div className="grid md:grid-cols-3 gap-12">
                {/* Order Details */}
                <div className="md:col-span-2">
                  <div className="bg-sage-50 rounded-2xl p-12 border-2 border-sage-200">
                    <h2 className="text-3xl font-bold text-sage-900 mb-8">
                      Détails de la Commande
                    </h2>

                    <div className="space-y-6 mb-8 pb-8 border-b-2 border-sage-200">
                      <div>
                        <p className="text-sage-600 text-sm font-semibold mb-1">
                          Numéro de Commande
                        </p>
                        <p className="text-2xl font-bold text-sage-900">
                          #{Math.random()
                            .toString(36)
                            .substr(2, 9)
                            .toUpperCase()}
                        </p>
                      </div>

                      <div>
                        <p className="text-sage-600 text-sm font-semibold mb-1">
                          Client
                        </p>
                        <p className="text-lg text-sage-900">
                          {orderInfo.customerName}
                        </p>
                      </div>

                      <div>
                        <p className="text-sage-600 text-sm font-semibold mb-1">
                          Date de Commande
                        </p>
                        <p className="text-lg text-sage-900">
                          {orderInfo.orderDate}
                        </p>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-sage-900 mb-6">
                      Articles Commandés
                    </h3>

                    <div className="space-y-4 mb-8">
                      {orderInfo.items.map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center p-4 bg-white rounded-lg border-2 border-sage-200"
                        >
                          <div>
                            <p className="font-semibold text-sage-900">
                              {item.name}
                            </p>
                            <p className="text-sm text-sage-600">
                              Quantité: {item.quantity}
                            </p>
                          </div>
                          <p className="text-lg font-bold text-sage-900">
                            {(item.price * item.quantity).toLocaleString()} DA
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Summary Box */}
                <div>
                  <div className="bg-sage-900 text-white rounded-2xl p-8 sticky top-24">
                    <h3 className="text-2xl font-bold mb-6">
                      Résumé de la Commande
                    </h3>

                    <div className="space-y-4 mb-6 pb-6 border-b-2 border-sage-700">
                      <div className="flex justify-between">
                        <span>Sous-total</span>
                        <span className="font-semibold">
                          {orderInfo.total.toLocaleString()} DA
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Livraison</span>
                        <span className="font-semibold">Gratuite</span>
                      </div>
                    </div>

                    <div className="flex justify-between text-2xl font-bold mb-8">
                      <span>Total</span>
                      <span>{orderInfo.total.toLocaleString()} DA</span>
                    </div>

                    <div className="bg-sage-700 rounded-lg p-4 mb-8">
                      <p className="text-sm text-sage-100 mb-2">
                        Statut de la Commande
                      </p>
                      <p className="text-lg font-bold text-green-300">
                        Confirmée
                      </p>
                    </div>

                    <div className="text-sm text-sage-200 space-y-2">
                      <p>📧 Email: {orderInfo.email}</p>
                      <p>🚚 Livraison standard: 3-5 jours</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-16 p-12 bg-green-50 border-2 border-green-200 rounded-2xl">
              <h3 className="text-2xl font-bold text-green-900 mb-4">
                📋 Étapes Suivantes
              </h3>
              <ul className="space-y-3 text-green-900">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">1️⃣</span>
                  <span>
                    Vérifiez votre email pour le reçu et les informations de
                    suivi
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">2️⃣</span>
                  <span>
                    Votre commande sera traitée dans les 24 heures
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">3️⃣</span>
                  <span>
                    Vous recevrez un lien de suivi par SMS et email
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="px-8 py-4 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors font-semibold text-center"
              >
                Retour à l'Accueil
              </Link>
              <Link
                to="/product"
                className="px-8 py-4 border-2 border-sage-600 text-sage-600 rounded-lg hover:bg-sage-50 transition-colors font-semibold text-center"
              >
                Découvrir d'autres Produits
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
