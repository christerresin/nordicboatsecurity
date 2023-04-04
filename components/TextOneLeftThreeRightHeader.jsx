import styles from '../styles/TextOneLeftThreeRightHeader.module.scss';

function TextOneLeftThreeRightHeader({ grid, content }) {
  return (
    <section className={`${styles.container} ${grid}`}>
      <div className={styles.usp}>
        {content.header ? <h2>{content.header}</h2> : ''}
        {content.header ? (
          <div className={`${styles.divider} ${styles.red}`}></div>
        ) : (
          ''
        )}
        <div className={styles.text_container}>
          <div className={styles.text}>
            <p>{content.content[0]}</p>
          </div>
          <div className={styles.text}>
            <p>{content.content[1]}</p>
            <p>{content.content[2]}</p>
            <p>{content.content[3]}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TextOneLeftThreeRightHeader;
