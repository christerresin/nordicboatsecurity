import styles from '../styles/WestraUsp.module.scss';

function WestraUsp({ grid }) {
  return (
    <section className={`${styles.container} ${grid}`}>
      <div className={styles.usp}>
        <h2>Uppkoppling till larmcentral</h2>
        <div className={`${styles.divider} ${styles.red}`}></div>
        <p>
          Tillsammans med det ISO-, och SSF-certifierade säkerhetsbolaget Westra
          Security kan vi erbjuda professionell övervakning av din båt. Givetvis
          med möjlighet till väktarutryckning! Dygnet runt, året om!
        </p>
        <p>
          Samtliga våra produkter går att koppla upp till Westra Security’s
          larmcentral. Hur omfattande larmsystem du vill ha uppkopplat väljer du
          helt själv. Läs mer här om våra uppkopplingspaket.
        </p>
        <p>
          Du köper fortfarande spårsändare-, larm-, och/eller
          videoövervakningsutrustning från oss och äger det. För de tjänster du
          köper från oss, betalar du en månads- eller årsavgift. Vi paketerar
          alla tjänster med uppkoppling till larmcentral och kommunikation som
          fungerar i hela Europa så du betalar endast en tjänstekostnad.{' '}
        </p>
      </div>
    </section>
  );
}

export default WestraUsp;
