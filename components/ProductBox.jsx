import CrisisAlert from '@mui/icons-material/CrisisAlertOutlined';
import VideoCameraBack from '@mui/icons-material/VideoCameraBackOutlined';

import styles from '../styles/ProductBox.module.scss';

function ProductBox({ product, icon }) {
  return (
    <>
      <div className={styles.container}>
        <a href={product.url} className={styles.product_box}>
          <span
            className={`${styles.material_symbols_outlined} ${styles.md_48}`}
          >
            {icon === 'CrisisAlert' ? (
              <CrisisAlert sx={{ fontSize: '46px' }} />
            ) : (
              <VideoCameraBack sx={{ fontSize: '46px' }} />
            )}
          </span>
          <h3>{product.header}</h3>
          <p className={styles.product_box_text}>{product.description}</p>
        </a>
      </div>
    </>
  );
}

export default ProductBox;
