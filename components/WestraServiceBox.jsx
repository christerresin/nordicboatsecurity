import styles from '../styles/WestraServiceBox.module.scss';

const service = {
  image: '/jetski_800.jpg',
  imgAlt: 'vattenskoter',
  header: 'LARMUTRYCKNING MED VAKTBOLAG',
  left_content:
    'Önskar du ytterligare ett lager av säkerhet till din båt? Då kan vi tillsammans med våran partner Westra Security erbjuda professionell övervakning av din båt dygnet runt, året om. Via Westra Securitys larmcentral har personalen kontakt med larmsystemet i båten, om någon sensor eller bevakningskamera aktiveras så ser larmcentralen det omgående. Beroende på situation kan väktare skickas ut eller blåljuspersonal kontaktas. (För tillkallelse av blåljuspersonal krävs visuell verifiering via kamera)',
  right_content: '',
};

function WestraServiceBox({ grid }) {
  return (
    <section
      id='westra_services'
      className={`${styles.container} ${styles.reveal} ${grid}`}
    >
      <div className={styles.box_container}>
        <img
          className={styles.img}
          alt={service.imgAlt}
          src={service.image}
        ></img>
        <h3>{service.header}</h3>
        <div className={styles.content_container}>
          <div className={styles.left}>{service.left_content}</div>
          <div className={styles.right}>
            <img
              className={styles.logo}
              alt='westra security logo'
              src='/Westra_Security_Logo400px.jpg'
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WestraServiceBox;
