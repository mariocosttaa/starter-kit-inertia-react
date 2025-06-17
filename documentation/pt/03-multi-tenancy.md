# Guia de Multi-tenancy

[English](../en/03-multi-tenancy.md) | [Português](#guia-de-multi-tenancy)

## Navegação Rápida
- [Visão Geral](#visão-geral)
- [Primeiros Passos](#primeiros-passos)
- [Criando Tenants](#criando-tenants)
- [Gerenciando Dados do Tenant](#gerenciando-dados-do-tenant)
- [Melhores Práticas](#melhores-práticas)
- [Solução de Problemas](#solução-de-problemas)

## Visão Geral

A multi-tenancy nesta aplicação é implementada usando um único banco de dados com prefixos de tabela específicos para cada tenant. Esta abordagem oferece:

- Isolamento eficiente de dados
- Gerenciamento fácil de tenants
- Arquitetura escalável
- Processos simples de backup e restauração

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

## Melhores Práticas

### Isolamento de Dados
- Sempre use prefixos de tabela específicos do tenant
- Implemente controles de acesso adequados
- Use middleware para contexto do tenant
- Valide a propriedade do tenant

### Performance
- Indexe colunas específicas do tenant
- Use estratégias de cache apropriadas
- Implemente consultas eficientes
- Monitore o uso de recursos do tenant

### Segurança
- Valide o acesso do tenant
- Implemente autenticação adequada
- Use criptografia segura de dados
- Realize auditorias de segurança regulares

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
