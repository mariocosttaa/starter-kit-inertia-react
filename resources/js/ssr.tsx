import { createInertiaApp } from '@inertiajs/react';
import createServer from '@inertiajs/react/server';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import ReactDOMServer from 'react-dom/server';
import { type RouteName, route } from 'ziggy-js';
import i18n from './shared/lang/i18n';
import { CurrencyProvider } from './shared/context/CurrencyContext';
import { ToastProvider } from './shared/components/ToastProvider';
import { determineCSSByUrl } from './shared/utils/cssLoader';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createServer(async (page: any) => {
    // Initialize i18n with language from URL path
    const urlPath = page.props.ziggy.location;
    const pathSegments = new URL(urlPath).pathname.split('/');
    const locale = pathSegments[1] || 'en';

    await i18n.init({
        lng: locale // Set the language based on URL path
    });

    // Initialize Ziggy routes globally
    if (page.props.ziggy) {
        const Ziggy = {
            ...page.props.ziggy,
            location: new URL(page.props.ziggy.location),
        };

        // Make Ziggy config available globally
        (global as any).Ziggy = Ziggy;

        // Initialize the route function
        (global as any).route = (name: string, params?: Record<string, any>, absolute?: boolean) =>
            route(name, params, absolute, Ziggy);
    }

    // Determine which CSS files to include based on the URL
    const cssFiles = determineCSSByUrl(page.props.ziggy.location);

    // Add CSS links to the head
    const cssLinks = cssFiles.map(css =>
        `<link rel="stylesheet" href="${css}">`
    ).join('\n');

    return createInertiaApp({
        page,
        render: (vnode) => {
            const html = ReactDOMServer.renderToString(vnode);
            return `${cssLinks}\n${html}`;
        },
        title: (title) => `${title} - ${appName}`,
        resolve: (name) => {
            const pages = import.meta.glob('./**/pages/**/*.tsx');
            return resolvePageComponent(`./${name}.tsx`, pages);
        },
        setup: ({ App, props }) => {
            /* eslint-disable */
            // @ts-expect-error
            global.i18n = i18n;
            /* eslint-enable */

            return (
                <CurrencyProvider>
                    <ToastProvider>
                        <App {...props} />
                    </ToastProvider>
                </CurrencyProvider>
            )
        },
    });
});
