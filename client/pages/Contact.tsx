import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Merci pour votre message ! Nous vous répondrons bientôt.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sage-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-sage-900 mb-6">
            Nous Contacter
          </h1>
          <p className="text-xl text-sage-600 max-w-2xl">
            Pour toute demande de partenariat, collaboration scientifique ou information professionnelle, veuillez nous contacter.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-sage-900 mb-8">Formulaire de Contact</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sage-900 font-semibold mb-2">
                    Nom et Prénom
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-sage-200 rounded-lg focus:outline-none focus:border-sage-600 transition-colors"
                    placeholder="Votre nom complet"
                  />
                </div>

                <div>
                  <label className="block text-sage-900 font-semibold mb-2">
                    Adresse E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-sage-200 rounded-lg focus:outline-none focus:border-sage-600 transition-colors"
                    placeholder="votre.email@exemple.com"
                  />
                </div>

                <div>
                  <label className="block text-sage-900 font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-sage-200 rounded-lg focus:outline-none focus:border-sage-600 transition-colors resize-none"
                    placeholder="Votre message ici..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors font-semibold text-lg"
                >
                  Envoyer
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-sage-50 rounded-2xl p-12">
                <div className="text-6xl mb-6">📧</div>
                <h3 className="text-2xl font-bold text-sage-900 mb-4">Email</h3>
                <a
                  href="mailto:contact@gomonovia.com"
                  className="text-sage-600 hover:text-sage-900 transition-colors text-lg font-semibold break-all"
                >
                  contact@gomonovia.com
                </a>
              </div>

              <div className="bg-sage-50 rounded-2xl p-12">
                <div className="text-6xl mb-6">🤝</div>
                <h3 className="text-2xl font-bold text-sage-900 mb-4">Partenariats</h3>
                <p className="text-sage-700">
                  Nous recherchons des collaborateurs pour des projets scientifiques, commerciaux et stratégiques.
                </p>
              </div>

              <div className="bg-sage-50 rounded-2xl p-12">
                <div className="text-6xl mb-6">⏱️</div>
                <h3 className="text-2xl font-bold text-sage-900 mb-4">Délai de Réponse</h3>
                <p className="text-sage-700">
                  Nous vous répondrons dans les meilleurs délais, généralement sous 2-3 jours ouvrables.
                </p>
              </div>

              <div className="border-2 border-sage-200 rounded-2xl p-8 bg-sage-50">
                <h3 className="font-bold text-sage-900 mb-4">Pourquoi Nous Contacter ?</h3>
                <ul className="space-y-3 text-sage-700">
                  <li className="flex items-start gap-3">
                    <span className="text-sage-600">✓</span>
                    <span>Collaborations scientifiques</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sage-600">✓</span>
                    <span>Partenariats commerciaux</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sage-600">✓</span>
                    <span>Questions produits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sage-600">✓</span>
                    <span>Demandes médias et presse</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-sage-600">✓</span>
                    <span>Suggestions et retours</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
