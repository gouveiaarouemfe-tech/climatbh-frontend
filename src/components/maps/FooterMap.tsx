'use client';

import { MapPin } from 'lucide-react';

export default function FooterMap() {
  return (
    <div className="w-full h-32 rounded-lg overflow-hidden bg-gradient-to-br from-blue-500 to-blue-700 relative">
      {/* Mapa estilizado com CSS */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600">
        {/* Representação visual de Belo Horizonte */}
        <div className="absolute inset-0 opacity-20">
          {/* Montanhas ao fundo */}
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-blue-800 to-transparent"></div>
          
          {/* Áreas urbanas */}
          <div className="absolute top-8 left-4 w-3 h-3 bg-white rounded-full opacity-60"></div>
          <div className="absolute top-12 right-6 w-2 h-2 bg-white rounded-full opacity-40"></div>
          <div className="absolute bottom-8 left-8 w-2 h-2 bg-white rounded-full opacity-50"></div>
          <div className="absolute bottom-10 right-4 w-3 h-3 bg-white rounded-full opacity-60"></div>
          
          {/* Linhas representando estradas */}
          <div className="absolute top-6 left-0 w-full h-px bg-white opacity-30 transform rotate-12"></div>
          <div className="absolute top-16 left-0 w-full h-px bg-white opacity-20 transform -rotate-6"></div>
          <div className="absolute bottom-12 left-0 w-full h-px bg-white opacity-25 transform rotate-3"></div>
        </div>
        
        {/* Marcador central */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <MapPin className="h-8 w-8 text-white drop-shadow-lg" />
            <div className="absolute -top-1 -left-1 h-10 w-10 bg-white rounded-full opacity-20 animate-pulse"></div>
          </div>
        </div>
        
        {/* Círculo de área de atendimento */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-24 h-24 border-2 border-white border-opacity-30 rounded-full animate-pulse"></div>
        </div>
        
        {/* Texto sobreposto */}
        <div className="absolute bottom-2 left-2 right-2">
          <div className="bg-black bg-opacity-50 rounded px-2 py-1">
            <p className="text-white text-xs font-medium text-center">
              Belo Horizonte e Região Metropolitana
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


