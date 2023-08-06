import styles from './Character.module.css';
import { Caption } from '../../ui/Caption/Caption';

import main_pic from '../../images/character_main_pic.png';
import pic_1 from '../../images/character_pic_1.png';
import pic_2 from '../../images/character_pic_2.png';
import pic_3 from '../../images/character_pic_3.png';

export const Character = () => {
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <img
          className={styles.mainpic}
          alt='Fortnite character is being epic'
          src={main_pic}
        />
        <div className={styles.text}>
          <Caption />
          <h2 className={styles.title}>Customize your own character</h2>
          <p className={styles.paragraph}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae.
          </p>
          <div className={styles.pics}>
            <img
              src={pic_1}
              alt='Fortnite character'
              className={`${styles.pic} ${styles.pic_chosen}`}
            />
            <img
              src={pic_2}
              alt='Arena of Valor character'
              className={styles.pic}
            />
            <img
              src={pic_3}
              alt='Call of Duty character'
              className={styles.pic}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
