import Link from 'next/link';
import styles from '../styles/Hero.module.scss';

function Hero() {
  return (
    <section className={`${styles.hero}`}>
      <div className={styles.text}>
        <h1>SKRÄDDARSYDDA SÄKERHETS- LÖSNINGAR FÖR DIN BÅT</h1>
        <p>
          Nordic Boat Security kan med några av marknadens mest avancerade
          system erbjuda båtägare skräddarsydda säkerhetslösningar för alla
          typer av båtar och behov. Allt från inbrottslarm till system-, video-,
          och professionell övervakning. Vad behöver du? Kontakta oss och
          berätta!
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
