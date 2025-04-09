
import React from 'react';
import { Button } from '@/components/ui/button';

const CatalogPagination: React.FC = () => {
  return (
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
  );
};

export default CatalogPagination;
