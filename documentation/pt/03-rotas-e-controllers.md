# 🛣️ Rotas e Controllers

## 📋 Índice
- [Visão Geral](#visão-geral)
- [Arquivos de Rotas](#arquivos-de-rotas)
- [Estrutura dos Controllers](#estrutura-dos-controllers)
- [Rotas de Autenticação](#rotas-de-autenticação)
- [Rotas Públicas](#rotas-públicas)
- [Rotas de Webhook](#rotas-de-webhook)
- [Comandos do Console](#comandos-do-console)

## Visão Geral
A aplicação utiliza uma estrutura modular de rotas com arquivos separados para diferentes grupos de rotas. Os controllers são organizados em namespaces baseados em sua funcionalidade.

## Arquivos de Rotas

### web.php
- Arquivo principal de rotas web
- Inclui todos os outros arquivos de rotas
- Define a estrutura base de rotas

### auth.php
- Rotas relacionadas à autenticação
- Login, registro e recuperação de senha
- Rotas de verificação de email

### PublicRoutes.php
- Rotas publicamente acessíveis
- Páginas iniciais e conteúdo público
- Sem necessidade de autenticação

### WebHooksRoutes.php
- Endpoints de webhook
- Integrações com serviços externos
- Callbacks de gateway de pagamento

### console.php
- Definições de comandos Artisan
- Comandos personalizados do console
- Tarefas agendadas

## Estrutura dos Controllers

### Controller Base
Localizado em `app/Http/Controllers/Controller.php`
- Classe base do controller
- Funcionalidades comuns
- Traits e métodos compartilhados

### Controllers de Autenticação
Localizados em `app/Http/Controllers/Auth/`
- Lógica de autenticação
- Registro de usuários
- Gerenciamento de senha
- Verificação de email

### Controllers Públicos
Localizados em `app/Http/Controllers/Public/`
- Páginas públicas
- Páginas iniciais
- Conteúdo de marketing
- Documentação

## Rotas de Autenticação

### Rotas de Login
- GET `/login` - Formulário de login
- POST `/login` - Processar login
- POST `/logout` - Logout do usuário

### Rotas de Registro
- GET `/register` - Formulário de registro
- POST `/register` - Processar registro

### Rotas de Recuperação de Senha
- GET `/forgot-password` - Formulário de recuperação
- POST `/forgot-password` - Enviar link de recuperação
- GET `/reset-password` - Formulário de redefinição
- POST `/reset-password` - Processar redefinição

### Rotas de Verificação de Email
- GET `/verify-email` - Página de verificação
- POST `/verify-email` - Processar verificação

## Rotas Públicas

### Páginas Iniciais
- GET `/` - Página inicial
- GET `/pricing` - Página de preços
- GET `/features` - Página de recursos
- GET `/about` - Página sobre

### Documentação
- GET `/docs` - Página inicial da documentação
- GET `/docs/{page}` - Páginas da documentação

## Rotas de Webhook

### Gateway de Pagamento
- POST `/webhooks/payment` - Notificações de pagamento
- POST `/webhooks/subscription` - Atualizações de assinatura

### Serviços Externos
- POST `/webhooks/{service}` - Webhooks específicos do serviço

## Comandos do Console

### Manutenção
- `php artisan maintenance:on` - Ativar modo de manutenção
- `php artisan maintenance:off` - Desativar modo de manutenção

### Banco de Dados
- `php artisan db:seed` - Popular banco de dados
- `php artisan migrate` - Executar migrações

### Cache
- `php artisan cache:clear` - Limpar cache
- `php artisan config:clear` - Limpar configurações

## Melhores Práticas

### Organização de Rotas
- Agrupar rotas relacionadas
- Usar middleware para proteção
- Nomear todas as rotas
- Usar resource controllers quando apropriado

### Organização de Controllers
- Princípio da responsabilidade única
- Usar injeção de dependência
- Implementar validação adequada
- Tratar erros graciosamente

### Segurança
- Proteção CSRF
- Limitação de taxa
- Validação de entrada
- Verificações adequadas de autenticação