import Link from 'next/link';
import styles from '../styles/Bottom.module.scss';

function Bottom({ grid }) {
  return (
    <section className={`${styles.container} ${grid}`}>
      <div className={styles.text}>
        <h1>LÅT OSS GÖRA DITT BÅTLIV TRYGGARE</h1>
        <p>
          Med marknadens mest avancerade larmsystem levererar vi trygghet och
          säkerhet till våra kunder. Våra tjänster och produkter anpassas efter
          er båt samt önskemål. Vårt mål är att trygghetssäkra din vardag,
          oavsett var du är eller vad du gör. Båtlivet skall ge frihet, inte
          osäkerhet.
        </p>
        <Link href='/kontakt'>
          <a className={styles.cta}>KONTAKTA OSS</a>
        </Link>
      </div>
      <div id={styles.shape}></div>
    </section>
  );
}

export default Bottom;
