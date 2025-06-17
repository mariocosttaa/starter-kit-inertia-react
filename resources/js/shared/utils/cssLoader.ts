import { cssConfig } from '../config/cssConfig';

/**
 * Determines which CSS files to load based on the URL path
 *
 * How to add frontend detection:
 * 1. Add your frontend type to cssConfig.ts
 * 2. Add your URL path detection logic here
 *
 * Example:
 * if (pathSegments[2] === 'admin') {
 *     frontend = 'admin';
 * }
 *
 * @param url - The URL to check for frontend type
 * @returns Array of CSS file paths to load
 */
export function determineCSSByUrl(url: string): string[] {
    let pathSegments;
    try {
        pathSegments = new URL(url).pathname.split('/');
    } catch (error) {
        pathSegments = url.split('/');
    }

    // Default frontend is public
    //let frontend: 'public' | 'private' | 'portal' | 'landing' = 'public';

    const frontend = 'public';

    // Example of how to check path segments for different frontend types:
    // if (pathSegments[2] === 'portal') {
    //     frontend = 'portal';
    // } else if (pathSegments[2] === 'business') {
    //     frontend = 'landing';
    // } else if (pathSegments[2] === 'dashboard') {
    //     frontend = 'private';
    // }

    return cssConfig[frontend] || [];
}

/**
 * Injects CSS files into the document head
 * Only runs in browser environment
 *
 * Usage:
 * const cssFiles = determineCSSByUrl(window.location.href);
 * injectCSS(cssFiles);
 *
 * @param cssFiles - Array of CSS file paths to inject
 */
export function injectCSS(cssFiles: string[]): void {
    if (typeof document === 'undefined') return;

    cssFiles.forEach(cssFile => {
        if (!document.querySelector(`link[href="${cssFile}"]`)) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = cssFile;
            document.head.appendChild(link);
        }
    });
}
