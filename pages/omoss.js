import Head from 'next/head';
import About from '../components/About';
import Bottom from '../components/Bottom';
import ContactBox from '../components/ContactBox';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Top from '../components/Top';

import styles from '../styles/Home.module.scss';
import { contactList } from '../contactList';

export default function omoss() {
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
        <title>Nordic Boat Security - Om oss</title>
      </Head>
      <Header />
      <Top
        title='Om oss'
        text={
          'Vi erbjuder marknadsledande, modulära säkerhets- och övervakningslösningar som passar just din båt och dina behov. Vill du veta mer redan nu?'
        }
      />
      <About grid='grid7' />
      {contactList.map((contact, index) => (
        <ContactBox key={index} grid={'grid' + (9 + index)} contact={contact} />
      ))}
      <Bottom grid='grid11' />
      <Footer grid='grid12' />
    </div>
  );
}
