import styles from '../styles/ProductSpecifications.module.scss';

function ProductSpecifications({ grid, props }) {
  return (
    <section className={`${styles.container} ${grid}`}>
      <div className={styles.header}>
        <h3>Produktspecifikationer</h3>
        <div className={`${styles.divider} ${styles.red}`}></div>
      </div>
      <div className={styles.specifications_container}>
        {props.specifications.map((item) => (
          <div key={item.title}>
            <h4>{item.title}</h4>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductSpecifications;
