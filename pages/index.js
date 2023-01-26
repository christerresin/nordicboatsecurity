import Head from 'next/head';

import Bottom from '../components/Bottom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Products from '../components/Products';
import References from '../components/References';
import NewsUsp from '../components/NewsUsp';
import Services from '../components/Services';
import Usp from '../components/Usp';
import styles from '../styles/Home.module.scss';
import News from '../components/News';
import IndexGrid from '../components/IndexGrid';

export default function Home() {
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
        <title>Nordic Boat Security</title>
      </Head>
      <Header />
      <Hero />
      <IndexGrid grid='grid1' />
      <News grid='grid2' />
      <Usp grid='grid3' />
      <Products grid='grid4' />
      <Services grid='grid5' />
      <Bottom grid='grid6' />
      <Footer grid='grid7' />
    </div>
  );
}
