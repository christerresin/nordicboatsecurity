import styles from '../styles/NewsUsp.module.scss';

function NewsUsp({ grid }) {
  return (
    <section className={`${styles.container} ${grid}`}>
      <div className={styles.usp}>
        <h2>4G/LTE-systemet</h2>
        <div className={`${styles.divider} ${styles.red}`}></div>
        <p>
          Tillsammans med GOST utvecklar vi just nu ett larmsystem som spårar
          båten via 4G/LTE-nätet, vi räknar med att kunna lansera detta under
          första halvåret 2023! Mer information kommer inom kort!
        </p>
      </div>
    </section>
  );
}

export default NewsUsp;
