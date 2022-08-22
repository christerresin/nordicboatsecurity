import Link from 'next/link';
import ServiceBox from './ServiceBox';
import styles from '../styles/Services.module.scss';

const services = [
  {
    image: '/gps_800.jpg',
    imgAlt: 'gps tracking',
    header: 'Övervakning i realtid',
    url: '/tjanster#gost_services',
    content:
      'Systemen rapporterar kontinuerligt in information och data som du när som helst kan ta del av via din dator, surfplatta eller smartphone.',
  },
  {
    image: '/jetski_800.jpg',
    imgAlt: 'alarm emergency',
    header: 'Larmutryckning med vaktbolag',
    url: '/tjanster#westra_services',
    content:
      'Tillsammans med det ISO-, och SSF-certifierade säkerhetsbolaget Westra Security kan vi erbjuda övervakning av din båt. Givetvis med möjlighet till väktarutryckning! Dygnet runt, året om!',
  },
  {
    image: '/install_800.jpg',
    header: 'Personlig installation av ditt system',
    url: '/tjanster#nbs_services',
    imgAlt: 'personal installation',
    content:
      'Vill du inte montera och installera systemet själv? I så fall kan vi erbjuda personlig installation av ditt system, tillsammans med dig diskuterar vi möjliga placeringar av systemets sensorer och styrenheter på båten.',
  },
];

function Services({ grid }) {
  return (
    <section className={`${styles.container} ${styles.reveal} ${grid}`}>
      <div className={styles.header}>
        <h2>Våra tjänster</h2>
        <p>
          Via vårt partnerbolag Westra Security kan vi erbjuda övervakning via
          larmcentral med väktarutryckning! Westra Security kan även påkalla
          blåljusutryckning om olyckan kan ockulärt verifieras annars skickas
          väktare ut för kontroll!
        </p>
      </div>
      <div className={styles.box_container}>
        {services.map((service) => (
          <ServiceBox
            header={service.header}
            image={service.image}
            imgAlt={service.imgAlt}
            content={service.content}
            key={service.header}
            url={service.url}
          />
        ))}
      </div>
      <Link href='/tjanster'>
        <a className={styles.cta}>Om våra tjänster</a>
      </Link>
    </section>
  );
}

export default Services;
