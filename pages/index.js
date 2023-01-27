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
import TextSection from '../components/TextSection';
import { textContent } from '../textContent';
import TextSectionDark from '../components/TextSectionDark';
import TextSectionWhiteMedium from '../components/TextSectionWhiteMedium';
import TextSectionDarkHeaderDivider from '../components/TextSectionDarkHeaderDivider';
import TextSectionWhiteExtraLarge from '../components/TextSectionWhiteExtraLarge';
import TextSectionWhiteSmall from '../components/TextSectionWhiteSmall';
import TextSectionSmall from '../components/TextSectionSmall';

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
      <TextSection content={textContent[0]} grid='grid2' />
      <TextSectionDark content={textContent[1]} grid='grid3' />
      <TextSectionWhiteExtraLarge content={textContent[2]} grid='grid4' />
      <TextSectionDarkHeaderDivider content={textContent[3]} grid='grid5' />
      <TextSectionWhiteMedium content={textContent[4]} grid='grid6' />
      <Products grid='grid7' />
      <TextSectionSmall content={textContent[5]} grid='grid8' />
      <TextSectionDarkHeaderDivider content={textContent[7]} grid='grid10' />
      <TextSectionWhiteMedium content={textContent[8]} grid='grid11' />
      <TextSectionDark content={textContent[9]} grid='grid12' />
      <TextSection content={textContent[10]} grid='grid13' />
      <Services grid='grid14' />
      <Bottom grid='grid15' />
      <Footer grid='grid16' />
    </div>
  );
}
