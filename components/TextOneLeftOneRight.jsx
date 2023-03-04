import styles from '../styles/TextOneLeftOneRight.module.scss';

function TextOneLeftOneRight({ grid, content }) {
  return (
    <section className={`${styles.container} ${grid}`}>
      <div className={styles.usp}>
        <div className={styles.text}>
          <p>{content[0]}</p>
        </div>
        <div className={styles.text}>
          <p>{content[1]}</p>
        </div>
      </div>
    </section>
  );
}

export default TextOneLeftOneRight;
