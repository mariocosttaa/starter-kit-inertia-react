# 🚀 Laravel Inertia React TypeScript SaaS Starter Kit

<div align="center">

[![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)](https://laravel.com)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Inertia](https://img.shields.io/badge/Inertia-000000?style=for-the-badge&logo=inertia&logoColor=white)](https://inertiajs.com)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)

[![Documentation - English](https://img.shields.io/badge/Documentation-English-blue?style=for-the-badge)](documentation/en/01-system-overview.md)
[![Documentação - Português](https://img.shields.io/badge/Documentação-Português-green?style=for-the-badge)](documentation/pt/01-visao-geral-do-sistema.md)

</div>

## 📋 Overview

A modern SaaS starter kit built with Laravel, React, TypeScript, and Inertia.js. This starter kit provides a robust foundation for building scalable and maintainable SaaS applications with advanced features like Server-Side Rendering (SSR) and Multi-tenancy support.

### ✨ Key Features

- 🔐 **Authentication & Authorization**
- 👥 **Multi-tenancy Support**
  - Single database with tenant-specific table prefixes
  - Data isolation through table prefixes
  - Easy tenant management
- 🎨 **Modern UI with Tailwind CSS**
- 📱 **Responsive Design**
- 🔄 **Real-time Updates**
- 📊 **Dashboard Analytics**
- 🔍 **Search Functionality**
- 📝 **Rich Text Editing**
- 📤 **File Upload & Management**
- 🔔 **Notification System**
- 🌐 **Server-Side Rendering (SSR)**
  - Improved SEO
  - Faster initial page load
  - Better user experience

### 🛠️ Tech Stack

- **Backend**: Laravel 10.x
- **Frontend**: React + TypeScript
- **State Management**: Inertia.js
- **Styling**: Tailwind CSS
- **Development**: Docker + Laravel Sail
- **Database**: MySQL
- **Testing**: PHPUnit + Jest
- **SSR**: Inertia SSR

## 🚀 Quick Start

1. Clone the repository

```bash
git clone https://github.com/mariocosttaa/starter-kit-inertia-react
```

2. Build and start Docker containers

```bash
# Build the containers
docker-compose build

# Start the containers
./vendor/bin/sail up -d
```

3. Install dependencies

```bash
composer install
npm install
```

4. Set up environment

```bash
cp .env.example .env
php artisan key:generate
```

5. Run migrations

```bash
# First, run the manager database migrations
php artisan migrate --path=database/migrations/manager

# Then run the remaining migrations
php artisan migrate
```

6. Start development server

```bash
npm run dev
```

7. Build SSR assets

```bash
npm run build:ssr
```

8. Start SSR server

```bash
sail artisan inertia:start-ssr
```

Note: The SSR server will run on port 13714 by default. Make sure this port is available.

## 🏢 Multi-tenancy

This starter kit includes a powerful multi-tenancy system that uses a single database with tenant-specific table prefixes for data isolation. Each tenant's tables are prefixed with their unique identifier, ensuring data separation while maintaining database simplicity.

### Key Benefits
- Single database management
- Efficient data isolation through table prefixes
- Simplified backup and maintenance
- Easy tenant data management

### Creating a New Tenant

```php
use App\Actions\Tenancy\TenancyAction;

// Create a new tenant
$tenant = TenancyAction::set($userId, [
    'name' => 'Tenant Name',
    'slug' => 'tenant-slug'
]);
```

### Managing Tenant Tables

```bash
# Create tenant table structure
php artisan make:tenancyDb {tenancyId}

# Destroy tenant table structure
php artisan destroy:tenancyDb {tenancyId}
```

### Creating Tenant-Specific Tables

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

## 🌐 Server-Side Rendering (SSR)

The kit includes built-in SSR support through Inertia.js:

1. Build SSR assets:
```bash
npm run build:ssr
```

2. Start SSR server:
```bash
sail artisan inertia:start-ssr
```

Benefits:
- Improved SEO
- Faster initial page load
- Better user experience
- Reduced client-side JavaScript

## 📚 Documentation

Choose your preferred language to view the complete documentation:

- [English Documentation](documentation/en/01-system-overview.md)
- [Documentação em Português](documentation/pt/01-visao-geral-do-sistema.md)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
Made with ❤️ by Mário Costa
</div>
