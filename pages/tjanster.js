import Head from 'next/head';
import Bottom from '../components/Bottom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import GostServiceBox from '../components/GostServiceBox';
import Top from '../components/Top';
import styles from '../styles/Home.module.scss';
import WestraServiceBox from '../components/WestraServiceBox';
import Usp from '../components/Usp';
import GostUsp from '../components/GostUsp';
import WestraUsp from '../components/WestraUsp';
import NbsServiceBox from '../components/NbsServiceBox';

export default function services() {
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
        <title>Nordic Boat Security - Tjänster</title>
      </Head>
      <Header />
      <Top
        title='Våra tjänster'
        text={
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia facilis veniam exercitationem rerum magnam nulla eius asperiores hic ad voluptate, alias beatae ea quisquam voluptatum ex. Atque ad consectetur illum asperiores veritatis iure alias maiores.'
        }
      />
      <GostUsp grid='grid7' />
      <GostServiceBox grid='grid8' />
      <WestraUsp grid='grid10' />
      <WestraServiceBox grid='grid11' />
      <Usp grid='grid13' />
      <NbsServiceBox grid='grid15' />
      <Bottom grid='grid17' />
      <Footer grid='grid18' />
    </div>
  );
}
