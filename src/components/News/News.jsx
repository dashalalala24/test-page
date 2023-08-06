import styles from './News.module.css';
import { articles } from '../../mocks/mocks';
import { Article } from '../Article/Article';
import { Link } from 'react-router-dom';
import { Caption } from '../../ui/Caption/Caption';

export const News = () => {
  const getArticles = () => {
    return articles
      .reverse() // обратный порядок, чтобы последние новости были в начале
      .slice(1, 5) // остальные по ссылке Read More
      .map((article) => (
        <li key={article.newsId}>
          <Link
            to='/'
            className={styles.link}>
            <Article
              item={article}
              size='small'
            />
          </Link>
        </li>
      ));
  };
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <div className={styles.text}>
            <Caption />
            <h2 className={styles.title}>Latest News & Articles</h2>
          </div>
          <Link className={styles.more}>Read More</Link>
        </div>
        <div className={styles.arcticles}>
          {articles.length ? (
            <ul className={styles.items}>
              <li className={styles.item}>
                <Link
                  to='/'
                  className={styles.link}>
                  <Article
                    item={articles[articles.length - 1]} // последняя из списка, так последняя новость будет отображаться первой и большой
                    size='big'
                  />
                </Link>
              </li>
              {articles.length > 1 ? <div className={styles.wrapper}>{getArticles()}</div> : null}
            </ul>
          ) : (
            <p>No news yet</p>
          )}
        </div>
      </div>
    </section>
  );
};
