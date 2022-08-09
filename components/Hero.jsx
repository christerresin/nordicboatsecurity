import styles from '../styles/Hero.module.scss';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <h1>Larmsystem som skapar trygghet</h1>
        <p>
          Med marknadens mest avancerade larmsystem levererar vi trygghet och
          säkerhet till våra kunder. Våra tjänster och produkter anpassas efter
          båt samt önskemål. Vårt mål är att trygghetssäkra din vardag, oavsett
          var du är eller vad du gör. Båtlivet skall ge frihet, inte osäkerhet.
        </p>
        <a className={styles.cta}>KONTAKTA OSS</a>
      </div>
      <div id={styles.shape}></div>
    </section>
  );
}

export default Hero;
