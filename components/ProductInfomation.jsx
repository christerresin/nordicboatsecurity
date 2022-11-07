import styles from '../styles/ProductInformation.module.scss';

function ProductInfomation({ grid, props }) {
  return (
    <section className={`${styles.container} ${grid}`}>
      <div>
        <h3>{props.header}</h3>
        <div className={`${styles.divider} ${styles.red}`}></div>
        <p>{props.description}</p>
      </div>
      <div className={styles.usp_container}>
        {props.usps.map((usp) => (
          <div key={usp.title}>
            <h3>{usp.title}</h3>
            <div className={`${styles.divider} ${styles.red}`}></div>
            <p>{usp.content}</p>
          </div>
        ))}
      </div>
      <div>
        <div className={`${styles.divider} ${styles.red}`}></div>
        <ul className={styles.specificationsList}>
          {props.specifications.map((item) => (
            <li key={item}>
              <p>{item.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ProductInfomation;
