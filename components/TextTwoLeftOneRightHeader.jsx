import styles from '../styles/TextTwoLeftOneRightHeader.module.scss';

function TextTwoLeftOneRightHeader({ grid, content, header }) {
  return (
    <section className={`${styles.container} ${grid}`}>
      <div className={styles.header}>
        <h2>{header}</h2>
        <div className={`${styles.divider} ${styles.red}`}></div>
      </div>
      <div className={styles.usp}>
        <div className={styles.text}>
          <p>{content[0]}</p>
          <p>{content[1]}</p>
        </div>
        <div className={`${styles.text} ${styles.top}`}>
          <p>{content[2]}</p>
        </div>
      </div>
    </section>
  );
}

export default TextTwoLeftOneRightHeader;
