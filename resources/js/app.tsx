import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import './shared/lang/i18n';
import { CurrencyProvider } from './shared/context/CurrencyContext';
import { ToastProvider } from './shared/components/ToastProvider';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./${name}.tsx`, import.meta.glob('./**/pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        const app = (
            <App {...props}>
                {({ Component, key, props }) => (
                    <CurrencyProvider>
                        <ToastProvider>
                            <Component key={key} {...props} />
                        </ToastProvider>
                    </CurrencyProvider>
                )}
            </App>
        );

        root.render(app);
    },
    progress: {
        color: '#4B5563',
    },
});

