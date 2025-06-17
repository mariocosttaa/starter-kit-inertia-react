
import React from "react";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  htmlFor?: string;
  className?: string;
}

export default function Label({ children, htmlFor, className = "", ...props }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2 ${className}`}
      {...props}
    >
      {children}
    </label>
  );
}