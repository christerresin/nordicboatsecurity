import styles from '../styles/TextTwoLeftOneRight.module.scss';

function TextTwoLeftOneRight({ grid, content }) {
  return (
    <section className={`${styles.container} ${grid}`}>
      <div className={styles.usp}>
        <div className={styles.text}>
          <p>{content[0]}</p>
          <p>{content[1]}</p>
        </div>
        <div className={styles.text}>
          <p>{content[2]}</p>
        </div>
      </div>
    </section>
  );
}

export default TextTwoLeftOneRight;
