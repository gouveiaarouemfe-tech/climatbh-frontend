'use client';

import { Phone, MessageCircle, Calendar, ArrowRight, CheckCircle, Star } from 'lucide-react';
import Link from 'next/link';

interface BlogCTAProps {
  variant?: 'contact' | 'service' | 'newsletter' | 'consultation';
  title?: string;
  description?: string;
  primaryAction?: {
    text: string;
    href: string;
    phone?: string;
  };
  secondaryAction?: {
    text: string;
    href: string;
  };
}

export default function BlogCTA({ 
  variant = 'contact',
  title,
  description,
  primaryAction,
  secondaryAction
}: BlogCTAProps) {
  
  const getVariantConfig = () => {
    switch (variant) {
      case 'contact':
        return {
          title: title || 'Precisa de Ajuda com Climatização?',
          description: description || 'Nossa equipe especializada está pronta para atender suas necessidades. Entre em contato e receba um orçamento personalizado.',
          primaryAction: primaryAction || {
            text: 'Ligar Agora: (31) 99535-2139',
            href: 'tel:+5531995352139',
            phone: '+5531995352139'
          },
          secondaryAction: secondaryAction || {
            text: 'WhatsApp',
            href: 'https://wa.me/5531995352139?text=Olá! Vi seu blog e preciso de ajuda com climatização.'
          },
          bgColor: 'bg-gradient-to-r from-blue-600 to-blue-700',
          icon: Phone
        };
      
      case 'service':
        return {
          title: title || 'Transforme seu Ambiente com Nossos Serviços',
          description: description || 'Instalação, manutenção e contratos PMOC. Mais de 15 anos de experiência em climatização comercial e residencial.',
          primaryAction: primaryAction || {
            text: 'Ver Nossos Serviços',
            href: '/servicos'
          },
          secondaryAction: secondaryAction || {
            text: 'Solicitar Orçamento',
            href: '/contato'
          },
          bgColor: 'bg-gradient-to-r from-green-600 to-green-700',
          icon: CheckCircle
        };
      
      case 'consultation':
        return {
          title: title || 'Consultoria Gratuita em Climatização',
          description: description || 'Agende uma consulta técnica gratuita. Nossos especialistas avaliarão suas necessidades e apresentarão a melhor solução.',
          primaryAction: primaryAction || {
            text: 'Agendar Consultoria',
            href: '/contato'
          },
          secondaryAction: secondaryAction || {
            text: 'Saiba Mais',
            href: '/sobre'
          },
          bgColor: 'bg-gradient-to-r from-purple-600 to-purple-700',
          icon: Calendar
        };
      
      case 'newsletter':
        return {
          title: title || 'Receba Dicas de Climatização',
          description: description || 'Assine nossa newsletter e receba dicas exclusivas sobre manutenção, economia de energia e novidades do setor.',
          primaryAction: primaryAction || {
            text: 'Assinar Newsletter',
            href: '#newsletter'
          },
          secondaryAction: secondaryAction || {
            text: 'Ver Posts Anteriores',
            href: '/blog'
          },
          bgColor: 'bg-gradient-to-r from-orange-600 to-orange-700',
          icon: MessageCircle
        };
      
      default:
        return {
          title: 'Entre em Contato',
          description: 'Estamos aqui para ajudar você.',
          primaryAction: { text: 'Contato', href: '/contato' },
          secondaryAction: { text: 'Saiba Mais', href: '/sobre' },
          bgColor: 'bg-gradient-to-r from-blue-600 to-blue-700',
          icon: Phone
        };
    }
  };

  const config = getVariantConfig();
  const IconComponent = config.icon;

  return (
    <div className={`${config.bgColor} text-white rounded-xl p-8 my-12`}>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Icon and Title */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-white bg-opacity-20 rounded-full p-3 mr-4">
                <IconComponent className="h-8 w-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">{config.title}</h3>
            </div>
            <p className="text-lg text-white text-opacity-90 leading-relaxed">
              {config.description}
            </p>
            
            {/* Trust Indicators */}
            <div className="flex items-center mt-6 space-x-6">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-300" />
                <span className="text-sm">+15 anos de experiência</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-300" />
                <span className="text-sm">Garantia total</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-blue-300" />
                <span className="text-sm">Atendimento 24h</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            {config.primaryAction.phone ? (
              <a
                href={config.primaryAction.href}
                className="w-full bg-white text-gray-900 px-6 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2 text-center"
              >
                <Phone className="h-5 w-5" />
                <span>{config.primaryAction.text}</span>
              </a>
            ) : (
              <Link
                href={config.primaryAction.href}
                className="w-full bg-white text-gray-900 px-6 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2 text-center"
              >
                <span>{config.primaryAction.text}</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            )}
            
            <Link
              href={config.secondaryAction.href}
              className="w-full border-2 border-white text-white px-6 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200 flex items-center justify-center space-x-2 text-center"
            >
              <MessageCircle className="h-5 w-5" />
              <span>{config.secondaryAction.text}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Componente específico para CTA de emergência
export function EmergencyCTA() {
  return (
    <div className="bg-red-600 text-white rounded-xl p-6 my-8 border-l-4 border-red-400">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-xl font-bold mb-2 flex items-center">
            <Phone className="h-6 w-6 mr-2" />
            Emergência 24h
          </h4>
          <p className="text-red-100">
            Problema urgente com seu sistema de climatização? Atendemos emergências 24 horas.
          </p>
        </div>
        <a
          href="tel:+5531995352139"
          className="bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-red-50 transition-colors duration-200 whitespace-nowrap"
        >
          Ligar Agora
        </a>
      </div>
    </div>
  );
}

// Componente para CTA de orçamento rápido
export function QuickQuoteCTA() {
  return (
    <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl p-6 my-8">
      <div className="text-center">
        <h4 className="text-2xl font-bold mb-3">Orçamento Gratuito em 24h</h4>
        <p className="text-green-100 mb-6">
          Receba uma proposta personalizada para seu projeto de climatização
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5531995352139?text=Olá! Gostaria de solicitar um orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <MessageCircle className="h-5 w-5" />
            <span>WhatsApp</span>
          </a>
          <Link
            href="/contato"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <Calendar className="h-5 w-5" />
            <span>Agendar Visita</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
