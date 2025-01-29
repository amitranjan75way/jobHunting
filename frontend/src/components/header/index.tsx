import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';
import logo from '../../accets/Logo.png';

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.header}>
      <div className={styles.leftSection}>
        <div className={styles.logo}>
          <img src={logo} alt="JobHuntly Logo" className={styles.logoImg} />
        </div>
        <nav className={styles.navLinks}>
          <Link to="/" className={styles.navLink}>Find Jobs</Link>
          <Link to="/" className={styles.navLink}>Browse Companies</Link>
        </nav>
      </div>

      <div className={styles.rightSection}>
        <button className={styles.loginBtn}>Login</button>
        <div className={styles.divider}></div>
        <button className={styles.signupBtn}>Sign Up</button>
      </div>
      </div>
    </header>
  );
};

export default Header;
