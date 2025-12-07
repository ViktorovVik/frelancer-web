import './Socials.scss';
import { SOCIALS_DATA } from "../../../constants/socials.ts";

interface SocialsProps {
  className?: string;
}

export const Socials = ({className = ''}: SocialsProps) => {
  return (
    <ul className={`socials ${className}`.trim()} aria-label="Social media links">
      {SOCIALS_DATA.map(({id, name, Icon, href}) => (
        <li key={id} className="socials__item">
        <a
          href={href}
          className="socials__link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit my ${name}`}
          title={name}
          >
          <Icon className="socials__icon" aria-hidden="true" />
        </a>
        </li>
      ))}
    </ul>
  )
}