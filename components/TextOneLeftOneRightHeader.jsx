import styles from '../styles/TextOneLeftOneRightHeader.module.scss';

function TextOneLeftOneRightHeader({ grid, content, header }) {
  return (
    <section className={`${styles.container} ${grid}`}>
      <div className={styles.header}>
        <h2>{header}</h2>
        <div className={`${styles.divider} ${styles.red}`}></div>
      </div>
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

export default TextOneLeftOneRightHeader;
