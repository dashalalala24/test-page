import { Link } from 'react-router-dom';
import { Caption } from '../../ui/Caption/Caption';
import styles from './Lead.module.css';
import pic from '../../images/lead_pic.png';

export const Lead = () => {
  return (
    <section className={styles.root}>
      <div className={styles.content}>
        <div className={styles.info}>
          <nav className={styles.nav}>
            <ul className={styles.socials}>
              <li>
                <a
                  href='https://facebook.com/'
                  target='blank'
                  className={styles.social}>
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href='https://www.instagram.com/'
                  target='blank'
                  className={styles.social}>
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href='https://www.twitch.tv/'
                  target='blank'
                  className={styles.social}>
                  Twitch
                </a>
              </li>
            </ul>
          </nav>
          <Caption />
          <h1 className={styles.title}>Unleash the next generation of gaming</h1>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec donec in morbi
            pulvinar. Enim non pulvinar neque.
          </p>
          <div className={styles.links}>
            <Link
              to='/'
              className={`${styles.link} ${styles.link_color_blue}`}>
              Explore more
            </Link>
            <Link
              to='/'
              className={styles.link}>
              View our team
            </Link>
          </div>
        </div>
        <img
          src={pic}
          alt='Game characters in combat stances'
          className={styles.pic}
        />
      </div>
    </section>
  );
};
