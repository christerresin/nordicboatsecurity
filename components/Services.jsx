import ServiceBox from './ServiceBox';
import styles from '../styles/Services.module.scss';

const services = [
  {
    image: 'gps_800.jpg',
    header: 'Övervakning i realtid över din båt',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit exercitationem quod iusto suscipit veritatis similique saepe nihil!',
  },
  {
    image: 'jetski_800.jpg',
    header: 'Larmutryckning av vaktbolag',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit exercitationem quod iusto suscipit veritatis similique saepe nihil!',
  },
  {
    image: 'install_800.jpg',
    header: 'Personlig installation av ditt system',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit exercitationem quod iusto suscipit veritatis similique saepe nihil!',
  },
];

function Services() {
  return (
    <section className={`${styles.container} ${styles.reveal}`}>
      <div className={styles.header}>
        <h2>Våra tjänster</h2>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </p>
      </div>
      <div className={styles.box_container}>
        {services.map((service) => (
          <ServiceBox
            header={service.header}
            image={service.image}
            content={service.content}
            key={service.header}
          />
        ))}
      </div>
      <a className={styles.cta}>Läs mer om våra tjänster</a>
    </section>
  );
}

export default Services;
