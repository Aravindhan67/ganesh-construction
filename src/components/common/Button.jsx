import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './Button.module.css';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Helper to merge classnames
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Button = ({ children, to, onClick, variant = 'primary', className, withArrow = false, ...props }) => {
  const baseClasses = styles.button;
  const variantClasses = styles[variant] || styles.primary;
  
  const combinedClasses = cn(baseClasses, variantClasses, className);

  const innerContent = (
    <span className={styles.inner}>
      <span className={styles.text}>{children}</span>
      {withArrow && <ArrowRight className={styles.icon} size={16} />}
    </span>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {innerContent}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses} {...props}>
      {innerContent}
    </button>
  );
};

export default Button;
