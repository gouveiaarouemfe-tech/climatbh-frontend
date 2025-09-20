'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              ClimatBH
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Início
            </Link>
            <div className="relative group">
              <button aria-label="Menu de Serviços" className="text-gray-700 hover:text-blue-600 transition-colors">
                Serviços
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link href="/instalacao-vrf" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Instalação de VRF
                  </Link>
                  <Link href="/manutencao-vrf" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Manutenção de VRF
                  </Link>
                  <Link href="/instalacao-chiller" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Instalação de Chiller
                  </Link>
                  <Link href="/manutencao-chiller" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Manutenção de Chiller
                  </Link>
                  <Link href="/instalacao-splitao" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Instalação de Splitão
                  </Link>
                  <Link href="/manutencao-splitao" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Manutenção de Splitão
                  </Link>
                  <Link href="/contratos-pmoc" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Contratos PMOC
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">
              Blog
            </Link>
            <Link href="/sobre" className="text-gray-700 hover:text-blue-600 transition-colors">
              Sobre
            </Link>
            <Link href="/contato" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contato
            </Link>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+5531995352139"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <Phone className="h-4 w-4" />
              <span>(31) 99535-2139</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="Abrir/Fechar menu de navegação"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mb-4">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <div className="px-3 py-2">
                <div className="text-gray-700 font-medium mb-2">Serviços</div>
                <div className="pl-4 space-y-1">
                  <Link
                    href="/instalacao-vrf"
                    className="block py-1 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Instalação de VRF
                  </Link>
                  <Link
                    href="/manutencao-vrf"
                    className="block py-1 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Manutenção de VRF
                  </Link>
                  <Link
                    href="/instalacao-chiller"
                    className="block py-1 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Instalação de Chiller
                  </Link>
                  <Link
                    href="/manutencao-chiller"
                    className="block py-1 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Manutenção de Chiller
                  </Link>
                  <Link
                    href="/instalacao-splitao"
                    className="block py-1 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Instalação de Splitão
                  </Link>
                  <Link
                    href="/manutencao-splitao"
                    className="block py-1 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Manutenção de Splitão
                  </Link>
                  <Link
                    href="/contratos-pmoc"
                    className="block py-1 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contratos PMOC
                  </Link>
                </div>
              </div>
              <Link
                href="/blog"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/sobre"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link
                href="/contato"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              <div className="px-3 py-2">
                <a
                  href="tel:+5531995352139"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 w-full"
                >
                  <Phone className="h-4 w-4" />
                  <span>(31) 99535-2139</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

