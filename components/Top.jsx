import styles from '../styles/Top.module.scss';

function Top() {
  return (
    <section className={styles.top}>
      <div className={styles.text}>
        <h1>Våra tjänster</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia facilis
          veniam exercitationem rerum magnam nulla eius asperiores hic ad
          voluptate, alias beatae ea quisquam voluptatum ex. Atque ad
          consectetur illum asperiores veritatis iure alias maiores.
        </p>
      </div>
      <div id={styles.shape}></div>
    </section>
  );
}

export default Top;
