import { useState, useMemo } from 'react';
import { AdminLayout } from '@/components/AdminSidebar';
import { getOrders, updateOrder } from '@/lib/storage';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CheckCircle, XCircle, Clock, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';

export default function AdminOrders() {
  const [orders, setOrders] = useState(getOrders());
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const { toast } = useToast();

  const filteredOrders = useMemo(() => {
    if (filterStatus === 'all') return orders;
    return orders.filter((order) => order.status === filterStatus);
  }, [orders, filterStatus]);

  const handleStatusChange = (orderId: string, newStatus: 'pending' | 'accepted' | 'refused') => {
    updateOrder(orderId, { status: newStatus });
    setOrders(getOrders());
    toast({
      title: 'Success',
      description: `Order status updated to ${newStatus}`,
    });
  };

  const handleContactBuyer = (email: string, productName: string) => {
    const subject = encodeURIComponent(`Your Gomonovia Order - ${productName}`);
    const body = encodeURIComponent(
      `Dear Customer,\n\nThank you for your order of ${productName} from Gomonovia.\n\nBest regards,\nGomonovia Team`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'accepted':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'refused':
        return <XCircle className="w-5 h-5 text-red-600" />;
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-600" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      accepted: { label: 'Accepted', variant: 'default' as const },
      refused: { label: 'Refused', variant: 'destructive' as const },
      pending: { label: 'Pending', variant: 'outline' as const },
    };
    const config = statusConfig[status as keyof typeof statusConfig] || { label: status, variant: 'outline' as const };
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Orders Management</h1>
          <p className="text-gray-500 mt-2">Manage customer orders</p>
        </div>

        {/* Filter */}
        <div className="flex gap-4">
          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Orders</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="accepted">Accepted</SelectItem>
              <SelectItem value="refused">Refused</SelectItem>
            </SelectContent>
          </Select>
          <div className="text-sm text-gray-600">
            Showing {filteredOrders.length} of {orders.length} orders
          </div>
        </div>

        {/* Orders Table */}
        <Card>
          <CardContent className="pt-6">
            {filteredOrders.length === 0 ? (
              <p className="text-center text-gray-500 py-8">No orders found</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Order ID</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Product</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Buyer Email</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Price</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Date</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredOrders.map((order) => (
                      <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-sm font-mono">{order.id.slice(-8)}</td>
                        <td className="py-3 px-4">{order.productName}</td>
                        <td className="py-3 px-4 text-sm">{order.buyerEmail}</td>
                        <td className="py-3 px-4 font-semibold">${order.price.toFixed(2)}</td>
                        <td className="py-3 px-4 text-sm text-gray-600">
                          {format(new Date(order.date), 'MMM dd, yyyy')}
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            {getStatusIcon(order.status)}
                            {getStatusBadge(order.status)}
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex gap-2 flex-wrap">
                            <Select
                              value={order.status}
                              onValueChange={(value) =>
                                handleStatusChange(
                                  order.id,
                                  value as 'pending' | 'accepted' | 'refused'
                                )
                              }
                            >
                              <SelectTrigger className="w-28 h-8">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="pending">Pending</SelectItem>
                                <SelectItem value="accepted">Accept</SelectItem>
                                <SelectItem value="refused">Refuse</SelectItem>
                              </SelectContent>
                            </Select>

                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                handleContactBuyer(order.buyerEmail, order.productName)
                              }
                            >
                              <Mail className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
