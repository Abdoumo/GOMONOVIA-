import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-sage-900 mb-4">404</h1>
          <p className="text-2xl text-sage-700 mb-8">Page non trouvée</p>
          <p className="text-sage-600 mb-12 max-w-md">
            La page que vous recherchez n'existe pas. Retournez à l'accueil ou explorez nos autres sections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="px-8 py-3 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors font-semibold"
            >
              Retour à l'Accueil
            </Link>
            <Link
              to="/product"
              className="px-8 py-3 border-2 border-sage-600 text-sage-600 rounded-lg hover:bg-sage-50 transition-colors font-semibold"
            >
              Découvrir nos Produits
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
