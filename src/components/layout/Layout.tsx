
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const checkScrollTop = () => {
    if (window.scrollY > 300) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      
      {/* Scroll to top button */}
      {showScrollTop && (
        <Button
          className="fixed bottom-6 right-6 bg-autoparts-blue hover:bg-autoparts-lightblue rounded-full shadow-lg z-50 p-3"
          size="icon"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
};

export default Layout;
