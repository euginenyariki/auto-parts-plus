
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { toast } from "@/hooks/use-toast";

// Define the cart item type
export interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

// Define the cart context type
interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getItemCount: () => number;
  getTotalPrice: () => number;
}

// Create the context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

// Cart provider component
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  // Add item to cart
  const addItem = (item: Omit<CartItem, 'quantity'>) => {
    setItems((currentItems) => {
      // Check if item already exists in cart
      const existingItem = currentItems.find((i) => i.id === item.id);
      
      if (existingItem) {
        // If item exists, increase quantity
        toast({
          title: "Cart updated",
          description: `${item.name} quantity increased`
        });
        
        return currentItems.map((i) => 
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        // If item doesn't exist, add it with quantity 1
        toast({
          title: "Item added to cart",
          description: `${item.name} added to your cart`
        });
        
        return [...currentItems, { ...item, quantity: 1 }];
      }
    });
  };

  // Remove item from cart
  const removeItem = (id: number) => {
    setItems((currentItems) => {
      const itemToRemove = currentItems.find(item => item.id === id);
      if (itemToRemove) {
        toast({
          title: "Item removed",
          description: `${itemToRemove.name} removed from your cart`
        });
      }
      return currentItems.filter((item) => item.id !== id);
    });
  };

  // Update item quantity
  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    
    setItems((currentItems) => 
      currentItems.map((item) => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  // Clear cart
  const clearCart = () => {
    setItems([]);
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart"
    });
  };

  // Get item count
  const getItemCount = () => {
    return items.reduce((count, item) => count + item.quantity, 0);
  };

  // Get total price
  const getTotalPrice = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <CartContext.Provider value={{ 
      items, 
      addItem, 
      removeItem, 
      updateQuantity, 
      clearCart,
      getItemCount,
      getTotalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};
