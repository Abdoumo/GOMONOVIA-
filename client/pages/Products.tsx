import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/hooks/useCart';
import { getProducts } from '@/lib/storage';
import { useToast } from '@/hooks/use-toast';
import { Search } from 'lucide-react';

export default function Products() {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const products = getProducts();
  const [searchTerm, setSearchTerm] = useState('');
  const [addedProductId, setAddedProductId] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
    setAddedProductId(product.id);
    toast({
      title: 'Succès',
      description: `${product.name} ajouté au panier`,
    });
    setTimeout(() => setAddedProductId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sage-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-sage-900 mb-6">
            Nos Produits
          </h1>
          <p className="text-xl text-sage-600 max-w-2xl">
            Découvrez notre collection de produits naturels pour accompagner votre silhouette
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 bg-white border-b border-sage-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-sage-400" />
            <input
              type="text"
              placeholder="Rechercher un produit..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border-2 border-sage-200 rounded-lg focus:outline-none focus:border-sage-600 transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="flex-1 py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-2xl text-sage-600 mb-4">Aucun produit trouvé</p>
              <p className="text-sage-500 mb-8">Essayez une autre recherche</p>
              <button
                onClick={() => setSearchTerm('')}
                className="px-6 py-2 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors font-semibold"
              >
                Réinitialiser
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group border-2 border-sage-200 rounded-lg overflow-hidden hover:border-sage-600 hover:shadow-lg transition-all"
                >
                  {/* Product Image */}
                  <div className="relative h-64 bg-sage-50 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = 'https://via.placeholder.com/300x300?text=' + encodeURIComponent(product.name);
                      }}
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-sage-900 mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-sage-600 text-sm mb-4 line-clamp-3">
                      {product.description}
                    </p>

                    {/* Price */}
                    <div className="mb-6">
                      <p className="text-3xl font-bold text-sage-600 mb-1">
                        {product.price.toLocaleString('fr-FR', {
                          style: 'currency',
                          currency: 'DZD',
                        })}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleAddToCart(product)}
                        className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-colors ${
                          addedProductId === product.id
                            ? 'bg-green-600 text-white'
                            : 'bg-sage-600 text-white hover:bg-sage-700'
                        }`}
                      >
                        {addedProductId === product.id ? '✓ Ajouté' : 'Ajouter au panier'}
                      </button>
                      <button
                        onClick={() => navigate('/product')}
                        className="flex-1 px-4 py-3 border-2 border-sage-600 text-sage-600 rounded-lg font-semibold hover:bg-sage-50 transition-colors"
                      >
                        Détails
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
