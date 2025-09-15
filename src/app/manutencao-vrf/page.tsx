import Image from 'next/image';
import Link from 'next/link';
import { Phone, CheckCircle, Clock, Award, Users, Wrench, ArrowRight, Settings, Shield, AlertTriangle } from 'lucide-react';
import { generateMetadata } from '@/components/seo/SEOHead';
import StructuredData from '@/components/seo/StructuredData';
import FAQStructuredData from '@/components/seo/FAQStructuredData';

const faqData = [
  {
    question: "Com que frequência devo fazer a manutenção preventiva do VRF?",
    answer: "Recomendamos a manutenção preventiva trimestral para sistemas VRF em uso comercial intenso, e semestral para uso moderado. Isso garante a eficiência e prolonga a vida útil do equipamento."
  },
  {
    question: "Quanto custa a manutenção de um sistema VRF em BH?",
    answer: "O custo da manutenção VRF varia conforme o número de unidades internas, a capacidade do sistema e a complexidade da instalação. Oferecemos orçamentos personalizados após uma avaliação técnica. A manutenção preventiva geralmente é mais econômica a longo prazo."
  },
  {
    question: "Quais os principais sinais de que meu VRF precisa de manutenção?",
    answer: "Sinais comuns incluem: redução na capacidade de refrigeração/aquecimento, ruídos estranhos, aumento no consumo de energia, vazamento de água, odores desagradáveis e códigos de erro no display. Não ignore esses sinais para evitar problemas maiores."
  },
  {
    question: "Vocês realizam manutenção corretiva de emergência para VRF?",
    answer: "Sim, oferecemos atendimento de emergência 24 horas para manutenção corretiva de sistemas VRF em Belo Horizonte e região. Nossa equipe está pronta para diagnosticar e resolver falhas rapidamente, minimizando o tempo de inatividade."
  },
  {
    question: "A manutenção VRF inclui a verificação do gás refrigerante?",
    answer: "Sim, a verificação do nível e da pressão do gás refrigerante é um item essencial da nossa manutenção preventiva. Em caso de vazamento, realizamos o reparo e a recarga conforme as normas técnicas e ambientais."
  },
  {
    question: "Qual a importância do PMOC para sistemas VRF?",
    answer: "O PMOC (Plano de Manutenção, Operação e Controle) é obrigatório por lei para edifícios de uso público e coletivo com sistemas de climatização, incluindo VRF. Ele garante a qualidade do ar, a eficiência energética e a conformidade legal, evitando multas e protegendo a saúde dos ocupantes."
  },
  {
    question: "Vocês utilizam peças originais na manutenção de VRF?",
    answer: "Priorizamos sempre o uso de peças originais do fabricante para garantir a compatibilidade e a durabilidade do reparo. Caso uma peça original não esteja disponível, utilizamos componentes de alta qualidade e compatibilidade, com garantia."
  },
  {
    question: "Quanto tempo leva para realizar a manutenção preventiva de um VRF?",
    answer: "O tempo varia de acordo com o tamanho e a complexidade do sistema. Uma manutenção preventiva completa pode levar de algumas horas a um dia inteiro, dependendo do número de unidades e da necessidade de limpeza profunda."
  },
  {
    question: "A ClimatBH oferece contratos de manutenção para VRF?",
    answer: "Sim, oferecemos contratos de manutenção preventiva e corretiva personalizados para sistemas VRF, que incluem visitas programadas, relatórios técnicos e atendimento prioritário. Entre em contato para saber mais sobre nossos planos."
  }
];

export const metadata = generateMetadata({
  title: 'Manutenção de VRF em BH: Assistência Técnica Especializada | ClimatBH',
  description: 'Manutenção Preventiva e corretiva em sistemas VRF/VRV para garantir máxima eficiência conforto e durabilidade. Atendimento 24h em BH e região.',
  keywords: 'manutenção VRF BH, assistência técnica VRF, reparo sistema VRF, manutenção preventiva VRF Belo Horizonte',
  url: '/manutencao-vrf',
});

const serviceStructuredData = {
  name: 'Manutenção de Sistema VRF em Belo Horizonte',
  description: 'Serviços especializados de manutenção preventiva e corretiva para sistemas VRF/VRV em Belo Horizonte e região metropolitana.',
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
  serviceType: 'Manutenção de Sistema VRF',
  category: 'Manutenção de Climatização Comercial',
};

export default function ManutencaoVRF() {
  return (
    <div className="min-h-screen">
      <StructuredData type="Service" data={serviceStructuredData} />
      <FAQStructuredData faqs={faqData} pageTitle="Manutenção de VRF em BH" />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Manutenção de VRF em BH: Assistência Técnica Especializada
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Manutenção Preventiva e corretiva em sistemas VRF/VRV para garantir máxima eficiência conforto e durabilidade. Equipe técnica certificada e atendimento 24h.
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
                src="/images/manutençãodeVRFBH.jpeg"
                alt="Manutenção de Sistema VRF em BH - ClimatBH"
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
                Por Que Manter seu Sistema VRF?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Sistemas VRF são investimentos significativos que requerem manutenção especializada para manter sua eficiência, confiabilidade e vida útil. A manutenção adequada garante conforto térmico constante e economia de energia.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Benefícios da Manutenção Regular:
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Economia de Energia</h4>
                    <p className="text-gray-600">Sistemas bem mantidos consomem até 25% menos energia</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Maior Vida Útil</h4>
                    <p className="text-gray-600">Prolonga a vida útil do equipamento em até 50%</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Melhor Qualidade do Ar</h4>
                    <p className="text-gray-600">Filtros limpos garantem ar mais puro e saudável</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Prevenção de Falhas</h4>
                    <p className="text-gray-600">Evita paradas não programadas e reparos custosos</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/images/oqueeVRF.jpeg"
                alt="Técnico realizando manutenção em sistema VRF"
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
              Tipos de Manutenção VRF
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos diferentes modalidades de manutenção para sistemas VRF/VRV
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Settings className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center text-green-600">Manutenção Preventiva</h3>
              <p className="text-gray-600 mb-6 text-center">
                Inspeções e serviços programados para manter o sistema funcionando com máxima eficiência.
              </p>
              
              <h4 className="font-semibold text-gray-900 mb-3">Serviços Inclusos:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Limpeza de filtros e serpentinas</li>
                <li>• Verificação de pressões do sistema</li>
                <li>• Inspeção de conexões elétricas</li>
                <li>• Teste de controles e sensores</li>
                <li>• Verificação de vazamentos</li>
                <li>• Lubrificação de componentes móveis</li>
                <li>• Análise de consumo energético</li>
                <li>• Relatório técnico detalhado</li>
              </ul>
              
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-green-700 font-medium">Periodicidade recomendada: Trimestral</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Wrench className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center text-red-600">Manutenção Corretiva</h3>
              <p className="text-gray-600 mb-6 text-center">
                Reparo de falhas e substituição de componentes para restaurar o funcionamento normal do sistema.
              </p>
              
              <h4 className="font-semibold text-gray-900 mb-3">Serviços Inclusos:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Diagnóstico de falhas</li>
                <li>• Reparo de unidades internas</li>
                <li>• Reparo de unidades externas</li>
                <li>• Substituição de componentes</li>
                <li>• Reparo de tubulações</li>
                <li>• Correção de problemas elétricos</li>
                <li>• Recarga de gás refrigerante</li>
                <li>• Testes de funcionamento</li>
              </ul>
              
              <div className="mt-6 p-4 bg-red-50 rounded-lg">
                <p className="text-sm text-red-700 font-medium">Atendimento de emergência 24h disponível</p>
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
              Processo de Manutenção VRF
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodologia técnica especializada para garantir máxima eficiência do seu sistema VRF
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Inspeção Visual</h3>
              <p className="text-gray-600">Verificação geral do estado das unidades internas e externas</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Limpeza Técnica</h3>
              <p className="text-gray-600">Limpeza especializada de filtros, serpentinas e componentes</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Testes Operacionais</h3>
              <p className="text-gray-600">Verificação de pressões, temperaturas e funcionamento dos controles</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Relatório Final</h3>
              <p className="text-gray-600">Entrega de relatório técnico com recomendações e próximas ações</p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Problemas Comuns em Sistemas VRF
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Identificamos e solucionamos os principais problemas que afetam sistemas VRF/VRV
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-6 w-6 text-red-500 mr-2" />
                <h3 className="text-xl font-semibold text-red-600">Filtros Sujos</h3>
              </div>
              <p className="text-gray-600 mb-4">Redução do fluxo de ar e eficiência do sistema</p>
              <h4 className="font-semibold text-gray-900 mb-2">Sintomas:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Redução na capacidade de refrigeração</li>
                <li>• Aumento no consumo de energia</li>
                <li>• Qualidade do ar comprometida</li>
                <li>• Ruídos anormais</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-6 w-6 text-red-500 mr-2" />
                <h3 className="text-xl font-semibold text-red-600">Vazamentos de Gás</h3>
              </div>
              <p className="text-gray-600 mb-4">Perda de refrigerante que afeta o desempenho</p>
              <h4 className="font-semibold text-gray-900 mb-2">Sintomas:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Resfriamento insuficiente</li>
                <li>• Formação de gelo nas tubulações</li>
                <li>• Aumento do tempo de funcionamento</li>
                <li>• Pressões anormais no sistema</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-6 w-6 text-red-500 mr-2" />
                <h3 className="text-xl font-semibold text-red-600">Problemas Elétricos</h3>
              </div>
              <p className="text-gray-600 mb-4">Falhas em componentes elétricos e controles</p>
              <h4 className="font-semibold text-gray-900 mb-2">Sintomas:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Sistema não liga</li>
                <li>• Funcionamento intermitente</li>
                <li>• Códigos de erro no display</li>
                <li>• Controle remoto não responde</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-6 w-6 text-red-500 mr-2" />
                <h3 className="text-xl font-semibold text-red-600">Serpentinas Sujas</h3>
              </div>
              <p className="text-gray-600 mb-4">Acúmulo de sujeira que reduz a troca térmica</p>
              <h4 className="font-semibold text-gray-900 mb-2">Sintomas:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Redução na eficiência</li>
                <li>• Aumento do consumo energético</li>
                <li>• Temperaturas inadequadas</li>
                <li>• Odores desagradáveis</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-6 w-6 text-red-500 mr-2" />
                <h3 className="text-xl font-semibold text-red-600">Sensores Defeituosos</h3>
              </div>
              <p className="text-gray-600 mb-4">Leituras incorretas que afetam o controle</p>
              <h4 className="font-semibold text-gray-900 mb-2">Sintomas:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Temperaturas inconsistentes</li>
                <li>• Ciclos de funcionamento irregulares</li>
                <li>• Mensagens de erro</li>
                <li>• Controle automático falho</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-6 w-6 text-red-500 mr-2" />
                <h3 className="text-xl font-semibold text-red-600">Drenagem Obstruída</h3>
              </div>
              <p className="text-gray-600 mb-4">Entupimento que causa vazamentos de água</p>
              <h4 className="font-semibold text-gray-900 mb-2">Sintomas:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Gotejamento de água</li>
                <li>• Umidade excessiva</li>
                <li>• Odores de mofo</li>
                <li>• Danos ao forro ou parede</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Schedule */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cronograma de Manutenção Recomendado
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Frequência ideal para manter seu sistema VRF em perfeito funcionamento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
              <h3 className="text-xl font-semibold mb-3 text-green-700">Manutenção Mensal</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Limpeza básica de filtros</li>
                <li>• Verificação visual geral</li>
                <li>• Teste de controles remotos</li>
                <li>• Verificação de drenagem</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Manutenção Trimestral</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Limpeza completa de serpentinas</li>
                <li>• Verificação de pressões</li>
                <li>• Inspeção elétrica detalhada</li>
                <li>• Calibração de sensores</li>
                <li>• Análise de consumo energético</li>
              </ul>
            </div>

            <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-500">
              <h3 className="text-xl font-semibold mb-3 text-orange-700">Manutenção Anual</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Revisão completa do sistema</li>
                <li>• Teste de vazamentos</li>
                <li>• Análise de óleo do compressor</li>
                <li>• Atualização de software</li>
                <li>• Relatório técnico completo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
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
              <p className="text-gray-600">Suporte técnico de emergência disponível 24 horas</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Técnicos Certificados</h3>
              <p className="text-gray-600">Profissionais especializados em sistemas VRF/VRV</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Peças Originais</h3>
              <p className="text-gray-600">Utilizamos apenas peças originais das principais marcas</p>
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
              Perguntas Frequentes sobre Manutenção de VRF
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tire suas dúvidas sobre a manutenção de sistemas VRF/VRV
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
            Garanta a Eficiência do seu VRF com a ClimatBH
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Não espere seu sistema falhar. Invista em manutenção preventiva e tenha tranquilidade.
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
              href="https://wa.me/5531995352139?text=Olá! Gostaria de um orçamento para manutenção de VRF."
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
              <p className="text-gray-600 mb-4">Instalação profissional de sistemas VRF</p>
              <div className="flex items-center text-blue-600 font-medium">
                <span>Saiba mais</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </Link>

            <Link href="/manutencao-chiller" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/images/wywuHOV9kejq.jpg"
                alt="Manutenção de Chiller"
                width={400}
                height={250}
                className="rounded-lg w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">Manutenção de Chiller</h3>
              <p className="text-gray-600 mb-4">Manutenção preventiva e corretiva para chillers</p>
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

