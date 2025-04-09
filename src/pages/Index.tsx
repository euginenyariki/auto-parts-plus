
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Search, ArrowRight, Settings, Image, Database } from 'lucide-react';

const Index = () => {
  // Popular parts categories
  const categories = [
    { name: 'Engine Components', image: 'photo-1518005020951-eccb494ad742', description: 'Pistons, valves, camshafts, and more' },
    { name: 'Brake Systems', image: 'photo-1460574283810-2aab119d8511', description: 'Pads, rotors, calipers, and lines' },
    { name: 'Electrical Parts', image: 'photo-1487058792275-0ad4aaf24ca7', description: 'Starters, alternators, and sensors' },
    { name: 'Suspension & Steering', image: 'photo-1505373877841-8d25f7d46678', description: 'Shocks, struts, and control arms' },
    { name: 'Transmission Parts', image: 'photo-1488972685288-c3fd157d7c7a', description: 'Fluid, filters, and gaskets' },
    { name: 'Exhaust System', image: 'photo-1494891848038-7bd202a2afeb', description: 'Mufflers, catalytic converters, and pipes' },
  ];

  // Featured parts
  const featuredParts = [
    { name: 'OEM Air Filter', image: 'photo-1581090464777-f3220bbe1b8b', price: 24.99, rating: 4.8 },
    { name: 'Performance Brake Pads', image: 'photo-1469041797191-50ace28483c3', price: 89.95, rating: 4.7 },
    { name: 'Spark Plug Set', image: 'photo-1498050108023-c5249f4df085', price: 32.50, rating: 4.9 },
    { name: 'Oil Filter', image: 'photo-1485827404703-89b55fcc595e', price: 12.99, rating: 4.6 },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-autoparts-blue to-autoparts-lightblue text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Find the Right Parts for Your Vehicle</h1>
              <p className="text-lg mb-6">
                Search by part name, upload an image, or browse our catalog to find exactly what you need.
              </p>
              <div className="flex gap-4">
                <Button asChild size="lg" className="bg-autoparts-red hover:bg-red-700">
                  <Link to="/identifier">Identify Part</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-autoparts-blue">
                  <Link to="/catalog">Browse Catalog</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src={`https://source.unsplash.com/1481062-992x560`} 
                alt="Car parts collection" 
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">How would you like to search?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <Link to="/search" className="p-4 border rounded-lg hover:border-autoparts-blue hover:shadow-md transition-all duration-200">
                <Search size={40} className="mx-auto mb-2 text-autoparts-blue" />
                <h3 className="font-semibold">Text Search</h3>
                <p className="text-sm text-gray-500">Search by part number or name</p>
              </Link>
              <Link to="/identifier" className="p-4 border rounded-lg hover:border-autoparts-blue hover:shadow-md transition-all duration-200">
                <Image size={40} className="mx-auto mb-2 text-autoparts-blue" />
                <h3 className="font-semibold">Visual Search</h3>
                <p className="text-sm text-gray-500">Upload an image to identify</p>
              </Link>
              <Link to="/vehicle" className="p-4 border rounded-lg hover:border-autoparts-blue hover:shadow-md transition-all duration-200">
                <Settings size={40} className="mx-auto mb-2 text-autoparts-blue" />
                <h3 className="font-semibold">Vehicle Search</h3>
                <p className="text-sm text-gray-500">Search by vehicle specifications</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Browse Parts By Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={`https://source.unsplash.com/${category.image}`} 
                    alt={category.name} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <Button variant="outline" className="w-full">
                    View Category <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Parts Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Parts</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredParts.map((part, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-40 overflow-hidden bg-white p-4 flex items-center justify-center">
                  <img 
                    src={`https://source.unsplash.com/${part.image}`} 
                    alt={part.name} 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-1">{part.name}</h3>
                  <div className="flex justify-between items-center">
                    <p className="font-bold text-autoparts-blue">${part.price}</p>
                    <div className="flex items-center">
                      <span className="text-yellow-500">★</span>
                      <span className="text-sm ml-1">{part.rating}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-3 text-sm">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild>
              <Link to="/catalog">View All Parts</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose AutoPartsFinder</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-autoparts-blue rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <Database className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Extensive Database</h3>
              <p className="text-gray-600">Access to over 10 million parts across all vehicle makes and models.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-autoparts-blue rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <Image className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Visual Recognition</h3>
              <p className="text-gray-600">Advanced AI technology to identify parts from photos with high accuracy.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-autoparts-blue rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Support</h3>
              <p className="text-gray-600">Technical assistance from automotive specialists when you need it.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
