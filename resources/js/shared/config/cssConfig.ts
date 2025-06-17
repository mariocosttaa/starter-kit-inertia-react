export interface CSSConfig {
    [key: string]: string[];
}

export const cssConfig: CSSConfig = {
    'public': [
        '/assets/css/tailwind.css',
    ],
};

export type LayoutType = keyof typeof cssConfig;
