import { AdminLayout } from '@/components/AdminSidebar';
import { getUsers, getProducts, getOrders } from '@/lib/storage';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Users, Package, ShoppingCart } from 'lucide-react';
import { format, parse } from 'date-fns';

export default function AdminDashboard() {
  const users = getUsers();
  const products = getProducts();
  const orders = getOrders();

  // Calculate statistics
  const totalUsers = users.length;
  const totalProducts = products.length;
  const totalOrders = orders.length;
  const acceptedOrders = orders.filter((o) => o.status === 'accepted').length;
  const refusedOrders = orders.filter((o) => o.status === 'refused').length;
  const pendingOrders = orders.filter((o) => o.status === 'pending').length;

  // Orders per day chart data
  const getOrdersPerDay = () => {
    const ordersByDay: Record<string, number> = {};

    orders.forEach((order) => {
      const day = format(new Date(order.date), 'MMM dd');
      ordersByDay[day] = (ordersByDay[day] || 0) + 1;
    });

    return Object.entries(ordersByDay)
      .sort((a, b) => {
        const dateA = parse(a[0], 'MMM dd', new Date());
        const dateB = parse(b[0], 'MMM dd', new Date());
        return dateA.getTime() - dateB.getTime();
      })
      .map(([day, count]) => ({
        day,
        orders: count,
      }));
  };

  const ordersPerDayData = getOrdersPerDay();
  const orderStatusData = [
    { name: 'Accepted', value: acceptedOrders, fill: '#10b981' },
    { name: 'Refused', value: refusedOrders, fill: '#ef4444' },
    { name: 'Pending', value: pendingOrders, fill: '#f59e0b' },
  ];

  const COLORS = ['#3b82f6', '#8b5cf6', '#ec4899'];

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-sage-900">Tableau de Bord Admin</h1>
          <p className="text-sage-600 mt-2 text-lg">Gérez votre plateforme et surveillez les performances</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border-2 border-sage-200 rounded-lg p-6 hover:border-sage-600 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sage-600 text-sm font-semibold">Total d'Utilisateurs</h3>
              <Users className="h-6 w-6 text-sage-600 opacity-50" />
            </div>
            <div className="text-3xl font-bold text-sage-900">{totalUsers}</div>
            <p className="text-xs text-sage-500 mt-2">Utilisateurs enregistrés</p>
          </div>

          <div className="bg-white border-2 border-sage-200 rounded-lg p-6 hover:border-sage-600 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sage-600 text-sm font-semibold">Total de Produits</h3>
              <Package className="h-6 w-6 text-sage-600 opacity-50" />
            </div>
            <div className="text-3xl font-bold text-sage-900">{totalProducts}</div>
            <p className="text-xs text-sage-500 mt-2">Produits au catalogue</p>
          </div>

          <div className="bg-white border-2 border-sage-200 rounded-lg p-6 hover:border-sage-600 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sage-600 text-sm font-semibold">Total des Commandes</h3>
              <ShoppingCart className="h-6 w-6 text-sage-600 opacity-50" />
            </div>
            <div className="text-3xl font-bold text-sage-900">{totalOrders}</div>
            <p className="text-xs text-sage-500 mt-2">Toutes les commandes</p>
          </div>

          <div className="bg-white border-2 border-sage-200 rounded-lg p-6 hover:border-sage-600 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sage-600 text-sm font-semibold">Commandes Acceptées</h3>
              <ShoppingCart className="h-6 w-6 text-green-600 opacity-50" />
            </div>
            <div className="text-3xl font-bold text-green-600">{acceptedOrders}</div>
            <p className="text-xs text-sage-500 mt-2">Commandes complétées</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Orders per day */}
          <div className="bg-white border-2 border-sage-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-sage-900 mb-6">Commandes par Jour</h2>
            {ordersPerDayData.length > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={ordersPerDayData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7a5" />
                  <XAxis dataKey="day" stroke="#78854f" />
                  <YAxis stroke="#78854f" />
                  <Tooltip contentStyle={{ backgroundColor: '#f4f3f1', border: '2px solid #78854f' }} />
                  <Line
                    type="monotone"
                    dataKey="orders"
                    stroke="#78854f"
                    strokeWidth={3}
                    dot={{ fill: '#78854f', r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <p className="text-center text-sage-500 py-8">Aucune donnée de commande</p>
            )}
          </div>

          {/* Order Status Distribution */}
          <div className="bg-white border-2 border-sage-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-sage-900 mb-6">Distribution des Statuts de Commande</h2>
            {totalOrders > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={orderStatusData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}`}
                    outerRadius={100}
                    fill="#78854f"
                    dataKey="value"
                  >
                    {orderStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: '#f4f3f1', border: '2px solid #78854f' }} />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <p className="text-center text-sage-500 py-8">Aucune donnée de commande</p>
            )}
          </div>
        </div>

        {/* Users and Products Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white border-2 border-sage-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-sage-900 mb-6">Croissance des Utilisateurs et Produits</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={[{ name: 'Nombre', users: totalUsers, products: totalProducts }]}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7a5" />
                <XAxis dataKey="name" stroke="#78854f" />
                <YAxis stroke="#78854f" />
                <Tooltip contentStyle={{ backgroundColor: '#f4f3f1', border: '2px solid #78854f' }} />
                <Legend />
                <Bar dataKey="users" fill="#78854f" />
                <Bar dataKey="products" fill="#a5b567" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white border-2 border-sage-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-sage-900 mb-6">Résumé des Commandes</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-sage-50 rounded-lg border border-sage-200">
                <span className="text-sage-700 font-semibold">Commandes en Attente</span>
                <span className="text-lg font-bold text-yellow-600">{pendingOrders}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-sage-50 rounded-lg border border-sage-200">
                <span className="text-sage-700 font-semibold">Commandes Acceptées</span>
                <span className="text-lg font-bold text-green-600">{acceptedOrders}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-sage-50 rounded-lg border border-sage-200">
                <span className="text-sage-700 font-semibold">Commandes Refusées</span>
                <span className="text-lg font-bold text-red-600">{refusedOrders}</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-sage-900 rounded-lg border-2 border-sage-800">
                <span className="text-white font-bold text-lg">Total des Commandes</span>
                <span className="text-2xl font-bold text-white">{totalOrders}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
