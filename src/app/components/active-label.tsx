import React from 'react';
import styles from './active-label.module.css';

export interface ActivelabelProps {
  children: React.ReactNode;
}

export default function ActiveLabel({ children }: ActivelabelProps) {
  return <span className={styles.label}>{children}</span>;
}
