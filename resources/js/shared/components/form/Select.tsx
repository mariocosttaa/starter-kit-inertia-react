import { useTranslation } from 'react-i18next';
import SelectReact from 'react-select';

interface SelectComponentProps {
    options: Array<{ value: string | number; label: string }>;
    defaultValue?: any;
    className?: string;
    placeholder?: string;
    required?: boolean;
    onChange?: (value: any) => void;
    onFocus?: () => void;
}

export default function Select({ options, defaultValue, className, placeholder, required, onChange, onFocus }: SelectComponentProps) {
    const { t: __ } = useTranslation(['static-text']);

    return (
        <SelectReact
            options={options}
            defaultValue={defaultValue}
            className={className}
            placeholder={placeholder || __('Select')}
            isClearable={!required}
            onChange={onChange}
            onFocus={onFocus}
        />
    );
}
