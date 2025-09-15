import Image from 'next/image';
import Link from 'next/link';
import { Phone, CheckCircle, Clock, Award, Users, Wrench, ArrowRight, AlertTriangle, Settings, Shield } from 'lucide-react';
import { generateMetadata } from '@/components/seo/SEOHead';
import StructuredData from '@/components/seo/StructuredData';
import FAQStructuredData from '@/components/seo/FAQStructuredData';

const faqData = [
  {
    question: "Com que frequência devo realizar a manutenção do chiller?",
    answer: "A frequência da manutenção do chiller depende do tipo de equipamento, intensidade de uso e ambiente. Geralmente, recomendamos inspeções mensais e manutenção preventiva completa a cada 3 ou 6 meses para garantir o desempenho ideal e evitar falhas."
  },
  {
    question: "Quais os benefícios da manutenção preventiva de chiller?",
    answer: "A manutenção preventiva de chiller oferece diversos benefícios, como a redução do consumo de energia (até 25%), aumento da vida útil do equipamento, prevenção de paradas inesperadas, melhoria da eficiência de refrigeração e redução de custos com reparos emergenciais."
  },
  {
    question: "Quanto custa a manutenção de um chiller em BH?",
    answer: "O custo da manutenção de chiller varia bastante, dependendo da capacidade do equipamento, do tipo de manutenção (preventiva, corretiva, preditiva) e da complexidade do serviço. Oferecemos orçamentos personalizados após uma avaliação técnica detalhada do seu sistema."
  },
  {
    question: "Vocês oferecem atendimento de emergência para chillers?",
    answer: "Sim, a ClimatBH oferece atendimento de emergência 24 horas por dia, 7 dias por semana, para sistemas chiller em Belo Horizonte e região. Nossa equipe técnica especializada está pronta para diagnosticar e solucionar problemas críticos rapidamente."
  },
  {
    question: "Quais são os problemas mais comuns em chillers?",
    answer: "Os problemas mais comuns incluem baixa eficiência energética, falhas no compressor, vazamentos de refrigerante, problemas nos condensadores e evaporadores (sujeira, obstrução) e falhas nos controles. Nossa manutenção visa prevenir e corrigir esses problemas."
  },
  {
    question: "A manutenção de chiller inclui a análise de óleo e refrigerante?",
    answer: "Sim, em manutenções mais abrangentes, realizamos a análise de óleo e refrigerante para verificar a qualidade, contaminação e níveis adequados. Isso é crucial para a saúde e longevidade do compressor e do sistema como um todo."
  },
  {
    question: "Vocês trabalham com todas as marcas de chiller?",
    answer: "Nossa equipe possui experiência e certificação para trabalhar com as principais marcas de chiller do mercado, como Carrier, Trane, York, Daikin, LG, Samsung, entre outras. Utilizamos peças originais ou compatíveis de alta qualidade."
  },
  {
    question: "É necessário um contrato de manutenção para chiller?",
    answer: "Para equipamentos de grande porte como chillers, um contrato de manutenção é altamente recomendado. Ele garante a periodicidade dos serviços, atendimento prioritário, planejamento de custos e maior segurança operacional, além de prolongar a vida útil do seu investimento."
  },
  {
    question: "Qual a garantia dos serviços de manutenção de chiller da ClimatBH?",
    answer: "Oferecemos garantia em todos os nossos serviços de manutenção de chiller, tanto para a mão de obra quanto para as peças substituídas. Os termos específicos da garantia são detalhados no orçamento e contrato de serviço."
  }
];

export const metadata = generateMetadata({
  title: 'Manutenção de Chiller em BH: Assistência Técnica Especializada | ClimatBH',
  description: 'Manutenção corretiva e preventiva de chillers focado em otimizar seu desempenho e evitar paradas e maiores prejuízos. Atendimento 24h em BH e região.',
  keywords: 'manutenção chiller BH, assistência técnica chiller, reparo chiller industrial, manutenção preventiva chiller',
  url: '/manutencao-chiller',
});

const serviceStructuredData = {
  name: 'Manutenção de Chiller Industrial em Belo Horizonte',
  description: 'Serviços especializados de manutenção preventiva e corretiva para sistemas chiller industriais e comerciais em Belo Horizonte e região metropolitana.',
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
  serviceType: 'Manutenção de Chiller Industrial',
  category: 'Manutenção de Refrigeração Industrial',
};

export default function ManutencaoChiller() {
  return (
    <div className="min-h-screen">
      <StructuredData type="Service" data={serviceStructuredData} />
      <FAQStructuredData faqs={faqData} pageTitle="Manutenção de Chiller em BH" />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Manutenção de Chiller em BH: Assistência Técnica Especializada
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Manutenção corretiva e preventiva de chillers focado em otimizar seu desempenho e evitar paradas e maiores prejuízos. Atendimento de emergência 24h.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+5531995352139"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Emergência 24h: (31) 99535-2139</span>
                </a>
                <Link
                  href="#contrato"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 text-center"
                >
                  Contratar Manutenção
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/wywuHOV9kejq.jpg"
                alt="Manutenção de Chiller Industrial em BH - ClimatBH"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
                priority
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
                Por Que a Manutenção de Chiller é Crítica?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Chillers são equipamentos de alta complexidade que operam continuamente em aplicações críticas. A falta de manutenção adequada pode resultar em paradas não programadas, perda de produção e custos elevados de reparo.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Consequências da Falta de Manutenção:
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Paradas Não Programadas</h4>
                    <p className="text-gray-600">Falhas inesperadas que podem interromper processos críticos</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Aumento do Consumo Energético</h4>
                    <p className="text-gray-600">Equipamentos mal mantidos consomem até 30% mais energia</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Redução da Vida Útil</h4>
                    <p className="text-gray-600">Componentes se desgastam prematuramente sem manutenção adequada</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Custos de Reparo Elevados</h4>
                    <p className="text-gray-600">Reparos emergenciais custam até 5x mais que manutenção preventiva</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/images/iqGpec6GN4vl.jpg"
                alt="Técnico realizando manutenção em chiller"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Types of Maintenance */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tipos de Manutenção de Chiller
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos diferentes modalidades de manutenção para atender às necessidades específicas de cada cliente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Settings className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center text-green-600">Manutenção Preventiva</h3>
              <p className="text-gray-600 mb-6 text-center">
                Inspeções e serviços programados para prevenir falhas e otimizar o desempenho do equipamento.
              </p>
              
              <h4 className="font-semibold text-gray-900 mb-3">Inclui:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Limpeza de condensadores e evaporadores</li>
                <li>• Verificação de pressões e temperaturas</li>
                <li>• Análise de óleo e refrigerante</li>
                <li>• Inspeção de componentes elétricos</li>
                <li>• Calibração de controles</li>
                <li>• Relatório técnico detalhado</li>
              </ul>
              
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-green-700 font-medium">Economia de até 25% nos custos operacionais</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Wrench className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center text-red-600">Manutenção Corretiva</h3>
              <p className="text-gray-600 mb-6 text-center">
                Reparo de falhas e substituição de componentes danificados para restaurar o funcionamento normal.
              </p>
              
              <h4 className="font-semibold text-gray-900 mb-3">Inclui:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Diagnóstico de falhas</li>
                <li>• Reparo de compressores</li>
                <li>• Substituição de componentes</li>
                <li>• Soldas e vedações</li>
                <li>• Testes de funcionamento</li>
                <li>• Garantia dos serviços</li>
              </ul>
              
              <div className="mt-6 p-4 bg-red-50 rounded-lg">
                <p className="text-sm text-red-700 font-medium">Atendimento de emergência 24h</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center text-blue-600">Manutenção Preditiva</h3>
              <p className="text-gray-600 mb-6 text-center">
                Monitoramento contínuo com tecnologia avançada para prever falhas antes que ocorram.
              </p>
              
              <h4 className="font-semibold text-gray-900 mb-3">Inclui:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Análise de vibrações</li>
                <li>• Termografia infravermelha</li>
                <li>• Análise de óleo</li>
                <li>• Monitoramento remoto</li>
                <li>• Relatórios de tendências</li>
                <li>• Planejamento de intervenções</li>
              </ul>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-700 font-medium">Redução de 40% nas paradas não programadas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Processo de Manutenção Especializada
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodologia técnica rigorosa para garantir máxima eficiência e confiabilidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Inspeção Inicial</h3>
              <p className="text-gray-600">Diagnóstico completo do estado atual do equipamento e identificação de problemas</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Planejamento</h3>
              <p className="text-gray-600">Elaboração do plano de manutenção com cronograma e lista de materiais</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Execução</h3>
              <p className="text-gray-600">Realização dos serviços de manutenção seguindo procedimentos técnicos rigorosos</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Testes e Relatório</h3>
              <p className="text-gray-600">Testes de funcionamento e entrega de relatório técnico detalhado</p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Problemas Comuns em Chillers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Identificamos e solucionamos os principais problemas que afetam o desempenho dos chillers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-red-600">Baixa Eficiência Energética</h3>
              <p className="text-gray-600 mb-4">Aumento no consumo de energia sem aumento proporcional na capacidade de refrigeração</p>
              <h4 className="font-semibold text-gray-900 mb-2">Causas Comuns:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Condensadores sujos</li>
                <li>• Vazamentos de refrigerante</li>
                <li>• Problemas no compressor</li>
                <li>• Controles descalibrados</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-red-600">Falhas no Compressor</h3>
              <p className="text-gray-600 mb-4">Problemas no coração do sistema que podem causar parada total</p>
              <h4 className="font-semibold text-gray-900 mb-2">Causas Comuns:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Lubrificação inadequada</li>
                <li>• Superaquecimento</li>
                <li>• Contaminação do óleo</li>
                <li>• Desgaste natural</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-red-600">Vazamentos de Refrigerante</h3>
              <p className="text-gray-600 mb-4">Perda de refrigerante que reduz a capacidade e pode causar danos ambientais</p>
              <h4 className="font-semibold text-gray-900 mb-2">Causas Comuns:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Corrosão em tubulações</li>
                <li>• Vedações deterioradas</li>
                <li>• Vibrações excessivas</li>
                <li>• Instalação inadequada</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-red-600">Problemas de Controle</h3>
              <p className="text-gray-600 mb-4">Falhas nos sistemas de controle que afetam a operação automática</p>
              <h4 className="font-semibold text-gray-900 mb-2">Causas Comuns:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Sensores defeituosos</li>
                <li>• Problemas elétricos</li>
                <li>• Software desatualizado</li>
                <li>• Interferências eletromagnéticas</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-red-600">Incrustações e Corrosão</h3>
              <p className="text-gray-600 mb-4">Acúmulo de depósitos que reduzem a transferência de calor</p>
              <h4 className="font-semibold text-gray-900 mb-2">Causas Comuns:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Qualidade da água</li>
                <li>• Falta de tratamento químico</li>
                <li>• Manutenção inadequada</li>
                <li>• Materiais incompatíveis</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-red-600">Ruídos e Vibrações</h3>
              <p className="text-gray-600 mb-4">Operação ruidosa que pode indicar problemas mecânicos</p>
              <h4 className="font-semibold text-gray-900 mb-2">Causas Comuns:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Desbalanceamento</li>
                <li>• Rolamentos desgastados</li>
                <li>• Fixação inadequada</li>
                <li>• Componentes soltos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vantagens da Manutenção com a ClimatBH
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Atendimento 24h</h3>
              <p className="text-gray-600">Suporte técnico de emergência disponível 24 horas por dia</p>
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
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Peças Originais</h3>
              <p className="text-gray-600">Utilizamos apenas peças originais e de alta qualidade</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Garantia Estendida</h3>
              <p className="text-gray-600">Garantia de serviços e peças substituídas</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes sobre Manutenção de Chiller
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tire suas dúvidas sobre a manutenção de chillers industriais e comerciais
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
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
      <section id="contrato" className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Garanta a Confiabilidade do seu Chiller com a ClimatBH
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Não espere uma falha crítica. Invista em manutenção especializada e evite prejuízos.
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
              href="https://wa.me/5531995352139?text=Olá! Gostaria de um orçamento para manutenção de chiller."
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Solicitar Orçamento via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// Seção de Serviços Relacionados
function RelatedServices() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Serviços Relacionados
          </h2>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/instalacao-chiller" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/images/iqGpec6GN4vl.jpg"
                alt="Instalação de Chiller"
                width={400}
                height={250}
                className="rounded-lg w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">Instalação de Chiller</h3>
              <p className="text-gray-600 mb-4">Instalação especializada de sistemas chiller industriais</p>
              <div className="flex items-center text-blue-600 font-medium">
                <span>Saiba mais</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </Link>

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
    );
}

