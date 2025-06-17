# 🛣️ Routes and Controllers

## 📋 Table of Contents
- [Overview](#overview)
- [Route Files](#route-files)
- [Controller Structure](#controller-structure)
- [Authentication Routes](#authentication-routes)
- [Public Routes](#public-routes)
- [Webhook Routes](#webhook-routes)
- [Console Commands](#console-commands)

## Overview
The application uses a modular route structure with separate files for different route groups. Controllers are organized in namespaces based on their functionality.

## Route Files

### web.php
- Main web routes file
- Includes all other route files
- Defines the base route structure

### auth.php
- Authentication related routes
- Login, registration, and password reset
- Email verification routes

### PublicRoutes.php
- Publicly accessible routes
- Landing pages and public content
- No authentication required

### WebHooksRoutes.php
- Webhook endpoints
- External service integrations
- Payment gateway callbacks

### console.php
- Artisan command definitions
- Custom console commands
- Scheduled tasks

## Controller Structure

### Base Controller
Located at `app/Http/Controllers/Controller.php`
- Base controller class
- Common functionality
- Shared traits and methods

### Auth Controllers
Located in `app/Http/Controllers/Auth/`
- Authentication logic
- User registration
- Password management
- Email verification

### Public Controllers
Located in `app/Http/Controllers/Public/`
- Public pages
- Landing pages
- Marketing content
- Documentation

## Authentication Routes

### Login Routes
- GET `/login` - Login form
- POST `/login` - Process login
- POST `/logout` - User logout

### Registration Routes
- GET `/register` - Registration form
- POST `/register` - Process registration

### Password Reset Routes
- GET `/forgot-password` - Password reset form
- POST `/forgot-password` - Send reset link
- GET `/reset-password` - Reset password form
- POST `/reset-password` - Process password reset

### Email Verification Routes
- GET `/verify-email` - Email verification page
- POST `/verify-email` - Process verification

## Public Routes

### Landing Pages
- GET `/` - Home page
- GET `/pricing` - Pricing page
- GET `/features` - Features page
- GET `/about` - About page

### Documentation
- GET `/docs` - Documentation home
- GET `/docs/{page}` - Documentation pages

## Webhook Routes

### Payment Gateway
- POST `/webhooks/payment` - Payment notifications
- POST `/webhooks/subscription` - Subscription updates

### External Services
- POST `/webhooks/{service}` - Service-specific webhooks

## Console Commands

### Maintenance
- `php artisan maintenance:on` - Enable maintenance mode
- `php artisan maintenance:off` - Disable maintenance mode

### Database
- `php artisan db:seed` - Seed database
- `php artisan migrate` - Run migrations

### Cache
- `php artisan cache:clear` - Clear cache
- `php artisan config:clear` - Clear config

## Best Practices

### Route Organization
- Group related routes
- Use middleware for protection
- Name all routes
- Use resource controllers where appropriate

### Controller Organization
- Single responsibility principle
- Use dependency injection
- Implement proper validation
- Handle errors gracefully

### Security
- CSRF protection
- Rate limiting
- Input validation
- Proper authentication checks