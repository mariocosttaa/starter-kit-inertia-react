# System Overview

## Introduction
A modern SaaS starter kit built with Laravel, React, TypeScript, and Inertia.js. This starter kit provides a robust foundation for building scalable and maintainable SaaS applications with advanced features like Server-Side Rendering (SSR) and Multi-tenancy support.

## Tech Stack
- **Backend**: Laravel 10.x
- **Frontend**: React + TypeScript
- **State Management**: Inertia.js
- **Styling**: Tailwind CSS
- **Development**: Docker + Laravel Sail
- **Database**: MySQL
- **Testing**: PHPUnit + Jest
- **SSR**: Inertia SSR

## Key Features
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

## Quick Start
1. Clone the repository
```bash
git clone https://github.com/mariocosttaa/starter-kit-inertia-react.git
cd starter-kit-inertia-react
```

2. Start Docker containers
```bash
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
./vendor/bin/sail artisan key:generate
```

5. Run migrations
```bash
./vendor/bin/sail artisan migrate
```

6. Start development server
```bash
npm run dev
```

7. Start SSR server (optional)
```bash
npm run build:ssr
./vendor/bin/sail artisan inertia:start-ssr
```

## Documentation Structure
- [System Overview](01-system-overview.md)
- [Installation Guide](02-installation-guide.md)
- [Multi-tenancy System](03-multi-tenancy.md)
- [Server-Side Rendering](04-ssr-guide.md)
- [Frontend Development](05-frontend-guide.md)
- [Backend Development](06-backend-guide.md)
- [Testing](07-testing-guide.md)
- [Deployment](08-deployment-guide.md)
