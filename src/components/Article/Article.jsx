import styles from './Article.module.css';

export const Article = ({ item, size }) => {
  return (
    <article
      className={
        size === 'big'
          ? `${styles.article} ${styles.article_size_big}`
          : `${styles.article} ${styles.article_size_small}`
      }>
      <img
        src={item.pic}
        alt={item.text}
        className={
          size === 'big'
            ? `${styles.pic} ${styles.pic_size_big}`
            : `${styles.pic} ${styles.pic_size_small}`
        }
      />
      <p
        className={
          size === 'big'
            ? `${styles.date} ${styles.date_size_big}`
            : `${styles.date} ${styles.date_size_small}`
        }>
        {item.date}
      </p>
      <p
        className={
          size === 'big'
            ? `${styles.text} ${styles.text_size_big}`
            : `${styles.text} ${styles.text_size_small}`
        }>
        {item.text}
      </p>
    </article>
  );
};
