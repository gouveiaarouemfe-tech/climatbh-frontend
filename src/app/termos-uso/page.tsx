import { generateMetadata } from '@/components/seo/SEOHead';

export const metadata = generateMetadata({
  title: 'Termos de Uso | ClimatBH',
  description: 'Termos de uso do site da ClimatBH - Condições para utilização dos nossos serviços.',
  keywords: 'termos de uso, condições de uso, ClimatBH',
  url: '/termos-uso',
});

export default function TermosUso() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Termos de Uso</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Aceitação dos Termos</h2>
            <p className="text-gray-600 mb-4">
              Ao acessar e utilizar o site da ClimatBH, você concorda com estes Termos de Uso. 
              Se não concordar com qualquer parte destes termos, não utilize nosso site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Serviços Oferecidos</h2>
            <p className="text-gray-600 mb-4">
              A ClimatBH oferece serviços de instalação, manutenção e reparo de sistemas de climatização, 
              incluindo ar condicionado, VRF, chillers e PMOC em Belo Horizonte e região metropolitana.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Uso do Site</h2>
            <p className="text-gray-600 mb-4">Você se compromete a:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Usar o site apenas para fins legítimos</li>
              <li>Não interferir no funcionamento do site</li>
              <li>Fornecer informações verdadeiras ao solicitar serviços</li>
              <li>Respeitar os direitos de propriedade intelectual</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Orçamentos e Serviços</h2>
            <p className="text-gray-600 mb-4">
              Os orçamentos fornecidos são válidos conforme especificado em cada proposta. 
              Os serviços estão sujeitos à disponibilidade e às condições técnicas do local.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Limitação de Responsabilidade</h2>
            <p className="text-gray-600 mb-4">
              A ClimatBH não se responsabiliza por danos indiretos ou consequenciais decorrentes 
              do uso do site ou dos serviços prestados, exceto nos casos previstos em lei.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Modificações</h2>
            <p className="text-gray-600 mb-4">
              Reservamo-nos o direito de modificar estes termos a qualquer momento. 
              As alterações entrarão em vigor imediatamente após a publicação no site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contato</h2>
            <p className="text-gray-600 mb-4">
              Para dúvidas sobre estes termos, entre em contato:
            </p>
            <ul className="list-none text-gray-600">
              <li><strong>Telefone:</strong> (31) 99535-2139</li>
              <li><strong>WhatsApp:</strong> (31) 99535-2139</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

