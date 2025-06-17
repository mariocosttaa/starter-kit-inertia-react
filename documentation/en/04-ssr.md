# Server-Side Rendering (SSR)

## Table of Contents
1. [Overview](#overview)
2. [Benefits](#benefits)
3. [Setup](#setup)
4. [Configuration](#configuration)
5. [Development](#development)
6. [Production](#production)
7. [Troubleshooting](#troubleshooting)
8. [Best Practices](#best-practices)

## Overview

Server-Side Rendering (SSR) in this starter kit is implemented using Inertia.js's SSR capabilities. SSR allows your React components to be rendered on the server before being sent to the client, providing several benefits including improved SEO, faster initial page loads, and better user experience.

## Benefits

### SEO Optimization
- Search engines can crawl your content more effectively
- Better indexing of dynamic content
- Improved meta tags and social media sharing

### Performance
- Faster First Contentful Paint (FCP)
- Reduced Time to Interactive (TTI)
- Better Core Web Vitals scores

### User Experience
- Immediate content visibility
- Reduced layout shifts
- Better perceived performance

## Setup

### Prerequisites
- Node.js v18 or higher
- PHP 8.1 or higher
- Composer
- npm

### Installation Steps

1. Build SSR assets:
```bash
npm run build:ssr
```

2. Start SSR server:
```bash
./vendor/bin/sail artisan inertia:start-ssr
```

### Environment Configuration

Add these variables to your `.env` file:
```env
INERTIA_SSR_ENABLED=true
INERTIA_SSR_PORT=13714
```

## Configuration

### Vite Configuration

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.tsx'],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react(),
    ],
});
```

### SSR Entry Point

```typescript
// resources/js/ssr.tsx
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

createInertiaApp({
    resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});
```

## Development

### Development Workflow

1. Start the development server:
```bash
npm run dev
```

2. In a separate terminal, start the SSR server:
```bash
./vendor/bin/sail artisan inertia:start-ssr
```

### Hot Module Replacement

The development environment supports HMR for both client and server-side code:
- Client-side changes are reflected immediately
- Server-side changes require a restart of the SSR server

## Production

### Building for Production

1. Build the client assets:
```bash
npm run build
```

2. Build the SSR assets:
```bash
npm run build:ssr
```

### Deployment Considerations

1. Ensure the SSR server is running:
```bash
./vendor/bin/sail artisan inertia:start-ssr
```

2. Configure your web server to proxy SSR requests:
```nginx
location / {
    proxy_pass http://localhost:13714;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
}
```

## Troubleshooting

### Common Issues

1. **SSR Server Not Starting**
   - Check if port 13714 is available
   - Verify SSR assets are built
   - Check server logs for errors

2. **Hydration Mismatches**
   - Ensure consistent rendering between server and client
   - Check for browser-specific code
   - Verify data consistency

3. **Performance Issues**
   - Monitor server resources
   - Check for memory leaks
   - Optimize component rendering

### Debugging

1. Enable debug mode in `.env`:
```env
APP_DEBUG=true
INERTIA_SSR_DEBUG=true
```

2. Check server logs:
```bash
./vendor/bin/sail logs
```

## Best Practices

### Component Development

1. **Avoid Browser-Specific Code**
```typescript
// ❌ Bad
if (window.innerWidth > 768) { ... }

// ✅ Good
const [isMobile, setIsMobile] = useState(false);
useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
}, []);
```

2. **Handle Data Loading**
```typescript
// ❌ Bad
const data = await fetch('/api/data');

// ✅ Good
const data = await fetch('/api/data', {
    headers: {
        'X-Requested-With': 'XMLHttpRequest'
    }
});
```

### Performance Optimization

1. **Code Splitting**
```typescript
const Dashboard = lazy(() => import('./Pages/Dashboard'));
```

2. **Asset Optimization**
```typescript
// vite.config.ts
export default defineConfig({
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom'],
                },
            },
        },
    },
});
```

### Security Considerations

1. **CSRF Protection**
```typescript
axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
```

2. **Content Security Policy**
```php
// config/cors.php
return [
    'paths' => ['*'],
    'allowed_methods' => ['*'],
    'allowed_origins' => ['*'],
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => true,
];
```

## Related Documentation

- [Frontend Development](05-frontend.md)
- [Backend Development](06-backend.md)
- [Deployment Guide](08-deployment.md) 
