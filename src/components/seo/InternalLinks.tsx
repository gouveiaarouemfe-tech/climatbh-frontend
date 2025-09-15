import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface RelatedService {
  title: string;
  href: string;
  description: string;
}

interface InternalLinksProps {
  currentService: string;
  relatedServices: RelatedService[];
}

export default function InternalLinks({ currentService, relatedServices }: InternalLinksProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Serviços Relacionados
          </h2>
          <p className="text-xl text-gray-600">
            Conheça outros serviços especializados da ClimatBH
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedServices.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 group"
            >
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-800">
                <span>Saiba mais</span>
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            <span>Ver todos os serviços</span>
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Configurações de serviços relacionados para cada página
export const serviceRelations = {
  'instalacao-vrf': [
    {
      title: 'Manutenção de VRF',
      href: '/manutencao-vrf',
      description: 'Manutenção preventiva e corretiva para sistemas VRF/VRV'
    },
    {
      title: 'Instalação de Chiller',
      href: '/instalacao-chiller',
      description: 'Sistemas chiller para refrigeração industrial'
    },
    {
      title: 'Contratos PMOC',
      href: '/contratos-pmoc',
      description: 'Plano de manutenção para qualidade do ar'
    }
  ],
  'manutencao-vrf': [
    {
      title: 'Instalação de VRF',
      href: '/instalacao-vrf',
      description: 'Instalação profissional de sistemas VRF'
    },
    {
      title: 'Manutenção de Chiller',
      href: '/manutencao-chiller',
      description: 'Assistência técnica para sistemas chiller'
    },
    {
      title: 'Contratos PMOC',
      href: '/contratos-pmoc',
      description: 'Conformidade legal e qualidade do ar'
    }
  ],
  'instalacao-chiller': [
    {
      title: 'Manutenção de Chiller',
      href: '/manutencao-chiller',
      description: 'Manutenção especializada para chillers'
    },
    {
      title: 'Instalação de VRF',
      href: '/instalacao-vrf',
      description: 'Sistemas VRF para climatização comercial'
    },
    {
      title: 'Instalação de Splitão',
      href: '/instalacao-splitao',
      description: 'Splitão para ambientes de grande porte'
    }
  ],
  'manutencao-chiller': [
    {
      title: 'Instalação de Chiller',
      href: '/instalacao-chiller',
      description: 'Instalação de sistemas chiller industriais'
    },
    {
      title: 'Manutenção de VRF',
      href: '/manutencao-vrf',
      description: 'Manutenção de sistemas VRF/VRV'
    },
    {
      title: 'Contratos PMOC',
      href: '/contratos-pmoc',
      description: 'Manutenção preventiva obrigatória'
    }
  ],
  'instalacao-splitao': [
    {
      title: 'Manutenção de Splitão',
      href: '/manutencao-splitao',
      description: 'Assistência técnica para sistemas splitão'
    },
    {
      title: 'Instalação de VRF',
      href: '/instalacao-vrf',
      description: 'Sistemas VRF para climatização eficiente'
    },
    {
      title: 'Contratos PMOC',
      href: '/contratos-pmoc',
      description: 'Qualidade do ar e conformidade legal'
    }
  ],
  'manutencao-splitao': [
    {
      title: 'Instalação de Splitão',
      href: '/instalacao-splitao',
      description: 'Instalação de sistemas splitão'
    },
    {
      title: 'Manutenção de VRF',
      href: '/manutencao-vrf',
      description: 'Manutenção de sistemas VRF'
    },
    {
      title: 'Manutenção de Chiller',
      href: '/manutencao-chiller',
      description: 'Assistência técnica para chillers'
    }
  ],
  'contratos-pmoc': [
    {
      title: 'Manutenção de VRF',
      href: '/manutencao-vrf',
      description: 'Manutenção de sistemas VRF/VRV'
    },
    {
      title: 'Manutenção de Chiller',
      href: '/manutencao-chiller',
      description: 'Assistência técnica para chillers'
    },
    {
      title: 'Manutenção de Splitão',
      href: '/manutencao-splitao',
      description: 'Manutenção de sistemas splitão'
    }
  ]
};

