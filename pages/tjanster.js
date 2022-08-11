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
        <title>Nordic Boat Security</title>
        <link rel='icon' href='/favicon.ico' />
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