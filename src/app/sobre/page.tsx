import Image from 'next/image';
import Link from 'next/link';
import { Phone, Award, Users, Clock, CheckCircle, Target, Eye, Heart, ArrowRight } from 'lucide-react';
import { generateMetadata } from '@/components/seo/SEOHead';
import StructuredData from '@/components/seo/StructuredData';
import FAQStructuredData from '@/components/seo/FAQStructuredData';

const faqData = [
  {
    question: "Qual a experiência da ClimatBH no mercado de climatização?",
    answer: "A ClimatBH possui mais de 15 anos de experiência no mercado de climatização e refrigeração em Belo Horizonte e região metropolitana, com centenas de projetos executados e uma equipe altamente qualificada."
  },
  {
    question: "Quais são os principais serviços oferecidos pela ClimatBH?",
    answer: "Oferecemos instalação e manutenção de sistemas VRF, Chiller, Splitão, além de contratos PMOC. Atendemos tanto o setor comercial quanto o industrial, com soluções personalizadas para cada necessidade."
  },
  {
    question: "A equipe técnica da ClimatBH é certificada?",
    answer: "Sim, nossa equipe é composta por profissionais com certificações nas principais marcas do mercado, como Daikin, Carrier, Midea, entre outras, além de treinamentos em segurança como NR-10 e NR-35."
  },
  {
    question: "A ClimatBH oferece atendimento de emergência?",
    answer: "Sim, disponibilizamos atendimento de emergência 24 horas por dia, 7 dias por semana, para garantir que nossos clientes tenham suporte rápido em situações críticas de climatização."
  },
  {
    question: "Qual a área de atuação da ClimatBH?",
    answer: "Atendemos toda a região metropolitana de Belo Horizonte, incluindo cidades como Contagem, Nova Lima, Betim, Ribeirão das Neves, Santa Luzia, Sabará, Vespasiano, Lagoa Santa, Pedro Leopoldo, Ibirité e Sete Lagoas."
  },
  {
    question: "Como posso solicitar um orçamento ou mais informações?",
    answer: "Você pode entrar em contato conosco através do telefone (31) 99535-2139, via WhatsApp no mesmo número, ou enviando um e-mail para contato@climatbh.com.br. Estamos prontos para atendê-lo!"
  },
  {
    question: "A ClimatBH trabalha com sustentabilidade?",
    answer: "Sim, a sustentabilidade é um dos nossos valores. Buscamos sempre oferecer soluções que promovam a eficiência energética e a redução do impacto ambiental, utilizando tecnologias modernas e práticas responsáveis."
  },
  {
    question: "Quais são os diferenciais da ClimatBH?",
    answer: "Nossos diferenciais incluem excelência técnica, atendimento personalizado, equipe certificada, garantia nos serviços, atendimento de emergência 24h e um forte compromisso com a satisfação do cliente e a qualidade do ar."
  }
];

export const metadata = generateMetadata({
  title: 'Sobre a ClimatBH | Especialistas em Climatização e Refrigeração em BH',
  description: 'Conheça a ClimatBH, empresa especializada em climatização e refrigeração em Belo Horizonte. Mais de 15 anos de experiência, equipe certificada e atendimento 24h.',
  keywords: 'sobre ClimatBH, empresa climatização BH, refrigeração Belo Horizonte, história empresa, equipe técnica',
  url: '/sobre',
});

const organizationStructuredData = {
  '@type': 'Organization',
  name: 'ClimatBH',
  description: 'Empresa especializada em climatização e refrigeração em Belo Horizonte e região metropolitana',
  foundingDate: '2008',
  telephone: '+5531995352139',
  email: 'contato@climatbh.com.br',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Belo Horizonte',
    addressRegion: 'MG',
    addressCountry: 'BR',
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
  serviceType: [
    'Instalação de VRF',
    'Manutenção de VRF',
    'Instalação de Chiller',
    'Manutenção de Chiller',
    'Instalação de Splitão',
    'Contratos PMOC'
  ],
  openingHours: 'Mo-Su 00:00-23:59',
};

export default function Sobre() {
  return (
    <div className="min-h-screen">
      <StructuredData type="Organization" data={organizationStructuredData} />
      <FAQStructuredData faqs={faqData} pageTitle="Sobre a ClimatBH" />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre a ClimatBH
            </h1>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Especialistas em climatização e refrigeração em Belo Horizonte há mais de 15 anos. 
              Comprometidos com a excelência técnica e satisfação dos nossos clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nossa História
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                A ClimatBH nasceu em 2008 com o objetivo de oferecer soluções completas em climatização e refrigeração para Belo Horizonte e região metropolitana. Fundada por profissionais com vasta experiência no setor, a empresa cresceu baseada nos pilares da qualidade técnica, confiabilidade e atendimento personalizado.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Ao longo dos anos, nos especializamos em sistemas de grande porte como VRF, chillers e splitões, atendendo desde pequenos comércios até grandes indústrias. Nossa equipe técnica é constantemente capacitada nas mais modernas tecnologias do mercado.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Hoje, somos reconhecidos como uma das principais empresas do setor em Minas Gerais, com centenas de projetos executados e clientes satisfeitos em toda a região metropolitana de Belo Horizonte.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-600">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Projetos Executados</div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/images/VRFDAIKIN.png"
                alt="Equipe ClimatBH trabalhando em projeto VRF"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Os princípios que guiam nossa empresa e definem nossa cultura organizacional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Missão</h3>
              <p className="text-gray-600">
                Oferecer soluções completas em climatização e refrigeração com excelência técnica, 
                garantindo conforto térmico e eficiência energética para nossos clientes.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Eye className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-green-600">Visão</h3>
              <p className="text-gray-600">
                Ser reconhecida como a principal empresa de climatização e refrigeração de Minas Gerais, 
                referência em qualidade, inovação e sustentabilidade.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-red-600">Valores</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Excelência técnica</li>
                <li>• Compromisso com o cliente</li>
                <li>• Inovação constante</li>
                <li>• Sustentabilidade</li>
                <li>• Ética profissional</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team and Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossa Equipe
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profissionais altamente qualificados e certificados nas principais tecnologias do mercado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Técnicos Certificados</h3>
              <p className="text-gray-600">Equipe com certificações das principais marcas do mercado</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Experiência Comprovada</h3>
              <p className="text-gray-600">Mais de 15 anos de experiência em projetos complexos</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Atendimento 24h</h3>
              <p className="text-gray-600">Suporte técnico disponível 24 horas para emergências</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Qualidade Garantida</h3>
              <p className="text-gray-600">Garantia estendida em todos os serviços executados</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications and Partnerships */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certificações e Parcerias
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trabalhamos com as principais marcas do mercado e mantemos nossas certificações sempre atualizadas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Certificações Técnicas</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Certificação Daikin VRV/VRF</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Certificação Carrier Chiller</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Certificação Midea VRF</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>Certificação Elgin Splitão</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>NR-35 - Trabalho em Altura</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>NR-10 - Segurança em Instalações Elétricas</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Marcas Parceiras</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  <span>Daikin - Sistemas VRF/VRV</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  <span>Carrier - Chillers e Sistemas Centrais</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  <span>Midea - Sistemas VRF e Splitão</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  <span>Elgin - Splitão e Ar Condicionado</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  <span>York - Sistemas de Refrigeração</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  <span>Trane - Climatização Comercial</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluções completas em climatização e refrigeração para todos os tipos de ambiente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/instalacao-vrf" className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3">Instalação de VRF</h3>
              <p className="text-gray-600 mb-4">Sistemas VRF para climatização comercial e residencial de alto padrão</p>
              <div className="flex items-center text-blue-600 font-medium">
                <span>Saiba mais</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </Link>

            <Link href="/manutencao-vrf" className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3">Manutenção de VRF</h3>
              <p className="text-gray-600 mb-4">Manutenção preventiva e corretiva para sistemas VRF/VRV</p>
              <div className="flex items-center text-blue-600 font-medium">
                <span>Saiba mais</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </Link>

            <Link href="/instalacao-chiller" className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3">Instalação de Chiller</h3>
              <p className="text-gray-600 mb-4">Sistemas chiller para refrigeração industrial e comercial</p>
              <div className="flex items-center text-blue-600 font-medium">
                <span>Saiba mais</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </Link>

            <Link href="/manutencao-chiller" className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3">Manutenção de Chiller</h3>
              <p className="text-gray-600 mb-4">Assistência técnica especializada para sistemas chiller</p>
              <div className="flex items-center text-blue-600 font-medium">
                <span>Saiba mais</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </Link>

            <Link href="/instalacao-splitao" className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3">Instalação de Splitão</h3>
              <p className="text-gray-600 mb-4">Climatização para grandes ambientes como galpões e auditórios</p>
              <div className="flex items-center text-blue-600 font-medium">
                <span>Saiba mais</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </Link>

            <Link href="/contratos-pmoc" className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
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

      {/* Contact CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Conhecer Nossos Serviços?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Entre em contato conosco e descubra como podemos ajudar com suas necessidades de climatização
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+5531995352139"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Ligar Agora: (31) 99535-2139</span>
            </a>
            <Link
              href="/contato"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Página de Contato
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

