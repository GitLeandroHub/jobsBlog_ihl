import React from 'react';
import { LocalizedLink } from 'gatsby-theme-i18n';

interface ButtonProps {
  children: React.ReactNode;
  link?: string;
  extraClass?: string;
  isExternal?: boolean;
}

const buttonStyles = 'bg-parityPink font-title text-lg text-white font-semibold opacity-90 tracking-wider px-12 py-2 rounded-sm focus:outline-none uppercase';
const hoverStyles = 'transition-transform transform hover:-translate-y-0.5';
const focusStyles = 'focus:bg-buttonRed';
const noUnderline = 'no-underline';

const Button: React.FC<ButtonProps> = ({ children, link, extraClass, isExternal = false }) => {
  // Apply noUnderline class or inline style to remove text-decoration
  const anchorClass = `${buttonStyles} ${hoverStyles} ${focusStyles} ${extraClass} ${noUnderline} w-max mx-auto`;

  if (isExternal && link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className={anchorClass} style={{ textDecoration: 'none' }}>
        {children}
      </a>
    );
  }

  return (
    <LocalizedLink to={link || '#'} className={`w-max mx-auto ${noUnderline}`}>
      <button type="button" className={`${buttonStyles} ${hoverStyles} ${focusStyles} ${extraClass}`}>
        {children}
      </button>
    </LocalizedLink>
  );
};

export default Button;