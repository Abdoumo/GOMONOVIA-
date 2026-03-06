import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Lock } from 'lucide-react';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { adminLogin } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast({
        title: 'Error',
        description: 'Please fill in all fields',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);
    const result = await adminLogin(email, password);
    setLoading(false);

    if (result.success) {
      toast({
        title: 'Success',
        description: 'Admin logged in successfully!',
      });
      navigate('/admin');
    } else {
      toast({
        title: 'Error',
        description: result.error || 'Failed to login',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sage-50 to-sage-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border-2 border-sage-200 p-8">
        <div className="flex justify-center mb-6">
          <div className="bg-sage-100 p-4 rounded-full">
            <Lock className="w-8 h-8 text-sage-600" />
          </div>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-sage-900 mb-2">
            Espace Admin
          </h1>
          <p className="text-sage-600">Connectez-vous au tableau de bord</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="email" className="text-sage-900 font-semibold">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="admin@gomonovia.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              className="mt-2 border-2 border-sage-200 focus:border-sage-600"
            />
          </div>

          <div>
            <Label htmlFor="password" className="text-sage-900 font-semibold">Mot de Passe</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              className="mt-2 border-2 border-sage-200 focus:border-sage-600"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-sage-600 hover:bg-sage-700 text-white font-semibold py-3 rounded-lg transition-colors"
            disabled={loading}
          >
            {loading ? 'Connexion en cours...' : 'Se Connecter'}
          </Button>
        </form>

        <div className="mt-8 pt-6 border-t border-sage-200">
          <p className="text-center text-sage-600">
            <Link to="/signin" className="text-sage-600 hover:text-sage-900 font-semibold">
              Connexion Utilisateur
            </Link>
            {' • '}
            <Link to="/signup" className="text-sage-600 hover:text-sage-900 font-semibold">
              Créer un Compte
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
