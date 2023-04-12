import styles from '../styles/TextTwoLeftTwoRightHeader.module.scss';

function TextTwoLeftTwoRightHeader({ grid, content }) {
  return (
    <section className={`${styles.container} ${grid}`}>
      <div className={styles.header}>
        <h2>{content.header}</h2>
        <div className={`${styles.divider} ${styles.red}`}></div>
      </div>
      <div className={styles.usp}>
        <div className={styles.text}>
          <p>{content.content[0]}</p>
          <p>{content.content[1]}</p>
        </div>
        <div className={`${styles.text} ${styles.top}`}>
          <p>{content.content[2]}</p>
          <p>{content.content[3]}</p>
        </div>
      </div>
    </section>
  );
}

export default TextTwoLeftTwoRightHeader;
