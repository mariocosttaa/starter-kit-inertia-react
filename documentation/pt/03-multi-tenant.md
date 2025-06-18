# Guia de Multi-tenant

[English](../en/03-multi-tenant.md) | [Português](#guia-de-multi-tenant)

## Navegação Rápida
- [Visão Geral](#visão-geral)
- [Primeiros Passos](#primeiros-passos)
- [Criando Tenants](#criando-tenants)
- [Gerenciando Dados do Tenant](#gerenciando-dados-do-tenant)
- [Melhores Práticas](#melhores-práticas)
- [Solução de Problemas](#solução-de-problemas)

## Visão Geral

Este guia explica como a funcionalidade multi-tenant é implementada na aplicação Laravel.

## Arquitetura

A multi-tenant nesta aplicação é implementada usando um único banco de dados com prefixos de tabela específicos para cada tenant. Esta abordagem oferece:

- **Isolamento**: Os dados de cada tenant são completamente separados
- **Escalabilidade**: Fácil adição de novos tenants
- **Performance**: Sem sobrecarga complexa de roteamento ou middleware
- **Simplicidade**: Padrões e ferramentas padrão do Laravel

## Detalhes da Implementação

### Estrutura do Banco de Dados

Cada tenant recebe seu próprio conjunto de tabelas com um prefixo único baseado no ID do tenant.

### Identificação do Tenant

Os tenants são identificados através de:
- Contexto de autenticação do usuário
- Parâmetros da URL
- Roteamento de subdomínio (opcional)

### Isolamento de Dados

O isolamento de dados é alcançado através de:
- Prefixação de tabelas
- Escopo de consultas
- Aplicação de middleware

## Uso

### Criando um Novo Tenant

```php
// Criar tenant
$tenant = TenantModel::create([
    'name' => 'Novo Tenant',
    'slug' => 'novo-tenant'
]);

// Criar estrutura do banco do tenant
Artisan::call('make:tenantDb', ['tenantId' => $tenant->id]);
```

### Acessando Dados do Tenant

```php
// Definir contexto do tenant
config(['tenantId' => $tenantId]);

// Consultar dados específicos do tenant
$data = TenantModel::where('id', $tenantId)->get();
```

## Melhores Práticas

- Sempre use consultas conscientes do tenant
- Implemente isolamento adequado do tenant
- Use middleware para contexto do tenant
- Gerencie configurações específicas do tenant

## Primeiros Passos

### Pré-requisitos
- Laravel Sail instalado
- Banco de dados configurado
- Conhecimento básico de migrações Laravel

### Configuração Inicial
1. Execute as migrações base:
```bash
./vendor/bin/sail artisan migrate
```

2. Crie seu primeiro tenant:
```bash
./vendor/bin/sail artisan tenant:create "Meu Primeiro Tenant"
```

## Criando Tenants

### Usando a Linha de Comando
```bash
# Criar um novo tenant
./vendor/bin/sail artisan tenant:create "Nome do Tenant"

# Listar todos os tenants
./vendor/bin/sail artisan tenant:list

# Deletar um tenant
./vendor/bin/sail artisan tenant:delete "Nome do Tenant"
```

### Usando a API
```bash
# Criar tenant
POST /api/tenants
{
    "name": "Nome do Tenant",
    "domain": "tenant.exemplo.com"
}

# Obter detalhes do tenant
GET /api/tenants/{tenant_id}

# Atualizar tenant
PUT /api/tenants/{tenant_id}
{
    "name": "Nome Atualizado"
}
```

## Gerenciando Dados do Tenant

### Criando Tabelas Específicas do Tenant
1. Crie uma nova migração:
```bash
./vendor/bin/sail artisan make:migration create_tenant_specific_table
```

2. Use o prefixo do tenant na sua migração:
```php
Schema::create('tenant_' . $tenantId . '_nome_tabela', function (Blueprint $table) {
    $table->id();
    $table->string('nome');
    $table->timestamps();
});
```

### Acessando Dados do Tenant
- Use o trait `TenantScope` nos seus modelos
- Acesse dados específicos do tenant através do contexto
- Use o middleware do tenant para troca automática de contexto

## Solução de Problemas

### Problemas Comuns

1. **Tenant Não Encontrado**
   - Verifique a existência do tenant
   - Confirme o ID do tenant
   - Verifique a conexão com o banco de dados

2. **Problemas de Acesso a Dados**
   - Verifique o contexto do tenant
   - Verifique as permissões
   - Valide os prefixos das tabelas

3. **Problemas com Migrações**
   - Verifique o status da migração
   - Confirme a existência do tenant
   - Revise os arquivos de migração

### Obtendo Ajuda
- Verifique os logs em `storage/logs`
- Revise os logs específicos do tenant
- Entre em contato com o suporte informando o ID do tenant

## Próximos Passos
- [Desenvolvimento Frontend](05-frontend.md)
- [Desenvolvimento Backend](06-backend.md)
- [Testes](07-testes.md)
- [Implantação](08-implantacao.md)
