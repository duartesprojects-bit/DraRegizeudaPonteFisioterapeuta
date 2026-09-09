import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Especialidades', href: '#especialidades' },
    { name: 'Sobre Mim', href: '#sobre' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Localização', href: '#localizacao' },
  ];

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex flex-col items-center">
              <span className="text-2xl font-semibold text-teal-700 tracking-tight">Dra. Regizeuda</span>
              <span className="text-xs font-medium text-stone-500 uppercase tracking-widest">Fisioterapia</span>
            </a>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-stone-600 hover:text-teal-700 px-3 py-2 text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/5585988307687"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-700 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-teal-800 transition-colors shadow-sm"
            >
              Agendar Avaliação
            </a>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-600 hover:text-teal-700 focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-stone-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-stone-600 hover:text-teal-700 hover:bg-stone-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/5585988307687"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center mt-4 bg-teal-700 text-white px-5 py-3 rounded-full text-base font-medium hover:bg-teal-800 transition-colors"
            >
              Agendar Avaliação
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
