import { generateMetadata } from '@/components/seo/SEOHead';

export const metadata = generateMetadata({
  title: 'Política de Privacidade | ClimatBH',
  description: 'Política de privacidade da ClimatBH - Como coletamos, usamos e protegemos seus dados pessoais.',
  keywords: 'política de privacidade, proteção de dados, LGPD, ClimatBH',
  url: '/politica-privacidade',
});

export default function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Política de Privacidade</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Informações Gerais</h2>
            <p className="text-gray-600 mb-4">
              A ClimatBH está comprometida com a proteção da privacidade e dos dados pessoais de nossos clientes. 
              Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações 
              pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Dados Coletados</h2>
            <p className="text-gray-600 mb-4">Coletamos as seguintes informações:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Nome completo</li>
              <li>Telefone e e-mail</li>
              <li>Endereço para prestação de serviços</li>
              <li>Informações sobre os serviços solicitados</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Uso dos Dados</h2>
            <p className="text-gray-600 mb-4">Utilizamos seus dados para:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Prestação de serviços de climatização</li>
              <li>Comunicação sobre orçamentos e agendamentos</li>
              <li>Melhoria dos nossos serviços</li>
              <li>Cumprimento de obrigações legais</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Proteção dos Dados</h2>
            <p className="text-gray-600 mb-4">
              Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados contra 
              acesso não autorizado, alteração, divulgação ou destruição.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Seus Direitos</h2>
            <p className="text-gray-600 mb-4">Você tem direito a:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incompletos ou incorretos</li>
              <li>Solicitar a exclusão de dados</li>
              <li>Revogar o consentimento</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contato</h2>
            <p className="text-gray-600 mb-4">
              Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato:
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

