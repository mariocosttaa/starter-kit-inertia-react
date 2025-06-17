import { usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export function useFrontend(url?: string): 'public' | 'private' | 'portal' | 'landing' {
    const { url: inertiaUrl } = usePage();
    const [frontend, setFrontend] = useState<'public' | 'private' | 'portal' | 'landing'>('public');

    useEffect(() => {
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

    return frontend;
}

