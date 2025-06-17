import React from 'react';
import Footer from './parts/PublicFooter';
import Navbar from './parts/PublicNavbar';

import LoadingOverlay from '@/js/shared/components/LoadingOverlay';
import { useCssManager } from '@/js/shared/hooks/useCssManager';
import { Head } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

interface PortalLayoutProps {
    pageTittle?: string;
    activePage?: string | null;
    children: React.ReactNode;
    tittle?: string;
    subtitle?: string | null;
    breadcrumbs?: Array<{ label: string; href: string }>;
}

export default function PortalLayout({ pageTittle, activePage, children, tittle, subtitle, breadcrumbs }: PortalLayoutProps) {
    const { t: __ } = useTranslation(['static-text']);
    const { isLoading } = useCssManager('public');

    return (
        <>
            <LoadingOverlay isVisible={isLoading} />
            <Head title={pageTittle} />
              <Navbar active={activePage ?? ''} />
              {children}
              <Footer />
        </>
    );
}
