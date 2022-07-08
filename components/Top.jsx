import styles from '../styles/Top.module.scss';

function Top({ title, text }) {
  return (
    <section className={styles.top}>
      <div className={styles.text}>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      <div id={styles.shape}></div>
    </section>
  );
}

export default Top;
