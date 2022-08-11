import styles from '../styles/WestraUsp.module.scss';

function WestraUsp({ grid }) {
  return (
    <section className={`${styles.container} ${grid}`}>
      <div className={styles.usp}>
        <h2>Westra Security</h2>
        <div className={`${styles.divider} ${styles.red}`}></div>
        <p>
          Tillsammans med det ISO-, och SSF-certifierade säkerhetsbolaget Westra
          Security kan vi erbjuda övervakning av din båt. Givetvis med möjlighet
          till väktarutryckning!
        </p>
        <p>Dygnet runt, året om!</p>
      </div>
    </section>
  );
}

export default WestraUsp;
