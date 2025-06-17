import { useEffect, useState } from 'react';
import { cssConfig, type LayoutType } from '../config/cssConfig';

const MIN_LOADING_TIME = 0; // 3 segundos, ajustável

function removeOtherLayoutStyles(currentLayout: LayoutType) {
    if (typeof document === 'undefined') return;

    const otherCssFiles = (Object.entries(cssConfig) as [LayoutType, string[]][])
        .filter(([layout]) => layout !== currentLayout)
        .flatMap(([_, files]) => files);

    otherCssFiles.forEach(cssFile => {
        const existingLink = document.querySelector(`link[href="${cssFile}"]`);
        if (existingLink) {
            existingLink.remove();
        }
    });
}

function addLayoutStyles(currentLayout: LayoutType, onLoad: () => void) {
    if (typeof document === 'undefined') return;

    const cssFiles = cssConfig[currentLayout] || [];
    let loadedCount = 0;
    const totalFiles = cssFiles.length;

    if (totalFiles === 0) {
        onLoad();
        return;
    }

    cssFiles.forEach(cssFile => {
        if (!document.querySelector(`link[href="${cssFile}"]`)) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = cssFile;
            link.onload = () => {
                loadedCount++;
                if (loadedCount === totalFiles) {
                    onLoad();
                }
            };
            link.onerror = () => {
                loadedCount++; // Continuar mesmo em caso de erro
                if (loadedCount === totalFiles) {
                    onLoad();
                }
            };
            document.head.appendChild(link);
        } else {
            loadedCount++;
            if (loadedCount === totalFiles) {
                onLoad();
            }
        }
    });
}

function getCurrentLayoutStyles(): string[] {
    if (typeof document === 'undefined') return [];

    const links = document.querySelectorAll('link[rel="stylesheet"]');
    return Array.from(links)
        .map(link => link.getAttribute('href'))
        .filter((href): href is string => href !== null);
}

function needsCSSChange(currentLayout: LayoutType): boolean {
    const currentStyles = getCurrentLayoutStyles();
    const targetStyles = cssConfig[currentLayout] || [];

    const hasExtraStyles = currentStyles.some(style =>
        !targetStyles.includes(style) &&
        Object.values(cssConfig).flat().includes(style)
    );

    const hasMissingStyles = targetStyles.some(style => !currentStyles.includes(style));

    return hasExtraStyles || hasMissingStyles;
}

export function useCssManager(layout: LayoutType) {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        if (typeof document === 'undefined') return;

        const switchStyles = async () => {
            const needsChange = needsCSSChange(layout);
            if (!needsChange) {
                return;
            }

            const startTime = Date.now();
            setIsLoading(true);

            // Adicionar novos estilos e esperar que sejam carregados
            await new Promise<void>(resolve => {
                addLayoutStyles(layout, () => {
                    requestAnimationFrame(() => {
                        removeOtherLayoutStyles(layout);
                        setTimeout(resolve, 200);
                    });
                });
            });

            // Garantir tempo mínimo de 3 segundos
            const elapsedTime = Date.now() - startTime;
            const remainingTime = MIN_LOADING_TIME - elapsedTime;
            if (remainingTime > 0) {
                await new Promise(resolve => setTimeout(resolve, remainingTime));
            }

            requestAnimationFrame(() => {
                setIsLoading(false);
            });
        };

        switchStyles();

        return () => {
            if (needsCSSChange(layout)) {
                removeOtherLayoutStyles(layout);
            }
        };
    }, [layout]);

    return { isLoading };
}
