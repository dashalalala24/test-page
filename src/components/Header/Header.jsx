import { useState } from 'react';

import styles from './Header.module.css';

import { Link } from 'react-router-dom';
import { Logo } from '../../ui/Logo/Logo';
import { Cart } from '../../ui/Cart/Cart';

export const Header = () => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  const handleClick = () => {
    setIsBurgerActive(!isBurgerActive);
  };

  return (
    <header className={isBurgerActive ? `${styles.root} ${styles.root_active}` : `${styles.root}`}>
      <Logo />
      <nav className={isBurgerActive ? `${styles.nav} ${styles.nav_active}` : `${styles.nav}`}>
        <ul
          className={isBurgerActive ? `${styles.links} ${styles.links_active}` : `${styles.links}`}>
          <li>
            <Link
              to={'/'}
              className={`${styles.link} ${styles.link_active}`}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to={'/'}
              className={styles.link}>
              About
            </Link>
          </li>
          <li>
            <Link
              to={'/'}
              className={styles.link}>
              Team
            </Link>
          </li>
          <li>
            <Link
              to={'/'}
              className={styles.link}>
              Shop
            </Link>
          </li>
          <li>
            <Link
              to={'/'}
              className={styles.link}>
              Pages
            </Link>
          </li>
        </ul>
      </nav>
      <Cart />
      <Link
        to={'/'}
        className={`${styles.link} ${styles.link_type_contact}`}>
        Contact us
      </Link>
      <div
        className={isBurgerActive ? `${styles.button} ${styles.button_active}` : `${styles.button}`}
        onClick={handleClick}>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </div>
    </header>
  );
};
