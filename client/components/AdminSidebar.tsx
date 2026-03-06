import { useAuth } from '@/contexts/AuthContext';
import { Link, useLocation } from 'react-router-dom';
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
      label: 'Dashboard',
      href: '/admin',
      icon: BarChart3,
    },
    {
      label: 'Users',
      href: '/admin/users',
      icon: Users,
    },
    {
      label: 'Products',
      href: '/admin/products',
      icon: Package,
    },
    {
      label: 'Orders',
      href: '/admin/orders',
      icon: ShoppingCart,
    },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="fixed top-4 right-4 z-50 md:hidden p-2 bg-slate-800 text-white rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-slate-900 text-white p-6 transform transition-transform md:transform-none z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Gomonovia</h1>
          <p className="text-sm text-slate-400">Admin Panel</p>
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
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-slate-700 pt-4">
          <Button
            onClick={() => {
              logout();
              setIsOpen(false);
            }}
            className="w-full flex items-center gap-2 bg-red-600 hover:bg-red-700"
          >
            <LogOut className="w-4 h-4" />
            Logout
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
      <main className="flex-1 md:ml-64 p-4 md:p-8 min-h-screen bg-slate-50">
        {children}
      </main>
    </div>
  );
};
