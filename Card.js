import React from 'react';
import Button from '../Button/Button';
import './Card.css';

/**
 * Card Component
 * 
 * @param {Object} props - Component props
 * @param {string} props.variant - Card variant (default, horizontal, featured)
 * @param {string} props.imageSrc - Image source
 * @param {string} props.imageAlt - Image alt text
 * @param {string} props.tag - Card tag text
 * @param {string} props.title - Card title
 * @param {Array} props.meta - Array of meta information strings
 * @param {string} props.description - Card description
 * @param {Object} props.button - Button object with label, variant, and onClick properties
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.className - Additional CSS classes
 * @param {Function} props.onClick - Click handler for the entire card
 * @returns {JSX.Element}
 */
const Card = ({
  variant = 'default',
  imageSrc,
  imageAlt = '',
  tag,
  title,
  meta = [],
  description,
  button,
  children,
  className = '',
  onClick
}) => {
  const cardClasses = [
    'card',
    variant === 'horizontal' ? 'card-horizontal' : '',
    variant === 'featured' ? 'card-featured' : '',
    className
  ].filter(Boolean).join(' ');

  const imageClasses = [
    'card-image',
    variant === 'featured' ? 'card-image-tall' : ''
  ].filter(Boolean).join(' ');

  const handleCardClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <div 
      className={cardClasses} 
      onClick={handleCardClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      {imageSrc && (
        <div className="card-image-container">
          <img 
            src={imageSrc} 
            alt={imageAlt || title} 
            className={imageClasses} 
          />
        </div>
      )}
      
      <div className="card-content">
        {tag && <span className="card-tag">{tag}</span>}
        
        {title && <h3 className="card-title">{title}</h3>}
        
        {meta.length > 0 && (
          <div className="card-meta">
            {meta.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        )}
        
        {description && <p className="card-description">{description}</p>}
        
        {children}
        
        {button && (
          <div className="card-footer">
            <Button 
              variant={button.variant || 'outline'} 
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                if (button.onClick) {
                  button.onClick(e);
                }
              }}
            >
              {button.label}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
