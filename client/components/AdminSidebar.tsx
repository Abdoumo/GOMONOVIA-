import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import {
  BarChart3,
  Users,
  Package,
  ShoppingCart,
  LogOut,
  Menu,
  X,
} from 'lucide-react';
import { useState } from 'react';

export const AdminSidebar = () => {
  const { logout } = useAuth();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      label: 'Tableau de Bord',
      href: '/admin',
      icon: BarChart3,
    },
    {
      label: 'Utilisateurs',
      href: '/admin/users',
      icon: Users,
    },
    {
      label: 'Commandes',
      href: '/admin/orders',
      icon: ShoppingCart,
    },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="fixed top-4 right-4 z-50 md:hidden p-2 bg-sage-600 text-white rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-sage-900 text-white p-6 transform transition-transform md:transform-none z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="mb-8">
          <h1 className="text-2xl font-bold">GOMONOVIA</h1>
          <p className="text-sm text-sage-300">Espace Admin</p>
        </div>

        <nav className="space-y-2 mb-8">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  active
                    ? 'bg-sage-600 text-white'
                    : 'text-sage-200 hover:bg-sage-800'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-sage-700 pt-4">
          <Button
            onClick={() => {
              logout();
              setIsOpen(false);
            }}
            className="w-full flex items-center gap-2 bg-sage-600 hover:bg-sage-700 text-white"
          >
            <LogOut className="w-4 h-4" />
            Se déconnecter
          </Button>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <AdminSidebar />
      <main className="flex-1 md:ml-64 p-4 md:p-8 min-h-screen bg-white">
        {children}
      </main>
    </div>
  );
};
