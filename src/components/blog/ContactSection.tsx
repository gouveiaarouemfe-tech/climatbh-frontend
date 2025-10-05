'use client';

import { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Calendar, Send, CheckCircle } from 'lucide-react';

interface ContactSectionProps {
  title?: string;
  showScheduling?: boolean;
  compact?: boolean;
}

export default function ContactSection({ 
  title = "Entre em Contato Conosco",
  showScheduling = true,
  compact = false
}: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferredTime: '',
    urgency: 'normal'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio (integrar com API real)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
          preferredTime: '',
          urgency: 'normal'
        });
      }, 3000);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (compact) {
    return (
      <div className="bg-blue-50 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href="tel:+5531995352139"
            className="flex items-center space-x-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-200"
          >
            <Phone className="h-6 w-6 text-blue-600" />
            <div>
              <p className="font-semibold text-gray-900">Telefone</p>
              <p className="text-blue-600">(31) 99535-2139</p>
            </div>
          </a>
          <a
            href="https://wa.me/5531995352139"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-200"
          >
            <MessageCircle className="h-6 w-6 text-green-600" />
            <div>
              <p className="font-semibold text-gray-900">WhatsApp</p>
              <p className="text-green-600">Mensagem rápida</p>
            </div>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-lg text-gray-600">
          Fale conosco para tirar dúvidas, solicitar orçamento ou agendar uma visita técnica
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Informações de Contato */}
        <div>
          <h4 className="text-xl font-semibold text-gray-900 mb-6">Informações de Contato</h4>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 rounded-full p-3">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h5 className="font-semibold text-gray-900">Telefone</h5>
                <p className="text-gray-600 mb-2">(31) 99535-2139</p>
                <a
                  href="tel:+5531995352139"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Ligar agora
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-green-100 rounded-full p-3">
                <MessageCircle className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h5 className="font-semibold text-gray-900">WhatsApp</h5>
                <p className="text-gray-600 mb-2">Atendimento rápido e prático</p>
                <a
                  href="https://wa.me/5531995352139?text=Olá! Vi seu blog e gostaria de mais informações."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  Enviar mensagem
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-red-100 rounded-full p-3">
                <Mail className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h5 className="font-semibold text-gray-900">E-mail</h5>
                <p className="text-gray-600 mb-2">contato@climatbh.com.br</p>
                <a
                  href="mailto:contato@climatbh.com.br"
                  className="text-red-600 hover:text-red-700 font-medium"
                >
                  Enviar e-mail
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 rounded-full p-3">
                <MapPin className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h5 className="font-semibold text-gray-900">Localização</h5>
                <p className="text-gray-600">
                  Belo Horizonte e Região Metropolitana
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-orange-100 rounded-full p-3">
                <Clock className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h5 className="font-semibold text-gray-900">Horário de Atendimento</h5>
                <p className="text-gray-600">
                  Segunda a Sexta: 8h às 18h<br />
                  Sábado: 8h às 12h<br />
                  <span className="text-red-600 font-medium">Emergências: 24h</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Formulário de Contato */}
        <div>
          <h4 className="text-xl font-semibold text-gray-900 mb-6">
            {showScheduling ? 'Solicitar Orçamento ou Agendar Visita' : 'Enviar Mensagem'}
          </h4>
          
          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h5 className="text-lg font-semibold text-green-800 mb-2">Mensagem Enviada!</h5>
              <p className="text-green-700">
                Recebemos sua solicitação e entraremos em contato em breve.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
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
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              {showScheduling && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Serviço de Interesse
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Selecione um serviço</option>
                        <option value="instalacao-vrf">Instalação VRF</option>
                        <option value="instalacao-chiller">Instalação Chiller</option>
                        <option value="instalacao-splitao">Instalação Splitão</option>
                        <option value="manutencao">Manutenção</option>
                        <option value="pmoc">Contratos PMOC</option>
                        <option value="consultoria">Consultoria</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                        Urgência
                      </label>
                      <select
                        id="urgency"
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="normal">Normal</option>
                        <option value="urgente">Urgente</option>
                        <option value="emergencia">Emergência</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                      Melhor Horário para Contato
                    </label>
                    <input
                      type="text"
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      placeholder="Ex: Manhã, tarde, após 18h..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </>
              )}

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Descreva sua necessidade, dúvida ou solicitação..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                <Send className="h-5 w-5" />
                <span>{isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}</span>
              </button>

              <p className="text-sm text-gray-500 text-center">
                Seus dados estão protegidos. Não compartilhamos informações pessoais.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
