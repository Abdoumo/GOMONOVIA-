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
        title: 'Error',
        description: 'Please fill in all fields',
        variant: 'destructive',
      });
      return;
    }

    const price = parseFloat(form.price);
    if (isNaN(price) || price <= 0) {
      toast({
        title: 'Error',
        description: 'Price must be a valid positive number',
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
        title: 'Success',
        description: 'Product updated successfully',
      });
    } else {
      addProduct({
        name: form.name,
        description: form.description,
        price,
        image: form.image,
      });
      toast({
        title: 'Success',
        description: 'Product created successfully',
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
    if (window.confirm('Are you sure you want to delete this product?')) {
      deleteProduct(productId);
      setProducts(getProducts());
      toast({
        title: 'Success',
        description: 'Product deleted successfully',
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
            <h1 className="text-3xl font-bold text-gray-900">Products Management</h1>
            <p className="text-gray-500 mt-2">Manage product catalog</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => handleCloseDialog()}>
                <Plus className="w-4 h-4 mr-2" />
                Add Product
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{editingId ? 'Edit Product' : 'Add New Product'}</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Product Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleFormChange}
                    placeholder="Product name"
                  />
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <textarea
                    id="description"
                    name="description"
                    value={form.description}
                    onChange={handleFormChange}
                    placeholder="Product description"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    rows={3}
                  />
                </div>
                <div>
                  <Label htmlFor="price">Price</Label>
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
                  <Label htmlFor="image">Image URL</Label>
                  <Input
                    id="image"
                    name="image"
                    value={form.image}
                    onChange={handleFormChange}
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  {editingId ? 'Update Product' : 'Create Product'}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <Card>
            <CardContent className="pt-6">
              <p className="text-center text-gray-500 py-8">No products found</p>
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
                  <p className="text-lg font-bold text-blue-600 mt-3">
                    ${product.price.toFixed(2)}
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
