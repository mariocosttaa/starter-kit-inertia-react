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

A modern SaaS starter kit built with Laravel, React, TypeScript, and Inertia.js. This starter kit provides a robust foundation for building scalable and maintainable SaaS applications.

### ✨ Key Features

- 🔐 **Authentication & Authorization**
- 👥 **Multi-tenancy Support**
- 🎨 **Modern UI with Tailwind CSS**
- 📱 **Responsive Design**
- 🔄 **Real-time Updates**
- 📊 **Dashboard Analytics**
- 🔍 **Search Functionality**
- 📝 **Rich Text Editing**
- 📤 **File Upload & Management**
- 🔔 **Notification System**

### 🛠️ Tech Stack

- **Backend**: Laravel 10.x
- **Frontend**: React + TypeScript
- **State Management**: Inertia.js
- **Styling**: Tailwind CSS
- **Development**: Docker + Laravel Sail
- **Database**: MySQL
- **Testing**: PHPUnit + Jest

## 🚀 Quick Start

1. Clone the repository
```bash
git clone [repository-url]
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
php artisan key:generate
```

5. Run migrations
```bash
php artisan migrate
```

6. Start development server
```bash
npm run dev
```

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
Made with ❤️ by [Your Name/Organization]
</div>