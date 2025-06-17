
import { type HTMLAttributes } from 'react';

export default function InputError({ message, className = 'text-danger d-block', ...props }: HTMLAttributes<HTMLParagraphElement> & { message?: string }) {
    return message ? (
        <p {...props} className={className}>
            {message}
        </p>
    ) : null;
}