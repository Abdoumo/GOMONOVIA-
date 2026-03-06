import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, LogOut } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { useAuth } from "@/contexts/AuthContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getItemCount } = useCart();
  const { user, logout } = useAuth();
  const itemCount = getItemCount();

  const navLinks = [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/about" },
    { label: "Produit", href: "/product" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-sage-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-bold text-sage-900"
          >
            <img src="/logo.png" className="w-10" alt="" />
            <span>GOMONOVIA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sage-700 hover:text-sage-900 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-4">
              <Link
                to="/cart"
                className="relative p-2 text-sage-700 hover:bg-sage-100 rounded-lg transition-colors"
              >
                <ShoppingCart size={24} />
                {itemCount > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {itemCount}
                  </span>
                )}
              </Link>
              {user ? (
                <>
                  <Link
                    to={user.type === "admin" ? "/admin" : "/dashboard"}
                    className="text-sage-700 hover:text-sage-900 font-medium transition-colors"
                  >
                    {user.type === "admin" ? "Admin" : "Dashboard"}
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      window.location.href = "/";
                    }}
                    className="text-sage-700 hover:text-sage-900 font-medium transition-colors flex items-center gap-2"
                  >
                    <LogOut size={20} />
                    Se déconnecter
                  </button>
                </>
              ) : (
                <Link
                  to="/signin"
                  className="text-sage-700 hover:text-sage-900 font-medium transition-colors"
                >
                  Connexion
                </Link>
              )}
              <Link
                to="/product"
                className="bg-sage-600 text-white px-6 py-2 rounded-lg hover:bg-sage-700 transition-colors font-medium"
              >
                Commander
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-sage-700 hover:bg-sage-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block px-4 py-2 text-sage-700 hover:bg-sage-100 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/cart"
              className="block px-4 py-2 text-sage-700 hover:bg-sage-100 rounded-lg transition-colors flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <ShoppingCart size={20} />
              <span>Panier {itemCount > 0 && `(${itemCount})`}</span>
            </Link>
            {user ? (
              <>
                <Link
                  to={user.type === "admin" ? "/admin" : "/dashboard"}
                  className="block px-4 py-2 text-sage-700 hover:bg-sage-100 rounded-lg transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {user.type === "admin" ? "Admin" : "Dashboard"}
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                    window.location.href = "/";
                  }}
                  className="block w-full text-left px-4 py-2 text-sage-700 hover:bg-sage-100 rounded-lg transition-colors font-medium flex items-center gap-2"
                >
                  <LogOut size={20} />
                  Se déconnecter
                </button>
              </>
            ) : (
              <Link
                to="/signin"
                className="block px-4 py-2 text-sage-700 hover:bg-sage-100 rounded-lg transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Connexion
              </Link>
            )}
            <Link
              to="/product"
              className="block w-full text-center bg-sage-600 text-white px-4 py-2 rounded-lg hover:bg-sage-700 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Commander
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
