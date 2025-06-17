import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import { Link, usePage } from '@inertiajs/react';
import React, { useEffect, useRef } from 'react';

type Method = 'get' | 'post' | 'put' | 'delete';

interface DropDownProps {
    activeValue?: string | React.ReactNode;
    options: Array<{
        value: string;
        label: string;
        icon?: string | React.ReactNode;
        link?: {
            url: string;
            method?: Method;
            spa?: boolean;
        };
        onChange?: (value: string) => void;
    }>;
    onChange?: (value: string) => void;
    classNameAdd?: string;
}

export default function DropDown({ activeValue, options, onChange, classNameAdd }: DropDownProps) {
    const page = usePage();
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (!dropdownRef.current?.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div ref={dropdownRef} className="relative">
            <div
                onClick={toggleDropdown}
                className={`cursor-pointer rounded-lg border-none bg-transparent px-1 py-1 text-sm text-gray-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-dark dark:bg-glass-dark dark:text-gray-300 ${classNameAdd}`}
            >
                <span className="flex items-center">
                    {activeValue} {isDropdownOpen ? <ChevronUpIcon className="ml-1 h-4 w-4" /> : <ChevronDownIcon className="ml-1 h-4 w-4" />}
                </span>
            </div>
            <div
                className={`absolute left-0 top-full mt-2 cursor-pointer rounded-lg bg-white p-4 shadow-lg transition-transform duration-300 dark:bg-glass-dark ${isDropdownOpen ? 'scale-y-100' : 'scale-y-0'}`}
                style={{ transformOrigin: 'top', width: '170px' }} // Ajuste a largura diretamente aqui
            >
                {options.map((option) => {
                    if (option.link) {
                        const Component = option.link.spa ? Link : 'a';
                        return (
                            <Component
                                key={option.value}
                                href={option.link.url}
                                method={option.link.method || 'get'}
                                className="flex w-full items-center px-1 py-1 text-sm text-gray-600 transition-colors duration-200 hover:text-primary dark:text-gray-300 dark:hover:text-accent-dark"
                                onClick={() => {
                                    setIsDropdownOpen(false);
                                    onChange?.(option.value);
                                }}
                            >
                                {option.icon &&
                                    (typeof option.icon === 'string' ? (
                                        <img src={option.icon} alt={option.label} className="mr-2 inline-block" width={20} />
                                    ) : (
                                        <span className="mr-2 inline-block">{option.icon}</span>
                                    ))}
                                <span>{option.label}</span> {/* Removido o truncate */}
                            </Component>
                        );
                    } else {
                        return (
                            <div
                                key={option.value}
                                className="flex w-full items-center px-1 py-1 text-sm text-gray-600 transition-colors duration-200 hover:text-primary dark:text-gray-300 dark:hover:text-accent-dark"
                                onClick={() => {
                                    setIsDropdownOpen(false);
                                    onChange?.(option.value);
                                }}
                            >
                                {option.icon &&
                                    (typeof option.icon === 'string' ? (
                                        <img src={option.icon} alt={option.label} className="mr-2 inline-block" width={20} />
                                    ) : (
                                        <span className="mr-2 inline-block">{option.icon}</span>
                                    ))}
                                <span>{option.label}</span> {/* Removido o truncate */}
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
}
