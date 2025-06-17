/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{html,js,jsx,ts,tsx}",
        "./resources/js/**/*.{js,jsx,ts,tsx}",
        "./resources/js/shared/**/*.{js,jsx,ts,tsx}",
        "./resources/css/**/*.css",
        "./public/assets/css/**/*.css",
        "./index.html"
    ],
    future: {
        hoverOnlyWhenSupported: true,
        respectDefaultRingColorOpacity: true,
        disableColorOpacityUtilitiesByDefault: true,
        relativeContentPathsByDefault: true,
    },
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'primary': '#3b82f6',
                'primary-dark': '#2563eb',
                'accent-dark': '#3b82f6',
                'accent-dark-hover': '#2563eb',
                'dark-bg': '#0a0a0a',
                'dark-bg-secondary': '#1c2526',
                'dark-card': 'rgba(10, 10, 10, 0.85)',
                'dark-card-hover': 'rgba(10, 10, 10, 0.95)',
                'dark-button': '#334155',
                'dark-button-hover': '#1e293b',
                'glass': 'rgba(255, 255, 255, 0.15)',
                'glass-dark': 'rgba(10, 10, 10, 0.25)',
                'bg-light': '#f3f4f6',
            },
        },
    },
    plugins: [],
    corePlugins: {
        preflight: true,
    },
    experimental: {
        optimizeUniversalDefaults: true,
        cssVariables: {
            // Enable CSS variable support
            disableColorOpacityUtilitiesByDefault: true,
        },
    },
}