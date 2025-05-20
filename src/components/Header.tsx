
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', to: '/' },
    { name: 'Programação', to: '/programacao' },
    { name: 'Contato', to: '/contato' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto py-4 px-6 md:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <span className="flex items-center justify-start text-fatec-green font-bold text-xl sm:text-2xl">
                <img className='w-1/12' src="logo.svg" alt="Loog da 4ª Semana de Tecnologia" />
                Fatec Tatuí 
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className={`text-base font-medium transition-colors hover:text-fatec-green ${
                  location.pathname === item.to
                    ? 'text-fatec-green border-b-2 border-fatec-green'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            type='submit'
            className="md:hidden text-gray-700 hover:text-fatec-green"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col gap-4 animate-fade-in">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className={`text-base font-medium transition-colors hover:text-fatec-green block py-2 ${
                  location.pathname === item.to
                    ? 'text-fatec-green font-semibold'
                    : 'text-gray-700'
                }`}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
