import Image from 'next/image';
import Link from 'next/link';
import { Phone, CheckCircle, Clock, Award, Users, Wrench, ArrowRight } from 'lucide-react';
import { generateMetadata } from '@/components/seo/SEOHead';
import StructuredData from '@/components/seo/StructuredData';

export const metadata = generateMetadata({
  title: 'Instalação de VRF em BH: Sistemas de Climatização Comercial | ClimatBH',
  description: 'Instalação Profissional de sistemas VRF em BH para climatização de edifícios e ambientes comerciais. Equipe especializada, garantia total e atendimento 24h.',
  keywords: 'instalação VRF BH, sistema VRF Belo Horizonte, climatização comercial, VRF Daikin, instalação ar condicionado comercial',
  url: '/instalacao-vrf',
});

const serviceStructuredData = {
  name: 'Instalação de Sistemas VRF em Belo Horizonte',
  description: 'Instalação profissional de sistemas VRF para climatização comercial e industrial em Belo Horizonte e região metropolitana.',
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
  serviceType: 'Instalação de Sistema VRF',
  category: 'Climatização Comercial',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Serviços de Instalação VRF',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Projeto e Dimensionamento VRF',
          description: 'Projeto técnico completo e dimensionamento adequado do sistema VRF',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Instalação Completa VRF',
          description: 'Instalação completa de unidades condensadoras e evaporadoras VRF',
        },
      },
    ],
  },
};

export default function InstalacaoVRF() {
  return (
    <div className="min-h-screen">
      <StructuredData type="Service" data={serviceStructuredData} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Instalação de VRF em BH: Sistemas de Climatização Comercial
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Instalação Profissional de sistemas VRF em BH para climatização de edifícios e ambientes comerciais. Equipe especializada com mais de 15 anos de experiência.
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
                src="/images/instalaçãodeVRF.jpeg"
                alt="Instalação de Sistema VRF em BH - ClimatBH"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is VRF Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                O que é um Sistema VRF?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                VRF (Variable Refrigerant Flow) ou Fluxo de Refrigerante Variável é uma tecnologia avançada de climatização que permite controle individual de temperatura em múltiplas zonas através de uma única unidade condensadora externa.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Principais Características do Sistema VRF:
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Controle Individual de Zonas</h4>
                    <p className="text-gray-600">Cada ambiente pode ter sua temperatura controlada independentemente</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Alta Eficiência Energética</h4>
                    <p className="text-gray-600">Tecnologia inverter que ajusta automaticamente a capacidade conforme a demanda</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Flexibilidade de Instalação</h4>
                    <p className="text-gray-600">Permite conexão de múltiplas unidades internas a uma única unidade externa</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Operação Silenciosa</h4>
                    <p className="text-gray-600">Baixo nível de ruído tanto nas unidades internas quanto externas</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/images/oqueeVRF.jpeg"
                alt="Sistema VRF - Como funciona"
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
              Processo de Instalação VRF Profissional
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossa metodologia garante instalação segura, eficiente e com máxima qualidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Projeto e Dimensionamento</h3>
              <p className="text-gray-600">Análise técnica completa do ambiente e dimensionamento adequado do sistema</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Preparação do Local</h3>
              <p className="text-gray-600">Preparação da infraestrutura elétrica e pontos de instalação</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Instalação dos Equipamentos</h3>
              <p className="text-gray-600">Montagem das unidades condensadoras e evaporadoras com precisão técnica</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Testes e Comissionamento</h3>
              <p className="text-gray-600">Testes completos de funcionamento e ajustes finais do sistema</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vantagens da Instalação VRF com a ClimatBH
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Equipe Certificada</h3>
              <p className="text-gray-600">Técnicos especializados em sistemas VRF com certificações das principais marcas</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Instalação Rápida</h3>
              <p className="text-gray-600">Processo otimizado que minimiza interrupções nas atividades do cliente</p>
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

      {/* Applications Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Aplicações do Sistema VRF
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ideal para diversos tipos de ambientes comerciais e industriais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Edifícios Comerciais</h3>
              <p className="text-gray-600 mb-4">Escritórios, salas comerciais e centros empresariais</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Controle individual por sala</li>
                <li>• Eficiência energética</li>
                <li>• Baixo nível de ruído</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Hospitais e Clínicas</h3>
              <p className="text-gray-600 mb-4">Ambientes que exigem controle preciso de temperatura</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Controle de umidade</li>
                <li>• Operação silenciosa</li>
                <li>• Filtração avançada</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Hotéis e Restaurantes</h3>
              <p className="text-gray-600 mb-4">Conforto térmico personalizado para hóspedes</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Controle individual por quarto</li>
                <li>• Economia de energia</li>
                <li>• Manutenção simplificada</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Shopping Centers</h3>
              <p className="text-gray-600 mb-4">Climatização eficiente para grandes áreas</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Zonamento flexível</li>
                <li>• Controle centralizado</li>
                <li>• Baixo custo operacional</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Indústrias</h3>
              <p className="text-gray-600 mb-4">Controle de temperatura em processos industriais</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Resistência a ambientes agressivos</li>
                <li>• Controle preciso</li>
                <li>• Alta durabilidade</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Data Centers</h3>
              <p className="text-gray-600 mb-4">Refrigeração crítica para equipamentos de TI</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Controle de precisão</li>
                <li>• Redundância de sistema</li>
                <li>• Monitoramento 24h</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="orcamento" className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Solicite um Orçamento para Instalação VRF
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Nossa equipe está pronta para dimensionar e instalar o sistema VRF ideal para seu projeto
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
              Perguntas Frequentes sobre Instalação de VRF
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tire suas dúvidas sobre instalação de sistemas VRF em Belo Horizonte
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Quanto custa para instalar um VRF em casa?
              </h3>
              <p className="text-gray-600">
                O custo varia de R$ 25.000 a R$ 60.000 para residências, dependendo do número de ambientes e marca escolhida. Para 3-4 ambientes, fica em torno de R$ 35.000. Fazemos orçamento gratuito com visita técnica para dar o valor exato do seu projeto.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                VRF gasta muita energia? Vale a pena?
              </h3>
              <p className="text-gray-600">
                VRF consome 30-40% menos energia que ar condicionado comum. Uma residência que gastava R$ 800/mês com vários splits passa a gastar cerca de R$ 500/mês com VRF. O investimento se paga em 3-4 anos só com a economia na conta de luz.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Precisa quebrar muito a casa para instalar?
              </h3>
              <p className="text-gray-600">
                Fazemos furos estratégicos apenas para passagem da tubulação. Em casas prontas, usamos forros, sancas ou canaletas para esconder os tubos. A obra é mínima comparada ao benefício. Em construções novas, é ainda mais simples.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Quanto tempo demora para instalar?
              </h3>
              <p className="text-gray-600">
                Para residências de 3-4 ambientes: 3-5 dias úteis. Para projetos maiores: 1-2 semanas. Trabalhamos em horário comercial para não incomodar. Deixamos tudo funcionando e testado antes de finalizar.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                VRF esquenta no inverno também?
              </h3>
              <p className="text-gray-600">
                Sim! VRF com Heat Pump aquece muito bem no inverno de BH. É 3x mais econômico que aquecedor elétrico. Alguns modelos fazem calor e frio ao mesmo tempo em ambientes diferentes - perfeito para famílias com preferências diferentes.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                E se der problema, vocês atendem rápido?
              </h3>
              <p className="text-gray-600">
                Temos atendimento 24h para emergências. Garantia de 2 anos na instalação e 5 anos nos equipamentos. Primeira manutenção grátis no 6º mês. Nossa equipe conhece bem os equipamentos que instalamos.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Qual marca de VRF vocês recomendam?
              </h3>
              <p className="text-gray-600">
                Trabalhamos com Daikin (top de linha), Midea (custo-benefício) e Elgin (nacional). Para residências, Midea oferece ótima qualidade por preço justo. Para projetos comerciais, Daikin é referência mundial. Analisamos seu perfil para recomendar a melhor opção.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                VRF faz muito barulho?
              </h3>
              <p className="text-gray-600">
                VRF é muito silencioso. A unidade externa fica longe dos quartos e as internas são quase imperceptíveis. Muito mais silencioso que split comum. Ideal para quem tem sono leve ou trabalha home office.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Posso controlar cada ambiente separado?
              </h3>
              <p className="text-gray-600">
                Sim! Cada ambiente tem controle individual de temperatura, velocidade do ventilador e direcionamento do ar. Alguns modelos têm controle por app no celular. Cada pessoa pode ajustar seu ambiente como preferir.
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

            <Link href="/instalacao-chiller" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/images/iqGpec6GN4vl.jpg"
                alt="Instalação de Chiller"
                width={400}
                height={250}
                className="rounded-lg w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">Instalação de Chiller</h3>
              <p className="text-gray-600 mb-4">Instalação de sistemas chiller para grandes demandas</p>
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

