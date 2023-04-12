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
          {props.description.map((desc) => (
            <p className={styles.description} key={desc}>
              {desc}
            </p>
          ))}
          <div className={`${styles.divider} ${styles.red}`}></div>
        </div>
      </div>
    </section>
  );
}

export default ProductInfomation;
