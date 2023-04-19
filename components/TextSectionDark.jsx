import styles from '../styles/TextSectionDark.module.scss';
import Link from 'next/link';

function TextSectionDark({ grid, content, backgroundImage }) {
  return (
    <section
      className={`${styles.container} ${grid}`}
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(51, 51, 51, 0.85)), url(${backgroundImage})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : {}
      }
    >
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
          {content.linkUrl ? (
            <Link href={content.linkUrl}>
              <a>Klicka här för att komma till vår webbshop!</a>
            </Link>
          ) : (
            ''
          )}
        </div>
      </div>
    </section>
  );
}

export default TextSectionDark;
