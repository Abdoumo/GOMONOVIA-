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
import { format, parse, startOfDay } from 'date-fns';

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
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500 mt-2">Welcome back to the admin panel</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalUsers}</div>
              <p className="text-xs text-gray-500">Registered users</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Products</CardTitle>
              <Package className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalProducts}</div>
              <p className="text-xs text-gray-500">Products in catalog</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
              <ShoppingCart className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalOrders}</div>
              <p className="text-xs text-gray-500">All orders</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Accepted Orders</CardTitle>
              <ShoppingCart className="h-4 w-4 text-emerald-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{acceptedOrders}</div>
              <p className="text-xs text-gray-500">Completed orders</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Orders per day */}
          <Card>
            <CardHeader>
              <CardTitle>Orders per Day</CardTitle>
            </CardHeader>
            <CardContent>
              {ordersPerDayData.length > 0 ? (
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={ordersPerDayData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="orders"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      dot={{ fill: '#3b82f6' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              ) : (
                <p className="text-center text-gray-500 py-8">No order data</p>
              )}
            </CardContent>
          </Card>

          {/* Order Status Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Order Status Distribution</CardTitle>
            </CardHeader>
            <CardContent>
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
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {orderStatusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              ) : (
                <p className="text-center text-gray-500 py-8">No order data</p>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Users and Products Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Users and Products Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={[{ name: 'Count', users: totalUsers, products: totalProducts }]}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="users" fill="#3b82f6" />
                  <Bar dataKey="products" fill="#8b5cf6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Pending Orders</span>
                  <span className="text-lg font-semibold text-yellow-600">{pendingOrders}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Accepted Orders</span>
                  <span className="text-lg font-semibold text-green-600">{acceptedOrders}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Refused Orders</span>
                  <span className="text-lg font-semibold text-red-600">{refusedOrders}</span>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between items-center">
                  <span className="text-gray-900 font-semibold">Total Orders</span>
                  <span className="text-lg font-bold">{totalOrders}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}
