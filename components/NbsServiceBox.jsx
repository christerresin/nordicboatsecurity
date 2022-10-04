import styles from '../styles/NbsServiceBox.module.scss';

const service = {
  image: '/install_800.jpg',
  imgAlt: 'båtinteriör',
  header: 'Rådgivning',
  left_content:
    'Du är alltid välkommen att kontakta oss för rådgivning eller med frågor om våra produkter och tjänster. Vi är redo att göra ditt båtliv tryggare!',
  left_content_addon:
    'För uppkoppling mot Westra Securitys larmcentral krävs att systemet är installerat och funktionen verifierad antingen av Nordic Boat Security eller en av Nordic Boat Security auktoriserad installatör',
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
