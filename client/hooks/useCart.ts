import { useState, useEffect } from "react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
}

const CART_STORAGE_KEY = "gomonovia_cart";

export function useCart() {
  const [cart, setCart] = useState<Cart>({ items: [], total: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        setCart(parsedCart);
      } catch (error) {
        console.error("Error loading cart:", error);
        setCart({ items: [], total: 0 });
      }
    }
    setIsLoaded(true);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    }
  }, [cart, isLoaded]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.items.find((i) => i.id === item.id);

      let newItems: CartItem[];
      if (existingItem) {
        newItems = prevCart.items.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      } else {
        newItems = [...prevCart.items, item];
      }

      const newTotal = newItems.reduce(
        (sum, i) => sum + i.price * i.quantity,
        0
      );

      return { items: newItems, total: newTotal };
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCart((prevCart) => {
      const newItems =
        quantity <= 0
          ? prevCart.items.filter((i) => i.id !== id)
          : prevCart.items.map((i) =>
              i.id === id ? { ...i, quantity } : i
            );

      const newTotal = newItems.reduce(
        (sum, i) => sum + i.price * i.quantity,
        0
      );

      return { items: newItems, total: newTotal };
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => {
      const newItems = prevCart.items.filter((i) => i.id !== id);
      const newTotal = newItems.reduce(
        (sum, i) => sum + i.price * i.quantity,
        0
      );
      return { items: newItems, total: newTotal };
    });
  };

  const clearCart = () => {
    setCart({ items: [], total: 0 });
  };

  const getItemCount = () => {
    return cart.items.reduce((sum, item) => sum + item.quantity, 0);
  };

  return {
    cart,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    getItemCount,
    isLoaded,
  };
}
