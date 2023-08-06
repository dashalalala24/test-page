import styles from './Caption.module.css';

export const Caption = () => {
  return (
    <div className={styles.root}>
      <div className={styles.pic}></div>
      <span className={styles.text}>Future of esports</span>
    </div>
  );
};
