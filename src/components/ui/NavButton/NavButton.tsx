import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import style from './NavButton.module.scss';

interface Props {
  text: string;
  url: string;
}

export function NavButton({ text, url }: Props) {
  return (
    <NavLink
      to={url}
      className={({ isActive }) =>
        clsx(style.navButton, isActive && style.active)
      }
    >
      {text}
    </NavLink>
  );
}
