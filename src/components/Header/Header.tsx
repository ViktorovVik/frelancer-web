import './Header.scss';
import { useState, useEffect } from "react";
import { BurgerButton } from "../../shared/ui/BurgerButton";
import { navLinks } from "../../constants/navLinks";

export const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      <div className="header__inner container">
        <a
          className="header__logo logo"
          href="/"
        >
          <img
            src="/logo/logo.svg"
            alt="logo - Kelvin"
            width="115"
            height="35"
          />
        </a>
          <nav className={`nav ${isMenuOpen ? 'nav--open' : ''}`}>
            <ul className="nav__list">
              {navLinks.map((item) => (
                <li key={item.label} className="nav__item">
                  <a
                    href={item.id}
                    className="nav__link"
                    onClick={toggleMenu}
                  >{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        <BurgerButton
          className="visible-mobile"
          onClick={toggleMenu}
          isActive={isMenuOpen}
        />
      </div>
    </header>
  )
}