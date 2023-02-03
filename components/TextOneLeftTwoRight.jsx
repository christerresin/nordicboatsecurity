import styles from '../styles/TextOneLeftTwoRight.module.scss';

function TextOneLeftTwoRight({ grid, content }) {
  return (
    <section className={`${styles.container} ${grid}`}>
      <div className={styles.usp}>
        <div className={styles.text}>
          <p>{content[0]}</p>
        </div>
        <div className={styles.text}>
          <p>{content[1]}</p>
          <p>{content[2]}</p>
        </div>
      </div>
    </section>
  );
}

export default TextOneLeftTwoRight;
