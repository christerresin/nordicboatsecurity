import styles from '../styles/CookieInfo.module.scss';

function CookieInfo({ grid, header, content }) {
  return (
    <section className={`${styles.container} ${grid}`}>
      <div className={styles.usp}>
        <h3>{header}</h3>
        <div className={`${styles.divider} ${styles.red}`}></div>
        <p>{content}</p>
      </div>
    </section>
  );
}

export default CookieInfo;
