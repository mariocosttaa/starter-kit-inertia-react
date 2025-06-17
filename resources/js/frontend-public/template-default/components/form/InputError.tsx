import { type HTMLAttributes } from 'react';

export default function InputError({ message, className = 'text-red-500 block', ...props }: HTMLAttributes<HTMLParagraphElement> & { message?: string }) {
    return message ? (
        <p {...props} className={className}>
            {message}
        </p>
    ) : null;
}
