
import React from 'react';
import Layout from '@/components/layout/Layout';
import SearchBar from '@/components/catalog/SearchBar';
import FilterSidebar from '@/components/catalog/FilterSidebar';
import ProductGrid from '@/components/catalog/ProductGrid';
import CatalogPagination from '@/components/catalog/CatalogPagination';
import { partsData, categoriesData, brandsData } from '@/components/catalog/CatalogData';

const Catalog = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Parts Catalog</h1>
        <p className="text-gray-600 mb-8">Browse our extensive collection of auto parts for all makes and models.</p>

        {/* Search and Filter Section */}
        <SearchBar />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <FilterSidebar categories={categoriesData} brands={brandsData} />

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <ProductGrid products={partsData} />
            <CatalogPagination />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Catalog;
