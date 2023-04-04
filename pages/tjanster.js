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
import HeaderGrid from '../components/HeaderGrid';
import IotSection from '../components/IotSection';

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
        title='Tjänster'
        text={
          'Våra tjänster erbjuder dig möjligheten att välja flera olika lager av skydd och säkerhet, allt från alarm och sensorinformation till övervakning och väktarutryckning. Vad behöver du för din båt?'
        }
      />
      <HeaderGrid grid='grid1' />
      <WestraUsp grid='grid2' />
      <WestraServiceBox grid='grid3' />
      <GostUsp grid='grid4' />
      <GostServiceBox grid='grid5' />
      <Usp grid='grid6' />
      <NbsServiceBox grid='grid7' />
      <IotSection grid='grid8' />
      <Bottom grid='grid9' />
      <Footer grid='grid10' />
    </div>
  );
}
