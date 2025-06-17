export interface CardProps {
  children: React.ReactNode;
  className?: string;
  classNameAdd?: string;
  animate?: boolean;
}

export default function Card({
  children,
  className = '',
  classNameAdd,
  animate = true,
  ...props
}: CardProps) {
  // Animate classes variable, null if animate is false
  const animateClasses = animate ? 'hover:animate-hover-lift animate-scale-in' : '';

  const classes = `bg-white dark:bg-dark-card bg-opacity-95 dark:bg-opacity-85 rounded-xl p-4 shadow-soft dark:shadow-soft-dark transition-all duration-300 ${animateClasses} ${className} ${classNameAdd ?? ''}`.trim();

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
