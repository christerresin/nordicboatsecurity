import styles from '../styles/Usp.module.scss';

function Usp({ grid }) {
  return (
    <section className={`${styles.container} ${grid}`}>
      <div className={styles.content_container}>
        <div className={styles.usp}>
          <h2>ETT KOMPLETT SYSTEM ANPASSAT EFTER JUST DINA BEHOV</h2>
          <div className={`${styles.divider} ${styles.red}`}></div>
        </div>
      </div>
    </section>
  );
}

export default Usp;
