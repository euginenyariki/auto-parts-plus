
import React from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Filter } from 'lucide-react';

interface FilterSidebarProps {
  categories: string[];
  brands: string[];
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ categories, brands }) => {
  return (
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
  );
};

export default FilterSidebar;
