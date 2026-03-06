import { useState, useMemo } from 'react';
import { AdminLayout } from '@/components/AdminSidebar';
import { getProducts, deleteProduct, addProduct, updateProduct } from '@/lib/storage';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Trash2, Edit2, Plus, Search } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';

interface ProductForm {
  name: string;
  description: string;
  price: string;
  image: string;
}

const initialFormState: ProductForm = {
  name: '',
  description: '',
  price: '',
  image: '',
};

export default function AdminProducts() {
  const [products, setProducts] = useState(getProducts());
  const [searchTerm, setSearchTerm] = useState('');
  const [form, setForm] = useState<ProductForm>(initialFormState);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.description || !form.price || !form.image) {
      toast({
        title: 'Erreur',
        description: 'Veuillez remplir tous les champs',
        variant: 'destructive',
      });
      return;
    }

    const price = parseFloat(form.price);
    if (isNaN(price) || price <= 0) {
      toast({
        title: 'Erreur',
        description: 'Le prix doit être un nombre positif valide',
        variant: 'destructive',
      });
      return;
    }

    if (editingId) {
      updateProduct(editingId, {
        name: form.name,
        description: form.description,
        price,
        image: form.image,
      });
      toast({
        title: 'Succès',
        description: 'Produit mis à jour avec succès',
      });
    } else {
      addProduct({
        name: form.name,
        description: form.description,
        price,
        image: form.image,
      });
      toast({
        title: 'Succès',
        description: 'Produit créé avec succès',
      });
    }

    setProducts(getProducts());
    setForm(initialFormState);
    setEditingId(null);
    setIsDialogOpen(false);
  };

  const handleEdit = (product: typeof products[0]) => {
    setForm({
      name: product.name,
      description: product.description,
      price: product.price.toString(),
      image: product.image,
    });
    setEditingId(product.id);
    setIsDialogOpen(true);
  };

  const handleDelete = (productId: string) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce produit?')) {
      deleteProduct(productId);
      setProducts(getProducts());
      toast({
        title: 'Succès',
        description: 'Produit supprimé avec succès',
      });
    }
  };

  const handleCloseDialog = () => {
    setForm(initialFormState);
    setEditingId(null);
    setIsDialogOpen(false);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-sage-900">Gestion des Produits</h1>
            <p className="text-sage-600 mt-2">Gérez le catalogue de produits</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-sage-600 hover:bg-sage-700 text-white" onClick={() => handleCloseDialog()}>
                <Plus className="w-4 h-4 mr-2" />
                Ajouter un Produit
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{editingId ? 'Éditer le Produit' : 'Ajouter un Nouveau Produit'}</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Nom du Produit</Label>
                  <Input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleFormChange}
                    placeholder="Nom du produit"
                  />
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <textarea
                    id="description"
                    name="description"
                    value={form.description}
                    onChange={handleFormChange}
                    placeholder="Description du produit"
                    className="w-full p-2 border-2 border-sage-200 rounded-md"
                    rows={3}
                  />
                </div>
                <div>
                  <Label htmlFor="price">Prix (DA)</Label>
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    step="0.01"
                    value={form.price}
                    onChange={handleFormChange}
                    placeholder="0.00"
                  />
                </div>
                <div>
                  <Label htmlFor="image">URL de l'Image</Label>
                  <Input
                    id="image"
                    name="image"
                    value={form.image}
                    onChange={handleFormChange}
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
                <Button type="submit" className="w-full bg-sage-600 hover:bg-sage-700 text-white">
                  {editingId ? 'Éditer le Produit' : 'Créer un Produit'}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Rechercher des produits..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 border-2 border-sage-200"
          />
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <Card>
            <CardContent className="pt-6">
              <p className="text-center text-sage-600 py-8">Aucun produit trouvé</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/200';
                    }}
                  />
                  <h3 className="font-semibold text-gray-900 line-clamp-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mt-2 line-clamp-2">{product.description}</p>
                  <p className="text-lg font-bold text-sage-600 mt-3">
                    {product.price.toLocaleString('fr-FR')} DA
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    {format(new Date(product.createdAt), 'MMM dd, yyyy')}
                  </p>
                  <div className="flex gap-2 mt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => handleEdit(product)}
                    >
                      <Edit2 className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      className="flex-1"
                      onClick={() => handleDelete(product.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
