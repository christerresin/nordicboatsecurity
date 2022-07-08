import styles from '../styles/Usp.module.scss';

function Usp() {
  return (
    <section className={styles.container}>
      <div className={styles.usp}>
        <h2>ETT KOMPLETT SYSTEM ANPASSAT EFTER DIN BÅT</h2>
        <div className={`${styles.divider} ${styles.red}`}></div>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </p>
      </div>
    </section>
  );
}

export default Usp;
