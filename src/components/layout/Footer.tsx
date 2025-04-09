
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-autoparts-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <span className="text-xl font-bold mr-1">Auto</span>
              <span className="text-xl font-bold text-autoparts-red">Parts</span>
              <span className="text-lg font-semibold ml-1">Finder</span>
            </Link>
            <p className="mb-4 text-sm text-gray-300">
              Your trusted resource for identifying and finding the right auto parts for your vehicle.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-autoparts-red">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-autoparts-red">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-autoparts-red">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-autoparts-red">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-autoparts-red transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/identifier" className="text-gray-300 hover:text-autoparts-red transition-colors">Part Identifier</Link>
              </li>
              <li>
                <Link to="/catalog" className="text-gray-300 hover:text-autoparts-red transition-colors">Parts Catalog</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-autoparts-red transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-autoparts-red transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-autoparts-red transition-colors">Part Identification</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-autoparts-red transition-colors">Vehicle Compatibility</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-autoparts-red transition-colors">Price Comparison</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-autoparts-red transition-colors">Technical Support</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-autoparts-red transition-colors">Repair Guides</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin size={16} className="mr-2 text-autoparts-red" />
                <span className="text-gray-300">123 Auto Drive, Parts City, AP 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-autoparts-red" />
                <a href="tel:+15551234567" className="text-gray-300 hover:text-autoparts-red">+1 (555) 123-4567</a>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-autoparts-red" />
                <a href="mailto:info@autopartsfinder.com" className="text-gray-300 hover:text-autoparts-red">info@autopartsfinder.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between">
            <p>© 2025 AutoPartsFinder. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-autoparts-red">Privacy Policy</a>
              <a href="#" className="hover:text-autoparts-red">Terms of Service</a>
              <a href="#" className="hover:text-autoparts-red">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
