import styles from '../styles/ProductInformation.module.scss';

function ProductInfomation({ grid, props }) {
  return (
    <section className={`${styles.container} ${grid}`}>
      <div className={styles.information}>
        <div className={styles.image_container}>
          <img className={styles.image} src={props.images[0]}></img>
        </div>
        <div className={styles.text}>
          <span>{props.category}</span>
          <h2 className={styles.header}>{props.header}</h2>
          <p className={styles.description}>{props.description}</p>
          <div className={`${styles.divider} ${styles.red}`}></div>
          <div className={styles.usp_container}>
            {props.usps.slice(0, 4).map((usp) => (
              <div key={usp.title}>
                <h4>{usp.title}</h4>
                <p>{usp.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductInfomation;
