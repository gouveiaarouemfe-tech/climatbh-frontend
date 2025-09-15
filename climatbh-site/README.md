# ClimatBH - Site SSR

Site institucional da ClimatBH desenvolvido com Next.js 14, TypeScript e Tailwind CSS, otimizado para SEO e AEO.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com SSR
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Lucide React** - Ícones
- **Structured Data** - Schema markup para SEO

## 📱 Páginas Implementadas

### Páginas de Serviços
- `/` - Página inicial
- `/instalacao-vrf` - Instalação de VRF (com FAQ)
- `/manutencao-vrf` - Manutenção de VRF
- `/instalacao-chiller` - Instalação de Chiller (com FAQ)
- `/manutencao-chiller` - Manutenção de Chiller
- `/instalacao-splitao` - Instalação de Splitão
- `/manutencao-splitao` - Manutenção de Splitão (com FAQ)
- `/contratos-pmoc` - Contratos PMOC (com FAQ)

### Páginas Institucionais
- `/sobre` - Sobre a empresa
- `/contato` - Contato e formulário

## 🎯 Otimizações SEO/AEO

### Structured Data (Schema Markup)
- Organization schema
- Service schema
- FAQ schema
- LocalBusiness schema
- ContactPage schema

### Meta Tags Otimizadas
- Títulos únicos por página
- Meta descriptions otimizadas
- Keywords relevantes
- Open Graph tags
- Twitter Cards

### FAQs para AEO
- Perguntas frequentes em páginas principais
- Estruturadas para featured snippets
- Respostas diretas e concisas
- Schema markup para FAQs

### Arquivos SEO
- `sitemap.xml` - Mapa do site
- `robots.txt` - Diretrizes para crawlers

## 📞 Dados de Contato

- **Telefone/WhatsApp:** (31) 99535-2139
- **Email:** contato@climatbh.com.br
- **Área de Atendimento:** Belo Horizonte e Região Metropolitana

## 🛠️ Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar build
npm start
```

## 🚀 Deploy na Render

### Configurações Necessárias:

1. **Build Command:** `npm run build`
2. **Start Command:** `npm start`
3. **Node Version:** 18.x ou superior
4. **Environment Variables:**
   - `NODE_ENV=production`

### Passos para Deploy:

1. Conectar repositório GitHub à Render
2. Configurar as variáveis de ambiente
3. Definir os comandos de build e start
4. Fazer deploy

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router (Next.js 14)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   ├── sitemap.ts         # Sitemap dinâmico
│   ├── robots.ts          # Robots.txt dinâmico
│   ├── instalacao-vrf/    # Página de instalação VRF
│   ├── manutencao-vrf/    # Página de manutenção VRF
│   ├── instalacao-chiller/ # Página de instalação Chiller
│   ├── manutencao-chiller/ # Página de manutenção Chiller
│   ├── instalacao-splitao/ # Página de instalação Splitão
│   ├── manutencao-splitao/ # Página de manutenção Splitão
│   ├── contratos-pmoc/    # Página de contratos PMOC
│   ├── sobre/             # Página sobre
│   └── contato/           # Página de contato
├── components/            # Componentes reutilizáveis
│   ├── layout/           # Header, Footer
│   └── seo/              # Componentes SEO
└── lib/                  # Utilitários
    └── strapi.ts         # Cliente API (preparado para futuro)

public/
└── images/               # Imagens otimizadas
```

## 🎨 Design System

### Cores Principais
- **Azul Primário:** `#2563eb` (blue-600)
- **Azul Secundário:** `#1e40af` (blue-800)
- **Cinza:** `#6b7280` (gray-500)
- **Verde:** `#059669` (emerald-600)
- **Vermelho:** `#dc2626` (red-600)

### Tipografia
- **Fonte:** Inter (Google Fonts)
- **Tamanhos:** text-sm, text-base, text-lg, text-xl, text-2xl, text-3xl, text-4xl, text-5xl

## 📊 Performance

- **SSR** - Server-Side Rendering para melhor SEO
- **Imagens Otimizadas** - Next.js Image component
- **CSS Otimizado** - Tailwind CSS com purge
- **Lazy Loading** - Carregamento sob demanda

## 🔍 Monitoramento

### Ferramentas Recomendadas
- Google Search Console
- Google Analytics 4
- PageSpeed Insights
- Lighthouse

### Métricas Importantes
- Core Web Vitals
- Tempo de carregamento
- Taxa de rejeição
- Posicionamento no Google

## 📝 Próximos Passos

1. **Blog System** - Implementar sistema de blog
2. **CMS Integration** - Integrar com Strapi
3. **Analytics** - Configurar Google Analytics
4. **Search Console** - Configurar Google Search Console

## 🤝 Suporte

Para dúvidas ou suporte técnico, entre em contato:
- **Email:** contato@climatbh.com.br
- **Telefone:** (31) 99535-2139
