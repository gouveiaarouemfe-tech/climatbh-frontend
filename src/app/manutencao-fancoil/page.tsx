import Image from 'next/image';
import Link from 'next/link';
import { Phone, CheckCircle, Clock, Award, Users, Wrench, ArrowRight, Settings, Shield, AlertTriangle } from 'lucide-react';
import { generateMetadata } from '@/components/seo/SEOHead';
import StructuredData from '@/components/seo/StructuredData';
import FAQStructuredData from '@/components/seo/FAQStructuredData';

const faqData = [
  {
    question: "Com que frequência devo fazer a manutenção preventiva do FanCoil?",
    answer: "Recomendamos a manutenção preventiva trimestral para sistemas FanCoil em uso comercial intenso, e semestral para uso moderado. Isso garante a eficiência e prolonga a vida útil do equipamento."
  },
  {
    question: "Quanto custa a manutenção de um sistema FanCoil em BH?",
    answer: "O custo da manutenção FanCoil varia conforme o número de unidades, a capacidade do sistema e a complexidade da instalação. Oferecemos orçamentos personalizados após uma avaliação técnica. A manutenção preventiva geralmente é mais econômica a longo prazo."
  },
  {
    question: "Quais os principais sinais de que meu FanCoil precisa de manutenção?",
    answer: "Sinais comuns incluem: redução na capacidade de refrigeração/aquecimento, ruídos estranhos, aumento no consumo de energia, vazamento de água, odores desagradáveis e códigos de erro no display. Não ignore esses sinais para evitar problemas maiores."
  },
  {
    question: "Vocês realizam manutenção corretiva de emergência para FanCoil?",
    answer: "Sim, oferecemos atendimento de emergência 24 horas para manutenção corretiva de sistemas FanCoil em Belo Horizonte e região. Nossa equipe está pronta para diagnosticar e resolver falhas rapidamente, minimizando o tempo de inatividade."
  },
  {
    question: "A manutenção FanCoil inclui a limpeza dos filtros?",
    answer: "Sim, a limpeza e verificação dos filtros é um item essencial da nossa manutenção preventiva. Filtros limpos garantem melhor qualidade do ar e eficiência energética do sistema."
  },
  {
    question: "Qual a importância do PMOC para sistemas FanCoil?",
    answer: "O PMOC (Plano de Manutenção, Operação e Controle) é obrigatório por lei para edifícios de uso público e coletivo com sistemas de climatização, incluindo FanCoil. Ele garante a qualidade do ar, a eficiência energética e a conformidade legal, evitando multas e protegendo a saúde dos ocupantes."
  },
  {
    question: "Vocês utilizam peças originais na manutenção de FanCoil?",
    answer: "Priorizamos sempre o uso de peças originais do fabricante para garantir a compatibilidade e a durabilidade do reparo. Caso uma peça original não esteja disponível, utilizamos componentes de alta qualidade e compatibilidade, com garantia."
  },
  {
    question: "Quanto tempo leva para realizar a manutenção preventiva de um FanCoil?",
    answer: "O tempo varia de acordo com o tamanho e a complexidade do sistema. Uma manutenção preventiva completa pode levar de algumas horas a um dia inteiro, dependendo do número de unidades e da necessidade de limpeza profunda."
  },
  {
    question: "A ClimatBH oferece contratos de manutenção para FanCoil?",
    answer: "Sim, oferecemos contratos de manutenção preventiva e corretiva personalizados para sistemas FanCoil, que incluem visitas programadas, relatórios técnicos e atendimento prioritário. Entre em contato para saber mais sobre nossos planos."
  }
];

export const metadata = generateMetadata({
  title: 'Manutenção de FanCoil em BH: Assistência Técnica Especializada | ClimatBH',
  description: 'Manutenção preventiva e corretiva em sistemas FanCoil para garantir máxima eficiência, conforto e durabilidade. Atendimento 24h em BH e região.',
  keywords: 'manutenção fancoil BH, assistência técnica fancoil, reparo sistema fancoil, manutenção preventiva fancoil Belo Horizonte',
  url: '/manutencao-fancoil',
});

const serviceStructuredData = {
  name: 'Manutenção de Sistema FanCoil em Belo Horizonte',
  description: 'Serviços especializados de manutenção preventiva e corretiva para sistemas FanCoil em Belo Horizonte e região metropolitana.',
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
  serviceType: 'Manutenção de Sistema FanCoil',
  category: 'Manutenção de Climatização Comercial',
};

export default function ManutencaoFanCoil() {
  return (
    <div className="min-h-screen">
      <StructuredData type="Service" data={serviceStructuredData} />
      <FAQStructuredData faqs={faqData} pageTitle="Manutenção de FanCoil em BH" />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Manutenção de FanCoil: ClimatBH - 31 9535-2139
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Manutenção preventiva e corretiva em sistemas FanCoil para garantir máxima eficiência, conforto e durabilidade em Belo Horizonte e região. Equipe técnica certificada e atendimento 24h.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+5531995352139"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Emergência 24h: (31) 99535-2139</span>
                </a>
                <a
                  href="https://wa.me/5531995352139?text=Olá! Preciso de manutenção para FanCoil."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 text-center"
                >
                  Solicitar Orçamento
                </a>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/manutencao-fancoil-BH.webp"
                alt="Manutenção de Sistema FanCoil em BH - ClimatBH"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Por que a Manutenção FanCoil é Essencial?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Os sistemas FanCoil são componentes fundamentais em sistemas de climatização central e exigem manutenção especializada para garantir eficiência energética, prolongar sua vida útil e evitar falhas que possam gerar prejuízos operacionais.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Nossa equipe técnica certificada realiza serviços preventivos e corretivos de FanCoil em Belo Horizonte e região com foco em otimizar o desempenho do seu sistema, reduzir custos de operação e assegurar que a climatização funcione de forma contínua e confiável.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Benefícios da Manutenção Regular:
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Economia de Energia</h4>
                    <p className="text-gray-600">Redução de até 30% no consumo elétrico com manutenção adequada.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Maior Vida Útil</h4>
                    <p className="text-gray-600">Prolongamento da durabilidade do equipamento em até 50%.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Qualidade do Ar</h4>
                    <p className="text-gray-600">Ambiente mais saudável com ar limpo e livre de contaminantes.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Prevenção de Falhas</h4>
                    <p className="text-gray-600">Identificação precoce de problemas evita paradas inesperadas.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                O que Inclui Nossa Manutenção?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Wrench className="h-5 w-5 text-blue-600 mt-1" />
                  <p className="text-gray-700">Limpeza completa de filtros e serpentinas</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Wrench className="h-5 w-5 text-blue-600 mt-1" />
                  <p className="text-gray-700">Verificação e ajuste de componentes elétricos</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Wrench className="h-5 w-5 text-blue-600 mt-1" />
                  <p className="text-gray-700">Inspeção de vazamentos e drenagem</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Wrench className="h-5 w-5 text-blue-600 mt-1" />
                  <p className="text-gray-700">Teste de desempenho e eficiência</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Wrench className="h-5 w-5 text-blue-600 mt-1" />
                  <p className="text-gray-700">Lubrificação de motores e ventiladores</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Wrench className="h-5 w-5 text-blue-600 mt-1" />
                  <p className="text-gray-700">Relatório técnico detalhado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tipos de Manutenção FanCoil
            </h2>
            <p className="text-xl text-gray-600">
              Oferecemos soluções completas para todas as necessidades do seu sistema
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="bg-blue-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-6">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Manutenção Preventiva</h3>
              <p className="text-gray-600 mb-4">
                Visitas programadas para limpeza, inspeção e ajustes que previnem falhas e garantem eficiência contínua do sistema FanCoil.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Limpeza de filtros e serpentinas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Verificação elétrica completa</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Teste de performance</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="bg-red-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-6">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Manutenção Corretiva</h3>
              <p className="text-gray-600 mb-4">
                Reparo rápido e eficiente de falhas e problemas identificados no sistema FanCoil, com diagnóstico preciso e solução definitiva.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Diagnóstico técnico especializado</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Troca de componentes defeituosos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Garantia dos serviços</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="bg-green-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Contratos PMOC</h3>
              <p className="text-gray-600 mb-4">
                Plano de Manutenção, Operação e Controle conforme legislação, garantindo conformidade legal e qualidade do ar interior.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Conformidade com a Lei 13.589/2018</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Relatórios técnicos detalhados</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Atendimento prioritário</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes sobre Manutenção de FanCoil
            </h2>
          </div>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Precisa de Manutenção para seu Sistema FanCoil?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Entre em contato agora e garanta o melhor desempenho do seu sistema de climatização em Belo Horizonte e região.
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
              href="https://wa.me/5531995352139?text=Olá! Preciso de manutenção para FanCoil."
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 text-center"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
