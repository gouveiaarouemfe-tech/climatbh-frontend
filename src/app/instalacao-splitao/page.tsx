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
                src="/images/SplitãoemBH.jpg"
                alt="Instalação de Splitão em BH - ClimatBH"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
                priority
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
                src="/images/oque-e-Splitão.jpg"
                alt="Sistema Splitão - Componentes e funcionamento"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Types of Splitão */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tipos de Splitão que Instalamos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos diferentes tipos de splitão para atender às necessidades específicas de cada ambiente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Splitão de Teto</h3>
              <p className="text-gray-600 mb-6">
                Instalado no teto, oferece distribuição uniforme do ar e aproveitamento máximo do espaço útil.
              </p>
              
              <h4 className="font-semibold text-gray-900 mb-3">Vantagens:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Distribuição uniforme do ar</li>
                <li>• Não ocupa espaço útil</li>
                <li>• Visual discreto</li>
                <li>• Fácil manutenção</li>
              </ul>
              
              <h4 className="font-semibold text-gray-900 mb-3 mt-6">Ideal para:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Auditórios</li>
                <li>• Salas de conferência</li>
                <li>• Escritórios amplos</li>
                <li>• Lojas e showrooms</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Splitão de Piso</h3>
              <p className="text-gray-600 mb-6">
                Instalado no piso, oferece facilidade de instalação e manutenção, ideal para ambientes industriais.
              </p>
              
              <h4 className="font-semibold text-gray-900 mb-3">Vantagens:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Instalação simplificada</li>
                <li>• Manutenção facilitada</li>
                <li>• Acesso direto aos componentes</li>
                <li>• Menor custo de instalação</li>
              </ul>
              
              <h4 className="font-semibold text-gray-900 mb-3 mt-6">Ideal para:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Galpões industriais</li>
                <li>• Depósitos</li>
                <li>• Oficinas</li>
                <li>• Áreas de produção</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Splitão Cassete</h3>
              <p className="text-gray-600 mb-6">
                Embutido no forro, oferece design elegante e distribuição de ar em quatro direções.
              </p>
              
              <h4 className="font-semibold text-gray-900 mb-3">Vantagens:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Design elegante e discreto</li>
                <li>• Distribuição em 4 direções</li>
                <li>• Integração com arquitetura</li>
                <li>• Controle individual de direcionamento</li>
              </ul>
              
              <h4 className="font-semibold text-gray-900 mb-3 mt-6">Ideal para:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Restaurantes</li>
                <li>• Hotéis</li>
                <li>• Centros comerciais</li>
                <li>• Ambientes corporativos</li>
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
              Processo de Instalação de Splitão
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodologia técnica especializada para garantir instalação segura e eficiente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Análise do Local</h3>
              <p className="text-gray-600">Estudo detalhado do ambiente, carga térmica e pontos de instalação</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Preparação da Infraestrutura</h3>
              <p className="text-gray-600">Preparação elétrica, estrutural e pontos de fixação</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Instalação dos Equipamentos</h3>
              <p className="text-gray-600">Montagem das unidades interna e externa com precisão técnica</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Testes e Comissionamento</h3>
              <p className="text-gray-600">Testes completos de funcionamento e ajustes finais</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Aplicações do Splitão
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ideal para diversos tipos de ambientes que requerem climatização de alta capacidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-blue-100 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Factory className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Galpões Industriais</h3>
              <p className="text-gray-600 mb-4 text-center">Climatização de grandes áreas de produção e armazenamento</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Controle de temperatura para processos</li>
                <li>• Conforto térmico para trabalhadores</li>
                <li>• Proteção de equipamentos</li>
                <li>• Melhoria da produtividade</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-blue-100 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Building className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Auditórios e Teatros</h3>
              <p className="text-gray-600 mb-4 text-center">Climatização para grandes públicos com conforto acústico</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Operação silenciosa</li>
                <li>• Distribuição uniforme do ar</li>
                <li>• Controle de umidade</li>
                <li>• Design discreto</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-blue-100 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Warehouse className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Centros de Distribuição</h3>
              <p className="text-gray-600 mb-4 text-center">Climatização de depósitos e centros logísticos</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Proteção de mercadorias</li>
                <li>• Conforto para operadores</li>
                <li>• Controle de umidade</li>
                <li>• Eficiência energética</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Academias e Ginásios</h3>
              <p className="text-gray-600 mb-4">Climatização para atividades físicas e esportivas</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Renovação constante do ar</li>
                <li>• Controle de umidade</li>
                <li>• Distribuição uniforme</li>
                <li>• Baixo nível de ruído</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Restaurantes e Bares</h3>
              <p className="text-gray-600 mb-4">Climatização para ambientes gastronômicos</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Controle de odores</li>
                <li>• Conforto térmico</li>
                <li>• Operação silenciosa</li>
                <li>• Fácil manutenção</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Igrejas e Templos</h3>
              <p className="text-gray-600 mb-4">Climatização para grandes congregações</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Operação ultra silenciosa</li>
                <li>• Distribuição uniforme</li>
                <li>• Design discreto</li>
                <li>• Eficiência energética</li>
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
              Vantagens da Instalação de Splitão com a ClimatBH
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Experiência Comprovada</h3>
              <p className="text-gray-600">Mais de 15 anos instalando splitões em grandes ambientes</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Equipe Especializada</h3>
              <p className="text-gray-600">Técnicos certificados em sistemas de grande porte</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Instalação Rápida</h3>
              <p className="text-gray-600">Processo otimizado que minimiza interrupções</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Wrench className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Garantia Estendida</h3>
              <p className="text-gray-600">Garantia de instalação e suporte técnico</p>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Manutenção de Splitão
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Além da instalação, oferecemos serviços completos de manutenção preventiva e corretiva
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-4 text-green-600">Manutenção Preventiva</h3>
              <p className="text-gray-600 mb-6">
                Serviços programados para manter seu splitão funcionando com máxima eficiência.
              </p>
              
              <h4 className="font-semibold text-gray-900 mb-3">Inclui:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Limpeza completa de filtros e serpentinas</li>
                <li>• Verificação de pressões e temperaturas</li>
                <li>• Inspeção de componentes elétricos</li>
                <li>• Teste de controles e sensores</li>
                <li>• Verificação de drenagem</li>
                <li>• Relatório técnico detalhado</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-4 text-red-600">Manutenção Corretiva</h3>
              <p className="text-gray-600 mb-6">
                Reparo de falhas e substituição de componentes para restaurar o funcionamento.
              </p>
              
              <h4 className="font-semibold text-gray-900 mb-3">Inclui:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Diagnóstico de falhas</li>
                <li>• Reparo de compressores</li>
                <li>• Substituição de componentes</li>
                <li>• Reparo de vazamentos</li>
                <li>• Recarga de gás refrigerante</li>
                <li>• Atendimento de emergência 24h</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes sobre Instalação de Splitão
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tire suas dúvidas sobre a instalação de sistemas splitão
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
      <section id="orcamento" className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Solicite um Orçamento para Instalação de Splitão
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Nossa equipe está pronta para projetar a solução ideal para seu ambiente.
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
              href="https://wa.me/5531995352139?text=Olá! Gostaria de um orçamento para instalação de splitão."
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

            <Link href="/instalacao-chiller" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/images/iqGpec6GN4vl.jpg"
                alt="Instalação de Chiller"
                width={400}
                height={250}
                className="rounded-lg w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">Instalação de Chiller</h3>
              <p className="text-gray-600 mb-4">Sistemas chiller para refrigeração industrial</p>
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

