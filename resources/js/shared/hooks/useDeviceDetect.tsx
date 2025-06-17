import { useEffect, useState } from "react";

interface useDeviceDetectReturnProp {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
    isDesktopOrTablet: boolean;
    isMobileOrTablet: boolean;
}

const isBrowser = typeof window !== 'undefined';

export default function useDeviceDetect(): useDeviceDetectReturnProp {
    const [actualWindownWidth, setActualWindownWidth] = useState(isBrowser ? window.innerWidth : 1024);

    useEffect(() => {
        if (!isBrowser) return;

        const handleResize = () => setActualWindownWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    const isMobile = actualWindownWidth < 768;
    const isTablet = actualWindownWidth >= 768 && actualWindownWidth < 1024;
    const isDesktop = actualWindownWidth >= 1024;
    const isDesktopOrTablet = isTablet || isDesktop;
    const isMobileOrTablet = isMobile || isTablet;

    return {
        isMobile,
        isTablet,
        isDesktop,
        isDesktopOrTablet,
        isMobileOrTablet
    }
}