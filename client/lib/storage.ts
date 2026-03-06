// Types
export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  createdAt: string;
}

export interface Order {
  id: string;
  userId: string;
  productId: string;
  productName: string;
  price: number;
  status: 'pending' | 'accepted' | 'refused';
  date: string;
  buyerEmail: string;
}

export interface AuthSession {
  userId: string;
  email: string;
  name: string;
  type: 'user' | 'admin';
}

// Initialize localStorage with default data
export const initializeStorage = () => {
  if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify([]));
  }
  if (!localStorage.getItem('products')) {
    localStorage.setItem('products', JSON.stringify([]));
  }
  if (!localStorage.getItem('orders')) {
    localStorage.setItem('orders', JSON.stringify([]));
  }
  if (!localStorage.getItem('currentUser')) {
    localStorage.setItem('currentUser', JSON.stringify(null));
  }
};

// User management
export const getUsers = (): User[] => {
  const data = localStorage.getItem('users');
  return data ? JSON.parse(data) : [];
};

export const saveUsers = (users: User[]) => {
  localStorage.setItem('users', JSON.stringify(users));
};

export const addUser = (user: Omit<User, 'id' | 'createdAt'>) => {
  const users = getUsers();
  const newUser: User = {
    ...user,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  };
  users.push(newUser);
  saveUsers(users);
  return newUser;
};

export const updateUser = (id: string, updates: Partial<User>) => {
  const users = getUsers();
  const index = users.findIndex((u) => u.id === id);
  if (index !== -1) {
    users[index] = { ...users[index], ...updates };
    saveUsers(users);
    return users[index];
  }
  return null;
};

export const deleteUser = (id: string) => {
  const users = getUsers();
  const filtered = users.filter((u) => u.id !== id);
  saveUsers(filtered);
};

export const getUserByEmail = (email: string) => {
  const users = getUsers();
  return users.find((u) => u.email === email);
};

// Product management
export const getProducts = (): Product[] => {
  const data = localStorage.getItem('products');
  return data ? JSON.parse(data) : [];
};

export const saveProducts = (products: Product[]) => {
  localStorage.setItem('products', JSON.stringify(products));
};

export const addProduct = (product: Omit<Product, 'id' | 'createdAt'>) => {
  const products = getProducts();
  const newProduct: Product = {
    ...product,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  };
  products.push(newProduct);
  saveProducts(products);
  return newProduct;
};

export const updateProduct = (id: string, updates: Partial<Product>) => {
  const products = getProducts();
  const index = products.findIndex((p) => p.id === id);
  if (index !== -1) {
    products[index] = { ...products[index], ...updates };
    saveProducts(products);
    return products[index];
  }
  return null;
};

export const deleteProduct = (id: string) => {
  const products = getProducts();
  const filtered = products.filter((p) => p.id !== id);
  saveProducts(filtered);
};

export const getProductById = (id: string) => {
  const products = getProducts();
  return products.find((p) => p.id === id);
};

// Order management
export const getOrders = (): Order[] => {
  const data = localStorage.getItem('orders');
  return data ? JSON.parse(data) : [];
};

export const saveOrders = (orders: Order[]) => {
  localStorage.setItem('orders', JSON.stringify(orders));
};

export const addOrder = (order: Omit<Order, 'id' | 'date'>) => {
  const orders = getOrders();
  const newOrder: Order = {
    ...order,
    id: Date.now().toString(),
    date: new Date().toISOString(),
  };
  orders.push(newOrder);
  saveOrders(orders);
  return newOrder;
};

export const updateOrder = (id: string, updates: Partial<Order>) => {
  const orders = getOrders();
  const index = orders.findIndex((o) => o.id === id);
  if (index !== -1) {
    orders[index] = { ...orders[index], ...updates };
    saveOrders(orders);
    return orders[index];
  }
  return null;
};

export const getUserOrders = (userId: string): Order[] => {
  const orders = getOrders();
  return orders.filter((o) => o.userId === userId);
};

// Authentication
export const getCurrentUser = (): AuthSession | null => {
  const data = localStorage.getItem('currentUser');
  return data ? JSON.parse(data) : null;
};

export const setCurrentUser = (user: AuthSession | null) => {
  localStorage.setItem('currentUser', JSON.stringify(user));
};

export const isAdminLoggedIn = (): boolean => {
  const user = getCurrentUser();
  return user?.type === 'admin' ? true : false;
};

export const isUserLoggedIn = (): boolean => {
  const user = getCurrentUser();
  return user?.type === 'user' ? true : false;
};
