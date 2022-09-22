import Head from 'next/head';
import Bottom from '../components/Bottom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Top from '../components/Top';
import CookieInfo from '../components/CookieInfo';

import styles from '../styles/Home.module.scss';
import CookieInfoList from '../components/CookieInfoList';

const cookieInformation = [
  {
    grid: 'grid7',
    header: 'Vad är Cookies?',
    content:
      'Cookies är textfiler som placeras på din dator för att samla in standardinformation internetlogg och information om besökarnas beteende. När du besöker våra webbplatser kan vi samla in information från dig automatiskt via cookies eller liknande teknik.',
  },
  {
    grid: 'grid8',
    header: 'Hur använder vi cookies?',
    content:
      'Nordic Boat Security använder cookies för att förbättra din upplevelse på vår webbplats samt förstå hur du använder vår hemsida.',
  },
  {
    grid: 'grid9',
    header: 'Vilka typer av cookies använder vi?',
    content:
      'Det finns ett antal olika typer av cookies, dock använder vår webbplats:',
  },
];

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

export default function cookiepolicy() {
  return (
    <div className={styles.container}>
      <Head>
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='description'
          content='Med marknadens mest avancerade larmsystem är vårt mål är att trygghetssäkra din vardag, oavsett
      var du är eller vad du gör. Båtlivet skall ge frihet, inte osäkerhet.'
        />
        <title>Nordic Boat Security - Cookiepolicy</title>
      </Head>
      <Header />
      <Top
        title='Cookiepolicy'
        text={
          'Denna cookiepolicy kommer att förklara hur vår organisation använder cookies när du använder vår webbplats.'
        }
      />
      {cookieInformation.map((info, index) => (
        <CookieInfo
          key={index}
          grid={info.grid}
          header={info.header}
          content={info.content}
        />
      ))}
      {cookieListItems.map((item, index) => (
        <CookieInfoList
          key={item.header}
          grid={'grid' + (10 + index)}
          header={item.header}
          content={item.content}
        />
      ))}
      <p>
        För ytterligare information, besök{' '}
        <a rel='noreferrer' target='_blank' href='https://allaboutcookies.org/'>
          allaboutcookies.org
        </a>
        .
      </p>
      <Bottom grid='grid15' />
      <Footer grid='grid16' />
    </div>
  );
}
