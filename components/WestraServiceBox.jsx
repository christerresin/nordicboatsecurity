import styles from '../styles/WestraServiceBox.module.scss';

const service = {
  image: 'jetski_800.jpg',
  imgAlt: 'vattenskoter',
  header: 'LARMUTRYCKNING MED VAKTBOLAG',
  left_content:
    'Consequat ac felis donec et odio pellentesque diam volutpat. Sit amet nisl suscipit adipiscing bibendum est. Laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean. Iaculis urna id volutpat lacus laoreet. Cursus turpis massa tincidunt dui ut ornare lectus. Cursus eget nunc scelerisque viverra mauris in aliquam.',
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
