'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
      <Image src="/VED.png" alt='ved'
          width={60} height={60} className="inline-block ml-2" />
      </div>
      <ul className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">Get Notes</Link></li>
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/help">Need Help?</Link></li>
      </ul>
      <div 
        className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ''}`} 
        onClick={toggleMenu}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </nav>
  );
};

export default Navbar;
