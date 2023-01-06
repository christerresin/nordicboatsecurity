import styles from '../styles/RetailerBox.module.scss';

function RetailerBox({ retailer }) {
  return (
    <>
      <div className={styles.container}>
        <a href={retailer.url} className={styles.retailer_box}>
          <h4>{retailer.companyName}</h4>
          <div className={`${styles.divider}`}></div>
          <p className={styles.retailer_box_text}>{retailer.adress}</p>
          <p className={styles.retailer_box_text}>{retailer.phone}</p>
        </a>
      </div>
    </>
  );
}

export default RetailerBox;
