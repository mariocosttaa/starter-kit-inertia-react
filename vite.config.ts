import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { resolve } from 'node:path';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/js/app.tsx',
                'resources/css/tailwind.css',
            ],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react(),
    ],
    esbuild: {
        jsx: 'automatic',
    },
    resolve: {
        alias: {
            'ziggy-js': resolve(__dirname, 'vendor/tightenco/ziggy'),
            '@': resolve(__dirname, 'resources'),
            'pages': resolve(__dirname, 'resources/js'),
        },
    },
    server: {
        hmr: {
            host: 'localhost',
        },
        fs: {
            strict: false,
            allow: ['..'],
        },
        cors: true,
        port: 5174,
        strictPort: true,
        origin: 'http://localhost:5174',
    },
    optimizeDeps: {
        include: ['@inertiajs/react', 'qs'],
        exclude: ['@inertiajs/core'], // Exclude from client-side optimization
    },
    build: {
        rollupOptions: {
            external: ['http', 'process', 'node:cluster', 'node:os'], // Externalize Node.js modules
        },
        commonjsOptions: {
            include: [/node_modules/]
        },
    },
    ssr: {
        noExternal: ['@inertiajs/core', '@inertiajs/react'], // Ensure Inertia is bundled for SSR
    },
});
