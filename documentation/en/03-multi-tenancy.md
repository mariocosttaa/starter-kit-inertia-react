# Multi-tenancy System

## Overview
The multi-tenancy system in this starter kit uses a single database with tenant-specific table prefixes for data isolation. Each tenant's tables are prefixed with their unique identifier, ensuring data separation while maintaining database simplicity.

## Key Features
- Single database management
- Efficient data isolation through table prefixes
- Simplified backup and maintenance
- Easy tenant data management

## Creating a New Tenant

```php
use App\Actions\Tenancy\TenancyAction;

// Create a new tenant
$tenant = TenancyAction::set($userId, [
    'name' => 'Tenant Name',
    'slug' => 'tenant-slug'
]);
```

## Managing Tenant Tables

### Creating Tenant Structure
```bash
./vendor/bin/sail artisan make:tenancyDb {tenancyId}
```

### Destroying Tenant Structure
```bash
./vendor/bin/sail artisan destroy:tenancyDb {tenancyId}
```

## Creating Tenant-Specific Tables

### Migration Example
```php
namespace Database\Migrations\Tenancy;

class CreateNotificationTable extends _TenancyHelperMigration
{
    public function up(): void
    {
        // Tables are automatically prefixed with tenant ID
        // Example: 100001_notifications, 100002_notifications, etc.
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

## Tenant Database Structure

### Base Tables
- `tenancies`: Stores tenant information
- `user_tenancies`: Links users to tenants

### Tenant-Specific Tables
Each tenant gets their own set of tables with their ID as prefix:
- `{tenant_id}_notifications`
- `{tenant_id}_users`
- `{tenant_id}_settings`
- etc.

## Best Practices

### Creating New Tenant Tables
1. Create a new migration in `database/migrations/tenancy/`
2. Extend `_TenancyHelperMigration`
3. Use `$this->prefix` for table names
4. Use `$this->connection` for database connection

### Managing Tenant Data
1. Always use the tenant context
2. Validate tenant access
3. Use proper indexing for tenant-specific queries
4. Implement proper error handling

## Security Considerations
- Validate tenant access in middleware
- Use proper authorization checks
- Implement tenant isolation in queries
- Handle tenant-specific errors appropriately

## Common Tasks

### Adding a New Tenant
```php
// Create tenant
$tenant = TenancyAction::set($userId, [
    'name' => 'New Tenant',
    'slug' => 'new-tenant'
]);

// Create tenant structure
./vendor/bin/sail artisan make:tenancyDb {$tenant->id}
```

### Removing a Tenant
```php
// Destroy tenant structure
./vendor/bin/sail artisan destroy:tenancyDb {$tenant->id}

// Delete tenant
$tenant->delete();
```

## Troubleshooting

### Common Issues
1. **Table Prefix Issues**
   - Ensure using `$this->prefix` in migrations
   - Check connection settings

2. **Tenant Access Issues**
   - Verify tenant middleware
   - Check user-tenant relationships

3. **Migration Problems**
   - Ensure proper migration order
   - Check tenant ID validity 
