import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '#inicio' },
    { label: 'Solo a 4 pasos', href: '#como-funciona' },
    { label: 'Supra piensa en todos', href: '#para-vos' },
    { label: 'Por Qué SupraLine', href: '#por-que' },
    { label: 'Experiencias', href: '#experiencias' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#ECEBE4] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#inicio" className="flex items-center">
              <img src="/logo_supraline.PNG" alt="SupraLine" className="h-14 sm:h-16 lg:h-[70px]" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[#0C3754] hover:text-[#0578B7] transition-colors text-base xl:text-lg whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#contacto"
              className="bg-[#0578B7] text-white px-5 xl:px-6 py-2.5 xl:py-3 rounded-full hover:bg-[#0C3754] transition-colors text-sm xl:text-base whitespace-nowrap"
            >
              Agendá tu consulta
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-[#0C3754] hover:bg-white/50"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#ECEBE4] border-t border-[#D4D4CD]">
          <nav className="px-4 pt-2 pb-4 space-y-2">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-[#0C3754] hover:bg-white/50 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setIsMenuOpen(false)}
              className="block text-center bg-[#0578B7] text-white px-6 py-3 rounded-full hover:bg-[#0C3754] transition-colors mt-4"
            >
              Agendá tu consulta
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
