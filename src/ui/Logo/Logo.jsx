import { Link } from 'react-router-dom';

import styles from './Logo.module.css';

export const Logo = () => {
  return (
    <Link
      to='/'
      className={styles.logo}
      aria-label='go to main page'></Link>
  );
};
