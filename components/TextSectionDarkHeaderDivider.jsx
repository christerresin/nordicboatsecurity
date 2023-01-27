import styles from '../styles/TextSectionDarkHeaderDivider.module.scss';

function TextSectionDarkHeaderDivider({ grid, content }) {
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
        </div>
      </div>
    </section>
  );
}

export default TextSectionDarkHeaderDivider;
