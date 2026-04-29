import React from 'react';
import styles from './Navbar.module.scss';
import type { VerticalData } from '../data/people';

interface NavbarProps {
  vertical?: VerticalData | null;
  currentView?: 'selection' | 'details';
}

const Navbar: React.FC<NavbarProps> = ({ vertical, currentView }) => {
  return (
    <header className={`${styles.header} ${currentView === 'selection' ? styles.isTransparent : ''}`}>
      <div className={styles.logo}>DVM</div>
      {vertical && (
        <div className={styles.navRight}>
          <div className={styles.categoryDropdown}>
            <img src={vertical.icon} alt={vertical.label} />
            <span>{vertical.label}</span>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="white"><path d="M7 10l5 5 5-5z"/></svg>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
