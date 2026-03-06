import { useState, useMemo } from 'react';
import { AdminLayout } from '@/components/AdminSidebar';
import { getUsers, deleteUser, updateUser } from '@/lib/storage';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Trash2, Edit2, Search } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';

export default function AdminUsers() {
  const [users, setUsers] = useState(getUsers());
  const [searchTerm, setSearchTerm] = useState('');
  const [editingUser, setEditingUser] = useState<typeof users[0] | null>(null);
  const [editName, setEditName] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const { toast } = useToast();

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [users, searchTerm]);

  const handleDelete = (userId: string) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur?')) {
      deleteUser(userId);
      setUsers(getUsers());
      toast({
        title: 'Succès',
        description: 'Utilisateur supprimé avec succès',
      });
    }
  };

  const handleEdit = (user: typeof users[0]) => {
    setEditingUser(user);
    setEditName(user.name);
    setEditEmail(user.email);
  };

  const handleSaveEdit = () => {
    if (!editingUser) return;

    if (!editName || !editEmail) {
      toast({
        title: 'Erreur',
        description: 'Veuillez remplir tous les champs',
        variant: 'destructive',
      });
      return;
    }

    updateUser(editingUser.id, {
      name: editName,
      email: editEmail,
    });

    setUsers(getUsers());
    setEditingUser(null);
    toast({
      title: 'Succès',
      description: 'Utilisateur mis à jour avec succès',
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold text-sage-900">Gestion des Utilisateurs</h1>
          <p className="text-sage-600 mt-2">Gérez les utilisateurs du système</p>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-sage-400" />
          <Input
            placeholder="Rechercher des utilisateurs par nom ou email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 border-2 border-sage-200"
          />
        </div>

        {/* Users Table */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sage-900">Tous les Utilisateurs ({filteredUsers.length})</CardTitle>
          </CardHeader>
          <CardContent>
            {filteredUsers.length === 0 ? (
              <p className="text-center text-sage-600 py-8">Aucun utilisateur trouvé</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-sage-200 bg-sage-50">
                      <th className="text-left py-4 px-4 font-bold text-sage-900">Nom</th>
                      <th className="text-left py-4 px-4 font-bold text-sage-900">Email</th>
                      <th className="text-left py-4 px-4 font-bold text-sage-900">Inscrit</th>
                      <th className="text-left py-4 px-4 font-bold text-sage-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.map((user) => (
                      <tr key={user.id} className="border-b border-sage-100 hover:bg-sage-50 transition-colors">
                        <td className="py-4 px-4 text-sage-900">{user.name}</td>
                        <td className="py-4 px-4 text-sage-700">{user.email}</td>
                        <td className="py-4 px-4 text-sm text-sage-600">
                          {format(new Date(user.createdAt), 'dd MMM yyyy')}
                        </td>
                        <td className="py-3 px-4 flex gap-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleEdit(user)}
                              >
                                <Edit2 className="w-4 h-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle className="text-sage-900">Modifier l'Utilisateur</DialogTitle>
                              </DialogHeader>
                              <div className="space-y-4">
                                <div>
                                  <Label htmlFor="edit-name" className="text-sage-900">Nom</Label>
                                  <Input
                                    id="edit-name"
                                    value={editName}
                                    onChange={(e) => setEditName(e.target.value)}
                                    className="border-2 border-sage-200"
                                  />
                                </div>
                                <div>
                                  <Label htmlFor="edit-email" className="text-sage-900">Email</Label>
                                  <Input
                                    id="edit-email"
                                    type="email"
                                    value={editEmail}
                                    onChange={(e) => setEditEmail(e.target.value)}
                                    className="border-2 border-sage-200"
                                  />
                                </div>
                                <Button
                                  onClick={handleSaveEdit}
                                  className="w-full bg-sage-600 hover:bg-sage-700 text-white"
                                >
                                  Enregistrer les modifications
                                </Button>
                              </div>
                            </DialogContent>
                          </Dialog>

                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => handleDelete(user.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
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
