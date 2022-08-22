import Head from 'next/head';
import Bottom from '../components/Bottom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NewsUsp from '../components/NewsUsp';
import Top from '../components/Top';
import styles from '../styles/Home.module.scss';

export default function nyheter() {
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
        <title>Nordic Boat Security - Nyheter</title>
      </Head>
      <Header />
      <Top title='Nyheter' text={''} />
      <NewsUsp grid='grid7' />
      <Bottom grid='grid11' />
      <Footer grid='grid12' />
    </div>
  );
}
