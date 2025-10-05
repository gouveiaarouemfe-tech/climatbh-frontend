import { Wrench, Clock, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Wrench className="w-20 h-20 text-blue-600" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                <Clock className="w-4 h-4 text-yellow-800" />
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Site em Manutenção
          </h1>
          
          <p className="text-xl text-gray-600 mb-6">
            Estamos realizando melhorias para oferecer uma experiência ainda melhor.
          </p>
          
          <p className="text-gray-500 mb-8">
            Voltaremos em breve com novidades! Enquanto isso, você pode entrar em contato conosco pelos canais abaixo.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Entre em Contato
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
              <Phone className="w-6 h-6 text-blue-600" />
              <div className="text-left">
                <p className="font-semibold text-gray-800">Telefone</p>
                <p className="text-blue-600">(31) 99535-2139</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
              <Mail className="w-6 h-6 text-green-600" />
              <div className="text-left">
                <p className="font-semibold text-gray-800">WhatsApp</p>
                <p className="text-green-600">(31) 99535-2139</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Nossos Serviços Continuam Disponíveis
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="font-medium text-gray-800">Instalação VRF</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="font-medium text-gray-800">Manutenção VRF</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="font-medium text-gray-800">Instalação Chiller</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="font-medium text-gray-800">Contratos PMOC</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <p>© 2024 ClimatBH - Especialistas em Climatização</p>
        </div>
      </div>
    </div>
  );
}
