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
    const statusLabels = {
      pending: 'En Attente',
      accepted: 'Acceptée',
      refused: 'Refusée'
    };
    toast({
      title: 'Succès',
      description: `Statut de la commande mis à jour à ${statusLabels[newStatus]}`,
    });
  };

  const handleContactBuyer = (email: string, productName: string) => {
    const subject = encodeURIComponent(`Votre Commande GOMONOVIA - ${productName}`);
    const body = encodeURIComponent(
      `Cher Client,\n\nMerci pour votre commande de ${productName} chez GOMONOVIA.\n\nCordialement,\nÉquipe GOMONOVIA`
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
      accepted: { label: 'Acceptée', variant: 'default' as const },
      refused: { label: 'Refusée', variant: 'destructive' as const },
      pending: { label: 'En Attente', variant: 'outline' as const },
    };
    const config = statusConfig[status as keyof typeof statusConfig] || { label: status, variant: 'outline' as const };
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold text-sage-900">Gestion des Commandes</h1>
          <p className="text-sage-600 mt-2">Gérez les commandes des clients</p>
        </div>

        {/* Filter */}
        <div className="flex gap-4">
          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Filtrer par statut" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toutes les Commandes</SelectItem>
              <SelectItem value="pending">En Attente</SelectItem>
              <SelectItem value="accepted">Acceptée</SelectItem>
              <SelectItem value="refused">Refusée</SelectItem>
            </SelectContent>
          </Select>
          <div className="text-sm text-sage-600">
            Affichage de {filteredOrders.length} sur {orders.length} commandes
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
                    <tr className="border-b-2 border-sage-200 bg-sage-50">
                      <th className="text-left py-4 px-4 font-bold text-sage-900">N° Commande</th>
                      <th className="text-left py-4 px-4 font-bold text-sage-900">Produit</th>
                      <th className="text-left py-4 px-4 font-bold text-sage-900">Email Acheteur</th>
                      <th className="text-left py-4 px-4 font-bold text-sage-900">Prix</th>
                      <th className="text-left py-4 px-4 font-bold text-sage-900">Date</th>
                      <th className="text-left py-4 px-4 font-bold text-sage-900">Statut</th>
                      <th className="text-left py-4 px-4 font-bold text-sage-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredOrders.map((order) => (
                      <tr key={order.id} className="border-b border-sage-100 hover:bg-sage-50 transition-colors">
                        <td className="py-4 px-4 text-sm font-mono text-sage-900">{order.id.slice(-8)}</td>
                        <td className="py-4 px-4 text-sage-900">{order.productName}</td>
                        <td className="py-4 px-4 text-sm text-sage-700">{order.buyerEmail}</td>
                        <td className="py-4 px-4 font-bold text-sage-900">{order.price.toLocaleString('fr-FR')} DA</td>
                        <td className="py-4 px-4 text-sm text-sage-600">
                          {format(new Date(order.date), 'dd MMM yyyy')}
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
                                <SelectItem value="pending">En Attente</SelectItem>
                                <SelectItem value="accepted">Accepter</SelectItem>
                                <SelectItem value="refused">Refuser</SelectItem>
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
