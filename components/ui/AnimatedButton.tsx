'use client';

import { cn } from '@/lib/utils';
import styles from './AnimatedButton.module.css';

interface AnimatedButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const AnimatedButton = ({
  variant = 'primary',
  children,
  onClick,
  className,
}: AnimatedButtonProps) => {
  const variantClass =
    variant === 'primary' ? styles.typePrimary : styles.typeSecondary;

  return (
    <div className={cn(styles.animatedButtonWrapper, className)}>
      <button
        onClick={onClick}
        className={cn(styles.animatedButton, variantClass)}
      >
        <div className={styles.buttonLine} />
        <div className={styles.buttonLine} />
        <span className={styles.buttonText}>{children}</span>
        <div className={styles.buttonDrow1} />
        <div className={styles.buttonDrow2} />
      </button>
    </div>
  );
};
