
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const CartIcon: React.FC = () => {
  const { getItemCount } = useCart();
  const itemCount = getItemCount();

  return (
    <Button variant="ghost" size="icon" className="relative">
      <ShoppingCart className="h-5 w-5" />
      {itemCount > 0 && (
        <Badge 
          className="absolute -top-1 -right-1 bg-autoparts-blue text-white text-xs h-5 w-5 flex items-center justify-center p-0 rounded-full"
        >
          {itemCount}
        </Badge>
      )}
    </Button>
  );
};

export default CartIcon;
