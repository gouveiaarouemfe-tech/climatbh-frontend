import Image from 'next/image';
import Link from 'next/link';
import { Phone, CheckCircle, Clock, Award, Users, Wrench, ArrowRight } from 'lucide-react';
import { generateMetadata } from '@/components/seo/SEOHead';
import StructuredData from '@/components/seo/StructuredData';

export const metadata = generateMetadata({
  title: 'Instalação de VRF em BH: Sistemas de Climatização Comercial | ClimatBH',
  description: 'Instalação Profissional de sistemas VRF em BH para climatização de edifícios e ambientes comerciais. Equipe especializada, garantia total e atendimento 24h.',
  keywords: 'instalação VRF BH, sistema VRF Belo Horizonte, climatização comercial, VRF Daikin, instalação ar condicionado comercial',
  url: '/instalacao-vrf',
});

const serviceStructuredData = {
  name: 'Instalação de Sistemas VRF em Belo Horizonte',
  description: 'Instalação profissional de sistemas VRF para climatização comercial e industrial em Belo Horizonte e região metropolitana.',
  provider: {
    '@type': 'Organization',
    name: 'ClimatBH',
    telephone: '+5531995352139',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Belo Horizonte',
      addressRegion: 'MG',
      addressCountry: 'BR',
    },
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Belo Horizonte',
    },
    {
      '@type': 'City',
      name: 'Contagem',
    },
    {
      '@type': 'City',
      name: 'Nova Lima',
    },
  ],
  serviceType: 'Instalação de Sistema VRF',
  category: 'Climatização Comercial',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Serviços de Instalação VRF',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Projeto e Dimensionamento VRF',
          description: 'Projeto técnico completo e dimensionamento adequado do sistema VRF',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Instalação Completa VRF',
          description: 'Instalação completa de unidades condensadoras e evaporadoras VRF',
        },
      },
    ],
  },
};

export default function InstalacaoVRF() {
  return (
    <div className="min-h-screen">
      <StructuredData type="Service" data={serviceStructuredData} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Instalação de VRF em BH: Sistemas de Climatização Comercial
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Instalação Profissional de sistemas VRF em BH para climatização de edifícios e ambientes comerciais. Equipe especializada com mais de 15 anos de experiência.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+5531995352139"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Ligar Agora: (31) 99535-2139</span>
                </a>
                <Link
                  href="#orcamento"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 text-center"
                >
                  Solicitar Orçamento
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/instalaçãodeVRF.jpeg"
                alt="Instalação de Sistema VRF em BH - ClimatBH"
                width={600}
                height={300}
                className="rounded-lg shadow-2xl object-cover"
                style={{ height: '300px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is VRF Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                O que é um Sistema VRF?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                VRF (Variable Refrigerant Flow) ou Fluxo de Refrigerante Variável é uma tecnologia avançada de climatização que permite controle individual de temperatura em múltiplas zonas através de uma única unidade condensadora externa.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Principais Características do Sistema VRF:
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Controle Individual de Zonas</h4>
                    <p className="text-gray-600">Cada ambiente pode ter sua temperatura controlada independentemente</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Alta Eficiência Energética</h4>
                    <p className="text-gray-600">Tecnologia inverter que ajusta automaticamente a capacidade conforme a demanda</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Flexibilidade de Instalação</h4>
                    <p className="text-gray-600">Permite conexão de múltiplas unidades internas a uma única unidade externa</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Operação Silenciosa</h4>
                    <p className="text-gray-600">Baixo nível de ruído tanto nas unidades internas quanto externas</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/images/oqueeVRF.jpeg"
                alt="Sistema VRF - Como funciona"
                width={600}
                height={350}
                className="rounded-lg shadow-lg object-cover"
                style={{ height: '350px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nosso Processo de Instalação VRF
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Análise Técnica e Dimensionamento</h3>
              <p className="text-gray-600">Realizamos visita técnica para análise do local, cálculo de carga térmica, dimensionamento do sistema e elaboração do projeto executivo detalhado.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Planejamento da Instalação</h3>
              <p className="text-gray-600">Definição do cronograma de instalação, especificação dos equipamentos, planejamento da tubulação e pontos elétricos necessários.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Instalação das Unidades</h3>
              <p className="text-gray-600">Instalação da condensadora externa, unidades internas, tubulação frigorígena, drenagem e conexões elétricas por equipe especializada.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Comissionamento e Testes</h3>
              <p className="text-gray-600">Vácuo do sistema, carga de gás refrigerante, testes de funcionamento, calibração dos controles e treinamento da equipe operacional.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">5</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Entrega e Garantia</h3>
              <p className="text-gray-600">Entrega do sistema funcionando, documentação técnica completa, manual de operação e início da garantia de instalação.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vantagens da Instalação de Sistema VRF
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">⚡</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Eficiência Energética Superior</h3>
              <p className="text-gray-600">Economia de até 40% no consumo de energia comparado a sistemas convencionais, com tecnologia inverter e controle de fluxo variável de refrigerante.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">🎛️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Controle Individual Preciso</h3>
              <p className="text-gray-600">Cada ambiente pode ter sua temperatura controlada independentemente, proporcionando conforto personalizado e otimização do consumo energético.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">🔧</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Instalação Flexível</h3>
              <p className="text-gray-600">Sistema modular que permite expansões futuras e adaptação a diferentes layouts arquitetônicos sem grandes modificações estruturais.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">🔇</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Baixo Nível de Ruído</h3>
              <p className="text-gray-600">Operação silenciosa tanto nas unidades internas quanto externas, ideal para ambientes que exigem baixo ruído operacional.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">🏢</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Ideal para Grandes Edifícios</h3>
              <p className="text-gray-600">Capacidade de climatizar até 64 ambientes com uma única condensadora, perfeito para edifícios comerciais e industriais de grande porte.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">💰</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Excelente Custo-Benefício</h3>
              <p className="text-gray-600">Investimento inicial compensado pela economia operacional, menor necessidade de manutenção e maior vida útil do equipamento.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Aplicações do Sistema VRF
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ideal para diversos tipos de ambientes comerciais e industriais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Edifícios Comerciais</h3>
              <p className="text-gray-600 mb-4">Escritórios, salas comerciais e centros empresariais</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Controle individual por sala</li>
                <li>• Eficiência energética</li>
                <li>• Baixo nível de ruído</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Hospitais e Clínicas</h3>
              <p className="text-gray-600 mb-4">Ambientes que exigem controle preciso de temperatura</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Controle de umidade</li>
                <li>• Operação silenciosa</li>
                <li>• Filtração avançada</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Hotéis e Restaurantes</h3>
              <p className="text-gray-600 mb-4">Conforto térmico personalizado para hóspedes</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Controle individual por quarto</li>
                <li>• Economia de energia</li>
                <li>• Manutenção simplificada</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Shopping Centers</h3>
              <p className="text-gray-600 mb-4">Climatização eficiente para grandes áreas</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Zonamento flexível</li>
                <li>• Controle centralizado</li>
                <li>• Baixo custo operacional</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Indústrias</h3>
              <p className="text-gray-600 mb-4">Controle de temperatura em processos industriais</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Resistência a ambientes agressivos</li>
                <li>• Controle preciso</li>
                <li>• Alta durabilidade</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Data Centers</h3>
              <p className="text-gray-600 mb-4">Refrigeração crítica para equipamentos de TI</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Controle de precisão</li>
                <li>• Redundância de sistema</li>
                <li>• Monitoramento 24h</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="orcamento" className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Solicite um Orçamento para Instalação VRF
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Nossa equipe está pronta para dimensionar e instalar o sistema VRF ideal para seu projeto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+5531995352139"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Ligar Agora: (31) 99535-2139</span>
            </a>
            <a
              href="https://wa.me/5531995352139?text=Olá! Gostaria de um orçamento para instalação de VRF."
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Solicitar Orçamento via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose VRF Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que Escolher Sistema VRF/VRV para sua Empresa em BH?
            </h2>
          </div>

          <div className="space-y-12">
            <div>
              <p className="text-lg text-gray-600 mb-8">
                A instalação de sistemas VRF (Variable Refrigerant Flow) representa uma revolução na climatização comercial e industrial. Em Belo Horizonte, onde as variações climáticas exigem soluções eficientes, o VRF se destaca como a tecnologia mais avançada disponível no mercado.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Tecnologia Inverter Avançada</h3>
                <p className="text-gray-600 mb-6">
                  Os sistemas VRF utilizam tecnologia inverter de última geração, que ajusta automaticamente a velocidade do compressor conforme a demanda térmica. Isso resulta em economia significativa de energia, especialmente em cargas parciais, que representam a maior parte do tempo operacional em edifícios comerciais.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Flexibilidade Operacional Incomparável</h3>
                <p className="text-gray-600 mb-6">
                  Uma das principais vantagens do VRF é sua capacidade de fornecer aquecimento e refrigeração simultâneos em diferentes zonas do mesmo sistema. Isso é particularmente útil em edifícios com orientações solares distintas ou com cargas térmicas variadas, como hospitais, hotéis e centros comerciais.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Instalação Simplificada e Econômica</h3>
                <p className="text-gray-600 mb-6">
                  Comparado aos sistemas tradicionais de água gelada, o VRF requer menos espaço para instalação, não necessita de casa de máquinas complexas e utiliza tubulação frigorígena de menor diâmetro. Isso reduz significativamente os custos de instalação e o tempo de obra.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Controle Inteligente e Conectividade</h3>
                <p className="text-gray-600 mb-6">
                  Os sistemas VRF modernos oferecem controles inteligentes com conectividade Wi-Fi, permitindo monitoramento e controle remoto através de aplicativos móveis. Isso facilita a manutenção preventiva e permite ajustes operacionais em tempo real para otimização energética.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes sobre Instalação de VRF
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tire suas dúvidas sobre instalação de sistemas VRF em Belo Horizonte
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Qual é o tempo médio para instalação de um sistema VRF?
              </h3>
              <p className="text-gray-600">
                O tempo de instalação varia conforme o tamanho do projeto. Para residências de 3-4 ambientes, o prazo é de 3 a 5 dias úteis. Para projetos comerciais maiores, pode levar de 1 a 3 semanas. Nosso cronograma é sempre detalhado e cumprido rigorosamente, minimizando interferências nas atividades do local.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Quantos ambientes posso climatizar com um sistema VRF?
              </h3>
              <p className="text-gray-600">
                Um sistema VRF pode climatizar de 2 até 64 ambientes com uma única condensadora externa. Para residências, normalmente atendemos de 3 a 8 ambientes. Em projetos comerciais, já instalamos sistemas para mais de 50 salas. A capacidade depende da potência da condensadora e das necessidades térmicas de cada ambiente.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Qual é a economia de energia real com sistema VRF?
              </h3>
              <p className="text-gray-600">
                Sistemas VRF proporcionam economia de 30% a 50% no consumo de energia comparado a sistemas convencionais. Em projetos que acompanhamos, clientes relatam redução de R$ 800 para R$ 450 na conta mensal. A economia varia conforme padrão de uso, mas o retorno do investimento ocorre entre 3 a 5 anos.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                O sistema VRF funciona para aquecimento também?
              </h3>
              <p className="text-gray-600">
                Sim! Sistemas VRF com tecnologia Heat Pump oferecem aquecimento e refrigeração. São ideais para o clima de BH, aquecendo eficientemente no inverno com consumo 70% menor que aquecedores elétricos. Alguns modelos permitem aquecimento e refrigeração simultâneos em ambientes diferentes do mesmo sistema.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Qual é a garantia para instalação de sistema VRF?
              </h3>
              <p className="text-gray-600">
                Oferecemos 2 anos de garantia na instalação e até 5 anos de garantia nos equipamentos (conforme fabricante). Inclui primeira manutenção gratuita no 6º mês, suporte técnico 24h para emergências e atendimento prioritário durante todo período de garantia. Nossa equipe conhece profundamente os equipamentos instalados.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                É possível expandir o sistema VRF no futuro?
              </h3>
              <p className="text-gray-600">
                Sim! Uma das grandes vantagens do VRF é sua modularidade. Podemos adicionar novas unidades internas ou até mesmo condensadoras extras conforme sua necessidade cresce. Sempre dimensionamos pensando em expansões futuras, deixando capacidade reserva e pontos preparados para facilitar ampliações.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serviços Relacionados
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/manutencao-vrf" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/images/manutençãodeVRFBH.jpeg"
                alt="Manutenção de VRF"
                width={400}
                height={250}
                className="rounded-lg w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">Manutenção de VRF</h3>
              <p className="text-gray-600 mb-4">Manutenção preventiva e corretiva para sistemas VRF</p>
              <div className="flex items-center text-blue-600 font-medium">
                <span>Saiba mais</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </Link>

            <Link href="/instalacao-chiller" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/images/iqGpec6GN4vl.jpg"
                alt="Instalação de Chiller"
                width={400}
                height={250}
                className="rounded-lg w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">Instalação de Chiller</h3>
              <p className="text-gray-600 mb-4">Instalação de sistemas chiller para grandes demandas</p>
              <div className="flex items-center text-blue-600 font-medium">
                <span>Saiba mais</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </Link>

            <Link href="/contratos-pmoc" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/images/PMOCembh.webp"
                alt="Contratos PMOC"
                width={400}
                height={250}
                className="rounded-lg w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">Contratos PMOC</h3>
              <p className="text-gray-600 mb-4">Manutenção preventiva e qualidade do ar</p>
              <div className="flex items-center text-blue-600 font-medium">
                <span>Saiba mais</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

