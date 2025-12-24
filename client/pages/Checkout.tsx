import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/hooks/useCart";

export default function Checkout() {
  const navigate = useNavigate();
  const { cart, clearCart } = useCart();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-sage-900 mb-4">
              Panier Vide
            </h1>
            <p className="text-sage-600 mb-8">
              Veuillez ajouter des articles avant de procéder au paiement.
            </p>
            <button
              onClick={() => navigate("/product")}
              className="px-8 py-3 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors font-semibold"
            >
              Retour aux Produits
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      // Save order info to sessionStorage for thank you page
      sessionStorage.setItem(
        "lastOrder",
        JSON.stringify({
          customerName: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          items: cart.items,
          total: cart.total,
          orderDate: new Date().toLocaleDateString("fr-FR"),
        })
      );

      // Clear cart
      clearCart();
      setIsProcessing(false);

      // Navigate to thank you page
      navigate("/thank-you");
    }, 2000);
  };

  const isFormValid =
    formData.firstName &&
    formData.lastName &&
    formData.email &&
    formData.phone &&
    formData.address &&
    formData.city &&
    formData.postalCode;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <div className="flex-1">
        <section className="bg-gradient-to-br from-sage-50 to-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-sage-900">
              Paiement
            </h1>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Form */}
              <div className="md:col-span-2">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-sage-900 mb-6">
                      Informations de Livraison
                    </h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sage-900 font-semibold mb-2">
                        Prénom *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-sage-200 rounded-lg focus:outline-none focus:border-sage-600 transition-colors"
                        placeholder="Jean"
                      />
                    </div>

                    <div>
                      <label className="block text-sage-900 font-semibold mb-2">
                        Nom *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-sage-200 rounded-lg focus:outline-none focus:border-sage-600 transition-colors"
                        placeholder="Dupont"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sage-900 font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-sage-200 rounded-lg focus:outline-none focus:border-sage-600 transition-colors"
                      placeholder="jean@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sage-900 font-semibold mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-sage-200 rounded-lg focus:outline-none focus:border-sage-600 transition-colors"
                      placeholder="+213 123 456 789"
                    />
                  </div>

                  <div>
                    <label className="block text-sage-900 font-semibold mb-2">
                      Adresse *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-sage-200 rounded-lg focus:outline-none focus:border-sage-600 transition-colors"
                      placeholder="123 Rue de la Paix"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sage-900 font-semibold mb-2">
                        Ville *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-sage-200 rounded-lg focus:outline-none focus:border-sage-600 transition-colors"
                        placeholder="Alger"
                      />
                    </div>

                    <div>
                      <label className="block text-sage-900 font-semibold mb-2">
                        Code Postal *
                      </label>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-sage-200 rounded-lg focus:outline-none focus:border-sage-600 transition-colors"
                        placeholder="16000"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={!isFormValid || isProcessing}
                    className="w-full px-8 py-4 bg-sage-600 text-white rounded-lg hover:bg-sage-700 disabled:bg-sage-400 transition-colors font-semibold text-lg"
                  >
                    {isProcessing ? "Traitement..." : "Confirmer la Commande"}
                  </button>
                </form>
              </div>

              {/* Order Summary */}
              <div>
                <div className="bg-sage-50 rounded-2xl p-8 border-2 border-sage-200 sticky top-24">
                  <h2 className="text-2xl font-bold text-sage-900 mb-6">
                    Résumé de Commande
                  </h2>

                  <div className="space-y-4 mb-6 pb-6 border-b-2 border-sage-200">
                    {cart.items.map((item) => (
                      <div key={item.id} className="flex justify-between text-sage-700">
                        <span>
                          {item.name} x {item.quantity}
                        </span>
                        <span className="font-semibold">
                          {(item.price * item.quantity).toLocaleString()} DA
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4 mb-6 pb-6 border-b-2 border-sage-200">
                    <div className="flex justify-between text-sage-700">
                      <span>Sous-total</span>
                      <span className="font-semibold">
                        {cart.total.toLocaleString()} DA
                      </span>
                    </div>
                    <div className="flex justify-between text-sage-700">
                      <span>Livraison</span>
                      <span className="font-semibold">Gratuite</span>
                    </div>
                  </div>

                  <div className="flex justify-between text-2xl font-bold text-sage-900">
                    <span>Total</span>
                    <span>{cart.total.toLocaleString()} DA</span>
                  </div>
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
