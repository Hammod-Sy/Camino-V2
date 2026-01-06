import { HTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  interactive?: boolean;
  hover?: boolean;
}

export default function Card({ children, interactive = false, hover = true, className = '', ...props }: CardProps) {
  const baseStyles = 'bg-white rounded-2xl shadow-card transition-all duration-300 overflow-hidden';
  const interactiveStyles = interactive && hover ? 'cursor-pointer hover:-translate-y-1 hover:shadow-card-hover' : '';
  const classes = `${baseStyles} ${interactiveStyles} ${className}`;

  if (interactive && hover) {
    return (
      <motion.div
        className={classes}
        whileHover={{ y: -4 }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

