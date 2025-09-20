import Image from 'next/image';
import Link from 'next/link';
import { Phone, CheckCircle, Clock, Award, Users, Wrench, ArrowRight, Building, Factory, Warehouse } from 'lucide-react';
import { generateMetadata } from '@/components/seo/SEOHead';
import StructuredData from '@/components/seo/StructuredData';
import FAQStructuredData from '@/components/seo/FAQStructuredData';

const faqData = [
  {
    question: "O que é um sistema splitão e para que serve?",
    answer: "Um sistema splitão é um tipo de ar condicionado de grande capacidade, ideal para climatizar ambientes amplos como galpões, auditórios, lojas e centros comerciais. Ele oferece alta potência de refrigeração e é projetado para operar de forma eficiente em espaços que demandam grande volume de ar climatizado."
  },
  {
    question: "Quais as vantagens de instalar um splitão em meu negócio?",
    answer: "As principais vantagens incluem alta capacidade de refrigeração, eficiência energética para grandes áreas, robustez e durabilidade, flexibilidade de instalação (teto, piso, cassete) e melhor controle da qualidade do ar em ambientes amplos. É uma solução econômica para climatizar grandes espaços."
  },
  {
    question: "Quanto tempo leva a instalação de um splitão?",
    answer: "O tempo de instalação de um splitão varia conforme a complexidade do projeto, o tamanho do equipamento e as condições do local. Geralmente, uma instalação pode levar de 2 a 5 dias úteis. Realizamos uma análise prévia para fornecer um cronograma preciso."
  },
  {
    question: "Qual o custo médio para instalar um splitão em BH?",
    answer: "O custo de instalação de um splitão depende de fatores como a capacidade do equipamento (BTUs), a marca, a complexidade da infraestrutura necessária e a mão de obra. Oferecemos orçamentos personalizados e competitivos após uma visita técnica ao local."
  },
  {
    question: "Vocês oferecem garantia na instalação do splitão?",
    answer: "Sim, todos os nossos serviços de instalação de splitão possuem garantia tanto para a mão de obra quanto para os equipamentos instalados, conforme as normas do fabricante e do setor. A satisfação e segurança do cliente são nossa prioridade."
  },
  {
    question: "É necessário fazer manutenção após a instalação do splitão?",
    answer: "Sim, a manutenção regular é crucial para garantir o bom funcionamento, a eficiência energética e a longevidade do seu splitão. Recomendamos a manutenção preventiva periódica e oferecemos contratos de PMOC para assegurar a qualidade do ar e a conformidade legal."
  },
  {
    question: "A ClimatBH instala splitão em quais tipos de ambientes?",
    answer: "Nossa equipe é especializada na instalação de splitão em uma ampla variedade de ambientes, incluindo galpões industriais, auditórios, teatros, centros de distribuição, academias, grandes escritórios e lojas de varejo em Belo Horizonte e região metropolitana."
  },
  {
    question: "Quais marcas de splitão vocês trabalham?",
    answer: "Trabalhamos com as principais marcas do mercado, como Carrier, Trane, Daikin, LG, Samsung, Midea, entre outras, garantindo equipamentos de alta qualidade e tecnologia para nossos clientes."
  },
  {
    question: "Posso integrar o splitão com outros sistemas de climatização?",
    answer: "Sim, em muitos casos, é possível integrar o sistema splitão com outros sistemas de climatização ou automação predial para otimizar o controle e a eficiência energética. Nossa equipe técnica pode avaliar a viabilidade e propor as melhores soluções para seu projeto."
  }
];

export const metadata = generateMetadata({
  title: 'Instalação de Splitão em BH: Climatização para Grandes Ambientes | ClimatBH',
  description: 'Instalação especializada em sistemas splitão para climatização de ambientes grandes como galpões e auditórios. Equipe técnica certificada em BH e região.',
  keywords: 'instalação splitão BH, ar condicionado splitão, climatização galpão, splitão industrial, ar condicionado grande porte',
  url: '/instalacao-splitao',
});

const serviceStructuredData = {
  name: 'Instalação de Splitão em Belo Horizonte',
  description: 'Instalação especializada de sistemas splitão para climatização de grandes ambientes comerciais e industriais em Belo Horizonte e região metropolitana.',
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
  serviceType: 'Instalação de Splitão',
  category: 'Climatização de Grandes Ambientes',
};

export default function InstalacaoSplitao() {
  return (
    <div className="min-h-screen">
      <StructuredData type="Service" data={serviceStructuredData} />
      <FAQStructuredData faqs={faqData} pageTitle="Instalação de Splitão em BH" />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Instalação de Splitão em BH: Climatização para Grandes Ambientes
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Instalação especializada em sistemas splitão para climatização de ambientes grandes como galpões e auditórios. Soluções robustas para alta capacidade de refrigeração.
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
                src="/images/splitao-em-BH.jpg"
                alt="Instalação de Splitão em BH - ClimatBH"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is Splitão Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                O que é um Sistema Splitão?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                O splitão é um sistema de ar condicionado de grande capacidade, projetado especificamente para climatizar ambientes amplos. Combina alta potência de refrigeração com eficiência energética, sendo ideal para espaços que requerem climatização robusta.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Principais Características do Splitão:
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Alta Capacidade de Refrigeração</h4>
                    <p className="text-gray-600">Potência de 18.000 BTUs até 80.000 BTUs ou mais</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Design Robusto</h4>
                    <p className="text-gray-600">Construção resistente para operação contínua em ambientes exigentes</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Flexibilidade de Instalação</h4>
                    <p className="text-gray-600">Pode ser instalado em teto, parede ou piso conforme necessidade</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Controle Avançado</h4>
                    <p className="text-gray-600">Sistemas de controle digital com múltiplas opções de configuração</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/images/oque-e-splitao.jpg"
                alt="Sistema Splitão - Componentes e funcionamento"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
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
              Processo de Instalação de Splitão
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodologia técnica especializada para garantir instalação segura e eficiente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Análise Técnica</h3>
              <p className="text-gray-600">Avaliação do local, cálculo de carga térmica e dimensionamento do sistema.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Preparação da Infraestrutura</h3>
              <p className="text-gray-600">Instalação elétrica, suportes e preparação das tubulações.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Instalação dos Equipamentos</h3>
              <p className="text-gray-600">Montagem das unidades interna e externa com conexões adequadas.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Testes e Comissionamento</h3>
              <p className="text-gray-600">Verificação de vazamentos, testes de funcionamento e ajustes finais.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">5</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Entrega e Treinamento</h3>
              <p className="text-gray-600">Orientação sobre operação e entrega da documentação técnica.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Precisa de Instalação de Splitão para Grandes Ambientes?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Nossa equipe especializada está pronta para dimensionar e instalar o sistema splitão ideal para seu projeto. 
            Solicite um orçamento personalizado e descubra a solução perfeita para sua climatização.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+5531995352139"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Ligar Agora: (31) 99535-2139</span>
            </a>
            <a
              href="https://wa.me/5531995352139?text=Olá! Preciso de orçamento para instalação de splitão."
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 text-center"
            >
              Solicitar Orçamento WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tecnologia e Aplicações do Splitão Comercial
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sistemas avançados de climatização para ambientes comerciais e industriais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="bg-blue-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-6">
                <Building className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Ambientes Comerciais</h3>
              <p className="text-gray-600 mb-4">
                Ideal para lojas, restaurantes, escritórios e centros comerciais que precisam de climatização eficiente e confiável.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Shopping centers</li>
                <li>• Supermercados</li>
                <li>• Restaurantes</li>
                <li>• Academias</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <div className="bg-green-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-6">
                <Factory className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Aplicações Industriais</h3>
              <p className="text-gray-600 mb-4">
                Soluções robustas para galpões industriais, depósitos e áreas de produção que exigem controle térmico preciso.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Galpões industriais</li>
                <li>• Centros de distribuição</li>
                <li>• Áreas de produção</li>
                <li>• Depósitos refrigerados</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <div className="bg-purple-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-6">
                <Warehouse className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Controle Inteligente</h3>
              <p className="text-gray-600 mb-4">
                Sistemas de controle digital permitem ajustes precisos de temperatura, programação de horários e monitoramento remoto.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Controle digital avançado</li>
                <li>• Programação de horários</li>
                <li>• Monitoramento remoto</li>
                <li>• Relatórios de consumo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes sobre Instalação de Splitão
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
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
    </div>
  );
}

