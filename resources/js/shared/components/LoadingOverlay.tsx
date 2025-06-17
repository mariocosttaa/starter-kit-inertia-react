import React, { useEffect, useState } from 'react';
import useDarkMode from '@/js/shared/hooks/useDarkMode';
import { useFrontend } from '../hooks/useFrontend';

interface LoadingOverlayProps {
    isVisible: boolean;
}

const isBrowser = typeof window !== 'undefined';

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ isVisible }) => {
    const [isDarkMode, toggleDarkMode] = useDarkMode();
    const frontend = useFrontend();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Don't render anything during SSR
    if (!isBrowser || !mounted) return null;
    if (!isVisible) return null;

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: isDarkMode && frontend === 'portal'
                    ? 'rgb(22, 26, 27)'
                    : 'rgb(255, 255, 255)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 9999,
                transition: 'opacity 0.5s ease-in-out',
                opacity: isVisible ? 1 : 0,
                pointerEvents: isVisible ? 'auto' : 'none',
            }}
            className="dark:bg-gray-900"
        >
            <div
                style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgb(45, 154, 226), #4a00e0)',
                    animation: 'pulseRotate 2s infinite ease-in-out',
                    boxShadow: '0 0 30px rgba(45, 160, 226, 0.5)',
                }}
            />
            <p
                style={{
                    marginTop: '20px',
                    fontSize: '18px',
                    fontWeight: '500',
                    color: isDarkMode && frontend === 'portal'
                        ? 'rgb(255, 255, 255)'
                        : 'rgb(0, 0, 0)',
                    animation: 'fadeIn 1s ease-in',
                }}
                className="dark:text-white"
            >
                Carregando...
            </p>
            <style>
                {`
                    @keyframes pulseRotate {
                        0% { transform: rotate(0deg) scale(1); opacity: 0.8; }
                        50% { transform: rotate(180deg) scale(1.2); opacity: 1; }
                        100% { transform: rotate(360deg) scale(1); opacity: 0.8; }
                    }
                    @keyframes fadeIn {
                        0% { opacity: 0; }
                        100% { opacity: 1; }
                    }
                `}
            </style>
        </div>
    );
};

// Ensure React recognizes this as a component
LoadingOverlay.displayName = 'LoadingOverlay';

export default LoadingOverlay;

