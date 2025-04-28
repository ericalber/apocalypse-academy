import './Button.css';

/**
 * Button Component
 * 
 * @param {Object} props - Component props
 * @param {string} props.variant - Button variant (primary, secondary, outline, dark-outline, danger)
 * @param {string} props.size - Button size (sm, md, lg)
 * @param {boolean} props.block - Whether the button should be full width
 * @param {boolean} props.disabled - Whether the button is disabled
 * @param {string} props.type - Button type (button, submit, reset)
 * @param {Function} props.onClick - Click handler
 * @param {React.ReactNode} props.children - Button content
 * @param {string} props.className - Additional CSS classes
 * @param {React.ReactNode} props.icon - Icon to display
 * @param {boolean} props.iconOnly - Whether the button only contains an icon
 * @param {boolean} props.responsive - Whether the button should be responsive
 * @returns {JSX.Element}
 */
const Button = ({
  variant = 'primary',
  size = '',
  block = false,
  disabled = false,
  type = 'button',
  onClick,
  children,
  className = '',
  icon,
  iconOnly = false,
  responsive = false,
  ...rest
}) => {
  const buttonClasses = [
    'btn',
    `btn-${variant}`,
    size ? `btn-${size}` : '',
    block ? 'btn-block' : '',
    icon && !iconOnly ? 'btn-icon' : '',
    iconOnly ? 'btn-icon-only' : '',
    responsive ? 'btn-responsive' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      className={buttonClasses}
      type={type}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {icon && icon}
      {!iconOnly && children}
    </button>
  );
};

export default Button;
