import styles from '../styles/RetailersList.module.scss';
import RetailerBox from './RetailerBox';

function RetailersList({ grid, retailersList }) {
  return (
    <>
      <div className={`${styles.container} ${grid}`}>
        <div className={styles.boxes_container}>
          {retailersList.map((retailer) => (
            <RetailerBox key={retailer.companyName} retailer={retailer} />
          ))}
        </div>
      </div>
    </>
  );
}

export default RetailersList;
