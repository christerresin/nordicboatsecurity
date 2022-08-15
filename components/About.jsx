import styles from '../styles/About.module.scss';

function About({ grid }) {
  return (
    <section className={`${styles.container} ${grid}`}>
      <div className={styles.box}>
        <p>
          Vi startade Nordic Boat Security som ett svar på de alltmer ökande
          stölderna av båtar, motorer och båtvagnar samt för att kunna erbjuda
          båtägare en möjlighet att motverka inbrott och skadegörelse. Att
          hellre förekomma tjuven än att själva förekommas blev vårt ledmotiv
          och efter att ha kontaktat båtägare samt olika aktörer i båtbranschen
          så stod det snabbt klart att det definitivt fanns både efterfrågan och
          ett behov av någon form utav larm- eller övervakningssystem.
        </p>
        <p>
          Våran affärsidé är att erbjuda båtägare högkvalitativa larmsystem med
          möjlighet till uppkoppling mot en larmcentral för övervakning dygnet
          runt, året om.
        </p>
        <p>
          Tillsammans med våra samarbetspartners Global Ocean Security
          Technologies (GOST) och Westra Security AB kan vi erbjuda Sveriges
          båtägare flera lager av trygghet och säkerhet.{' '}
        </p>
      </div>

      <div className={`${styles.divider} ${styles.red}`}></div>

      <div className={`${styles.box} ${styles.split}`}>
        <div className={styles.logo}>
          <img
            className={styles.logo_image}
            alt='gost logo'
            src='/GOST_logo.png'
          ></img>
        </div>
        <div className={styles.content}>
          <p>
            Det USA-baserade företaget GOST har i över 15 år varit
            marknadsledande inom system för kameraövervakning, spårning och
            inbrottslarm till den marina miljön. GOST har tilldelats Product of
            Excellence från branschorganisationen National Marine Electronics
            Association samt blivit officiellt erkända av den amerikanska
            kustbevakningen.
          </p>
        </div>
      </div>

      <div className={`${styles.divider} ${styles.red}`}></div>

      <div className={`${styles.box} ${styles.split} ${styles.flip}`}>
        <div className={styles.content}>
          <p>
            Westra Security är ett auktoriserat bevakningsbolag med fristående
            larmcentral och rikstäckande väktarutryckning då man samarbetar med
            väktarbolag över hela landet. Westra Security är certifierade enligt
            ISO 9001 och 14001 samt även certifierade enligt SSF 136:5 från
            Svenska Stöldskyddsföreningen.
          </p>
        </div>
        <div className={styles.logo}>
          <img
            className={styles.westra_logo_image}
            alt='westra security logo'
            src='/Westra_Security_Logo400px.jpg'
          ></img>
        </div>
      </div>
    </section>
  );
}

export default About;
