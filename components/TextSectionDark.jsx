import styles from '../styles/TextSectionDark.module.scss';

function TextSectionDark({ grid, content }) {
  return (
    <section className={`${styles.container} ${grid}`}>
      <div className={styles.content_container}>
        <div className={styles.usp}>
          {content.header ? <h2>{content.header}</h2> : ''}
          {content.header ? (
            <div className={`${styles.divider} ${styles.red}`}></div>
          ) : (
            ''
          )}
          {content.contentSections.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TextSectionDark;
