# 📊 Estrutura do Banco de Dados

## 📋 Índice
- [Visão Geral](#visão-geral)
- [Banco de Dados do Manager](#banco-de-dados-do-manager)
- [Banco de Dados do Tenancy](#banco-de-dados-do-tenancy)
- [Relacionamentos](#relacionamentos)
- [Índices e Restrições](#índices-e-restrições)

## Visão Geral
O sistema utiliza uma arquitetura multi-banco de dados com dois bancos principais:
1. Banco de Dados do Manager: Gerencia operações do sistema
2. Banco de Dados do Tenancy: Gerencia dados específicos dos tenants

## Banco de Dados do Manager

### Tabela de Usuários
- Tabela principal para gerenciamento de usuários
- Armazena informações de autenticação e perfil
- Inclui campos para email, senha, nome e função

### Tabela de Assinaturas
- Gerencia planos de assinatura e assinaturas de usuários
- Controla status, períodos e informações de faturamento
- Inclui campos para detalhes do plano, preços e recursos

### Tabela de Gateway de Pagamento
- Armazena configurações de gateway de pagamento
- Gerencia métodos de pagamento e transações
- Inclui campos para configurações e credenciais

### Tabela de PDFs
- Gerencia documentos PDF gerados
- Armazena metadados e informações de arquivo
- Inclui campos para tipo de documento e localização

### Tabela de Configurações
- Armazena configurações do sistema
- Gerencia preferências da aplicação
- Inclui campos para chaves e valores de configuração

### Tabela de Cache
- Gerencia cache do sistema
- Armazena dados em cache e tempos de expiração
- Inclui campos para chaves e valores de cache

### Tabela de Jobs
- Gerencia jobs em background e filas
- Controla status e execução de jobs
- Inclui campos para tipo de job e payload

### Tabela de Países
- Armazena informações de países
- Gerencia códigos e nomes de países
- Inclui campos para detalhes do país

### Tabela de Moedas
- Gerencia informações de moedas
- Armazena códigos e taxas de câmbio
- Inclui campos para detalhes da moeda

### Tabela de Tenancies
- Gerencia informações dos tenants
- Controla status e configuração dos tenants
- Inclui campos para detalhes e configurações

### Tabela de Histórico de Emails Enviados
- Controla comunicações por email
- Armazena metadados e status dos emails
- Inclui campos para destinatário e conteúdo

## Banco de Dados do Tenancy

### Tabela de Notificações
- Gerencia notificações específicas do tenant
- Armazena conteúdo e status das notificações
- Inclui campos para tipo e destinatário

## Relacionamentos

### Relacionamentos de Usuário
- Usuários -> Assinaturas (Um-para-Muitos)
- Usuários -> Tenancies (Muitos-para-Muitos)
- Usuários -> Configurações (Um-para-Muitos)

### Relacionamentos de Assinatura
- Assinaturas -> Gateway de Pagamento (Muitos-para-Um)
- Assinaturas -> Usuários (Muitos-para-Um)

### Relacionamentos de Tenancy
- Tenancies -> Usuários (Muitos-para-Muitos)
- Tenancies -> Configurações (Um-para-Muitos)

## Índices e Restrições

### Chaves Primárias
- Todas as tabelas usam IDs auto-incrementais
- UUIDs para tabelas com dados sensíveis

### Chaves Estrangeiras
- Restrições de chave estrangeira apropriadas para relacionamentos
- Exclusão em cascata quando apropriado

### Restrições Únicas
- Endereços de email na tabela de usuários
- Nomes de planos de assinatura
- Códigos de moeda
- Códigos de país

### Índices
- Campos de email para buscas rápidas
- Campos de status para filtragem
- Timestamps de criação/atualização para ordenação
- Campos de chave estrangeira para joins