import { cssConfig } from '../config/cssConfig';
import { useFrontend } from '../hooks/useFrontend';

export function determineCSSByUrl(url: string): string[] {
    const frontend =  useFrontend( url );
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

