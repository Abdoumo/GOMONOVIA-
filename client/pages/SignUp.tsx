import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !password) {
      toast({
        title: 'Error',
        description: 'Please fill in all fields',
        variant: 'destructive',
      });
      return;
    }

    if (password !== confirmPassword) {
      toast({
        title: 'Error',
        description: 'Passwords do not match',
        variant: 'destructive',
      });
      return;
    }

    if (password.length < 6) {
      toast({
        title: 'Error',
        description: 'Password must be at least 6 characters',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);
    const result = await signup(name, email, password);
    setLoading(false);

    if (result.success) {
      toast({
        title: 'Success',
        description: 'Account created successfully!',
      });
      navigate('/');
    } else {
      toast({
        title: 'Error',
        description: result.error || 'Failed to create account',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sage-50 to-sage-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border-2 border-sage-200 p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-sage-900 mb-2">
            Créer un Compte
          </h1>
          <p className="text-sage-600">Rejoignez GOMONOVIA aujourd'hui</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <Label htmlFor="name" className="text-sage-900 font-semibold">Nom Complet</Label>
            <Input
              id="name"
              type="text"
              placeholder="Jean Dupont"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={loading}
              className="mt-2 border-2 border-sage-200 focus:border-sage-600"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-sage-900 font-semibold">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="jean@example.com"
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

          <div>
            <Label htmlFor="confirmPassword" className="text-sage-900 font-semibold">Confirmer le Mot de Passe</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              disabled={loading}
              className="mt-2 border-2 border-sage-200 focus:border-sage-600"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-sage-600 hover:bg-sage-700 text-white font-semibold py-3 rounded-lg transition-colors mt-6"
            disabled={loading}
          >
            {loading ? 'Création en cours...' : 'Créer un Compte'}
          </Button>
        </form>

        <div className="space-y-4 mt-8">
          <p className="text-center text-sage-600">
            Vous avez déjà un compte?{' '}
            <Link to="/signin" className="text-sage-600 hover:text-sage-900 font-bold underline">
              Se connecter
            </Link>
          </p>

          <p className="text-center text-sm text-sage-500">
            Admin?{' '}
            <Link to="/admin-login" className="text-sage-600 hover:text-sage-900 font-semibold">
              Connectez-vous ici
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
