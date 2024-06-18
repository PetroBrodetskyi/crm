import React from 'react';
import styles from './not-active-label.module.css';

export interface NotActivelabelProps {
  children: React.ReactNode;
}

export default function NotActiveLabel({ children }: NotActivelabelProps) {
  return <span className={styles.label}>{children}</span>;
}
