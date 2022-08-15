import styles from '../styles/NbsServiceBox.module.scss';

const service = {
  image: 'install_800.jpg',
  imgAlt: 'båtinteriör',
  header: 'Personlig installation av ditt system',
  left_content:
    'Vill du inte montera och installera systemet själv? I så fall kan vi erbjuda personlig installation av ditt system, tillsammans med dig diskuterar vi möjliga placeringar av systemets sensorer och styrenheter på båten. Vi gör en uppskattning av tidsåtgången och erbjuder ett fast totalpris, i installationen ingår utbildning av systemet och dess funktioner.',
  left_content_addon:
    'För uppkoppling mot Westra Securitys larmcentral krävs att systemet är installerat och funktionen verifierad av en av Nordic Boat Security auktoriserad installatör.',
};

function NbsServiceBox({ grid }) {
  return (
    <section
      id='nbs_services'
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
          <div className={styles.left}>
            {service.left_content}
            <p>{service.left_content_addon}</p>
          </div>
          <div className={styles.right}>
            <img
              className={styles.logo}
              alt='företags logo'
              src='/footer_logo.webp'
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NbsServiceBox;
