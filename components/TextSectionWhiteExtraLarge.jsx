import styles from '../styles/TextSectionWhiteExtraLarge.module.scss';

function TextSectionWhiteExtraLarge({ grid, content }) {
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

export default TextSectionWhiteExtraLarge;
