# 🚀 Visão Geral do Sistema

[English](../en/01-system-overview.md) | [Português](#visão-geral-do-sistema)

## 📋 Índice
- [Introdução](#introdução)
- [Stack Tecnológica](#stack-tecnológica)
- [Arquitetura](#arquitetura)
- [Principais Funcionalidades](#principais-funcionalidades)

## Introdução
Um kit inicial SaaS moderno construído com Laravel, React, TypeScript e Inertia.js. Este kit inicial fornece uma base robusta para construir aplicações SaaS escaláveis e de fácil manutenção, com recursos avançados como Server-Side Rendering (SSR) e suporte a Multi-tenancy.

## Stack Tecnológica
- **Backend**: Laravel 10.x
- **Frontend**: React + TypeScript
- **Gerenciamento de Estado**: Inertia.js
- **Estilização**: Tailwind CSS
- **Desenvolvimento**: Docker + Laravel Sail
- **Banco de Dados**: MySQL
- **Testes**: PHPUnit + Jest
- **SSR**: Inertia SSR

## Arquitetura
O sistema segue um padrão de arquitetura moderno, combinando o melhor das capacidades do backend do Laravel com o poder do frontend do React:

### Arquitetura do Backend
- **Framework Laravel**: Fornece a funcionalidade principal do backend
- **Controllers**: Gerenciam requisições HTTP e lógica de negócios
- **Models**: Representam entidades e relacionamentos do banco de dados
- **Migrations**: Definem o esquema e estrutura do banco de dados
- **Middleware**: Gerenciam filtragem de requisições e autenticação
- **Services**: Contêm lógica de negócios e operações complexas

### Arquitetura do Frontend
- **Componentes React**: Construídos com TypeScript para segurança de tipos
- **Inertia.js**: Conecta Laravel e React de forma perfeita
- **TypeScript**: Fornece segurança de tipos e melhor experiência do desenvolvedor
- **Tailwind CSS**: Framework CSS utilitário para estilização

## Principais Funcionalidades
1. 🔐 **Autenticação e Autorização**
2. 👥 **Suporte a Multi-tenancy**
   - Banco de dados único com prefixos específicos por tenant
   - Isolamento de dados através de prefixos de tabela
   - Gerenciamento fácil de tenants
3. 🎨 **UI Moderna com Tailwind CSS**
4. 📱 **Design Responsivo**
5. 🔄 **Atualizações em Tempo Real**
6. 📊 **Analytics no Dashboard**
7. 🔍 **Funcionalidade de Busca**
8. 📝 **Editor de Texto Rico**
9. 📤 **Upload e Gerenciamento de Arquivos**
10. 🔔 **Sistema de Notificações**
11. 🌐 **Server-Side Rendering (SSR)**
   - SEO melhorado
   - Carregamento inicial mais rápido
   - Melhor experiência do usuário

## Fluxo de Desenvolvimento
1. Desenvolvimento local usando Docker + Laravel Sail
2. Controle de versão baseado em Git
3. Testes automatizados com PHPUnit e Jest
4. Integração com pipeline CI/CD
5. Ferramentas de qualidade de código (ESLint, Prettier)

## Começando
Para iniciar o desenvolvimento:
1. Clone o repositório
2. Execute `./vendor/bin/sail up -d`
3. Instale as dependências com `composer install` e `npm install`
4. Configure as variáveis de ambiente
5. Execute as migrations
6. Inicie o servidor de desenvolvimento

## Melhores Práticas
- Seguir os padrões de codificação PSR-12
- Escrever testes para novas funcionalidades
- Usar TypeScript para todo o código frontend
- Documentar endpoints da API
- Seguir a estratégia de branching Git flow
- Manter componentes pequenos e focados
- Usar tratamento de erros adequado
- Implementar logging apropriado

## Início Rápido
1. Clone o repositório
```bash
git clone https://github.com/mariocosttaa/starter-kit-inertia-react.git
cd starter-kit-inertia-react
```

2. Inicie os containers Docker
```bash
./vendor/bin/sail up -d
```

3. Instale as dependências
```bash
composer install
npm install
```

4. Configure o ambiente
```bash
cp .env.example .env
./vendor/bin/sail artisan key:generate
```

5. Execute as migrações
```bash
./vendor/bin/sail artisan migrate
```

6. Inicie o servidor de desenvolvimento
```bash
npm run dev
```

7. Inicie o servidor SSR (opcional)
```bash
npm run build:ssr
./vendor/bin/sail artisan inertia:start-ssr
```

## Estrutura da Documentação
- [Visão Geral do Sistema](01-visao-geral-do-sistema.md)
- [Guia de Instalação](02-instalacao.md)
- [Multi-tenant](03-multi-tenant.md)
- [Renderização do Lado do Servidor](04-ssr.md)
- [Desenvolvimento Frontend](05-frontend.md)
- [Desenvolvimento Backend](06-backend.md)
- [Testes](07-guia-de-testes.md)
- [Deploy](08-guia-de-deploy.md)

## Próximos Passos
- [Visão Geral do Sistema](01-visao-geral-do-sistema.md)
- [Guia de Instalação](02-instalacao.md)
- [Multi-tenant](03-multi-tenant.md)
- [Renderização do Lado do Servidor](04-ssr.md)
- [Desenvolvimento Frontend](05-frontend.md)
- [Desenvolvimento Backend](06-backend.md)
- [Melhores Práticas](07-melhores-praticas.md)
