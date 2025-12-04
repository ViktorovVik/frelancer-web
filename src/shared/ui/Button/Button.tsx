import './Button.scss';
import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

interface ButtonAsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  as?: 'button';
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
}

interface ButtonAsLink extends AnchorHTMLAttributes<HTMLAnchorElement> {
  as: 'link';
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  target?: '_blank' | '_self';
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button = ({ children, variant = 'primary', className = '', ...props }: ButtonProps) => {
  const buttonClass = `button button--${variant} ${className}`.trim();

  if (props.as === 'link') {
    const { as, href, target, ...linkProps } = props as ButtonAsLink;

    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={buttonClass}
        {...linkProps}
      >
        {children}
      </a>
    );
  }

  const { as = 'button', type = 'button', ...buttonProps } = props as ButtonAsButton;

  return (
    <button
      type={type}
      className={buttonClass}
      {...buttonProps}
    >
      {children}
    </button>
  );
};
