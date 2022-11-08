import Head from 'next/head';
import Bottom from '../components/Bottom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Top from '../components/Top';
import ContactContainer from '../components/ContactContainer';
import styles from '../styles/Home.module.scss';
import HeaderGrid from '../components/HeaderGrid';

export default function kontakt() {
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
        <title>Nordic Boat Security - Kontakt</title>
      </Head>
      <Header />
      <Top
        title='HÖR AV DIG TILL OSS'
        text={
          'Du är alltid välkommen att kontakta oss för rådgivning eller med frågor om våra produkter och tjänster. Vi är redo att göra ditt båtliv tryggare!'
        }
      />
      <HeaderGrid grid='grid1' />
      <ContactContainer grid='grid7'></ContactContainer>
      <Bottom grid='grid11' />
      <Footer grid='grid12' />
    </div>
  );
}
