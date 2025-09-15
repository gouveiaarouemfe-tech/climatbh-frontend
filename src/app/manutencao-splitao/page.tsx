import Image from 'next/image';
import Link from 'next/link';
import { Phone, CheckCircle, ArrowRight, Wrench, Clock, Shield, AlertTriangle } from 'lucide-react';
import { generateMetadata } from '@/components/seo/SEOHead';
import StructuredData from '@/components/seo/StructuredData';
import FAQStructuredData from '@/components/seo/FAQStructuredData';

export const metadata = generateMetadata({
  title: 'Manutenção de Splitão em BH: Assistência Técnica Especializada | ClimatBH',
  description: 'Manutenção preventiva e corretiva de splitão em BH. Assistência técnica 24h, peças originais e equipe especializada. Atendemos toda região metropolitana.',
  keywords: 'manutenção splitão BH, assistência técnica splitão, reparo splitão Belo Horizonte, manutenção ar condicionado industrial',
  url: '/manutencao-splitao',
});

const serviceStructuredData = {
  '@type': 'Service',
  name: 'Manutenção de Splitão em BH',
  description: 'Serviços de manutenção preventiva e corretiva para sistemas splitão em Belo Horizonte',
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
  serviceType: 'Manutenção de Splitão',
  availableChannel: {
    '@type': 'ServiceChannel',
    servicePhone: '+5531995352139',
    availableLanguage: 'Portuguese',
  },
};

const faqData = [
  {
    question: "Com que frequência devo fazer manutenção no splitão?",
    answer: "A frequência ideal para a manutenção de um splitão depende do seu uso e do ambiente. Para ambientes comerciais com uso intenso, recomendamos a manutenção preventiva a cada 3 a 6 meses. Já para uso menos frequente, uma manutenção anual pode ser suficiente. A ClimatBH pode te ajudar a definir o plano ideal."
  },
  {
    question: "Quanto custa a manutenção de splitão em BH?",
    answer: "O custo da manutenção de splitão em Belo Horizonte varia conforme o tipo de serviço (preventiva ou corretiva), a capacidade do equipamento e a complexidade do problema. Oferecemos orçamentos transparentes e sem compromisso após uma avaliação técnica. Entre em contato para saber mais!"
  },
  {
    question: "Vocês atendem emergência de splitão 24 horas?",
    answer: "Sim, a ClimatBH entende que problemas com climatização podem surgir a qualquer momento. Por isso, oferecemos atendimento de emergência 24 horas para splitão em BH e região. Nossa equipe está pronta para agir rapidamente e minimizar qualquer transtorno."
  },
  {
    question: "Meu splitão parou de gelar, qual pode ser o problema?",
    answer: "Quando um splitão para de gelar, as causas podem ser diversas: falta de gás refrigerante, filtros sujos, problemas no compressor, falha no sensor de temperatura, entre outros. Nossos técnicos especializados realizam um diagnóstico preciso para identificar a raiz do problema e propor a solução mais eficaz."
  },
  {
    question: "Vocês usam peças originais na manutenção?",
    answer: "Priorizamos sempre o uso de peças originais e de alta qualidade em todas as manutenções de splitão. Caso uma peça original não esteja disponível, utilizamos componentes compatíveis que atendam aos mais altos padrões de desempenho e durabilidade, sempre com garantia."
  },
  {
    question: "Splitão fazendo barulho estranho, é grave?",
    answer: "Barulhos incomuns no splitão podem ser um sinal de alerta. Eles podem indicar problemas no motor do ventilador, no compressor, desalinhamento de componentes ou falta de lubrificação. É fundamental que um técnico avalie a situação o quanto antes para evitar danos maiores e mais caros."
  },
  {
    question: "Qual a garantia da manutenção de splitão?",
    answer: "A ClimatBH oferece garantia em todos os serviços de manutenção de splitão. A duração da garantia pode variar conforme o tipo de serviço e as peças substituídas, mas sempre garantimos a qualidade do nosso trabalho e a sua tranquilidade."
  },
  {
    question: "Splitão consome muita energia após manutenção?",
    answer: "Após uma manutenção adequada, o consumo de energia do seu splitão deve normalizar e até mesmo diminuir, devido à otimização do sistema. Se o consumo continuar alto, pode ser um indicativo de que há algo errado, e uma nova avaliação técnica é recomendada."
  },
  {
    question: "Fazem limpeza completa do splitão?",
    answer: "Sim, nossa manutenção inclui uma limpeza completa e profunda do splitão, abrangendo filtros, serpentinas, bandejas de dreno, ventiladores e gabinetes. Utilizamos produtos específicos que garantem a higienização e a eliminação de fungos e bactérias, melhorando a qualidade do ar."
  }
];

export default function ManutencaoSplitao() {
  return (
    <div className="min-h-screen">
      <StructuredData type="Service" data={serviceStructuredData} />
      <FAQStructuredData faqs={faqData} pageTitle="Manutenção de Splitão em BH" />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Manutenção de Splitão em BH: Assistência Técnica Especializada
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Manutenção preventiva e corretiva para sistemas splitão em Belo Horizonte. 
                Equipe especializada, atendimento 24h e garantia em todos os serviços.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+5531995352139"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Ligar Agora: (31) 99535-2139</span>
                </a>
                <a
                  href="https://wa.me/5531995352139?text=Olá! Preciso de manutenção para splitão."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 text-center"
                >
                  Solicitar Orçamento
                </a>
              </div>
            </div>
            <div>
              <Image
                src="/images/ManutençãoSpliãoBH.webp"
                alt="Manutenção de Splitão em BH"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is Splitão Maintenance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              O que é Manutenção de Splitão?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              A manutenção de splitão é um conjunto de procedimentos técnicos realizados para garantir o funcionamento eficiente, 
              seguro e duradouro dos sistemas de ar condicionado de grande porte, preservando sua capacidade de climatização 
              e prevenindo falhas que podem comprometer o conforto e gerar custos elevados de reparo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="bg-blue-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-6">
                <Wrench className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Manutenção Preventiva</h3>
              <p className="text-gray-600">
                Limpeza de filtros, serpentinas, verificação de gás refrigerante, 
                lubrificação de componentes e inspeção geral do sistema.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <div className="bg-green-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Manutenção Corretiva</h3>
              <p className="text-gray-600">
                Reparo de falhas, troca de componentes defeituosos, 
                recarga de gás e solução de problemas específicos.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <div className="bg-red-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-6">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Atendimento de Emergência</h3>
              <p className="text-gray-600">
                Suporte 24h para situações críticas que exigem 
                intervenção imediata para restabelecer o funcionamento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vantagens da Manutenção Regular de Splitão
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Economia de Energia</h3>
                    <p className="text-gray-600">
                      Um splitão bem mantido pode consumir até 30% menos energia, resultando em uma redução significativa na sua conta de luz e contribuindo para a sustentabilidade ambiental.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Maior Vida Útil do Equipamento</h3>
                    <p className="text-gray-600">
                      A manutenção preventiva regular prolonga a vida útil do seu splitão em até 50%, protegendo seu investimento e adiando a necessidade de substituição.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Melhora da Qualidade do Ar</h3>
                    <p className="text-gray-600">
                      Filtros limpos e um sistema higienizado garantem um ar mais puro, livre de poeira, alérgenos e microrganismos, promovendo um ambiente mais saudável para todos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Prevenção de Falhas e Quebras</h3>
                    <p className="text-gray-600">
                      A identificação precoce de pequenos problemas evita que se tornem grandes falhas, prevenindo paradas inesperadas do equipamento e reparos emergenciais caros.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/images/ManutençãoSpliãoBH.webp"
                alt="Manutenção de Splitão - Componentes Internos"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nosso Processo de Manutenção de Splitão
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodologia técnica especializada que garante máxima eficiência e durabilidade do seu sistema
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Inspeção Inicial</h3>
              <p className="text-gray-600">
                Diagnóstico completo do sistema, verificação de funcionamento e identificação de problemas.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Limpeza Completa</h3>
              <p className="text-gray-600">
                Limpeza de filtros, serpentinas, drenos e componentes internos com produtos específicos.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Verificações Técnicas</h3>
              <p className="text-gray-600">
                Teste de pressão, verificação elétrica, medição de temperatura e análise de performance.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Relatório Final</h3>
              <p className="text-gray-600">
                Entrega de relatório detalhado com recomendações e agendamento da próxima manutenção.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Problemas Comuns em Splitão
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Identificamos e solucionamos os principais problemas que afetam sistemas splitão
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Não Gela Adequadamente</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Filtros sujos ou entupidos</li>
                <li>• Baixo nível de gás refrigerante</li>
                <li>• Problemas no compressor</li>
                <li>• Serpentinas sujas</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Ruídos Excessivos</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Ventilador desbalanceado</li>
                <li>• Compressor com problemas</li>
                <li>• Fixação inadequada</li>
                <li>• Falta de lubrificação</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Alto Consumo de Energia</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Filtros obstru ídos</li>
                <li>• Vazamentos de gás</li>
                <li>• Termostato descalibrado</li>
                <li>• Isolamento térmico deficiente</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Vazamentos de Água</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Dreno entupido</li>
                <li>• Bomba de condensado defeituosa</li>
                <li>• Bandeja de condensação rachada</li>
                <li>• Instalação inadequada</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Odores Desagradáveis</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Filtros contaminados</li>
                <li>• Fungos e bactérias</li>
                <li>• Dreno com água parada</li>
                <li>• Falta de higienização</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Falhas Elétricas</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Problemas no quadro elétrico</li>
                <li>• Sobrecarga do sistema</li>
                <li>• Conexões soltas</li>
                <li>• Componentes queimados</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Precisa de Manutenção para seu Splitão?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Nossa equipe especializada está pronta para atender sua necessidade em Belo Horizonte e região
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
              href="https://wa.me/5531995352139?text=Olá! Preciso de manutenção para splitão."
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes sobre Manutenção de Splitão
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tire suas dúvidas sobre manutenção de sistemas splitão em Belo Horizonte
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

      {/* Related Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serviços Relacionados
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/instalacao-splitao" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/images/SplitãoemBH.jpg"
                alt="Instalação de Splitão"
                width={400}
                height={250}
                className="rounded-lg w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">Instalação de Splitão</h3>
              <p className="text-gray-600 mb-4">Instalação profissional de sistemas splitão para grandes ambientes</p>
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
              <p className="text-gray-600 mb-4">Manutenção especializada para sistemas VRF/VRV</p>
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
              <p className="text-gray-600 mb-4">Manutenção preventiva e qualidade do ar conforme legislação</p>
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

