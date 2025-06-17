# Sistema Multi-tenancy

## Visão Geral
O sistema multi-tenancy neste kit inicial utiliza um único banco de dados com prefixos específicos por tenant para isolamento de dados. Cada tabela do tenant é prefixada com seu identificador único, garantindo separação de dados enquanto mantém a simplicidade do banco de dados.

## Principais Recursos
- Gerenciamento de banco de dados único
- Isolamento eficiente de dados através de prefixos de tabela
- Backup e manutenção simplificados
- Gerenciamento fácil de dados do tenant

## Criando um Novo Tenant

```php
use App\Actions\Tenancy\TenancyAction;

// Criar um novo tenant
$tenant = TenancyAction::set($userId, [
    'name' => 'Nome do Tenant',
    'slug' => 'tenant-slug'
]);
```

## Gerenciando Tabelas do Tenant

### Criando Estrutura do Tenant
```bash
./vendor/bin/sail artisan make:tenancyDb {tenancyId}
```

### Destruindo Estrutura do Tenant
```bash
./vendor/bin/sail artisan destroy:tenancyDb {tenancyId}
```

## Criando Tabelas Específicas do Tenant

### Exemplo de Migração
```php
namespace Database\Migrations\Tenancy;

class CreateNotificationTable extends _TenancyHelperMigration
{
    public function up(): void
    {
        // As tabelas são automaticamente prefixadas com o ID do tenant
        // Exemplo: 100001_notifications, 100002_notifications, etc.
        Schema::connection($this->connection)->create($this->prefix.'_notifications', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('subject');
            $table->text('message');
            $table->timestamps();
        });
    }
}
```

## Estrutura do Banco de Dados do Tenant

### Tabelas Base
- `tenancies`: Armazena informações do tenant
- `user_tenancies`: Vincula usuários aos tenants

### Tabelas Específicas do Tenant
Cada tenant recebe seu próprio conjunto de tabelas com seu ID como prefixo:
- `{tenant_id}_notifications`
- `{tenant_id}_users`
- `{tenant_id}_settings`
- etc.

## Melhores Práticas

### Criando Novas Tabelas do Tenant
1. Crie uma nova migração em `database/migrations/tenancy/`
2. Estenda `_TenancyHelperMigration`
3. Use `$this->prefix` para nomes de tabelas
4. Use `$this->connection` para conexão com o banco de dados

### Gerenciando Dados do Tenant
1. Sempre use o contexto do tenant
2. Valide o acesso do tenant
3. Use indexação adequada para consultas específicas do tenant
4. Implemente tratamento de erros adequado

## Considerações de Segurança
- Valide o acesso do tenant no middleware
- Use verificações de autorização adequadas
- Implemente isolamento do tenant nas consultas
- Trate erros específicos do tenant apropriadamente

## Tarefas Comuns

### Adicionando um Novo Tenant
```php
// Criar tenant
$tenant = TenancyAction::set($userId, [
    'name' => 'Novo Tenant',
    'slug' => 'novo-tenant'
]);

// Criar estrutura do tenant
./vendor/bin/sail artisan make:tenancyDb {$tenant->id}
```

### Removendo um Tenant
```php
// Destruir estrutura do tenant
./vendor/bin/sail artisan destroy:tenancyDb {$tenant->id}

// Deletar tenant
$tenant->delete();
```

## Solução de Problemas

### Problemas Comuns
1. **Problemas com Prefixo de Tabela**
   - Certifique-se de usar `$this->prefix` nas migrações
   - Verifique as configurações de conexão

2. **Problemas de Acesso do Tenant**
   - Verifique o middleware do tenant
   - Verifique os relacionamentos usuário-tenant

3. **Problemas de Migração**
   - Certifique-se da ordem correta das migrações
   - Verifique a validade do ID do tenant 
