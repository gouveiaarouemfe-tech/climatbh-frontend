# ClimatBH Frontend - Versão de Deploy

## Informações da Versão
- **Versão**: 2.0.0
- **Data**: 05 de Outubro de 2025
- **Commit**: 462f077c5229be52cee511b2e6d4aa25fb8277e3
- **Status**: Pronto para Deploy no Render

## Melhorias Implementadas

### ✅ Correções de Build
- Dependências do Tailwind CSS movidas para production
- PostCSS configurado corretamente
- Critters instalado e funcionando
- Build script otimizado para Render

### ✅ SEO e Performance
- Structured data completo (Schema.org)
- Meta tags avançadas
- Sitemap dinâmico
- Lazy loading implementado
- Web Vitals monitoring

### ✅ Acessibilidade
- Painel de configurações WCAG 2.1
- Navegação por teclado
- Suporte a screen readers
- Contraste e tamanho de fonte ajustáveis

### ✅ Segurança
- Headers HTTP robustos
- Rate limiting
- Validação de dados
- Proteção XSS e CSRF

### ✅ Componentes Novos
- Sistema de toast notifications
- Loading spinners otimizados
- Feedback de erro melhorado
- Imagens com lazy loading avançado

## Arquivos Críticos Confirmados
- ✅ src/lib/strapi.ts
- ✅ src/components/common/FormattedDate.tsx
- ✅ src/components/seo/BlogStructuredData.tsx
- ✅ src/components/blog/BlogFilter.tsx
- ✅ src/app/blog/BlogClientPage.tsx
- ✅ src/app/blog/[slug]/PostClientPage.tsx

## Configuração para Deploy

### Build Command
```bash
npm install --legacy-peer-deps && npm run build
```

### Start Command
```bash
npm start
```

### Variáveis de Ambiente
```
NEXT_PUBLIC_STRAPI_API_URL=https://meublognovo-1.onrender.com
NEXT_PUBLIC_API_TOKEN=seu_token_do_strapi
NEXT_PUBLIC_SITE_URL=https://www.climatbh.com.br
NODE_ENV=production
```

---
**Status**: ✅ PRONTO PARA DEPLOY
**Última atualização**: $(date)
