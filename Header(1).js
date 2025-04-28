import styles from './Header.module.scss';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '../Button/Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.logoText}>Apocalypse Academy</span>
          </Link>
        </div>

        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/documentarios">
                <span className={styles.navLink}>Documentários</span>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/cursos">
                <span className={styles.navLink}>Cursos</span>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/revistas">
                <span className={styles.navLink}>Revistas</span>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/devocionais">
                <span className={styles.navLink}>Devocionais</span>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/comunidade">
                <span className={styles.navLink}>Comunidade</span>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/blog">
                <span className={styles.navLink}>Arquivos Secretos</span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.actions}>
          <Button variant="outline" size="small">Entrar</Button>
          <Button variant="primary" size="small">Assinar</Button>
          <button 
            className={`${styles.mobileMenuButton} ${isMobileMenuOpen ? styles.open : ''}`} 
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
