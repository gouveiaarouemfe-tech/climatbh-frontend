import Image from 'next/image';
import Link from 'next/link';
import { Phone, CheckCircle, ArrowRight, Thermometer, Zap, Shield, Clock } from 'lucide-react';
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
                priority
              />
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
              Processo de Instalação de Chiller
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodologia técnica especializada para garantir instalação segura e eficiente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-center">Análise e Projeto</h3>
              <p className="text-gray-600 text-center">Estudo de carga térmica, dimensionamento e projeto executivo detalhado</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-center">Preparação da Infraestrutura</h3>
              <p className="text-gray-600 text-center">Preparação da base, infraestrutura elétrica e hidráulica</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-center">Transporte e Posicionamento</h3>
              <p className="text-gray-600 text-center">Transporte especializado e posicionamento preciso do equipamento</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-center">Conexões e Tubulações</h3>
              <p className="text-gray-600 text-center">Instalação de tubulações de água gelada, condensação e conexões elétricas</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">5</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-center">Comissionamento</h3>
              <p className="text-gray-600 text-center">Testes de funcionamento, ajustes e calibração do sistema</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">6</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-center">Treinamento e Entrega</h3>
              <p className="text-gray-600 text-center">Treinamento da equipe operacional e entrega técnica do sistema</p>
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
                <Users className="h-8 w-8 text-blue-600" />
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
            Solicite um Orçamento para Instalação de Chiller
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Nossa equipe está pronta para dimensionar e instalar o sistema chiller ideal para sua aplicação industrial
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
              href="mailto:contato@climatbh.com.br"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Enviar E-mail
            </a>
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
                Quanto custa para instalar um chiller industrial?
              </h3>
              <p className="text-gray-600">
                O custo varia de R$ 150.000 a R$ 800.000 dependendo da capacidade (50 a 500 TR), tipo (parafuso, centrífugo, scroll) e complexidade da instalação. Para projetos específicos, fazemos orçamento detalhado após análise técnica no local.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Quanto tempo demora para instalar um chiller?
              </h3>
              <p className="text-gray-600">
                Instalação completa leva de 2 a 6 semanas, incluindo preparação da infraestrutura, montagem, tubulações, conexões elétricas e comissionamento. Projetos maiores podem levar até 3 meses. Fornecemos cronograma detalhado no início.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Chiller consome muita energia elétrica?
              </h3>
              <p className="text-gray-600">
                Chillers modernos são muito eficientes. Um chiller de 100 TR consome cerca de 60-80 kW/h, mas pode substituir 20-30 splits que consumiriam 120-150 kW/h. A economia chega a 40% comparado a sistemas convencionais.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Que tipo de chiller é melhor para minha empresa?
              </h3>
              <p className="text-gray-600">
                Depende da aplicação: Scroll (até 50 TR) para pequenos comércios, Parafuso (50-500 TR) para indústrias médias, Centrífugo (500+ TR) para grandes edifícios. Analisamos sua demanda para recomendar o ideal.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Precisa de muito espaço para instalar chiller?
              </h3>
              <p className="text-gray-600">
                Sim, chillers precisam de casa de máquinas adequada com ventilação, acesso para manutenção e base estrutural reforçada. Área mínima de 20-50m² dependendo da capacidade. Fazemos projeto da casa de máquinas se necessário.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Chiller funciona 24 horas por dia?
              </h3>
              <p className="text-gray-600">
                Sim, chillers são projetados para operação contínua 24/7. Para aplicações críticas como hospitais e data centers, recomendamos sistema redundante (N+1) para garantir funcionamento mesmo durante manutenção.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Qual a vida útil de um chiller?
              </h3>
              <p className="text-gray-600">
                Com manutenção adequada, chillers duram 15-25 anos. Compressores podem precisar de revisão aos 10-15 anos. Investimento se paga em 5-8 anos através da economia energética e menor custo operacional.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Chiller faz muito barulho?
              </h3>
              <p className="text-gray-600">
                Chillers modernos são relativamente silenciosos (60-75 dB), mas devem ficar em casa de máquinas isolada acusticamente. Modelos com compressor centrífugo são mais silenciosos que parafuso. Fazemos projeto acústico quando necessário.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                E se o chiller quebrar, vocês atendem rápido?
              </h3>
              <p className="text-gray-600">
                Temos atendimento 24h para emergências em chillers. Estoque de peças principais em BH. Contratos de manutenção incluem atendimento prioritário e peças em consignação para reduzir tempo de parada.
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
            <Link href="/manutencao-chiller" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/images/wywuHOV9kejq.jpg"
                alt="Manutenção de Chiller"
                width={400}
                height={250}
                className="rounded-lg w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">Manutenção de Chiller</h3>
              <p className="text-gray-600 mb-4">Manutenção preventiva e corretiva para sistemas chiller</p>
              <div className="flex items-center text-blue-600 font-medium">
                <span>Saiba mais</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </Link>

            <Link href="/instalacao-vrf" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/images/instalaçãodeVRF.jpeg"
                alt="Instalação de VRF"
                width={400}
                height={250}
                className="rounded-lg w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">Instalação de VRF</h3>
              <p className="text-gray-600 mb-4">Sistemas VRF para climatização comercial</p>
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

