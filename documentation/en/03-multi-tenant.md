# Multi-tenant Guide

[English](#multi-tenant-guide) | [Português](../pt/03-multi-tenant.md)

## Quick Navigation
- [Overview](#overview)
- [Getting Started](#getting-started)
- [Creating Tenants](#creating-tenants)
- [Managing Tenant Data](#managing-tenant-data)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)

## Overview

This guide explains how multi-tenant functionality is implemented in the Laravel application.

## Architecture

Multi-tenant in this application is implemented using a single database with tenant-specific table prefixes. This approach provides:

- **Isolation**: Each tenant's data is completely separated
- **Scalability**: Easy to add new tenants
- **Performance**: No complex routing or middleware overhead
- **Simplicity**: Standard Laravel patterns and tools

## Implementation Details

### Database Structure

Each tenant gets its own set of tables with a unique prefix based on the tenant ID.

### Tenant Identification

Tenants are identified through:
- User authentication context
- URL parameters
- Subdomain routing (optional)

### Data Isolation

Data isolation is achieved through:
- Table prefixing
- Query scoping
- Middleware enforcement

## Usage

### Creating a New Tenant

```php
// Create tenant
$tenant = TenantModel::create([
    'name' => 'New Tenant',
    'slug' => 'new-tenant'
]);

// Create tenant database structure
Artisan::call('make:tenantDb', ['tenantId' => $tenant->id]);
```

### Accessing Tenant Data

```php
// Set tenant context
config(['tenantId' => $tenantId]);

// Query tenant-specific data
$data = TenantModel::where('id', $tenantId)->get();
```

## Best Practices

- Always use tenant-aware queries
- Implement proper tenant isolation
- Use middleware for tenant context
- Handle tenant-specific configurations

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
