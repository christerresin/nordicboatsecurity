import styles from '../styles/TextThreeLeftThreeRight.module.scss';

function TextThreeLeftThreeRight({ grid, content }) {
  return (
    <section className={`${styles.container} ${grid}`}>
      <div className={styles.usp}>
        <div className={styles.text}>
          <p>{content[0]}</p>
          <p>{content[1]}</p>
          <p>{content[2]}</p>
        </div>
        <div className={styles.text}>
          <p>{content[3]}</p>
          <p>{content[4]}</p>
          <p>{content[5]}</p>
        </div>
      </div>
    </section>
  );
}

export default TextThreeLeftThreeRight;
