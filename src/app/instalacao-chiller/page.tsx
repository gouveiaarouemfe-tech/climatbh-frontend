import Image from 'next/image';
import Link from 'next/link';
import { Phone, CheckCircle, ArrowRight, Thermometer, Zap, Shield, Clock, Award, User, Wrench } from 'lucide-react';
import { generateMetadata } from '@/components/seo/SEOHead';
import StructuredData from '@/components/seo/StructuredData';
import FAQStructuredData from '@/components/seo/FAQStructuredData';

export const metadata = generateMetadata({
  title: 'Instalação de Chiller em BH: Refrigeração Industrial | ClimatBH',
  description: 'Instalação Especializada em chillers e Sistemas de grande porte para climatização industrial e comercial em BH. Equipe técnica certificada e atendimento 24h.',
  keywords: 'instalação chiller BH, chiller industrial, refrigeração industrial, sistema de resfriamento, climatização industrial BH',
  url: '/instalacao-chiller',
});

const serviceStructuredData = {
  name: 'Instalação de Chiller Industrial em Belo Horizonte',
  description: 'Instalação especializada de sistemas chiller para refrigeração industrial e comercial de grande porte em Belo Horizonte e região metropolitana.',
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
  serviceType: 'Instalação de Chiller Industrial',
  category: 'Refrigeração Industrial',
};

export default function InstalacaoChiller() {
  return (
    <div className="min-h-screen">
      <StructuredData type="Service" data={serviceStructuredData} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Instalação de Chiller em BH: Refrigeração Industrial
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Instalação Especializada em chillers e Sistemas de grande porte para climatização industrial e comercial. Soluções robustas para alta demanda de refrigeração.
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
                src="/images/iqGpec6GN4vl.jpg"
                alt="Instalação de Chiller Industrial em BH - ClimatBH"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"

              />
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vantagens da Instalação de Chiller Industrial em BH
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Invista em refrigeração de alta performance para sua indústria ou comércio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Alta Capacidade de Refrigeração para Grandes Demandas</h3>
              <p className="text-gray-600">Capacidade de refrigeração de 50 a 5.000 TR, ideal para grandes edifícios, complexos industriais e aplicações de processo que exigem alta demanda térmica.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Controle Preciso de Temperatura para Processos Críticos</h3>
              <p className="text-gray-600">Precisão de ±0.5°C na temperatura da água gelada, essencial para processos industriais críticos e ambientes que exigem controle rigoroso.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Eficiência Energética e Redução de Custos Operacionais</h3>
              <p className="text-gray-600">Tecnologia inverter e controles inteligentes proporcionam economia de até 35% no consumo de energia comparado a sistemas convencionais.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Flexibilidade Operacional e Confiabilidade Industrial</h3>
              <p className="text-gray-600">Possibilidade de operação modular, permitindo funcionamento parcial para otimização energética conforme a demanda térmica.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Confiabilidade Industrial</h3>
              <p className="text-gray-600">Equipamentos robustos projetados para operação contínua 24/7, com sistemas de backup e redundância para aplicações críticas.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Menor Custo Operacional a Longo Prazo</h3>
              <p className="text-gray-600">Centralização da refrigeração reduz custos de manutenção, operação e permite melhor controle de consumo energético.</p>
            </div>
          </div>
        </div>
      </section>
      {/* What is Chiller Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                O que é um Sistema Chiller?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Um chiller é um sistema de refrigeração de grande porte que remove calor de um líquido através de um ciclo de refrigeração por compressão de vapor ou absorção. É amplamente utilizado em aplicações industriais e comerciais que requerem grandes capacidades de resfriamento.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Principais Características dos Chillers:
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Thermometer className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Alta Capacidade de Refrigeração</h4>
                    <p className="text-gray-600">Capazes de resfriar grandes volumes de água ou outros fluidos</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Zap className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Eficiência Energética</h4>
                    <p className="text-gray-600">Tecnologia avançada que otimiza o consumo de energia</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Operação Contínua</h4>
                    <p className="text-gray-600">Projetados para funcionamento 24/7 em aplicações críticas</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Controle Preciso</h4>
                    <p className="text-gray-600">Sistemas de controle avançados para temperatura e pressão</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/images/wywuHOV9kejq.jpg"
                alt="Sistema Chiller Industrial - Componentes"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Types of Chillers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tipos de Chillers que Instalamos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos instalação de diferentes tipos de chillers para atender às necessidades específicas de cada projeto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Chiller Resfriado a Ar</h3>
              <p className="text-gray-600 mb-6">
                Utiliza o ar ambiente para rejeitar o calor do condensador. Ideal para locais onde não há disponibilidade de água de resfriamento.
              </p>
              
              <h4 className="font-semibold text-gray-900 mb-3">Vantagens:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Menor consumo de água</li>
                <li>• Instalação mais simples</li>
                <li>• Menor manutenção do sistema de água</li>
                <li>• Ideal para regiões com escassez de água</li>
              </ul>
              
              <h4 className="font-semibold text-gray-900 mb-3 mt-6">Aplicações:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Edifícios comerciais</li>
                <li>• Hospitais e clínicas</li>
                <li>• Centros de processamento de dados</li>
                <li>• Indústrias farmacêuticas</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Chiller Resfriado a Água</h3>
              <p className="text-gray-600 mb-6">
                Utiliza água como meio de resfriamento no condensador. Oferece maior eficiência energética em aplicações de grande porte.
              </p>
              
              <h4 className="font-semibold text-gray-900 mb-3">Vantagens:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Maior eficiência energética</li>
                <li>• Operação mais silenciosa</li>
                <li>• Melhor controle de temperatura</li>
                <li>• Vida útil mais longa</li>
              </ul>
              
              <h4 className="font-semibold text-gray-900 mb-3 mt-6">Aplicações:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Grandes complexos industriais</li>
                <li>• Shopping centers</li>
                <li>• Universidades e escolas</li>
                <li>• Processos industriais críticos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Processo de Instalação de Chiller Industrial
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodologia técnica especializada para garantir instalação segura e eficiente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Estudo de Viabilidade e Dimensionamento</h3>
              <p className="text-gray-600">Análise da carga térmica, estudo de viabilidade técnica e econômica, dimensionamento do chiller e sistemas auxiliares (bombas, torres, tubulações).</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Projeto Executivo Detalhado</h3>
              <p className="text-gray-600">Elaboração do projeto executivo com especificações técnicas, layout de instalação, memorial de cálculo e cronograma de execução.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Preparação da Infraestrutura</h3>
              <p className="text-gray-600">Preparação da base de concreto, instalações elétricas, hidráulicas e sistemas de drenagem necessários para o chiller.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Instalação e Montagem</h3>
              <p className="text-gray-600">Instalação do chiller, conexões hidráulicas e elétricas, montagem de sistemas auxiliares e integração com automação predial.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">5</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Comissionamento e Start-up</h3>
              <p className="text-gray-600">Testes de performance, calibração de controles, treinamento da equipe operacional e entrega da documentação técnica.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Aplicações Industriais e Comerciais
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chillers são essenciais em diversos segmentos que requerem refrigeração de precisão
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Indústria Farmacêutica</h3>
              <p className="text-gray-600 mb-4">Controle preciso de temperatura em processos de fabricação e armazenamento</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Salas limpas climatizadas</li>
                <li>• Armazenamento de medicamentos</li>
                <li>• Processos de fabricação</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Data Centers</h3>
              <p className="text-gray-600 mb-4">Refrigeração crítica para servidores e equipamentos de TI</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Resfriamento de servidores</li>
                <li>• Controle de umidade</li>
                <li>• Redundância de sistema</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Indústria Alimentícia</h3>
              <p className="text-gray-600 mb-4">Refrigeração para conservação e processamento de alimentos</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Câmaras frigoríficas</li>
                <li>• Processamento de alimentos</li>
                <li>• Controle de qualidade</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Hospitais</h3>
              <p className="text-gray-600 mb-4">Climatização de ambientes críticos e equipamentos médicos</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Centros cirúrgicos</li>
                <li>• UTIs e enfermarias</li>
                <li>• Equipamentos de ressonância</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Indústria Química</h3>
              <p className="text-gray-600 mb-4">Controle térmico em processos químicos e petroquímicos</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Reatores químicos</li>
                <li>• Processos de destilação</li>
                <li>• Controle de reações</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Shopping Centers</h3>
              <p className="text-gray-600 mb-4">Climatização de grandes áreas comerciais</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Áreas comuns</li>
                <li>• Lojas e restaurantes</li>
                <li>• Cinemas e entretenimento</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por Que Escolher a ClimatBH para Instalação de Chiller?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Experiência Comprovada</h3>
              <p className="text-gray-600">Mais de 15 anos instalando chillers industriais de grande porte</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <User className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Equipe Especializada</h3>
              <p className="text-gray-600">Técnicos certificados em sistemas de refrigeração industrial</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Suporte 24h</h3>
              <p className="text-gray-600">Atendimento de emergência para sistemas críticos</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Wrench className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Garantia Estendida</h3>
              <p className="text-gray-600">Garantia de instalação e suporte técnico especializado</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="orcamento" className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Precisa de Instalação de Chiller Industrial?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Nossa equipe especializada está pronta para dimensionar e instalar o chiller ideal para sua aplicação industrial em Belo Horizonte, Contagem e Nova Lima.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+5531995352139"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Solicitar Orçamento Gratuito</span>
            </a>
            <a
              href="https://wa.me/5531995352139?text=Olá! Gostaria de consultoria técnica para chiller."
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Consultoria Técnica Especializada
            </a>
          </div>
          <p className="text-blue-100 mt-4">
            Atendimento 24h para emergências: (31) 995352139
          </p>
        </div>
      </section>

      {/* Advanced Technology Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tecnologia Avançada em Chillers Industriais
            </h2>
          </div>

          <div className="space-y-12">
            <div>
              <p className="text-lg text-gray-600 mb-8">
                Os chillers industriais representam a solução mais eficiente para refrigeração de grande porte em Belo Horizonte. Estes sistemas são projetados para fornecer água gelada de forma consistente e eficiente para processos industriais, climatização de grandes edifícios e aplicações especializadas que demandam controle preciso de temperatura.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Tipos de Chillers e Aplicações</h3>
                <p className="text-gray-600 mb-6">
                  Oferecemos instalação de chillers centrífugos, parafuso e scroll, cada um adequado para diferentes capacidades e aplicações. Chillers centrífugos são ideais para grandes capacidades (acima de 500 TR), enquanto chillers parafuso atendem aplicações médias (50-500 TR) e chillers scroll são perfeitos para aplicações menores com alta eficiência.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Eficiência Energética e Sustentabilidade</h3>
                <p className="text-gray-600 mb-6">
                  Os chillers modernos incorporam tecnologias como compressores de velocidade variável, condensadores de alta eficiência e sistemas de controle inteligente que otimizam o consumo energético. Isso resulta em economia de até 40% no consumo de energia comparado a sistemas convencionais, contribuindo significativamente para a sustentabilidade operacional.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Integração com Sistemas de Automação</h3>
                <p className="text-gray-600 mb-6">
                  Nossos chillers são integrados com sistemas de automação predial (BMS) permitindo monitoramento remoto, controle preciso de temperatura, programação de horários de funcionamento e diagnóstico preventivo. Esta integração maximiza a eficiência operacional e reduz custos de manutenção.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Redundância e Confiabilidade</h3>
                <p className="text-gray-600 mb-6">
                  Para aplicações críticas como hospitais, data centers e processos industriais contínuos, projetamos sistemas com redundância N+1, garantindo que a falha de um chiller não comprometa a operação. Isso inclui sistemas de backup automático e distribuição de carga inteligente entre múltiplas unidades.
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
              Perguntas Frequentes sobre Instalação de Chiller
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tire suas dúvidas sobre instalação de sistemas chiller em Belo Horizonte
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Qual é a capacidade ideal de chiller para minha aplicação?
              </h3>
              <p className="text-gray-600">
                A capacidade ideal depende da carga térmica do ambiente e do processo. Para edifícios comerciais, calculamos cerca de 400-600 BTU/h por m². Para processos industriais, analisamos o calor gerado pelos equipamentos. Nossa equipe realiza cálculo de carga térmica detalhado para dimensionar corretamente o sistema.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Quanto tempo leva para instalar um chiller industrial?
              </h3>
              <p className="text-gray-600">
                O prazo varia conforme a complexidade: chillers de 50-100 TR levam 2-3 semanas, sistemas de 200-500 TR precisam de 4-6 semanas, e instalações acima de 500 TR podem levar 2-3 meses. Isso inclui preparação da infraestrutura, montagem, tubulações, testes e comissionamento completo.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Chillers consomem muita energia elétrica?
              </h3>
              <p className="text-gray-600">
                Chillers modernos são altamente eficientes. Um chiller de 100 TR consome cerca de 60-80 kW, mas substitui múltiplos equipamentos menores que consumiriam 120-150 kW. Com tecnologia inverter e controles inteligentes, a economia energética pode chegar a 40% comparado a sistemas convencionais.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                É necessário casa de máquinas específica para chiller?
              </h3>
              <p className="text-gray-600">
                Sim, chillers requerem casa de máquinas com ventilação adequada, acesso para manutenção, base estrutural reforçada e sistemas auxiliares (bombas, torres de resfriamento). Projetamos a casa de máquinas conforme normas técnicas e necessidades específicas do equipamento escolhido.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Qual é a vida útil de um chiller industrial?
              </h3>
              <p className="text-gray-600">
                Com manutenção adequada, chillers industriais têm vida útil de 15-25 anos. Chillers centrífugos podem durar até 30 anos, enquanto sistemas parafuso e scroll têm vida útil de 15-20 anos. A manutenção preventiva regular é fundamental para maximizar a durabilidade e eficiência.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Vocês fazem retrofit de sistemas antigos?
              </h3>
              <p className="text-gray-600">
                Sim, realizamos retrofit completo de sistemas antigos, incluindo substituição de chillers obsoletos, modernização de controles, upgrade de sistemas auxiliares e integração com automação predial. O retrofit pode resultar em economia de até 50% no consumo energético comparado ao sistema original.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

