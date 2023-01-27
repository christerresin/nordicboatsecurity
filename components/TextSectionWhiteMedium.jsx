import styles from '../styles/TextSectionWhiteMedium.module.scss';

function TextSectionWhiteMedium({ grid, content }) {
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

export default TextSectionWhiteMedium;
