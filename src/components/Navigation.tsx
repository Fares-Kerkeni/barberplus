import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Accueil', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Galerie', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center py-8">
          {/* Logo simple */}
          <div className={`transition-colors duration-300 ${
            isScrolled ? 'text-black' : 'text-white'
          }`}>
            <span className="text-2xl font-light tracking-wider">Barber Plus</span>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-16">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm tracking-wider transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-black' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Téléphone */}
          <a
            href="tel:0187902203"
            className={`hidden md:block text-sm tracking-wider transition-colors duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:text-black' 
                : 'text-white/90 hover:text-white'
            }`}
          >
            01 87 90 22 03
          </a>

          {/* Menu Mobile */}
          <button
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? 'text-black' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <nav className="flex flex-col py-8 space-y-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 text-sm tracking-wider hover:text-black transition-colors px-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="border-t border-gray-100 pt-6 px-4">
                <a
                  href="tel:0187902203"
                  className="text-black text-sm tracking-wider font-medium"
                >
                  📞 01 87 90 22 03
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;