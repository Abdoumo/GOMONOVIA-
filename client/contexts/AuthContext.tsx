import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  getCurrentUser,
  setCurrentUser,
  addUser,
  getUserByEmail,
  AuthSession,
  initializeStorage,
} from '@/lib/storage';

interface AuthContextType {
  user: AuthSession | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signup: (name: string, email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  adminLogin: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthSession | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize localStorage on first load
    initializeStorage();
    const currentUser = getCurrentUser();
    setUser(currentUser);
    setLoading(false);
  }, []);

  const signup = async (
    name: string,
    email: string,
    password: string
  ): Promise<{ success: boolean; error?: string }> => {
    try {
      // Check if user already exists
      const existingUser = getUserByEmail(email);
      if (existingUser) {
        return { success: false, error: 'Email already registered' };
      }

      // Create new user
      const newUser = addUser({ name, email, password });

      // Set as current user
      const session: AuthSession = {
        userId: newUser.id,
        email: newUser.email,
        name: newUser.name,
        type: 'user',
      };
      setCurrentUser(session);
      setUser(session);

      return { success: true };
    } catch (error) {
      return { success: false, error: 'Failed to create account' };
    }
  };

  const login = async (
    email: string,
    password: string
  ): Promise<{ success: boolean; error?: string }> => {
    try {
      const user = getUserByEmail(email);

      if (!user || user.password !== password) {
        return { success: false, error: 'Invalid email or password' };
      }

      const session: AuthSession = {
        userId: user.id,
        email: user.email,
        name: user.name,
        type: 'user',
      };
      setCurrentUser(session);
      setUser(session);

      return { success: true };
    } catch (error) {
      return { success: false, error: 'Failed to login' };
    }
  };

  const adminLogin = async (
    email: string,
    password: string
  ): Promise<{ success: boolean; error?: string }> => {
    try {
      const ADMIN_EMAIL = 'admin@gomonovia.com';
      const ADMIN_PASSWORD = 'admins123';

      if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
        return { success: false, error: 'Invalid admin credentials' };
      }

      const session: AuthSession = {
        userId: 'admin',
        email: ADMIN_EMAIL,
        name: 'Admin',
        type: 'admin',
      };
      setCurrentUser(session);
      setUser(session);

      return { success: true };
    } catch (error) {
      return { success: false, error: 'Failed to login' };
    }
  };

  const logout = () => {
    setCurrentUser(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, adminLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
