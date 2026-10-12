import { NavButton } from '../ui/NavButton/NavButton';
import { NAVIGATE_LINKS } from './navigate.data';
import styles from './NavMenu.module.scss';

interface Props {}

export function NavMenu({}: Props) {
  return (
    <div className={styles.navMenu}>
      {NAVIGATE_LINKS.map((nav) => (
        <NavButton
          key={nav.text}
          url={nav.href}
          text={nav.text}
        />
      ))}
    </div>
  );
}
