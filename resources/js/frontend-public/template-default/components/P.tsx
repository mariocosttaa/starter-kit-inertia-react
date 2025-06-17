
export default function P({ children, className = '', ...props }: { children: React.ReactNode, className?: string }) {
  return (
    <p
      className={`text-gray-700 dark:text-gray-300 ${className}`}
      {...props}
    >
      {children}
    </p>
  );
}
