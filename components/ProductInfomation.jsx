import styles from '../styles/ProductInformation.module.scss';

function ProductInfomation({ grid, props }) {
  return (
    <section className={`${styles.container} ${grid}`}>
      <div>
        <h3>{props.title}</h3>
        <div className={`${styles.divider} ${styles.red}`}></div>
        <p>{props.description}</p>
      </div>
      <div className={styles.usp_container}>
        {props.usps.map((usp) => (
          <div key={usp.title}>
            <h3>{usp.header}</h3>
            <div className={`${styles.divider} ${styles.red}`}></div>
            <p>{usp.text}</p>
          </div>
        ))}
      </div>
      <div className={styles.images_container}>
        {props.images.map((image) => (
          <img className={styles.image} key={image} src={image} />
        ))}
      </div>
      <div>
        <div className={`${styles.divider} ${styles.red}`}></div>
        <ul className={styles.specificationsList}>
          {props.specifications.map((item) => (
            <li key={item}>
              <p>{item.split(':')[0]}</p>
              <p>{item.split(':')[1]}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ProductInfomation;
