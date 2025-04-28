import React from 'react';
import './Footer.css';

/**
 * Footer Component
 * 
 * @param {Object} props - Component props
 * @param {string} props.logoText - Logo text
 * @param {string} props.description - Footer description
 * @param {Array} props.navLinks - Array of navigation link objects with title and links
 * @param {Array} props.socialLinks - Array of social link objects with icon and href
 * @param {string} props.copyrightText - Copyright text
 * @returns {JSX.Element}
 */
const Footer = ({
  logoText = 'APOCALYPSE ACADEMY',
  description = 'A última academia antes do fim. Conteúdo exclusivo sobre escatologia, geopolítica e guerra cultural.',
  navLinks = [],
  socialLinks = [],
  copyrightText = `© ${new Date().getFullYear()} Apocalypse Academy. Todos os direitos reservados.`
}) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div>
            <div className="footer-logo">{logoText}</div>
            <p className="footer-description">{description}</p>
          </div>
          
          {navLinks.map((section, index) => (
            <div key={index}>
              <h3 className="footer-title">{section.title}</h3>
              <ul className="footer-links">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="footer-link">
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          <div>
            <h3 className="footer-title">Conecte-se</h3>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="social-icon">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="copyright">
          {copyrightText}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
