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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-2xl p-8">
        <div className="flex justify-center mb-4">
          <div className="bg-red-100 p-3 rounded-lg">
            <Lock className="w-6 h-6 text-red-600" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-center mb-2 text-gray-900">
          Admin Portal
        </h1>
        <p className="text-center text-gray-600 mb-8">Sign in to admin dashboard</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="admin@gomonovia.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white"
            disabled={loading}
          >
            {loading ? 'Signing In...' : 'Admin Sign In'}
          </Button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          <Link to="/signin" className="text-blue-600 hover:underline">
            User Login
          </Link>
          {' | '}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
