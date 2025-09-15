import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import FooterMap from '@/components/maps/FooterMap';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">ClimatBH</h3>
            <p className="text-gray-300 mb-4">
              Especialistas em climatização comercial e industrial em Belo Horizonte e região. 
              Mais de 15 anos de experiência em sistemas VRF, chillers e contratos PMOC.
            </p>
            <div className="flex space-x-4">
              <a
                href="tel:+5531995352139"
                className="text-blue-400 hover:text-blue-300 transition-colors"
                aria-label="Ligar para ClimatBH"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a
                href="mailto:contato@climatbh.com.br"
                className="text-blue-400 hover:text-blue-300 transition-colors"
                aria-label="Enviar e-mail para ClimatBH"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/instalacao-vrf" className="text-gray-300 hover:text-white transition-colors">
                  Instalação de VRF
                </Link>
              </li>
              <li>
                <Link href="/manutencao-vrf" className="text-gray-300 hover:text-white transition-colors">
                  Manutenção de VRF
                </Link>
              </li>
              <li>
                <Link href="/instalacao-chiller" className="text-gray-300 hover:text-white transition-colors">
                  Instalação de Chiller
                </Link>
              </li>
              <li>
                <Link href="/manutencao-chiller" className="text-gray-300 hover:text-white transition-colors">
                  Manutenção de Chiller
                </Link>
              </li>
              <li>
                <Link href="/instalacao-splitao" className="text-gray-300 hover:text-white transition-colors">
                  Instalação de Splitão
                </Link>
              </li>
              <li>
                <Link href="/contratos-pmoc" className="text-gray-300 hover:text-white transition-colors">
                  Contratos PMOC
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-300 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-300 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <div>
                  <p className="text-gray-300">(31) 99535-2139</p>
                  <p className="text-sm text-gray-400">WhatsApp disponível</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <p className="text-gray-300">contato@climatbh.com.br</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-gray-300">Belo Horizonte, MG</p>
                  <p className="text-sm text-gray-400">Atendemos toda região metropolitana</p>
                </div>
              </div>
            </div>
          </div>

          {/* Area Map */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Área de Atendimento</h3>
            <FooterMap />
            <p className="text-sm text-gray-400 mt-2">
              Belo Horizonte e Região Metropolitana
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 ClimatBH. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/politica-privacidade" className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/termos-uso" className="text-gray-400 hover:text-white text-sm transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

