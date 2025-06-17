import { usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

const isBrowser = typeof window !== 'undefined';

export function useFrontend(url?: string): 'public' | 'private' | 'portal' | 'landing' {
    const { url: inertiaUrl } = isBrowser ? usePage() : { url: '' };
    const [frontend, setFrontend] = useState<'public' | 'private' | 'portal' | 'landing'>('public');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (!isBrowser) return;

        let pathSegments;
        try {
            pathSegments = new URL(url || inertiaUrl).pathname.split('/');
        } catch (error) {
            pathSegments = (url || inertiaUrl).split('/');
        }

        if (pathSegments[2] === 'portal') {
            setFrontend('portal');
        } else if (pathSegments[2] === 'business') {
            setFrontend('landing');
        } else if (pathSegments[2] === 'dashboard') {
            setFrontend('private');
        } else {
            setFrontend('public');
        }
    }, [url, inertiaUrl]);

    if (!mounted) return 'public';
    return frontend;
}

