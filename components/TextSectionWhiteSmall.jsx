import styles from '../styles/TextSectionWhiteSmall.module.scss';

function TextSectionWhiteSmall({ grid, content }) {
  return (
    <section className={`${styles.container} ${grid}`}>
      <div className={styles.content_container}>
        <div className={styles.usp}>
          {content.contentSections.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TextSectionWhiteSmall;
