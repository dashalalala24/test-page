import { Link } from 'react-router-dom';

import styles from './Footer.module.css';
import { Logo } from '../../ui/Logo/Logo';

export const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className={styles.container}>
        <div className={styles.column}>
          <Logo />
          <p className={styles.text}>
            Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc quam ac sed turpis
            volutpat. Cursus sed massa non .
          </p>
        </div>
        <div className={styles.links}>
          <div className={styles.column}>
            <h3 className={styles.title}>Menu Items</h3>
            <nav>
              <ul className={styles.items}>
                <li className={styles.item}>
                  <Link
                    to='/'
                    className={styles.link}>
                    About
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link
                    to='/'
                    className={styles.link}>
                    Blog
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link
                    to='/'
                    className={styles.link}>
                    Shop
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link
                    to='/'
                    className={styles.link}>
                    Contact us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.column}>
            <h3 className={styles.title}>Other Pages</h3>
            <nav>
              <ul className={styles.items}>
                <li className={styles.item}>
                  <Link
                    to='/'
                    className={styles.link}>
                    Styleguide
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link
                    to='/'
                    className={styles.link}>
                    Changelog
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link
                    to='/'
                    className={styles.link}>
                    licenses
                  </Link>
                </li>
                <li className={styles.item}>
                  <Link
                    to='/'
                    className={styles.link}>
                    Team
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
