/**
 * CSS Configuration for different frontend types
 *
 * How to add a new frontend:
 * 1. Add a new key to the cssConfig object
 * 2. Add the corresponding CSS files array
 * 3. The key name will be used as the frontend type
 *
 * Example:
 * {
 *   'public': ['/assets/css/public.css'],
 *   'admin': ['/assets/css/admin.css']
 * }
 */
export interface CSSConfig {
    [key: string]: string[];
}

export const cssConfig: CSSConfig = {
    'public': [
        '/assets/css/tailwind.css',
    ],
};

/**
 * Type for frontend layout types
 * Automatically generated from cssConfig keys
 * Add new frontend types by adding them to cssConfig
 */
export type LayoutType = keyof typeof cssConfig;
