import Image from 'next/image';
import Link from 'next/link';
import { Phone, CheckCircle, ArrowRight, FileText, Shield, Users, Clock } from 'lucide-react';
import { generateMetadata } from '@/components/seo/SEOHead';
import StructuredData from '@/components/seo/StructuredData';
import FAQStructuredData from '@/components/seo/FAQStructuredData';

export const metadata = generateMetadata({
  title: 'Contratos PMOC em BH: Qualidade do Ar e Climatização Legal | ClimatBH',
  description: 'Contratos PMOC em BH conforme ANVISA. Plano de Manutenção, Operação e Controle para qualidade do ar. Documentação legal, ART e conformidade garantida.',
  keywords: 'PMOC BH, contrato PMOC Belo Horizonte, qualidade do ar, ANVISA, manutenção climatização legal',
  url: '/contratos-pmoc',
});

const serviceStructuredData = {
  '@type': 'Service',
  name: 'Contratos PMOC em BH',
  description: 'Plano de Manutenção, Operação e Controle para sistemas de climatização conforme legislação ANVISA',
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
  serviceType: 'PMOC - Plano de Manutenção, Operação e Controle',
  availableChannel: {
    '@type': 'ServiceChannel',
    servicePhone: '+5531995352139',
    availableLanguage: 'Portuguese',
  },
};

const faqData = [
  {
    question: "O que é PMOC e quem precisa ter?",
    answer: "PMOC é o Plano de Manutenção, Operação e Controle exigido pela ANVISA para edifícios de uso público e coletivo com sistemas de climatização. É obrigatório para escritórios, hospitais, shoppings, escolas, hotéis e indústrias."
  },
  {
    question: "Quanto custa um contrato PMOC em BH?",
    answer: "O custo varia conforme o tamanho do edifício e complexidade do sistema. Para edifícios pequenos: R$ 800-1.500/mês. Médios: R$ 1.500-3.000/mês. Grandes: R$ 3.000-8.000/mês. Inclui todas as atividades obrigatórias."
  },
  {
    question: "Qual a multa por não ter PMOC?",
    answer: "Multas variam de R$ 2.000 a R$ 1.500.000 conforme gravidade e porte da empresa. Além disso, pode haver interdição do estabelecimento. O custo do PMOC é muito menor que os riscos de não ter."
  },
  {
    question: "PMOC inclui análise da qualidade do ar?",
    answer: "Sim, o PMOC inclui análises laboratoriais semestrais da qualidade do ar, medindo fungos, bactérias, CO2 e outros parâmetros. Fornecemos laudos técnicos e certificados de conformidade."
  },
  {
    question: "Vocês fazem a documentação legal do PMOC?",
    answer: "Sim, fornecemos toda documentação: ART (Anotação de Responsabilidade Técnica), relatórios mensais, laudos laboratoriais, certificados e registros exigidos pela ANVISA. Tudo assinado por engenheiro responsável."
  },
  {
    question: "Com que frequência são feitas as manutenções?",
    answer: "Manutenções mensais (filtros, limpeza), trimestrais (serpentinas, drenos), semestrais (análises laboratoriais) e anuais (revisão geral). Seguimos rigorosamente o cronograma da legislação."
  },
  {
    question: "PMOC é só para ar condicionado central?",
    answer: "Não, PMOC se aplica a todos os sistemas: central, VRF, splitão, self, fan-coil. Qualquer sistema de climatização em edifício de uso coletivo precisa de PMOC, independente do tipo."
  },
  {
    question: "E se o sistema falhar durante o contrato?",
    answer: "O PMOC previne falhas através da manutenção preventiva. Se ocorrer problema, temos atendimento 24h para emergências. Manutenção corretiva é cobrada à parte, mas problemas são raros com PMOC adequado."
  },
  {
    question: "Posso cancelar o contrato PMOC?",
    answer: "Contratos têm prazo mínimo de 12 meses. Cancelamento antecipado pode gerar multa. Lembre-se: sem PMOC, seu estabelecimento fica irregular perante ANVISA e sujeito a multas e interdição."
  }
];

export default function ContratosPMOC() {
  return (
    <div className="min-h-screen">
      <StructuredData type="Service" data={serviceStructuredData} />
      <FAQStructuredData faqs={faqData} pageTitle="Contratos PMOC em BH" />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Contratos PMOC em BH: Qualidade do Ar e Climatização conforme a Legislação
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Plano de Manutenção, Operação e Controle para sistemas de climatização. 
                Conformidade com ANVISA, documentação legal e qualidade do ar garantida.
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
                  href="https://wa.me/5531995352139?text=Olá! Preciso de informações sobre contratos PMOC."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 text-center"
                >
                  Solicitar Proposta
                </a>
              </div>
            </div>
            <div>
              <Image
                src="/images/PMOCembh.webp"
                alt="Contratos PMOC em BH"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is PMOC */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              O que é PMOC (Plano de Manutenção, Operação e Controle)?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              O PMOC é um conjunto de procedimentos obrigatórios estabelecidos pela ANVISA, destinado a garantir a qualidade do ar em ambientes climatizados artificialmente. O objetivo do plano é proteger a saúde e o bem-estar dos ocupantes, por meio da manutenção adequada dos sistemas de climatização, monitoramento contínuo da qualidade do ar e registro detalhado de todas as atividades realizadas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="bg-blue-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mx-auto mb-6">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Legislação Aplicável</h3>
              <p className="text-gray-600">
                Lei Federal nº 13.589/18 e Resolução ANVISA RE/09 estabelecem as diretrizes obrigatórias para qualidade do ar.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="bg-green-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mx-auto mb-6">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Proteção à Saúde</h3>
              <p className="text-gray-600">
                Previne doenças respiratórias, alergias e contaminações através do controle rigoroso da qualidade do ar.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="bg-red-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mx-auto mb-6">
                <Users className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Conformidade Legal</h3>
              <p className="text-gray-600">
                Evita multas, sanções e interdições, garantindo que seu estabelecimento esteja em conformidade com a lei.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Needs PMOC */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Quem Precisa de Contratos PMOC?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Todos os edifícios de uso público e coletivo com sistemas de climatização artificial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Edifícios Comerciais</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Escritórios e salas comerciais</li>
                <li>• Shopping centers</li>
                <li>• Bancos e agências</li>
                <li>• Centros empresariais</li>
                <li>• Lojas e comércios</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Estabelecimentos de Saúde</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Hospitais e clínicas</li>
                <li>• Laboratórios</li>
                <li>• Consultórios médicos</li>
                <li>• Centros cirúrgicos</li>
                <li>• Farmácias</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Indústrias e Instituições</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Indústrias alimentícias</li>
                <li>• Escolas e universidades</li>
                <li>• Hotéis e restaurantes</li>
                <li>• Academias e clubes</li>
                <li>• Data centers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PMOC Components */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Componentes Essenciais de um Contrato PMOC
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-blue-800">Plano de Manutenção Preventiva</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Limpeza mensal de filtros</li>
                <li>• Higienização trimestral de serpentinas</li>
                <li>• Verificação de drenos e bandejas</li>
                <li>• Inspeção de componentes elétricos</li>
                <li>• Lubrificação de motores</li>
                <li>• Calibração de termostatos</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-green-800">Plano de Operação dos Sistemas</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Monitoramento de temperatura</li>
                <li>• Controle de umidade relativa</li>
                <li>• Verificação de pressão diferencial</li>
                <li>• Análise de consumo energético</li>
                <li>• Registro de funcionamento</li>
                <li>• Otimização operacional</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-purple-800">Plano de Controle e Documentação</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Análises laboratoriais semestrais</li>
                <li>• Relatórios mensais detalhados</li>
                <li>• ART de responsabilidade técnica</li>
                <li>• Certificados de conformidade</li>
                <li>• Registros de manutenção</li>
                <li>• Laudos técnicos especializados</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Serviços Inclusos em Nossos Contratos PMOC
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
                    <h3 className="text-lg font-semibold mb-2">Manutenção Preventiva Detalhada</h3>
                    <p className="text-gray-600">
                      Cronograma completo de manutenções conforme legislação ANVISA, incluindo limpeza, higienização e verificações técnicas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Análises Laboratoriais da Qualidade do Ar</h3>
                    <p className="text-gray-600">
                      Coleta e análise semestral de amostras de ar, com laudos técnicos de fungos, bactérias e parâmetros físico-químicos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Documentação Legal e ART</h3>
                    <p className="text-gray-600">
                      Fornecimento de toda documentação exigida: ART, relatórios, certificados e registros assinados por engenheiro responsável.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Suporte Técnico Especializado</h3>
                    <p className="text-gray-600">
                      Atendimento técnico qualificado, orientações sobre conformidade e suporte para fiscalizações da ANVISA.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/images/PMOC.jpg"
                alt="Serviços PMOC - Manutenção de Sistemas"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Benefícios de um Contrato PMOC com a ClimatBH
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Saúde e Bem-Estar dos Ocupantes</h3>
              <p className="text-gray-600">
                Ar limpo e seguro, prevenindo doenças respiratórias e melhorando a qualidade de vida no ambiente de trabalho.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Economia de Energia e Redução de Custos</h3>
              <p className="text-gray-600">
                Sistemas bem mantidos consomem menos energia e têm maior durabilidade, gerando economia significativa.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Conformidade Legal e Evitar Multas</h3>
              <p className="text-gray-600">
                Proteção contra multas e sanções, garantindo que seu estabelecimento esteja sempre em conformidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Solicite uma Proposta para seu Contrato PMOC
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Garanta a conformidade legal do seu sistema de climatização e evite multas
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
              href="https://wa.me/5531995352139?text=Olá! Preciso de uma proposta para contrato PMOC."
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
              Perguntas Frequentes sobre Contratos PMOC
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tire suas dúvidas sobre PMOC e conformidade legal em Belo Horizonte
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

            <Link href="/manutencao-chiller" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/images/iqGpec6GN4vl.jpg"
                alt="Manutenção de Chiller"
                width={400}
                height={250}
                className="rounded-lg w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">Manutenção de Chiller</h3>
              <p className="text-gray-600 mb-4">Assistência técnica especializada para sistemas chiller</p>
              <div className="flex items-center text-blue-600 font-medium">
                <span>Saiba mais</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </Link>

            <Link href="/manutencao-splitao" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/images/ManutençãoSpliãoBH.webp"
                alt="Manutenção de Splitão"
                width={400}
                height={250}
                className="rounded-lg w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">Manutenção de Splitão</h3>
              <p className="text-gray-600 mb-4">Manutenção especializada para sistemas splitão</p>
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

