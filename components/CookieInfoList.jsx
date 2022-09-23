import styles from '../styles/CookieInfoList.module.scss';

const cookieListItems = [
  {
    header: 'Funktionalitet — ',
    content:
      'Nordic Boat Security använder dessa cookies så att vi känner igen dig på vår webbplats och kommer ihåg dina tidigare valda preferenser. Dessa kan omfatta vilket språk du föredrar, den plats du befinner dig i eller låta användaren lyssna på ljud eller titta på en video. En blandning av cookies från första part och tredje part används.',
  },
  {
    header: 'Statistik – ',
    content:
      'Nordic Boat Security använder dessa cookies för att samla in information om användningen av webbplatsen, till exempel besökta sidor, trafikkällor, innehållshantering och andra webbplatsmätningar.',
  },
  {
    header: 'Marknadsföring — ',
    content:
      'Nordic Boat Security använder dessa cookies för att samla in information om användaren såsom din ålder, kön och intresse. Nordic Boat Security delar ibland vissa begränsade aspekter av dessa data med tredje part i reklamsyfte, till exempel Google. Informationen kan omfatta användarens plats, sökhistorik, YouTube-historik och data från webbplatser som fungerar med Google, och den används för att tillhandahålla aggregerade och anonymiserade insikter om användarbeteende på flera enheter.',
  },
  {
    header: 'Nödvändigt – ',
    content:
      'Nordic Boat Security använder dessa cookies för att webbplatsen ska fungera korrekt. Denna kategori omfattar endast cookies som säkerställer grundläggande funktioner och säkerhetsfunktioner på webbplatsen, såsom att visa innehåll, validera din session och andra funktioner. Dessa cookies sparar ingen personlig information.',
  },
];

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
        <ul>
          {cookieListItems.map((item) => (
            <li key={item.header}>
              <span className={styles.bold}>{item.header}</span>
              {item.content}
            </li>
          ))}
          <li>
            För ytterligare information, besök{' '}
            <a
              rel='noreferrer'
              target='_blank'
              href='https://allaboutcookies.org/'
            >
              allaboutcookies.org
            </a>
            .
          </li>
        </ul>
      </div>
    </section>
  );
}

export default CookieInfoList;
