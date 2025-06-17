# Desenvolvimento Backend

## Índice
1. [Visão Geral](#visão-geral)
2. [Estrutura do Projeto](#estrutura-do-projeto)
3. [Funcionalidades Principais](#funcionalidades-principais)
4. [Implementação EasyHash](#implementação-easyhash)
5. [Suporte Multi-idioma](#suporte-multi-idioma)
6. [Integração Inertia.js](#integração-inertiajs)
7. [Integração com Gateway de Pagamento](#integração-com-gateway-de-pagamento)
8. [Sistema de Cache](#sistema-de-cache)

## Visão Geral

O backend é construído em Laravel com foco em multi-tenancy, internacionalização e integração moderna com frontend. Implementa várias funcionalidades e integrações personalizadas que são essenciais para o funcionamento da aplicação.

## Estrutura do Projeto

O backend segue uma estrutura bem organizada:

- **Actions**: Contém ações de lógica de negócios, separadas dos controladores para melhor manutenção
- **CustomCache**: Abriga a implementação de cache personalizada
- **Http**: Contém controladores, middleware, recursos e manipuladores de webhook
- **Models**: Contém modelos Eloquent com relacionamentos e lógica de negócios
- **PaymentGateway**: Gerencia integrações com gateways de pagamento
- **Support**: Contém funções auxiliares e utilitários

## Funcionalidades Principais

### Implementação EasyHash

O EasyHash fornece uma maneira segura de codificar e decodificar IDs em sua aplicação. É particularmente útil para:

- Ocultar IDs reais do banco de dados dos usuários
- Criar identificadores seguros e não sequenciais
- Proteger dados sensíveis em URLs e respostas da API

**Como Usar:**
1. Para codificar IDs em respostas da API, use o método `EasyHashAction::encode()`
2. Para decodificar IDs hasheados em requisições, use o método `EasyHashAction::decode()`
3. Cada tipo de ID (usuário, produto, etc.) pode ter seu próprio tipo de codificação para maior segurança

### Suporte Multi-idioma

A aplicação suporta múltiplos idiomas (Inglês, Português, Espanhol e Francês) através de um sistema de middleware personalizado.

**Como Funciona:**
1. O idioma é determinado pelo parâmetro da URL ou sessão
2. O middleware define automaticamente o locale da aplicação
3. As traduções são gerenciadas através de arquivos de idioma
4. Os componentes do frontend são atualizados automaticamente com base no idioma selecionado

**Dicas de Uso:**
- Adicione novos idiomas atualizando a configuração `app.locales`
- Use chaves de tradução em suas views e componentes
- A troca de idioma é gerenciada automaticamente pelo middleware

### Integração Inertia.js

O Inertia.js fornece uma integração perfeita entre o backend Laravel e o frontend React.

**Funcionalidades Principais:**
- Suporte a renderização do lado do servidor
- Transições automáticas de página
- Dados compartilhados entre backend e frontend
- Props com tipagem segura

**Como Usar:**
1. Compartilhe dados através do middleware `HandleInertiaRequests`
2. Use os componentes integrados do Inertia para navegação
3. Gerencie envios de formulário com os helpers do Inertia
4. Implemente SSR para melhor performance

### Integração com Gateway de Pagamento

O sistema de pagamento é construído com flexibilidade, suportando múltiplos gateways de pagamento com foco na integração Stripe.

**Funcionalidades:**
- Gerenciamento de assinaturas
- Pagamentos únicos
- Manipulação de webhooks
- Gerenciamento seguro de dados do cliente

**Detalhes da Implementação:**
- Usa uma interface de gateway para fácil extensão
- Gerencia eventos de pagamento através de webhooks
- Controla o ciclo de vida das assinaturas
- Suporta múltiplas moedas

### Sistema de Cache

Um sistema de cache personalizado fornece armazenamento e recuperação eficiente de dados.

**Funcionalidades:**
- Cache baseado em tags
- Invalidação automática de cache
- Duração de cache configurável
- Suporte a diferentes drivers de cache

**Melhores Práticas:**
1. Use tags de cache para melhor organização
2. Defina durações de cache apropriadas
3. Implemente cache warming para dados frequentemente acessados
4. Use versionamento de cache para melhor controle

## Documentação Relacionada

- [Desenvolvimento Frontend](05-frontend.md)
- [Multi-tenancy](03-multi-tenancy.md)
- [Testes](07-testes.md)
- [Implantação](08-implantacao.md) 
