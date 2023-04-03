import Link from 'next/link';
import styles from '../styles/Hero.module.scss';

function Hero() {
  return (
    <section className={`${styles.hero}`}>
      <div className={styles.text}>
        <h1>SKRÄDDARSYDDA SÄKERHETSLÖSNINGAR FÖR DIN BÅT</h1>
        <p>
          Nordic Boat Security (NBS) har det mesta inom säkerhetslösningar till
          din båt! Vi erbjuder allt från spårsändare, inbrottslarm och
          videoövervakning till uppkoppling mot larmcentral med
          väktarutryckning. Osäker på vad du behöver till ditt båtlarm? Kontakta
          oss så hjälper vi dig!
        </p>
        <Link href='/kontakt'>
          <a className={styles.cta}>KONTAKTA OSS</a>
        </Link>
      </div>
      <div id={styles.shape}></div>
    </section>
  );
}

export default Hero;
