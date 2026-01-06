import { HTMLAttributes, ReactNode } from 'react';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  background?: 'default' | 'light' | 'gradient';
}

export default function Section({ 
  children, 
  spacing = 'lg', 
  background = 'default',
  className = '', 
  ...props 
}: SectionProps) {
  const spacingClasses = {
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-24',
    xl: 'py-24 md:py-32',
  };

  const backgroundClasses = {
    default: '',
    light: 'bg-white/50',
    gradient: 'bg-gradient-to-br from-brand-50/50 to-white',
  };

  const classes = `${spacingClasses[spacing]} ${backgroundClasses[background]} ${className}`;

  return (
    <section className={classes} {...props}>
      {children}
    </section>
  );
}

