import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface ProtectedRouteProps {
  children: ReactNode;
  requiredType?: 'user' | 'admin';
}

export const ProtectedRoute = ({
  children,
  requiredType = 'user',
}: ProtectedRouteProps) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to={requiredType === 'admin' ? '/admin-login' : '/signin'} replace />;
  }

  if (requiredType && user.type !== requiredType) {
    return <Navigate to={requiredType === 'admin' ? '/admin-login' : '/signin'} replace />;
  }

  return <>{children}</>;
};
