import Image from 'next/image';
import Link from 'next/link';
import { Phone, CheckCircle, Clock, Award, Users, Wrench } from 'lucide-react';
import { generateMetadata } from '@/components/seo/SEOHead';

export const metadata = generateMetadata({
  title: 'ClimatBH: Climatização comercial e Industrial em BH e Região',
  description: 'Serviços de Climatização comercial em BH e Industrial, instalação e manutenção em sistemas VRF em bh e região, chiller, splitão e contratos PMOC.',
  keywords: 'climatização BH, VRF Belo Horizonte, chiller industrial, manutenção ar condicionado, PMOC, splitão comercial, climatização comercial',
  url: '/',
});

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                ClimatBH: Climatização comercial e Industrial em BH e Região
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Serviços de Climatização comercial em BH e Industrial, instalação e manutenção em sistemas VRF em bh e região, chiller, splitão e contratos PMOC.
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
                  href="#servicos"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 text-center"
                >
                  Nossos Serviços
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/VRFDAIKIN.png"
                alt="ClimatBH - Climatização Comercial e Industrial em BH"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Serviços Especializados de Climatização em BH
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluções completas em climatização comercial e industrial para Belo Horizonte e região metropolitana
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/instalacao-vrf" className="group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="/images/instalaçãodeVRF.jpeg"
                  alt="Instalação de VRF em BH"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                    Instalação de VRF
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Sistemas VRF/VRV para climatização eficiente de múltiplas zonas em edifícios comerciais.
                  </p>
                  <span className="text-blue-600 font-semibold group-hover:underline">
                    Saiba mais →
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/instalacao-chiller" className="group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="/images/KlYqqoaOdgqI.jpg"
                  alt="Instalação de Chiller em BH"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                    Instalação de Chiller
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Sistemas de refrigeração industrial para grandes demandas de climatização.
                  </p>
                  <span className="text-blue-600 font-semibold group-hover:underline">
                    Saiba mais →
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/instalacao-splitao" className="group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="/images/SplitãoemBH.jpg"
                  alt="Instalação de Splitão em BH"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                    Instalação de Splitão
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Ar condicionado de grande porte para ambientes amplos como galpões e auditórios.
                  </p>
                  <span className="text-blue-600 font-semibold group-hover:underline">
                    Saiba mais →
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/manutencao-vrf" className="group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="/images/manutençãodeVRFBH.jpeg"
                  alt="Manutenção de VRF em BH"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                    Manutenção de VRF
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Manutenção preventiva e corretiva para sistemas VRF/VRV com equipe especializada.
                  </p>
                  <span className="text-blue-600 font-semibold group-hover:underline">
                    Saiba mais →
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/manutencao-chiller" className="group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="/images/2BDeBTIuBd5v.jpg"
                  alt="Manutenção de Chiller em BH"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                    Manutenção de Chiller
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Serviços especializados de manutenção para chillers industriais e comerciais.
                  </p>
                  <span className="text-blue-600 font-semibold group-hover:underline">
                    Saiba mais →
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/manutencao-splitao" className="group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="/images/ManutençãoSpliãoBH.webp"
                  alt="Manutenção de Splitão em BH"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                    Manutenção de Splitão
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Manutenção especializada para sistemas splitão e contratos PMOC.
                  </p>
                  <span className="text-blue-600 font-semibold group-hover:underline">
                    Saiba mais →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que Escolher a ClimatBH?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experiência, qualidade e confiabilidade em climatização comercial e industrial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Atendimento 24h</h3>
              <p className="text-gray-600">
                Suporte de emergência disponível 24 horas por dia, 7 dias por semana para resolver problemas urgentes.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Equipe Certificada</h3>
              <p className="text-gray-600">
                Técnicos especializados e certificados com mais de 15 anos de experiência em climatização.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Clientes Satisfeitos</h3>
              <p className="text-gray-600">
                Mais de 1000 clientes atendidos com 98% de satisfação em nossos serviços de climatização.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Wrench className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Garantia Total</h3>
              <p className="text-gray-600">
                Garantia completa em todos os serviços e equipamentos instalados pela nossa equipe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-12 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Atendimento de Emergência em Climatização 24h em BH
          </h2>
          <p className="text-lg mb-6">
            Problemas com seu sistema de climatização? Nossa equipe está disponível 24 horas para atendimento de emergência!
          </p>
          <a
            href="tel:+5531995352139"
            className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <Phone className="h-5 w-5" />
            <span>Emergência 24h: (31) 99535-2139</span>
          </a>
        </div>
      </section>

      {/* Numbers Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Números que Comprovam Nossa Excelência
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Resultados que demonstram nossa experiência e qualidade em climatização
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">1000+</div>
              <div className="text-lg font-semibold text-blue-100">Projetos Realizados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">15+</div>
              <div className="text-lg font-semibold text-blue-100">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">98%</div>
              <div className="text-lg font-semibold text-blue-100">Satisfação dos Clientes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-lg font-semibold text-blue-100">Suporte de Emergência</div>
            </div>
          </div>
        </div>
      </section>

      {/* Regions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Principais Regiões Atendidas BH e Região
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Atendemos toda a região metropolitana de Belo Horizonte com agilidade e eficiência
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
            <div className="bg-gray-100 p-4 rounded-lg text-gray-900 font-semibold">Centro</div>
            <div className="bg-gray-100 p-4 rounded-lg text-gray-900 font-semibold">Savassi</div>
            <div className="bg-gray-100 p-4 rounded-lg text-gray-900 font-semibold">Lourdes</div>
            <div className="bg-gray-100 p-4 rounded-lg text-gray-900 font-semibold">Buritis</div>
            <div className="bg-gray-100 p-4 rounded-lg text-gray-900 font-semibold">Pampulha</div>
            <div className="bg-gray-100 p-4 rounded-lg text-gray-900 font-semibold">Contagem</div>
            <div className="bg-gray-100 p-4 rounded-lg text-gray-900 font-semibold">Nova Lima</div>
            <div className="bg-gray-100 p-4 rounded-lg text-gray-900 font-semibold">Betim</div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes sobre Climatização em BH
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tire suas dúvidas sobre nossos serviços de climatização
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Quais tipos de sistemas de climatização vocês instalam?
              </h3>
              <p className="text-gray-600">
                Instalamos sistemas VRF/VRV, chillers industriais, splitão para grandes ambientes, 
                ar condicionado split convencional e sistemas centrais. Nossa equipe é especializada 
                em soluções para residências, comércios e indústrias.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Vocês atendem emergências 24 horas?
              </h3>
              <p className="text-gray-600">
                Sim! Oferecemos atendimento de emergência 24 horas para situações críticas. 
                Nossa equipe está sempre pronta para resolver problemas urgentes de climatização 
                em Belo Horizonte e região metropolitana.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Qual a importância da manutenção preventiva?
              </h3>
              <p className="text-gray-600">
                A manutenção preventiva é essencial para garantir eficiência energética, 
                prolongar a vida útil dos equipamentos, manter a qualidade do ar e evitar 
                falhas inesperadas. Recomendamos manutenção regular conforme o tipo de sistema.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Vocês trabalham com PMOC?
              </h3>
              <p className="text-gray-600">
                Sim, oferecemos serviços completos de PMOC (Plano de Manutenção, Operação e Controle) 
                conforme exigências da ANVISA. Garantimos conformidade legal e qualidade do ar em 
                ambientes climatizados comerciais e institucionais.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Quais regiões vocês atendem?
              </h3>
              <p className="text-gray-600">
                Atendemos toda Belo Horizonte e região metropolitana, incluindo Contagem, 
                Nova Lima, Betim, Sabará, Ribeirão das Neves e demais cidades da Grande BH. 
                Nossa equipe está preparada para atender com agilidade em toda a região.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Como solicitar um orçamento?
              </h3>
              <p className="text-gray-600">
                Você pode solicitar um orçamento através do nosso WhatsApp (31) 99535-2139, 
                ligando diretamente ou preenchendo nosso formulário de contato. 
                Realizamos visitas técnicas gratuitas para avaliar suas necessidades.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

