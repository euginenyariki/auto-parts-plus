
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-autoparts-blue text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold mr-1">Auto</span>
            <span className="text-2xl font-bold text-autoparts-red">Parts</span>
            <span className="text-lg font-semibold ml-1">Finder</span>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <>
              <div className="flex-grow mx-8">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Search for parts..."
                    className="w-full pl-4 pr-10 py-2 rounded-md bg-white text-gray-800"
                  />
                  <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-500" />
                </div>
              </div>

              <nav>
                <ul className="flex space-x-6">
                  <li><Link to="/" className="hover:text-autoparts-red transition-colors">Home</Link></li>
                  <li><Link to="/identifier" className="hover:text-autoparts-red transition-colors">Part Identifier</Link></li>
                  <li><Link to="/catalog" className="hover:text-autoparts-red transition-colors">Catalog</Link></li>
                  <li><Link to="/about" className="hover:text-autoparts-red transition-colors">About</Link></li>
                </ul>
              </nav>

              <div className="flex items-center space-x-4 ml-6">
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <ShoppingCart className="h-5 w-5" />
                </Button>
              </div>
            </>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <div className="flex items-center">
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          )}
        </div>
        
        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <div className="mt-4 pb-2">
            <div className="relative mb-4">
              <Input
                type="text"
                placeholder="Search for parts..."
                className="w-full pl-4 pr-10 py-2 rounded-md bg-white text-gray-800"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-500" />
            </div>
            <nav>
              <ul className="space-y-2">
                <li><Link to="/" className="block py-2 hover:text-autoparts-red transition-colors" onClick={toggleMenu}>Home</Link></li>
                <li><Link to="/identifier" className="block py-2 hover:text-autoparts-red transition-colors" onClick={toggleMenu}>Part Identifier</Link></li>
                <li><Link to="/catalog" className="block py-2 hover:text-autoparts-red transition-colors" onClick={toggleMenu}>Catalog</Link></li>
                <li><Link to="/about" className="block py-2 hover:text-autoparts-red transition-colors" onClick={toggleMenu}>About</Link></li>
              </ul>
            </nav>
            <div className="flex items-center space-x-4 mt-4">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
