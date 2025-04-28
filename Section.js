import React from 'react';
import './Section.css';

/**
 * Section Component
 * 
 * @param {Object} props - Component props
 * @param {string} props.variant - Section variant (default, dark, gradient, accent)
 * @param {string} props.title - Section title
 * @param {string} props.subtitle - Section subtitle
 * @param {boolean} props.divider - Whether to show a divider under the title
 * @param {string} props.backgroundImage - Background image URL for overlay variant
 * @param {React.ReactNode} props.children - Section content
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.style - Additional inline styles
 * @returns {JSX.Element}
 */
const Section = ({
  variant = 'default',
  title,
  subtitle,
  divider = true,
  backgroundImage,
  children,
  className = '',
  style = {}
}) => {
  const sectionClasses = [
    'section',
    variant === 'dark' ? 'section-dark' : '',
    variant === 'gradient' ? 'section-gradient' : '',
    variant === 'accent' ? 'section-accent' : '',
    backgroundImage ? 'section-overlay' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <section className={sectionClasses} style={style}>
      {backgroundImage && (
        <img 
          src={backgroundImage} 
          alt="Section background" 
          className="section-bg-image" 
        />
      )}
      
      <div className="container">
        {(title || subtitle) && (
          <div className="section-header">
            {title && <h2 className="section-title">{title}</h2>}
            {divider && <div className="section-divider"></div>}
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </div>
        )}
        
        {children}
      </div>
    </section>
  );
};

export default Section;
