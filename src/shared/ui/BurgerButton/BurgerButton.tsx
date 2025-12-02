import './BurgerButton.scss'

interface BurgerButtonProps {
  className?: string;
  onClick: () => void;
  isActive: boolean;
}


export const BurgerButton = ({className = '', onClick, isActive}: BurgerButtonProps) => {
  return (
    <button
      className={`burger-button ${className} 
      ${isActive ? 'burger-button--active' : ''}`}
      aria-label={isActive ? "Close mobile menu" : "Open mobile menu"}
      aria-expanded={isActive}
      title={isActive ? "Close mobile menu" : "Open mobile menu"}
      type="button"
      onClick={onClick}
    >
      <span className="burger-button__line">
      </span>
      <span className="burger-button__line">
      </span>
      <span className="burger-button__line">
      </span>
    </button>
  )
}
