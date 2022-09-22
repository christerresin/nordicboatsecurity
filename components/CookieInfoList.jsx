import styles from '../styles/CookieInfoList.module.scss';

function CookieInfoList({ grid }) {
  return (
    <section className={`${styles.container} ${grid}`}>
      <div className={styles.usp}>
        <h3>Vilka typer av cookies använder vi?</h3>
        <div className={`${styles.divider} ${styles.red}`}></div>
        <p>
          Det finns ett antal olika typer av cookies, dock använder vår
          webbplats:
        </p>
        <p>
          <span className={styles.bold}>Funktionalitet —</span> Nordic Boat
          Security använder dessa cookies så att vi känner igen dig på vår
          webbplats och kommer ihåg dina tidigare valda preferenser. Dessa kan
          omfatta vilket språk du föredrar, den plats du befinner dig i eller
          låta användaren lyssna på ljud eller titta på en video. En blandning
          av cookies från första part och tredje part används.
        </p>
        <p>
          <span className={styles.bold}>Statistik –</span> Nordic Boat Security
          använder dessa cookies för att samla in information om användningen av
          webbplatsen, till exempel besökta sidor, trafikkällor,
          innehållshantering och andra webbplatsmätningar.
        </p>
        <p>
          <span className={styles.bold}>Marknadsföring —</span> Nordic Boat
          Security använder dessa cookies för att samla in information om
          användaren såsom din ålder, kön och intresse. Nordic Boat Security
          delar ibland vissa begränsade aspekter av dessa data med tredje part i
          reklamsyfte, till exempel Google. Informationen kan omfatta
          användarens plats, sökhistorik, YouTube-historik och data från
          webbplatser som fungerar med Google, och den används för att
          tillhandahålla aggregerade och anonymiserade insikter om
          användarbeteende på flera enheter.
        </p>
        <p>
          <span className={styles.bold}>Nödvändigt –</span> Nordic Boat Security
          använder dessa cookies för att webbplatsen ska fungera korrekt. Denna
          kategori omfattar endast cookies som säkerställer grundläggande
          funktioner och säkerhetsfunktioner på webbplatsen, såsom att visa
          innehåll, validera din session och andra funktioner. Dessa cookies
          sparar ingen personlig information.
        </p>
        <p>
          Du kan ställa in din webbläsare att inte acceptera cookies, och
          nedanstående webbplats talar om för dig hur du tar bort cookies från
          din webbläsare. Men i ett fåtal fall kan vissa av våra
          webbplatsfunktioner inte fungera som ett resultat.
        </p>
        <p>
          För ytterligare information, besök{' '}
          <a
            rel='noreferrer'
            target='_blank'
            href='https://allaboutcookies.org/'
          >
            allaboutcookies.org
          </a>
          .
        </p>
      </div>
    </section>
  );
}

export default CookieInfoList;
