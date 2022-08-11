import styles from '../styles/Usp.module.scss';

function Usp({ grid }) {
  return (
    <section className={`${styles.container} ${grid}`}>
      <div className={styles.usp}>
        <h2>Personlig installation</h2>
        <div className={`${styles.divider} ${styles.red}`}></div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
          dolorum ullam debitis odio officia sed iure? Temporibus est facilis
          dicta cum possimus? Tenetur, adipisci laborum?
        </p>
      </div>
    </section>
  );
}

export default Usp;
