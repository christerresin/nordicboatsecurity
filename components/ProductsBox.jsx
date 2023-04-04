import Link from 'next/link';

import styles from '../styles/ProductsBox.module.scss';

function ProductsBox({ header, image, imgAlt, content, logo1, logo2 }) {
  return (
    <div className={styles.box_container}>
      <div className={styles.container}>
        <img className={styles.img} alt={imgAlt} src={image}></img>
        <h3>{header}</h3>
        <p>{content}</p>
        <div className={styles.logos_container}>
          <p>Tillgänglig för:</p>
          <div className={styles.logos}>
            {logo1 ? (
              <img className={styles.logo} alt='Ajax logo' src={logo1}></img>
            ) : (
              ''
            )}
            {logo2 ? (
              <img className={styles.logo} alt='GOST logo' src={logo2}></img>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsBox;
