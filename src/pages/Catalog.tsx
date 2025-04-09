import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Search, Filter, ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const Catalog = () => {
  const { addItem } = useCart();
  
  const parts = [
    { id: 1, name: "OEM Air Filter", image: "photo-1581090464777-f3220bbe1b8b", price: 24.99, rating: 4.8, brand: "FilterMaster" },
    { id: 2, name: "Performance Brake Pads", image: "photo-1469041797191-50ace28483c3", price: 89.95, rating: 4.7, brand: "BrakeTech" },
    { id: 3, name: "Spark Plug Set", image: "photo-1498050108023-c5249f4df085", price: 32.50, rating: 4.9, brand: "SparkPro" },
    { id: 4, name: "Oil Filter", image: "photo-1485827404703-89b55fcc595e", price: 12.99, rating: 4.6, brand: "FilterMaster" },
    { id: 5, name: "Fuel Pump Assembly", image: "photo-1473091534298-04dcbce3278c", price: 119.99, rating: 4.5, brand: "FuelMax" },
    { id: 6, name: "Alternator", image: "photo-1488972685288-c3fd157d7c7a", price: 179.95, rating: 4.4, brand: "ElectroPro" },
    { id: 7, name: "Serpentine Belt", image: "photo-1518005020951-eccb494ad742", price: 29.95, rating: 4.6, brand: "BeltMaster" },
    { id: 8, name: "Water Pump", image: "photo-1487058792275-0ad4aaf24ca7", price: 64.99, rating: 4.7, brand: "CoolFlow" },
    { id: 9, name: "Radiator", image: "photo-1494891848038-7bd202a2afeb", price: 159.99, rating: 4.5, brand: "CoolFlow" },
    { id: 10, name: "Oxygen Sensor", image: "photo-1460574283810-2aab119d8511", price: 49.99, rating: 4.8, brand: "SensorTech" },
    { id: 11, name: "Thermostat", image: "photo-1485833077593-4278bba3f11f", price: 19.99, rating: 4.7, brand: "TempControl" },
    { id: 12, name: "Ignition Coil", image: "photo-1452960962994-acf4fd70b632", price: 42.50, rating: 4.6, brand: "SparkPro" },
  ];

  const categories = [
    "Air Intake & Fuel Delivery",
    "Brakes & Components",
    "Electrical Components",
    "Engine Parts & Accessories",
    "Exhaust & Emission Systems",
    "Filters (Oil, Air, Fuel)",
    "Ignition Parts",
    "Suspension & Steering",
    "Transmission & Drivetrain"
  ];

  const brands = [
    "BrakeTech",
    "CoolFlow",
    "ElectroPro",
    "FilterMaster",
    "FuelMax",
    "SparkPro",
    "SensorTech",
    "TempControl",
    "BeltMaster"
  ];

  const handleAddToCart = (part: typeof parts[0]) => {
    addItem({
      id: part.id,
      name: part.name,
      image: part.image,
      price: part.price
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Parts Catalog</h1>
        <p className="text-gray-600 mb-8">Browse our extensive collection of auto parts for all makes and models.</p>

        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Input 
              type="text" 
              placeholder="Search parts by name, brand, or part number..." 
              className="pl-10"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <div className="flex gap-2">
            <Select defaultValue="relevance">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Relevance</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="name-asc">Name: A to Z</SelectItem>
                <SelectItem value="name-desc">Name: Z to A</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="bg-white p-6 rounded-lg border h-fit">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Filters</h2>
              <Button variant="ghost" size="sm">Clear All</Button>
            </div>

            {/* Vehicle Filter */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Your Vehicle</h3>
              <Button variant="outline" className="w-full justify-start">
                <Filter className="mr-2 h-4 w-4" /> 
                Select Your Vehicle
              </Button>
            </div>

            {/* Category Filter */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Categories</h3>
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {categories.map((category, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <Checkbox id={`category-${i}`} />
                    <Label htmlFor={`category-${i}`} className="text-sm cursor-pointer">{category}</Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Brand Filter */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Brands</h3>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {brands.map((brand, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <Checkbox id={`brand-${i}`} />
                    <Label htmlFor={`brand-${i}`} className="text-sm cursor-pointer">{brand}</Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Range Filter */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Price Range</h3>
              <div className="px-2">
                <Slider defaultValue={[0, 200]} min={0} max={200} step={10} />
                <div className="flex justify-between mt-2 text-sm text-gray-500">
                  <span>$0</span>
                  <span>$200+</span>
                </div>
              </div>
            </div>

            {/* Rating Filter */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Rating</h3>
              <div className="space-y-2">
                {[4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center space-x-2">
                    <Checkbox id={`rating-${rating}`} />
                    <Label htmlFor={`rating-${rating}`} className="text-sm cursor-pointer flex items-center">
                      {Array(rating).fill(0).map((_, i) => (
                        <span key={i} className="text-yellow-500">★</span>
                      ))}
                      {Array(5-rating).fill(0).map((_, i) => (
                        <span key={i} className="text-gray-300">★</span>
                      ))}
                      <span className="ml-1">& Up</span>
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Apply Filters Button */}
            <Button className="w-full bg-autoparts-blue hover:bg-autoparts-lightblue">Apply Filters</Button>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {parts.map((part) => (
                <Card key={part.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-40 overflow-hidden bg-white p-4 flex items-center justify-center">
                    <img 
                      src={`https://source.unsplash.com/${part.image}`} 
                      alt={part.name} 
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-1">{part.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">{part.brand}</p>
                    <div className="flex justify-between items-center">
                      <p className="font-bold text-autoparts-blue">${part.price}</p>
                      <div className="flex items-center">
                        <span className="text-yellow-500">★</span>
                        <span className="text-sm ml-1">{part.rating}</span>
                      </div>
                    </div>
                    <div className="mt-3 space-y-2">
                      <Button 
                        className="w-full bg-autoparts-blue hover:bg-autoparts-lightblue"
                        onClick={() => handleAddToCart(part)}
                      >
                        <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                      </Button>
                      <Button variant="outline" className="w-full">View Details</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <nav className="flex space-x-1">
                <Button variant="outline" size="icon" disabled>
                  &lsaquo;
                </Button>
                <Button variant="default" size="icon" className="bg-autoparts-blue">1</Button>
                <Button variant="outline" size="icon">2</Button>
                <Button variant="outline" size="icon">3</Button>
                <Button variant="outline" size="icon">4</Button>
                <Button variant="outline" size="icon">5</Button>
                <Button variant="outline" size="icon">
                  &rsaquo;
                </Button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Catalog;
