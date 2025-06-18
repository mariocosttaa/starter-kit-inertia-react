# Backend Development

## Table of Contents
1. [Overview](#overview)
2. [Project Structure](#project-structure)
3. [Key Features](#key-features)
4. [EasyHash Implementation](#easyhash-implementation)
5. [Multi-language Support](#multi-language-support)
6. [Inertia.js Integration](#inertiajs-integration)
7. [Payment Gateway Integration](#payment-gateway-integration)
8. [Caching System](#caching-system)

## Overview

The backend is built on Laravel with a focus on multi-tenancy, internationalization, and modern frontend integration. It implements several custom features and integrations that are essential for the application's functionality.

## Project Structure

The backend follows a well-organized structure:

- **Actions**: Contains business logic actions, separated from controllers for better maintainability
- **CustomCache**: Houses the custom caching implementation
- **Http**: Contains controllers, middleware, resources, and webhook handlers
- **Models**: Contains Eloquent models with relationships and business logic
- **PaymentGateway**: Manages payment gateway integrations
- **Support**: Contains helper functions and utilities

## Key Features

### EasyHash Implementation

EasyHash provides a secure way to encode and decode IDs in your application. It's particularly useful for:

- Hiding real database IDs from users
- Creating secure, non-sequential identifiers
- Protecting sensitive data in URLs and API responses

**How to Use:**
1. For encoding IDs in API responses, use the `EasyHashAction::encode()` method
2. For decoding hashed IDs in requests, use the `EasyHashAction::decode()` method
3. Each type of ID (user, product, etc.) can have its own encoding type for better security

### Multi-language Support

The application supports multiple languages (English, Portuguese, Spanish, and French) through a custom middleware system.

**How it Works:**
1. Language is determined by the URL parameter or session
2. The middleware automatically sets the application locale
3. Translations are managed through language files
4. Frontend components automatically update based on the selected language

**Usage Tips:**
- Add new languages by updating the `app.locales` configuration
- Use translation keys in your views and components
- Language switching is handled automatically by the middleware

### Inertia.js Integration

Inertia.js provides a seamless integration between the Laravel backend and React frontend.

**Key Features:**
- Server-side rendering support
- Automatic page transitions
- Shared data between backend and frontend
- Type-safe props

**How to Use:**
1. Share data through the `HandleInertiaRequests` middleware
2. Use Inertia's built-in components for navigation
3. Handle form submissions with Inertia's form helpers
4. Implement SSR for better performance

### Payment Gateway Integration

The payment system is built with flexibility in mind, supporting multiple payment gateways with a focus on Stripe integration.

**Features:**
- Subscription management
- One-time payments
- Webhook handling
- Secure customer data management

**Implementation Details:**
- Uses a gateway interface for easy extension
- Handles payment events through webhooks
- Manages subscription lifecycle
- Supports multiple currencies

### Caching System

A custom caching system provides efficient data storage and retrieval.

**Features:**
- Tag-based caching
- Automatic cache invalidation
- Configurable cache duration
- Support for different cache drivers

**Best Practices:**
1. Use cache tags for better organization
2. Set appropriate cache durations
3. Implement cache warming for frequently accessed data
4. Use cache versioning for better control

## Related Documentation

- [Frontend Development](05-frontend.md)
- [Multi-tenant](03-multi-tenant.md)
- [Testing](07-testing.md)
- [Deployment](08-deployment.md) 
