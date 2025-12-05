import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ShoppingBag, ShoppingCart } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';
import { useCart } from '../CartContext';

interface HeaderProps {
  activePage: string;
  onNavigate: (page: any) => void;
}

const Header: React.FC<HeaderProps> = ({ activePage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBumping, setIsBumping] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const prevCountRef = useRef(cartCount);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Trigger animation only when cart count increases
    if (cartCount > prevCountRef.current) {
      setIsBumping(true);
      const timer = setTimeout(() => setIsBumping(false), 300);
      return () => clearTimeout(timer);
    }
    prevCountRef.current = cartCount;
  }, [cartCount]);

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Products', id: 'products' },
    { label: 'About & Contact', id: 'about_contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-white/80 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 group cursor-pointer outline-none"
        >
          <div className="bg-brand-600 p-2 rounded-lg text-white group-hover:bg-brand-700 transition-colors">
            <ShoppingBag size={24} />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">
            SafaayiCo
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button 
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-sm font-medium transition-all hover:text-brand-600 hover:underline underline-offset-4 decoration-2 decoration-brand-300 ${
                  activePage === link.id ? 'text-brand-600 font-bold' : 'text-slate-600'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* Cart Button */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className={`relative p-2 rounded-full transition-all duration-300 ${
                isBumping 
                  ? 'bg-brand-100 text-brand-600 scale-125' 
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <ShoppingCart size={24} className={isBumping ? 'animate-pulse' : ''} />
              {cartCount > 0 && (
                <span className={`absolute top-0 right-0 bg-brand-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white transform translate-x-1 -translate-y-1 transition-transform duration-300 ${isBumping ? 'scale-110' : ''}`}>
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-slate-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl p-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <button 
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-left text-base font-medium py-3 border-b border-slate-50 ${
                activePage === link.id ? 'text-brand-600' : 'text-slate-700'
              }`}
            >
              {link.label}
            </button>
          ))}
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-600 text-white text-center py-3 rounded-lg font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Order via WhatsApp
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;