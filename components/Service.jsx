import styles from '../styles/Service.module.scss';

const service = {
  image: 'gps_800.jpg',
  imgAlt: 'gps tracking',
  header: 'Övervakning i realtid över din båt',
  content:
    'Systemen rapporterar kontinuerligt in information och data som du när som helst kan ta del av via din dator, surfplatta eller smartphone.',
};

function Service() {
  return (
    <section className={`${styles.container} ${styles.reveal}`}>
      <div className={styles.box_container}>
        <img
          className={styles.img}
          alt={service.imgAlt}
          src={service.image}
        ></img>
        <h3>{service.header}</h3>
        <p>{service.content}</p>
      </div>
    </section>
  );
}

export default Service;
