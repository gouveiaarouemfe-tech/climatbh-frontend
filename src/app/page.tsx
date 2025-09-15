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
                alt="Sistema VRF Daikin - ClimatBH"
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
      <section id="servicos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Serviços Especializados em Climatização BH
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Equipe especializada em Climatização comercial e industrial em toda Região Metropolitana focada em sistemas HVAC e contratos PMOC
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* VRF Installation */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">
                <Image
                  src="/images/instalaçãodeVRF.jpeg"
                  alt="Instalação de VRF em BH"
                  width={400}
                  height={250}
                  className="rounded-lg w-full h-48 object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Instalação de Sistemas VRF</h3>
              <p className="text-gray-600 mb-4">
                Instalação Profissional de sistemas VRF em BH para climatização de edifícios e ambientes comerciais
              </p>
              <Link
                href="/instalacao-vrf"
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                Saiba mais →
              </Link>
            </div>

            {/* VRF Maintenance */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">
                <Image
                  src="/images/manutençãodeVRFBH.jpeg"
                  alt="Manutenção de VRF em BH"
                  width={400}
                  height={250}
                  className="rounded-lg w-full h-48 object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Manutenção de sistema VRF</h3>
              <p className="text-gray-600 mb-4">
                Manutenção Preventiva e corretiva em sistemas VRF/VRV para garantir máxima eficiência conforto e durabilidade
              </p>
              <Link
                href="/manutencao-vrf"
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                Saiba mais →
              </Link>
            </div>

            {/* Chiller Installation */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">
                <Image
                  src="/images/iqGpec6GN4vl.jpg"
                  alt="Instalação de Chiller em BH"
                  width={400}
                  height={250}
                  className="rounded-lg w-full h-48 object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Instalação de chiller</h3>
              <p className="text-gray-600 mb-4">
                Instalação Especializada em chillers e Sistemas de grande porte para climatização industrial e comercial
              </p>
              <Link
                href="/instalacao-chiller"
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                Saiba mais →
              </Link>
            </div>

            {/* Chiller Maintenance */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">
                <Image
                  src="/images/wywuHOV9kejq.jpg"
                  alt="Manutenção de Chiller em BH"
                  width={400}
                  height={250}
                  className="rounded-lg w-full h-48 object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Manutenção de Chillers Industriais</h3>
              <p className="text-gray-600 mb-4">
                Manutenção corretiva e preventiva de chillers focado em otimizar seu desempenho e evitar paradas e maiores prejuízos
              </p>
              <Link
                href="/manutencao-chiller"
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                Saiba mais →
              </Link>
            </div>

            {/* Splitão Installation */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">
                <Image
                  src="/images/SplitãoemBH.jpg"
                  alt="Instalação de Splitão em BH"
                  width={400}
                  height={250}
                  className="rounded-lg w-full h-48 object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">Instalação e Manutenção de Splitão</h3>
              <p className="text-gray-600 mb-4">
                Instalação especializada em sistemas splitão para climatização de ambientes grandes como galpões e auditórios
              </p>
              <Link
                href="/instalacao-splitao"
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                Saiba mais →
              </Link>
            </div>

            {/* PMOC */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">
                <Image
                  src="/images/PMOCembh.webp"
                  alt="Contratos PMOC em BH"
                  width={400}
                  height={250}
                  className="rounded-lg w-full h-48 object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">ClimatBH: Contratos PMOC: Qualidade do Ar e Conformidade Legal</h3>
              <p className="text-gray-600 mb-4">
                Tenha o controle refinado do seus Sistema de Climatização, oferecemos contratos de manutenção Preventiva PMOC. Atendemos BH, Contagem, Nova Lima e Região.
              </p>
              <Link
                href="/contratos-pmoc"
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                Saiba mais →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por Que Escolher a ClimatBH?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Atendimento de Emergência 24h</h3>
              <p className="text-gray-600">Suporte técnico disponível 24 horas por dia, 7 dias por semana</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Equipe Especializada</h3>
              <p className="text-gray-600">Profissionais certificados em sistemas de grande porte</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Wrench className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Tecnologia de Ponta</h3>
              <p className="text-gray-600">Equipamentos modernos e eficiência energética</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">15 Anos de Experiência</h3>
              <p className="text-gray-600">Referência em climatização comercial e industrial</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Sobre a ClimatBH
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Há mais de 15 anos no mercado mineiro, somos referência em climatização comercial e industrial na região metropolitana de BH.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Especialistas em Climatização comercial
              </h3>
              <p className="text-gray-600 mb-6">
                Fundada em 2009, a ClimatBH nasceu com o objetivo de oferecer soluções completas em climatização comercial e industrial para empresas de todos os portes em BH e região. Nossa experiência abrange desde pequenos estabelecimentos comerciais até gigantes complexos industriais.
              </p>
              <p className="text-gray-600 mb-8">
                Ao longo dos anos, desenvolvemos expertise em sistemas VRF, sistemas Chillers e Splitões e contratos PMOC, sempre priorizando a eficiência energética, a qualidade do ar e a satisfação dos nossos clientes.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Excelência Técnica</h4>
                  <p className="text-sm text-gray-600">Equipe altamente qualificada com certificações, NRs e treinamento contínuo.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Pontualidade</h4>
                  <p className="text-sm text-gray-600">Cumprimos prazos rigorosamente e oferecemos atendimento emergencial 24h.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Garantia Total</h4>
                  <p className="text-sm text-gray-600">Todos os nossos serviços possuem garantia e suporte técnico especializado.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Atendimento Personalizado</h4>
                  <p className="text-sm text-gray-600">Cada projeto é único e recebe atenção especializada da nossa equipe.</p>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/images/oqueeVRF.jpeg"
                alt="Equipe ClimatBH trabalhando em sistema VRF"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Entre em Contato e Solicite um Orçamento
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Problemas com seu sistema de climatização? Nossa equipe está disponível 24 horas por dia para atendimentos emergenciais.
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
              href="https://wa.me/5531995352139?text=Olá! Gostaria de um orçamento para climatização."
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Números que Comprovam Nossa Excelência
            </h2>
            <p className="text-xl text-gray-600">
              Resultados consistentes em todos os nossos projetos
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-lg font-semibold text-gray-900">Projetos Concluídos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-lg font-semibold text-gray-900">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-lg font-semibold text-gray-900">Satisfação dos Clientes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-lg font-semibold text-gray-900">Suporte de Emergência</div>
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
            <div className="bg-gray-100 p-4 rounded-lg">Centro</div>
            <div className="bg-gray-100 p-4 rounded-lg">Savassi</div>
            <div className="bg-gray-100 p-4 rounded-lg">Lourdes</div>
            <div className="bg-gray-100 p-4 rounded-lg">Buritis</div>
            <div className="bg-gray-100 p-4 rounded-lg">Pampulha</div>
            <div className="bg-gray-100 p-4 rounded-lg">Contagem</div>
            <div className="bg-gray-100 p-4 rounded-lg">Nova Lima</div>
            <div className="bg-gray-100 p-4 rounded-lg">Betim</div>
          </div>
        </div>
      </section>
    </div>
  );
}


