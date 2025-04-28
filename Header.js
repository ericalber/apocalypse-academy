import { useState, useEffect } from 'react';
import Button from '../Button/Button';
import './Header.css';

/**
 * Header Component
 * 
 * @param {Object} props - Component props
 * @param {Array} props.navItems - Navigation items array with label and href properties
 * @param {string} props.activePage - Current active page
 * @param {string} props.logoSrc - Logo image source
 * @param {boolean} props.transparent - Whether the header should be transparent initially
 * @returns {JSX.Element}
 */
const Header = ({
  navItems = [],
  activePage = '',
  logoSrc = '',
  transparent = false
}) => {
  const [scrolled, setScrolled] = useState(!transparent);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!transparent) return;

    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled, transparent]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-content">
        <div className="logo">
          {logoSrc && <img src={logoSrc} alt="Apocalypse Academy" />}
          <div className="logo-text">APOCALYPSE ACADEMY</div>
        </div>
        
        <nav className="nav-desktop">
          <ul>
            {navItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href} 
                  className={`nav-link ${activePage === item.href ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <Button variant="primary">Entrar</Button>
        
        <div className="nav-mobile">
          <div 
            className={`hamburger ${mobileMenuOpen ? 'open' : ''}`} 
            onClick={toggleMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          
          <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
            <ul>
              {navItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className={`nav-link ${activePage === item.href ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button variant="primary" responsive>Entrar</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
