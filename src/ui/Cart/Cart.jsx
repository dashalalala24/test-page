import styles from './Cart.module.css';

export const Cart = () => {
  return (
    <div className={styles.root}>
      <button
        className={styles.button}
        aria-label='cart'></button>
      <span className={styles.number}>0</span>
    </div>
  );
};
