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
import { indexTextParagraphs } from '../indexTextParagraphs';
import TextSectionDark from '../components/TextSectionDark';
import TextSectionWhiteMedium from '../components/TextSectionWhiteMedium';
import TextSectionDarkHeaderDivider from '../components/TextSectionDarkHeaderDivider';
import TextSectionWhiteExtraLarge from '../components/TextSectionWhiteExtraLarge';
import TextSectionWhiteSmall from '../components/TextSectionWhiteSmall';
import TextSectionSmall from '../components/TextSectionSmall';
import TextOneLeftTwoRight from '../components/TextOneLeftTwoRight';
import TextTwoLeftOneRight from '../components/TextTwoLeftOneRight';
import TextThreeLeftThreeRight from '../components/TextThreeLeftThreeRight';
import TextOneLeftOneRightHeader from '../components/TextOneLeftOneRightHeader';

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
      <TextTwoLeftOneRight grid='grid2' content={indexTextParagraphs[0]} />
      <TextSectionDark
        backgroundImage='/beach_jetski.jpg'
        content={textContent[1]}
        grid='grid3'
      />
      <TextThreeLeftThreeRight content={indexTextParagraphs[1]} grid='grid4' />
      <TextSectionDarkHeaderDivider
        backgroundImage='/camera.jpg'
        content={textContent[3]}
        grid='grid5'
      />
      <TextOneLeftTwoRight content={indexTextParagraphs[2]} grid='grid6' />
      <Products grid='grid7' />
      <TextOneLeftOneRightHeader
        header='Eller vill du bara veta hur båten mår?'
        content={indexTextParagraphs[3]}
        grid='grid8'
      />
      <TextSectionDarkHeaderDivider
        backgroundImage='/gost_tracking.jpg'
        content={textContent[7]}
        grid='grid10'
      />
      <TextOneLeftTwoRight content={indexTextParagraphs[4]} grid='grid11' />
      <TextSectionDark content={textContent[9]} grid='grid12' />
      <TextOneLeftOneRightHeader
        header='Vad kostar det?'
        content={indexTextParagraphs[5]}
        grid='grid13'
      />
      {/* <Services grid='grid14' /> */}
      <Bottom grid='grid15' />
      <Footer grid='grid16' />
    </div>
  );
}
