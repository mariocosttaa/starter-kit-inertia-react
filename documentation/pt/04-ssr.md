# Renderização do Lado do Servidor (SSR)

## Índice
1. [Visão Geral](#visão-geral)
2. [Benefícios](#benefícios)
3. [Configuração](#configuração)
4. [Desenvolvimento](#desenvolvimento)
5. [Produção](#produção)
6. [Solução de Problemas](#solução-de-problemas)
7. [Melhores Práticas](#melhores-práticas)

## Visão Geral

A Renderização do Lado do Servidor (SSR) neste kit inicial é implementada usando as capacidades SSR do Inertia.js. O SSR permite que seus componentes React sejam renderizados no servidor antes de serem enviados ao cliente, proporcionando vários benefícios, incluindo melhor SEO, carregamento inicial mais rápido e melhor experiência do usuário.

## Benefícios

### Otimização de SEO
- Motores de busca podem rastrear seu conteúdo com mais eficiência
- Melhor indexação de conteúdo dinâmico
- Meta tags e compartilhamento em redes sociais aprimorados

### Performance
- Primeira Pintura de Conteúdo (FCP) mais rápida
- Tempo para Interatividade (TTI) reduzido
- Melhores pontuações no Core Web Vitals

### Experiência do Usuário
- Visibilidade imediata do conteúdo
- Redução de mudanças de layout
- Melhor performance percebida

## Configuração

### Pré-requisitos
- Node.js v18 ou superior
- PHP 8.1 ou superior
- Composer
- npm

### Passos de Instalação

1. Construa os assets SSR:
```bash
npm run build:ssr
```

2. Inicie o servidor SSR:
```bash
./vendor/bin/sail artisan inertia:start-ssr
```

### Configuração do Ambiente

Adicione estas variáveis ao seu arquivo `.env`:
```env
INERTIA_SSR_ENABLED=true
INERTIA_SSR_PORT=13714
```

## Configuração

### Configuração do Vite

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

### Ponto de Entrada SSR

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

## Desenvolvimento

### Fluxo de Desenvolvimento

1. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

2. Em um terminal separado, inicie o servidor SSR:
```bash
./vendor/bin/sail artisan inertia:start-ssr
```

### Substituição de Módulos em Tempo Real

O ambiente de desenvolvimento suporta HMR para código do cliente e do servidor:
- Alterações do lado do cliente são refletidas imediatamente
- Alterações do lado do servidor requerem reinício do servidor SSR

## Produção

### Construção para Produção

1. Construa os assets do cliente:
```bash
npm run build
```

2. Construa os assets SSR:
```bash
npm run build:ssr
```

### Considerações de Deploy

1. Certifique-se de que o servidor SSR está rodando:
```bash
./vendor/bin/sail artisan inertia:start-ssr
```

2. Configure seu servidor web para proxy de requisições SSR:
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

## Solução de Problemas

### Problemas Comuns

1. **Servidor SSR Não Inicia**
   - Verifique se a porta 13714 está disponível
   - Verifique se os assets SSR foram construídos
   - Verifique os logs do servidor para erros

2. **Incompatibilidades de Hidratação**
   - Garanta renderização consistente entre servidor e cliente
   - Verifique código específico do navegador
   - Verifique consistência dos dados

3. **Problemas de Performance**
   - Monitore recursos do servidor
   - Verifique vazamentos de memória
   - Otimize renderização de componentes

### Depuração

1. Ative o modo debug no `.env`:
```env
APP_DEBUG=true
INERTIA_SSR_DEBUG=true
```

2. Verifique os logs do servidor:
```bash
./vendor/bin/sail logs
```

## Melhores Práticas

### Desenvolvimento de Componentes

1. **Evite Código Específico do Navegador**
```typescript
// ❌ Ruim
if (window.innerWidth > 768) { ... }

// ✅ Bom
const [isMobile, setIsMobile] = useState(false);
useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
}, []);
```

2. **Trate o Carregamento de Dados**
```typescript
// ❌ Ruim
const data = await fetch('/api/data');

// ✅ Bom
const data = await fetch('/api/data', {
    headers: {
        'X-Requested-With': 'XMLHttpRequest'
    }
});
```

### Otimização de Performance

1. **Code Splitting**
```typescript
const Dashboard = lazy(() => import('./Pages/Dashboard'));
```

2. **Otimização de Assets**
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

### Considerações de Segurança

1. **Proteção CSRF**
```typescript
axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
```

2. **Política de Segurança de Conteúdo**
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

## Documentação Relacionada

- [Desenvolvimento Frontend](05-frontend.md)
- [Desenvolvimento Backend](06-backend.md)
- [Guia de Deploy](08-deploy.md) 
