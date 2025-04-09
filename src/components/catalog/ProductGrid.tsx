
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  brand: string;
}

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const { addItem } = useCart();

  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <div className="h-40 overflow-hidden bg-white p-4 flex items-center justify-center">
            <img 
              src={`https://source.unsplash.com/${product.image}`} 
              alt={product.name} 
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="font-semibold mb-1">{product.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{product.brand}</p>
            <div className="flex justify-between items-center">
              <p className="font-bold text-autoparts-blue">${product.price}</p>
              <div className="flex items-center">
                <span className="text-yellow-500">★</span>
                <span className="text-sm ml-1">{product.rating}</span>
              </div>
            </div>
            <div className="mt-3 space-y-2">
              <Button 
                className="w-full bg-autoparts-blue hover:bg-autoparts-lightblue"
                onClick={() => handleAddToCart(product)}
              >
                <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
              </Button>
              <Button variant="outline" className="w-full">View Details</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProductGrid;
