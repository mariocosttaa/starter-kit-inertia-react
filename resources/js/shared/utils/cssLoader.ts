import { cssConfig } from '../config/cssConfig';

export function determineCSSByUrl(url: string): string[] {
    let pathSegments;
    try {
        pathSegments = new URL(url).pathname.split('/');
    } catch (error) {
        pathSegments = url.split('/');
    }

    let frontend: 'public' | 'private' | 'portal' | 'landing' = 'public';

    if (pathSegments[2] === 'portal') {
        frontend = 'portal';
    } else if (pathSegments[2] === 'business') {
        frontend = 'landing';
    } else if (pathSegments[2] === 'dashboard') {
        frontend = 'private';
    }

    return cssConfig[frontend] || [];
}

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

