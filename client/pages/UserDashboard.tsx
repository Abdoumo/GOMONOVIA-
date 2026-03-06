import { useAuth } from '@/contexts/AuthContext';
import { getUserOrders } from '@/lib/storage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { User, ShoppingCart, LogOut, Package } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

export default function UserDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const orders = user ? getUserOrders(user.userId) : [];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const stats = {
    totalOrders: orders.length,
    pendingOrders: orders.filter((o) => o.status === 'pending').length,
    acceptedOrders: orders.filter((o) => o.status === 'accepted').length,
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sage-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-sage-900 mb-2">
                Mon Tableau de Bord
              </h1>
              <p className="text-xl text-sage-600">
                Bienvenue, <span className="font-semibold">{user?.name}</span>
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold flex items-center gap-2"
            >
              <LogOut className="w-5 h-5" />
              Se déconnecter
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Profile Card */}
          <div className="bg-gradient-to-br from-sage-50 to-sage-100 rounded-lg p-8 mb-8 border-2 border-sage-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-sage-600 text-white rounded-full">
                <User className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-sage-900">{user?.name}</h2>
                <p className="text-sage-600">{user?.email}</p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border-2 border-sage-200 rounded-lg p-6 hover:border-sage-600 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sage-600 text-sm font-semibold">Commandes Totales</p>
                  <p className="text-3xl font-bold text-sage-900 mt-2">{stats.totalOrders}</p>
                </div>
                <ShoppingCart className="w-10 h-10 text-sage-600 opacity-50" />
              </div>
            </div>

            <div className="bg-white border-2 border-sage-200 rounded-lg p-6 hover:border-sage-600 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sage-600 text-sm font-semibold">Commandes En Attente</p>
                  <p className="text-3xl font-bold text-yellow-600 mt-2">{stats.pendingOrders}</p>
                </div>
                <Package className="w-10 h-10 text-yellow-600 opacity-50" />
              </div>
            </div>

            <div className="bg-white border-2 border-sage-200 rounded-lg p-6 hover:border-sage-600 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sage-600 text-sm font-semibold">Commandes Acceptées</p>
                  <p className="text-3xl font-bold text-green-600 mt-2">{stats.acceptedOrders}</p>
                </div>
                <ShoppingCart className="w-10 h-10 text-green-600 opacity-50" />
              </div>
            </div>
          </div>

          {/* Orders Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-sage-900">Mes Commandes Récentes</h3>
              <Link
                to="/my-orders"
                className="px-6 py-2 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors font-semibold"
              >
                Voir Toutes les Commandes
              </Link>
            </div>

            {orders.length === 0 ? (
              <div className="text-center py-12 bg-sage-50 rounded-lg border-2 border-sage-200">
                <ShoppingCart className="w-12 h-12 text-sage-300 mx-auto mb-4" />
                <p className="text-sage-600 text-lg mb-4">Aucune commande pour le moment</p>
                <Link
                  to="/products"
                  className="inline-block px-6 py-3 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors font-semibold"
                >
                  Commencer vos Achats
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {orders.slice(0, 5).map((order) => (
                  <div
                    key={order.id}
                    className="bg-white border-2 border-sage-200 rounded-lg p-4 hover:border-sage-600 transition-colors flex items-center justify-between"
                  >
                    <div className="flex-1">
                      <h4 className="font-semibold text-sage-900">{order.productName}</h4>
                      <p className="text-sm text-sage-600">
                        Commandé le {format(new Date(order.date), 'dd MMMM yyyy', { locale: fr })}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-sage-900">
                        {order.price.toLocaleString('fr-FR', { style: 'currency', currency: 'DZD' })}
                      </p>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mt-1 ${
                          order.status === 'accepted'
                            ? 'bg-green-100 text-green-700'
                            : order.status === 'refused'
                            ? 'bg-red-100 text-red-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {order.status === 'accepted' ? 'Acceptée' : order.status === 'refused' ? 'Refusée' : 'En attente'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              to="/products"
              className="bg-sage-600 hover:bg-sage-700 text-white rounded-lg p-6 text-center font-semibold transition-colors text-lg"
            >
              Continuer vos Achats
            </Link>
            <Link
              to="/my-orders"
              className="bg-sage-100 hover:bg-sage-200 text-sage-900 rounded-lg p-6 text-center font-semibold transition-colors text-lg border-2 border-sage-200"
            >
              Historique Complet des Commandes
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
