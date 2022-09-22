import styles from '../styles/CookieInfoList.module.scss';

function CookieInfoList({ grid, header, content }) {
  return (
    <section className={`${styles.container} ${grid}`}>
      <div className={styles.usp}>
        <p>
          <span className={styles.bold}>{header}</span>
          {content}
        </p>
      </div>
    </section>
  );
}

export default CookieInfoList;
