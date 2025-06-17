import useDeviceDetect from '@/js/shared/hooks/useDeviceDetect';

export default function Row({ children, quantity }: { children: React.ReactNode, quantity: number }) {
    const { isMobile, isTablet, isDesktop } = useDeviceDetect();

    return (
        <div className={`grid grid-cols-1 gap-4 ${isTablet ? `sm:grid-cols-2` : ''} ${isDesktop ? `lg:grid-cols-${quantity}` : ''}`} style={{ gridTemplateColumns: `repeat(${isMobile ? 1 : isTablet ? 2 : quantity}, minmax(0, 1fr))` }}>
            {children}
        </div>
    );
}

