import React from 'react';
import Button from '../Button/Button';
import './Hero.css';

/**
 * Hero Section Component
 * 
 * @param {Object} props - Component props
 * @param {string} props.subtitle - Hero subtitle
 * @param {string} props.title - Hero title
 * @param {string} props.description - Hero description
 * @param {string} props.quote - Optional quote to display
 * @param {string} props.videoSrc - Background video source
 * @param {string} props.imageSrc - Background image source (fallback for video)
 * @param {Array} props.buttons - Array of button objects with label, variant, and onClick properties
 * @param {string} props.align - Content alignment (left, center, right)
 * @returns {JSX.Element}
 */
const Hero = ({
  subtitle,
  title,
  description,
  quote,
  videoSrc,
  imageSrc,
  buttons = [],
  align = 'left'
}) => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      
      {videoSrc && (
        <video 
          className="hero-video" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
          {imageSrc && <img src={imageSrc} alt={title} className="hero-image" />}
        </video>
      )}
      
      {!videoSrc && imageSrc && (
        <img src={imageSrc} alt={title} className="hero-image" />
      )}
      
      <div className="container">
        <div 
          className="hero-content"
          style={{ 
            textAlign: align,
            marginLeft: align === 'center' ? 'auto' : align === 'right' ? 'auto' : '0',
            marginRight: align === 'center' ? 'auto' : align === 'left' ? 'auto' : '0'
          }}
        >
          {subtitle && <p className="hero-subtitle">{subtitle}</p>}
          {title && <h1 className="hero-title">{title}</h1>}
          {description && <p className="hero-description">{description}</p>}
          {quote && <blockquote className="hero-quote">{quote}</blockquote>}
          
          {buttons.length > 0 && (
            <div 
              className="hero-buttons"
              style={{ 
                justifyContent: align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start'
              }}
            >
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant || 'primary'}
                  onClick={button.onClick}
                  responsive
                >
                  {button.label}
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
