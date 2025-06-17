# Multi-tenancy Guide

[English](#multi-tenancy-guide) | [Português](../pt/03-multi-tenancy.md)

## Quick Navigation
- [Overview](#overview)
- [Getting Started](#getting-started)
- [Creating Tenants](#creating-tenants)
- [Managing Tenant Data](#managing-tenant-data)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)

## Overview

Multi-tenancy in this application is implemented using a single database with tenant-specific table prefixes. This approach provides:

- Efficient data isolation
- Easy tenant management
- Scalable architecture
- Simple backup and restore processes

## Getting Started

### Prerequisites
- Laravel Sail installed
- Database configured
- Basic understanding of Laravel migrations

### Initial Setup
1. Run the base migrations:
```bash
./vendor/bin/sail artisan migrate
```

2. Create your first tenant:
```bash
./vendor/bin/sail artisan tenant:create "My First Tenant"
```

## Creating Tenants

### Using the Command Line
```bash
# Create a new tenant
./vendor/bin/sail artisan tenant:create "Tenant Name"

# List all tenants
./vendor/bin/sail artisan tenant:list

# Delete a tenant
./vendor/bin/sail artisan tenant:delete "Tenant Name"
```

### Using the API
```bash
# Create tenant
POST /api/tenants
{
    "name": "Tenant Name",
    "domain": "tenant.example.com"
}

# Get tenant details
GET /api/tenants/{tenant_id}

# Update tenant
PUT /api/tenants/{tenant_id}
{
    "name": "Updated Name"
}
```

## Managing Tenant Data

### Creating Tenant-Specific Tables
1. Create a new migration:
```bash
./vendor/bin/sail artisan make:migration create_tenant_specific_table
```

2. Use the tenant prefix in your migration:
```php
Schema::create('tenant_' . $tenantId . '_table_name', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->timestamps();
});
```

### Accessing Tenant Data
- Use the `TenantScope` trait in your models
- Access tenant-specific data through the tenant context
- Use the tenant middleware for automatic context switching

## Best Practices

### Data Isolation
- Always use tenant-specific table prefixes
- Implement proper access controls
- Use middleware for tenant context
- Validate tenant ownership

### Performance
- Index tenant-specific columns
- Use appropriate caching strategies
- Implement efficient queries
- Monitor tenant resource usage

### Security
- Validate tenant access
- Implement proper authentication
- Use secure data encryption
- Regular security audits

## Troubleshooting

### Common Issues

1. **Tenant Not Found**
   - Check tenant existence
   - Verify tenant ID
   - Check database connection

2. **Data Access Issues**
   - Verify tenant context
   - Check permissions
   - Validate table prefixes

3. **Migration Problems**
   - Check migration status
   - Verify tenant existence
   - Review migration files

### Getting Help
- Check the logs in `storage/logs`
- Review tenant-specific logs
- Contact support with tenant ID

## Next Steps
- [Frontend Development](05-frontend.md)
- [Backend Development](06-backend.md)
- [Testing](07-testing.md)
- [Deployment](08-deployment.md)
