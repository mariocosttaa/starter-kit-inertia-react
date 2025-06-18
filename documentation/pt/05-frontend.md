# Guia de Desenvolvimento Frontend

[English](../en/05-frontend.md) | [Português](#guia-de-desenvolvimento-frontend)

## Navegação Rápida
- [Visão Geral](#visão-geral)
- [Primeiros Passos](#primeiros-passos)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Arquitetura de Componentes](#arquitetura-de-componentes)
- [Gerenciamento de Estado](#gerenciamento-de-estado)
- [Roteamento](#roteamento)
- [Estilização](#estilização)
- [Formulários e Validação](#formulários-e-validação)
- [Integração com API](#integração-com-api)
- [Otimização de Performance](#otimização-de-performance)

## Visão Geral

O frontend é construído com React e Inertia.js, fornecendo uma interface de usuário moderna e interativa com capacidades de renderização do lado do servidor. Esta combinação oferece:

- Carregamento rápido de páginas com SSR
- Navegação suave no lado do cliente
- Desenvolvimento com tipagem segura usando TypeScript
- UI moderna com Tailwind CSS
- Gerenciamento eficiente de estado

## Primeiros Passos

### Pré-requisitos
- Node.js 18+ instalado
- Conhecimento básico de React
- Familiaridade com TypeScript
- Conhecimento de Tailwind CSS

### Configuração Inicial
1. Instale as dependências:
```bash
npm install
```

2. Inicie o servidor de desenvolvimento:
```bash
./vendor/bin/sail artisan inertia:start-ssr
```

## Estrutura do Projeto

### Layout de Diretórios
```
resources/
├── js/
│   ├── Components/     # Componentes reutilizáveis
│   ├── Layouts/        # Layouts de página
│   ├── Pages/          # Componentes de página
│   ├── Shared/         # Utilitários compartilhados
│   └── Types/          # Definições TypeScript
└── css/
    └── app.css        # Folha de estilos principal
```

## Arquitetura de Componentes

### Componentes de Página
- Localizados em `resources/js/Pages`
- Representam páginas completas
- Recebem props do backend
- Gerenciam lógica específica da página

### Componentes Reutilizáveis
- Localizados em `resources/js/Components`
- Seguem princípios de design atômico
- Altamente reutilizáveis
- Props com tipagem segura

### Componentes de Layout
- Definem estrutura da página
- Gerenciam elementos comuns
- Controlam design responsivo
- Incluem navegação

## Gerenciamento de Estado

### Estado Local
- Use hooks do React
- Estado nível componente
- Gerenciamento de estado de formulário
- Controle de estado da UI

### Estado Global
- Context API para estado global
- Compartilhado entre componentes
- Persistente entre páginas
- Gerenciamento de estado com tipagem segura

## Roteamento

### Roteamento Inertia.js
- Roteamento do lado do servidor
- Navegação do lado do cliente
- Definições de rota com tipagem segura
- Transições automáticas de página

### Parâmetros de Rota
- Parâmetros com tipagem segura
- Manipulação de query string
- Validação de rotas
- Tratamento de erros

## Estilização

### Tailwind CSS
- Abordagem utility-first
- Design responsivo
- Suporte a modo escuro
- Componentes personalizados

### Estilos Personalizados
- Estilos específicos de componentes
- Estilos globais
- Personalização de tema
- Utilitários responsivos

## Formulários e Validação

### Manipulação de Formulários
- Helpers de formulário Inertia
- Upload de arquivos
- Indicadores de progresso
- Tratamento de erros

### Validação
- Validação do lado do servidor
- Validação do lado do cliente
- Mensagens de erro
- Gerenciamento de estado do formulário

## Integração com API

### Chamadas de API
- Clientes de API com tipagem segura
- Tratamento de erros
- Estados de carregamento
- Cache de respostas

### Busca de Dados
- Dados do lado do servidor
- Atualizações do lado do cliente
- Atualizações em tempo real
- Gerenciamento de cache

## Otimização de Performance

### Code Splitting
- Divisão baseada em rotas
- Carregamento lazy de componentes
- Imports dinâmicos
- Otimização de bundle

### Otimização de Assets
- Otimização de imagens
- Minificação de CSS
- Bundling de JavaScript
- Estratégias de cache

## Melhores Práticas

### Desenvolvimento
- Uso de TypeScript
- Composição de componentes
- Organização de código
- Práticas de teste

### Performance
- Otimização de tamanho de bundle
- Carregamento lazy
- Estratégias de cache
- Otimização de assets

## Solução de Problemas

### Problemas Comuns
1. **Problemas de SSR**
   - Verifique configuração do servidor
   - Verifique compatibilidade de componentes
   - Revise erros de hidratação

2. **Erros de Tipo**
   - Verifique definições TypeScript
   - Verifique tipos de props
   - Revise definições de interface

3. **Problemas de Build**
   - Verifique dependências
   - Verifique configuração
   - Revise logs de erro

### Obtendo Ajuda
- Verifique console do navegador
- Revise logs de build
- Verifique erros TypeScript
- Revise requisições de rede

## Próximos Passos
- [Desenvolvimento Backend](06-backend.md)
- [Multi-tenant](03-multi-tenant.md)
- [Testes](07-testes.md)
- [Implantação](08-implantacao.md)
