import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { generateMetadata } from '@/components/seo/SEOHead';
import StructuredData from '@/components/seo/StructuredData';
import FAQStructuredData from '@/components/seo/FAQStructuredData';

const faqData = [
  {
    question: "Qual o horário de atendimento da ClimatBH?",
    answer: "Nosso atendimento comercial é de Segunda a Sexta, das 8h às 18h. Para emergências, temos atendimento 24 horas por dia, 7 dias por semana."
  },
  {
    question: "Qual a área de atendimento da ClimatBH?",
    answer: "Atendemos toda a região metropolitana de Belo Horizonte, incluindo cidades como Contagem, Nova Lima, Betim, Ribeirão das Neves, Santa Luzia, Sabará, Vespasiano, Lagoa Santa, Pedro Leopoldo, Ibirité e Sete Lagoas."
  },
  {
    question: "Como posso solicitar um orçamento?",
    answer: "Você pode solicitar um orçamento ligando para (31) 99535-2139, enviando uma mensagem via WhatsApp para o mesmo número, ou preenchendo o formulário em nossa página de contato. Retornamos seu contato em até 2 horas durante o horário comercial."
  },
  {
    question: "Vocês oferecem atendimento de emergência?",
    answer: "Sim, temos uma equipe de plantão 24 horas para atender emergências em sistemas de climatização e refrigeração. Basta ligar para (31) 99535-2139."
  },
  {
    question: "Quais informações preciso fornecer para um orçamento?",
    answer: "Para um orçamento preciso, precisamos de informações como o tipo de serviço desejado (instalação, manutenção, PMOC), o tipo de equipamento (VRF, Chiller, Splitão), o tamanho do ambiente, a localização e, se possível, fotos ou plantas do local."
  },
  {
    question: "A ClimatBH realiza visitas técnicas para orçamento?",
    answer: "Sim, realizamos visitas técnicas sem custo para avaliação e elaboração de orçamentos detalhados, especialmente para projetos de instalação ou manutenção de grande porte."
  },
  {
    question: "Qual o e-mail para contato da ClimatBH?",
    answer: "Nosso e-mail para contato é contato@climatbh.com.br. Você pode nos enviar suas dúvidas, solicitações de orçamento ou qualquer outra informação por lá."
  }
];

export const metadata = generateMetadata({
  title: 'Contato - ClimatBH | Climatização e Refrigeração em Belo Horizonte',
  description: 'Entre em contato com a ClimatBH para serviços de climatização, refrigeração e ar condicionado em BH. Atendimento 24h, orçamento gratuito.',
  keywords: 'contato ClimatBH, climatização BH, refrigeração Belo Horizonte, ar condicionado BH, orçamento gratuito',
  url: '/contato',
});

const contactStructuredData = {
  '@type': 'ContactPage',
  name: 'Contato - ClimatBH',
  description: 'Entre em contato com a ClimatBH para serviços de climatização e refrigeração em Belo Horizonte',
  mainEntity: {
    '@type': 'Organization',
    name: 'ClimatBH',
    telephone: '+5531995352139',
    email: 'contato@climatbh.com.br',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Belo Horizonte',
      addressRegion: 'MG',
      addressCountry: 'BR',
    },
    openingHours: 'Mo-Su 00:00-23:59',
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
  },
};

export default function Contato() {
  return (
    <div className="min-h-screen">
<StructuredData dataType="LocalBusiness" data={contactStructuredData} />
      <FAQStructuredData faqs={faqData} pageTitle="Contato ClimatBH" />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Entre em Contato com a ClimatBH
            </h1>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Estamos prontos para atender suas necessidades de climatização e refrigeração. 
              Atendimento 24h para emergências e orçamento gratuito.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Fale Conosco
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Telefone</h3>
                    <p className="text-gray-600 mb-2">Atendimento 24 horas para emergências</p>
                    <a 
                      href="tel:+5531995352139"
                      className="text-blue-600 hover:text-blue-800 font-semibold text-lg"
                    >
                      (31) 99535-2139
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp</h3>
                    <p className="text-gray-600 mb-2">Atendimento rápido e direto</p>
                    <a 
                      href="https://wa.me/5531995352139?text=Olá! Gostaria de solicitar um orçamento para serviços de climatização."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-800 font-semibold text-lg"
                    >
                      (31) 99535-2139
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 rounded-full p-3 flex-shrink-0">
                    <Mail className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">E-mail</h3>
                    <p className="text-gray-600 mb-2">Para orçamentos e informações</p>
                    <a 
                      href="mailto:contato@climatbh.com.br"
                      className="text-red-600 hover:text-red-800 font-semibold text-lg"
                    >
                      contato@climatbh.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 rounded-full p-3 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Área de Atendimento</h3>
                    <p className="text-gray-600">
                      Belo Horizonte e Região Metropolitana<br />
                      Contagem, Nova Lima, Betim, Ribeirão das Neves
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 rounded-full p-3 flex-shrink-0">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Horário de Atendimento</h3>
                    <div className="text-gray-600">
                      <p><strong>Comercial:</strong> Segunda a Sexta, 8h às 18h</p>
                      <p><strong>Emergência:</strong> 24 horas, 7 dias por semana</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Solicite um Orçamento
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="(31) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="servico" className="block text-sm font-medium text-gray-700 mb-2">
                    Serviço de Interesse
                  </label>
                  <select
                    id="servico"
                    name="servico"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="instalacao-vrf">Instalação de VRF</option>
                    <option value="manutencao-vrf">Manutenção de VRF</option>
                    <option value="instalacao-chiller">Instalação de Chiller</option>
                    <option value="manutencao-chiller">Manutenção de Chiller</option>
                    <option value="instalacao-splitao">Instalação de Splitão</option>
                    <option value="manutencao-splitao">Manutenção de Splitão</option>
                    <option value="contratos-pmoc">Contratos PMOC</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Descreva suas necessidades, local da instalação, tipo de ambiente, etc."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Enviar Solicitação</span>
                </button>
              </form>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-700">
                  <strong>Resposta rápida:</strong> Retornamos seu contato em até 2 horas durante horário comercial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Buttons */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Precisa de Atendimento Imediato?
            </h2>
            <p className="text-xl text-gray-600">
              Entre em contato agora mesmo pelos nossos canais diretos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href="tel:+5531995352139"
              className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ligar Agora</h3>
              <p className="text-gray-600 mb-4">Atendimento 24h para emergências</p>
              <p className="text-blue-600 font-semibold text-lg">(31) 99535-2139</p>
            </a>

            <a
              href="https://wa.me/5531995352139?text=Olá! Gostaria de solicitar um orçamento para serviços de climatização."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                <MessageCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-4">Conversa direta e rápida</p>
              <p className="text-green-600 font-semibold text-lg">(31) 99535-2139</p>
            </a>

            <a
              href="mailto:contato@climatbh.com.br"
              className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-red-200 transition-colors">
                <Mail className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">E-mail</h3>
              <p className="text-gray-600 mb-4">Para orçamentos detalhados</p>
              <p className="text-red-600 font-semibold text-lg">contato@climatbh.com.br</p>
            </a>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Áreas de Atendimento
            </h2>
            <p className="text-xl text-gray-600">
              Atendemos toda a região metropolitana de Belo Horizonte
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'Belo Horizonte',
              'Contagem',
              'Nova Lima',
              'Betim',
              'Ribeirão das Neves',
              'Santa Luzia',
              'Sabará',
              'Vespasiano',
              'Lagoa Santa',
              'Pedro Leopoldo',
              'Ibirité',
              'Sete Lagoas'
            ].map((cidade) => (
              <div key={cidade} className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="font-medium text-gray-900">{cidade}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="py-12 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            🚨 Atendimento de Emergência 24h
          </h2>
          <p className="text-lg mb-6">
            Problemas com climatização fora do horário comercial? Estamos disponíveis 24 horas!
          </p>
          <a
            href="tel:+5531995352139"
            className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <Phone className="h-5 w-5" />
            <span>Ligar Emergência: (31) 99535-2139</span>
          </a>
        </div>
      </section>
    </div>
  );
}

